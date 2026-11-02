# JavaScript Toolbox

## Requirements

- Node.js 22 or later
- npm

## Structure

```text
src/
├── index.js
├── language/
├── filesystem/
├── api/
└── browser/

tests/
├── language/
├── filesystem/
├── api/
└── browser/

examples/
├── api/
└── browser/
```

## Installation

Install dependencies:

```bash
npm install
```

Install Chromium for Playwright:

```bash
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
import { getJson } from "./src/api/fetch.js";

const users = await getJson("https://jsonplaceholder.typicode.com/users");

console.log(users);
```

### Browser Utilities

Browser utilities using native browser APIs.

```javascript
import { getCurrentUrl, getPathname } from "./src/browser/url.js";

console.log(getCurrentUrl());
console.log(getPathname());
```

Playwright utilities run in Node.js and automate Chromium.

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

To serve the browser example:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/examples/browser/` in your browser.

## Testing

Run all tests:

```bash
node --test
```

Run individual tests:

```bash
node --test tests/api/fetch.test.js
node --test tests/browser/url.test.js
```

## Development

- `src/` — reusable utilities.
- `tests/` — automated tests.
- `examples/` — usage demonstrations.
