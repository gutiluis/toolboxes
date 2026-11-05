export async function fetchResponse(response) {
    const body = await response.text();

    let data;

    try {
        data = JSON.parse(body);
    } catch {
        data = body;
    }

    return {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        data,
        bodyLength: new TextEncoder().encode(body).byteLength,
    };
}
