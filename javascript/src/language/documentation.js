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

    Event: {
        category: "DOM API",
        description:
            "Represents an event that occurs in the DOM. The browser creates an Event object and passes it to the event handler when an event is dispatched.",
        syntax: [
            "element.addEventListener('click', (event) => {})",
            "event.type",
            "event.target",
            "event.currentTarget",
        ],
        returns: "Event object",
        notes: [
            "Event is the base interface for many DOM event types.",
            "The event parameter is conventionally named event or e.",
            "Provides information about the event and methods to control its behavior.",
        ],
        seeAlso: [
            "EventTarget",
            "addEventListener",
            "preventDefault",
            "stopPropagation",
        ],
    },

    EventTarget: {
        category: "DOM API",
        description:
            "An interface implemented by objects that can receive events and may have listeners for them. Element, Document, and Window implement EventTarget.",
        syntax: [
            "target.addEventListener(type, listener)",
            "target.removeEventListener(type, listener)",
            "target.dispatchEvent(event)",
        ],
        returns: "EventTarget",
        seeAlso: ["Event", "addEventListener", "removeEventListener"],
    },

    addEventListener: {
        category: "EventTarget",
        description:
            "Registers an event handler on an EventTarget. The handler executes whenever an event of the specified type is dispatched.",
        syntax: [
            "target.addEventListener(type, listener)",
            "target.addEventListener(type, listener, options)",
        ],
        returns: "undefined",
        example: [
            "productForm.addEventListener('submit', (event) => {",
            "    event.preventDefault();",
            "});",
        ],
        notes: [
            "The browser passes an Event object to the listener.",
            "Multiple listeners can be registered for the same event type.",
            "Supports options such as once, capture, and passive.",
        ],
        seeAlso: ["Event", "removeEventListener", "EventTarget"],
    },

    removeEventListener: {
        category: "EventTarget",
        description:
            "Removes an event listener previously registered with addEventListener.",
        syntax: ["target.removeEventListener(type, listener)"],
        returns: "undefined",
        notes: [
            "The listener reference must match the registered callback.",
            "The event type and capture setting must also match.",
        ],
        seeAlso: ["addEventListener", "EventTarget"],
    },

    preventDefault: {
        category: "Event",
        description:
            "Cancels the default action associated with an event, provided that the event is cancelable.",
        syntax: ["event.preventDefault()"],
        returns: "undefined",
        example: [
            "form.addEventListener('submit', (event) => {",
            "    event.preventDefault();",
            "});",
        ],
        notes: [
            "Does not stop event propagation.",
            "Does not prevent the event listener from executing.",
            "Has no effect on non-cancelable events.",
        ],
        seeAlso: ["Event", "stopPropagation"],
    },

    stopPropagation: {
        category: "Event",
        description:
            "Prevents the event from propagating further through the DOM event flow.",
        syntax: ["event.stopPropagation()"],
        returns: "undefined",
        notes: [
            "Does not prevent the default browser action.",
            "Does not stop other listeners on the same element.",
        ],
        seeAlso: ["Event", "stopImmediatePropagation", "preventDefault"],
    },

    stopImmediatePropagation: {
        category: "Event",
        description:
            "Stops event propagation and prevents remaining listeners on the current element from being called.",
        syntax: ["event.stopImmediatePropagation()"],
        returns: "undefined",
        notes: [
            "Also prevents propagation to subsequent elements.",
            "Does not cancel the default browser action.",
        ],
        seeAlso: ["stopPropagation", "preventDefault"],
    },
};

export function getDocumentation(word) {
    if (!word) return null;
    return (
        JS_KEYWORD_DOCUMENTATION[word] ??
        DOM_API_DOCUMENTATION[word] ??
        DOM_API_DOCUMENTATION[word === "event" ? "Event" : word] ??
        null
    );
}
