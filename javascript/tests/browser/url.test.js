import test from "node:test";
import assert from "node:assert/strict";

import { getCurrentUrl, getPathname } from "../../src/browser/url.js";

test("getCurrentUrl returns the current URL", () => {
    const originalWindow = globalThis.window;

    globalThis.window = {
        location: {
            href: "https://example.com/tools/?page=1",
        },
    };

    try {
        assert.equal(
            getCurrentUrl(),
            "https://example.com/tools/?page=1",
        );
    } finally {
        if (originalWindow === undefined) {
            delete globalThis.window;
        } else {
            globalThis.window = originalWindow;
        }
    }
});

test("getPathname returns the current URL pathname", () => {
    const originalWindow = globalThis.window;

    globalThis.window = {
        location: {
            pathname: "/tools/",
        },
    };

    try {
        assert.equal(getPathname(), "/tools/");
    } finally {
        if (originalWindow === undefined) {
            delete globalThis.window;
        } else {
            globalThis.window = originalWindow;
        }
    }
});
