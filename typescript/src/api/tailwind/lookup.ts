import { utilities } from "./utilities.js";
import type { UtilityDocumentation } from "./types.js";

export function getUtility(name: string): UtilityDocumentation | undefined {
    return utilities.find((utility) => utility.name === name);
}

export function searchUtilities(query: string): UtilityDocumentation[] {
    const term = query.toLowerCase();

    return utilities.filter((utility) =>
        [utility.name, utility.category, utility.description].some((value) =>
            value.toLowerCase().includes(term),
        ),
    );
}
