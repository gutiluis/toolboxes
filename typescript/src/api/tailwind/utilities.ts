import type { UtilityDocumentation } from "./types.js";

export const utilities: UtilityDocumentation[] = [
    {
        name: "flex",
        category: "Display / Flexbox",
        description:
            "Creates a flex container. Direct children become flex items and are arranged along the main axis.",
        css: `display: flex;`,
        behavior: [
            "Default direction: row",
            "Default wrapping: nowrap",
            "Main axis: horizontal",
            "Cross axis: vertical",
        ],
        example: `<div class="flex gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>`,
        related: [
            "inline-flex",
            "flex-row",
            "flex-col",
            "flex-wrap",
            "flex-nowrap",
            "flex-1",
        ],
    },
];
