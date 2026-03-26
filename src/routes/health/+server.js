import {json} from "@sveltejs/kit";


export async function GET(req) {
    // return sendJsonResult({})
    return json({ result: {}, success: true });
}


