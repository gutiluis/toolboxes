# Rust Toolbox

A collection of small, reusable Rust utilities.

## Structure

```text
rust/
├── Cargo.toml
├── Cargo.lock
├── README.md
├── src/
│   ├── lib.rs
│   └── functions.rs
└── tests/
    └── functions.rs
```

## Usage

Build the library:

```bash
cargo build
```

Run tests:

```bash
cargo test
```

## Interactive Usage

Start IRust from the toolbox root:

```bash
irust
```

Add the local package:

```rust
:add --path .
```

Import and call functions:

```rust
use toolbox::functions::{another_function, another_function_parameter};

another_function("Hello, world!");
another_function_parameter(42);
```
