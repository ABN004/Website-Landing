// import {PUBLIC_WEBSITE_PLATFORM_SAMPLE_ASSETS_SERVER_ROOT_URL} from "$env/static/public"; // import area

// const sample_assets_server_root_url = PUBLIC_WEBSITE_PLATFORM_SAMPLE_ASSETS_SERVER_ROOT_URL;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function get_gallery_data_advanced(config) {
    let num_categories = config.num_categories;
    let min_items_per_category = config.min_items_per_category;
    let max_items_per_category = config.max_items_per_category;
    let folder_unique_id = config.folder_unique_id;
    let caption_base_text = config.caption_base_text;
    let title_base_text = config.title_base_text;
    let description_base_text = config.description_base_text;
    let button_base_text = config.button_base_text

    return get_gallery_data(num_categories, min_items_per_category, max_items_per_category, caption_base_text, folder_unique_id, title_base_text, description_base_text, button_base_text);
}

export function get_gallery_data(num_categories, min_items_per_category, max_items_per_category, caption_base_text, folder_unique_id, title_base_text, description_base_text, button_base_text) {

    let gallery_data = {
        has_multiple_categories: num_categories > 1,
        categories: []
    };

    let current_image_index = -1;
    let image_items = [];
    let include_categories = num_categories >= 1;
    if (num_categories === 0) {
        num_categories = 1;
        // include_categories = 1
    }
    for (let i = 0; i < num_categories; i++) {
        let category_display_name = "Category " + (i + 1);
        let category_unique_id = 'cat_' + (i + 1);
        if (include_categories) {
            let category_info = {
                display_name: category_display_name,
                unique_id: category_unique_id,
            }
            gallery_data.categories.push(category_info);
        }

        let numImages = getRandomInt(min_items_per_category, max_items_per_category);

        for (let j = 0; j < numImages; j++) {
            current_image_index++;

            let image_info = {
                url: `/sample_user_data/${folder_unique_id}/${folder_unique_id}_${current_image_index}.jpg`,
                url_thumb: `/sample_user_data/${folder_unique_id}/${folder_unique_id}_${current_image_index}.jpg`,
                // image_path: `/sample_user_data/gallery_images/gallery_${current_image_index}.jpg`,
            }
            if (caption_base_text) {
                image_info.caption = caption_base_text.replaceAll('@index@', j).replaceAll('@count@', j + 1);
            }
            if (title_base_text) {
                image_info.title = title_base_text.replaceAll('@index@', j).replaceAll('@count@', j + 1);
            }
            if (description_base_text) {
                image_info.description = description_base_text.replaceAll('@index@', j).replaceAll('@count@', j + 1);
            }
             if (button_base_text) {
                image_info.button = button_base_text.replaceAll('@index@', j).replaceAll('@count@', j + 1);
            }
            if (include_categories) {
                image_info.category = category_unique_id;
            }
            image_items.push(image_info);
        }


    }

    // if(!gallery_data.has_multiple_categories){
    //     gallery_data.images = gallery_data.categories[0].items;
    // }
    gallery_data.items = image_items;

    return gallery_data;
}


// export const gallery_data_without_categories = {
//     has_multiple_categories: false,
//     categories : [
//         {
//             display_name: "Category 1",
//             items: [
//                 {
//                     image_path: "sample_user_data/gallery_images/gallery_1.jpg"
//                 },
//                 {
//                     image_path: "sample_user_data/gallery_images/gallery_2.jpg"
//                 },
//                 {
//                     image_path: "sample_user_data/gallery_images/gallery_3.jpg"
//                 },
//                 {
//                     image_path: "sample_user_data/gallery_images/gallery_4.jpg"
//                 },
//                 {
//                     image_path: "sample_user_data/gallery_images/gallery_5.jpg"
//                 },
//             ]
//         }
//     ]
// }


