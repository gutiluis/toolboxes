import test from "node:test";
import assert from "node:assert/strict";

import { getJson } from "../../src/api/fetch.js";

test("getJson returns parsed JSON", async () => {
    const originalFetch = globalThis.fetch;

    globalThis.fetch = async () => ({
        ok: true,
        json: async () => ({ name: "JavaScript Toolbox" }),
    });

    try {
        const result = await getJson("https://example.com/api");

        assert.deepStrictEqual(result, {
            name: "JavaScript Toolbox",
        });
    } finally {
        globalThis.fetch = originalFetch;
    }
});

test("getJson throws for unsuccessful responses", async () => {
    const originalFetch = globalThis.fetch;

    globalThis.fetch = async () => ({
        ok: false,
        status: 404,
    });

    try {
        await assert.rejects(
            getJson("https://example.com/missing"),
            {
                message: "HTTP error: 404",
            },
        );
    } finally {
        globalThis.fetch = originalFetch;
    }
});
