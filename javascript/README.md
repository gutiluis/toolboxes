# JavaScript Toolbox

A collection of small, reusable JavaScript utilities for scripting and development.

## Requirements

- Node.js 22 or later
- npm

## Project Structure

```text
src/
├── index.js
├── language/
│   └── keywords.js
├── filesystem/
│   ├── cwd.js
│   └── list-dir.js
├── api/
│   └── fetch.js
└── browser/
    └── url.js

tests/
├── language/
├── filesystem/
├── api/
│   └── fetch.test.js
└── browser/
    └── url.test.js

examples/
├── api/
│   └── fetch.js
└── browser/
    └── index.html
```

## Installation

Install dependencies:

```bash
npm install
```

To install the published package in another project:

```bash
npm install javascript-toolbox
```

## Usage

### Language Utilities

Language utilities provide reusable JavaScript language helpers.


### Filesystem Utilities

Filesystem utilities run in Node.js.


### API Utilities

API utilities provide HTTP request helpers using the native Fetch API.

```javascript
import { getJson } from "./src/api/fetch.js";

const users = await getJson(
    "https://jsonplaceholder.typicode.com/users",
);

console.log(users);
```

`getJson(url)` sends an HTTP GET request, throws an error for unsuccessful HTTP responses, and returns the parsed JSON data.

### Browser Utilities

Browser utilities use native browser APIs and run in a web browser.

```javascript
import {
    getCurrentUrl,
    getPathname,
} from "./src/browser/url.js";

console.log(getCurrentUrl());
console.log(getPathname());
```

- `getCurrentUrl()` returns the current page URL.
- `getPathname()` returns the pathname of the current page.

## Examples

### API Example

Run the API example from the project root:

```bash
node examples/api/fetch.js
```

This example requests sample user data from JSONPlaceholder and prints the response to the terminal. An internet connection is required.

### Browser Example

Start a local HTTP server from the project root:

```bash
python3 -m http.server 8000
```

Open the browser example:

<http://localhost:8000/examples/browser/>

Stop the server with `Ctrl+C`.

## Testing

Run the API tests:

```bash
node --test tests/api/fetch.test.js
```

Run the browser URL tests:

```bash
node --test tests/browser/url.test.js
```

Run all tests:

```bash
node --test
```

The tests use Node.js's built-in test runner and assertion modules.

## Development

Implement reusable utilities under `src/`, add automated tests under `tests/`, and provide usage demonstrations under `examples/`.

- `src/` — library implementation.
- `tests/` — automated tests.
- `examples/` — runnable usage examples.

## License

See [LICENSE](LICENSE) for license information.

