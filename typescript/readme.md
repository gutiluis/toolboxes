# TypeScript Toolbox

A collection of reusable TypeScript functions and examples for practicing data types, type annotations, and common language features.

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

## Neovim Documentation

The project includes custom Tailwind CSS documentation integrated into Neovim's LSP hover functionality.

Hover over a Tailwind CSS utility class to display documentation directly inside Neovim.

Documentation includes:

- Original Tailwind CSS utility class.
- Utility category and description.
- Equivalent CSS properties and values.
- Default behavior and relevant details.

For example, hovering over `hover:text-green-200` displays the corresponding text color utility documentation, including its hover variant and CSS equivalent.

This provides inline Tailwind CSS reference documentation without leaving the editor.

## Requirements

- Node.js
- TypeScript
- tsx
- Neovim with configured LSP support
- Tailwind CSS documentation integration
