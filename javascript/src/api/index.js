import { fetchRequest } from "./fetchRequest.js";
import { fetchResponse } from "./fetchResponse.js";

export async function inspectHttp(url, options = {}) {
    const request = fetchRequest(url, options);

    const response = await fetch(request.request);

    return {
        request: {
            url: request.url,
            method: request.method,
            headers: request.headers,
        },
        response: await fetchResponse(response),
    };
}
