# JavaScript Toolbox

Reusable JavaScript utilities for language operations, filesystem management, HTTP requests, and browser automation.

## Requirements

- Node.js 22 or later
- npm

## Installation

```bash
npm install
npx playwright install chromium
```

## Usage

### Language Utilities

Reusable JavaScript language helpers.

### Filesystem Utilities

Filesystem utilities for Node.js.

### API Utilities

HTTP request helpers using the native Fetch API.

```javascript
import { getJson, inspectHttp } from "./src/api/fetch.js";

const users = await getJson("https://jsonplaceholder.typicode.com/users");
const result = await inspectHttp("https://httpbin.org/get");

console.log(users);
console.log(result.request.headers);
console.log(result.response.headers);
console.log(result.response.data);
console.log(result.response.bodyLength);
```

### Browser Utilities

Browser utilities using native browser APIs.

```javascript
import { getCurrentUrl, getPathname } from "./src/browser/url.js";

console.log(getCurrentUrl());
console.log(getPathname());
```

Playwright utilities automate Chromium from Node.js.

```javascript
import { openChromiumPage } from "./src/browser/chromium.js";

const { browser, page } = await openChromiumPage("http://localhost:8000");

console.log(await page.title());

await browser.close();
```

## Examples

Run examples from the project root:

```bash
node examples/api/fetch.js
node examples/browser/chromium.js http://localhost:8000
```

Serve browser examples:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/examples/browser/`.

## Testing

```bash
node --test
```

Run individual test files:

```bash
node --test tests/api/fetch.test.js
node --test tests/browser/url.test.js
```

## Development

- `src/` — reusable utilities.
- `tests/` — automated tests.
- `examples/` — usage demonstrations.
