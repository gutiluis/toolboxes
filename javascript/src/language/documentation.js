export const JS_KEYWORD_DOCUMENTATION = {
    if: {
        description: "Executes a statement if a specified condition is truthy.",
        syntax: "if (condition) { statement }",
    },

    throw: {
        description: "Throws a user-defined exception.",
        syntax: "throw expression;",
    },

    async: {
        description: "Declares an asynchronous function.",
        syntax: "async function name() {}",
    },

    export: {
        description:
            "Exports declarations from a module, making them available for import in other modules.",
        syntax: [
            "export const name = value;",
            "export function name() {}",
            "export default expression;",
            "export { name };",
            "export * from './module.js';",
        ],
    },

    await: {
        description:
            "Pauses the execution of an async function until a Promise settles, then returns its resolved value or throws its rejection reason.",
        syntax: [
            "await expression;",
            "const result = await promise;",
            "await Promise.all(promises);",
        ],
    },
};
