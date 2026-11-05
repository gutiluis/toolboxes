export function fetchRequest(url, options = {}) {
    const request = new Request(url, options);

    return {
        request,
        url: request.url,
        method: request.method,
        headers: Object.fromEntries(request.headers.entries()),
    };
}

export async function getJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}
