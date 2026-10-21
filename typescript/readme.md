# TypeScript Toolbox

A collection of reusable TypeScript functions and examples for practicing data types, type annotations, and common language features.

## Structure

```text
typescript/
├── src/
│   └── functions/
│       └── dataTypes.ts
├── examples/
├── scripts/
├── tests/
├── package.json
├── tsconfig.json
└── README.md
```

## Types

The toolbox includes examples of:

- Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`
- Arrays and tuples
- Objects, type aliases, and enums
- `unknown` and `any`
- `void` and `never`
- Nullable and optional values
- Union and literal types
- Records, sets, and maps
- Generic functions

## Usage

Run a TypeScript file using `tsx`:

```bash
npx tsx src/functions/dataTypes.ts
```

Import individual functions into another TypeScript file:

```typescript
import { numbers, strings, identity } from "./src/functions/dataTypes.ts";

numbers(42);
strings("TypeScript");
identity<boolean>(true);
```

## Requirements

- Node.js
- TypeScript
- tsx

