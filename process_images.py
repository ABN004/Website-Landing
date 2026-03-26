from PIL import Image
import os

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        # Get the bounding box of the non-zero regions
        bbox = img.getbbox()
        if bbox:
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Successfully cropped and saved {output_path}")
        else:
            # If getbbox returns None (e.g. fully transparent or white), just verify logic
            # For the JPG which might be white background, we might need a different approach if it's not transparent.
            # But usually logos have some distinct color.
            # If it's a JPG with white background, getbbox might not work if it's all "data".
            # Let's try to crop purely based on content if possible, or just copy if bbox fails for JPG.
            print(f"No bounding box found for {input_path}, saving as is.")
            img.save(output_path)
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Paths
base_path = r"C:/Users/nucbi/.gemini/antigravity/brain/a9020473-53a0-4b7f-8b77-8f23d1413335"
output_dir = r"c:\Users\nucbi\OneDrive\Desktop\GAAD9\static\assets"

# Image 0 (PNG - transparent)
img0_in = os.path.join(base_path, "uploaded_image_0_1767248725827.png")
img0_out = os.path.join(output_dir, "gaad9-logo.png")

# Image 1 (JPG - background)
img1_in = os.path.join(base_path, "uploaded_image_1_1767248725827.jpg")
img1_out = os.path.join(output_dir, "gaad9-logo-dark.jpg") # Assuming it's the dark background one based on preview

# Ensure output dir exists
os.makedirs(output_dir, exist_ok=True)

crop_image(img0_in, img0_out)
crop_image(img1_in, img1_out)
