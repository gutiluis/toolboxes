# Rust Toolbox

A collection of small, reusable Rust utilities and examples.

## Structure

```text
rust/
├── Cargo.toml
├── Cargo.lock
├── README.md
├── .gitignore
├── src/
│   ├── lib.rs
│   └── functions.rs
├── examples/
│   └── ...
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

Run an example:

```bash
cargo run --example <example_name>
```

## Interactive Usage

Start IRust from the Rust toolbox directory:

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

## Development

Format the code:

```bash
cargo fmt
```

Check the code for compiler warnings:

```bash
cargo clippy
```

Build artifacts are stored in `target/` and excluded from version control.
