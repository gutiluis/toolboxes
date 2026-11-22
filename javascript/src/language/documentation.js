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

export const DOM_API_DOCUMENTATION = {
    textContent: {
        category: "DOM API",
        description:
            "Gets or sets the text content of a Node and all its descendants. When set, replaces all child nodes with a single text node containing the specified string.",
        syntax: ["element.textContent", "element.textContent = 'Hello World';"],
        returns: "string | null",
        example: [
            "const element = document.querySelector('#message');",
            "element.textContent = 'Hello World';",
        ],
        notes: [
            "Returns null for Document and DocumentType nodes.",
            "Does not parse HTML markup.",
            "Includes text from descendant elements.",
        ],
        seeAlso: ["innerHTML", "innerText", "nodeValue"],
    },

    innerHTML: {
        category: "Element",
        description:
            "Gets or sets the HTML markup contained within an element.",
        syntax: [
            "element.innerHTML",
            "element.innerHTML = '<strong>Hello</strong>';",
        ],
        returns: "string",
        notes: [
            "Setting innerHTML parses HTML.",
            "Be careful with untrusted HTML because it can introduce XSS vulnerabilities.",
        ],
        seeAlso: ["textContent", "innerText"],
    },

    innerText: {
        category: "HTMLElement",
        description:
            "Gets or sets the rendered text content of an element, taking CSS styling and layout into account.",
        syntax: ["element.innerText", "element.innerText = 'Hello World';"],
        returns: "string",
        seeAlso: ["textContent", "innerHTML"],
    },

    querySelector: {
        category: "Document / Element",
        description:
            "Returns the first element within the document or element subtree that matches the specified CSS selector.",
        syntax: [
            "document.querySelector(selector)",
            "element.querySelector(selector)",
        ],
        returns: "Element | null",
        example: ["const element = document.querySelector('#message');"],
        seeAlso: ["querySelectorAll", "getElementById"],
    },

    querySelectorAll: {
        category: "Document / Element",
        description:
            "Returns a static NodeList containing all elements matching the specified CSS selector.",
        syntax: ["document.querySelectorAll(selector)"],
        returns: "NodeList",
        seeAlso: ["querySelector", "getElementsByClassName"],
    },

    createElement: {
        category: "Document",
        description: "Creates a new HTML element with the specified tag name.",
        syntax: ["document.createElement(tagName)"],
        returns: "HTMLElement",
        example: ["const element = document.createElement('div');"],
        seeAlso: ["appendChild", "append"],
    },

    append: {
        category: "Element",
        description:
            "Inserts Node objects or strings after the last child of an element.",
        syntax: ["element.append(...nodesOrStrings)"],
        returns: "undefined",
        seeAlso: ["appendChild", "prepend"],
    },

    getItem: {
        category: "Storage",
        description:
            "Returns the value associated with the specified key, or null if the key does not exist.",
        syntax: ["localStorage.getItem(key)"],
        returns: "string | null",
        seeAlso: ["setItem", "removeItem"],
    },

    setItem: {
        category: "Storage",
        description:
            "Stores a key/value pair in the Storage object. Both key and value are converted to strings.",
        syntax: ["localStorage.setItem(key, value)"],
        returns: "undefined",
        seeAlso: ["getItem", "removeItem"],
    },
};
