# Shell Automation

## Structure

```text
bash-toolbox/
├── bin/    # Executable Bash tools
├── lib/    # Shared Bash implementation
└── test/   # Bats tests
```

### Executables

Tools intended to be executed directly live under `bin/`.

```bash
./bin/<tool>
```

### Shared implementation

Reusable Bash functions and implementation code live under `lib/`.

Tools in `bin/` can source code from `lib/` when functionality is shared between multiple tools.

### Tests

Tests live under `test/` and use [Bats](https://github.com/bats-core/bats-core).

---

Make a tool executable:

```bash
chmod +x bin/<tool>
```

Run it:

```bash
./bin/<tool>
```

You can also add `bin/` to your `PATH` for the current shell:

```bash
export PATH="$PWD/bin:$PATH"
```

Then execute tools directly:

```bash
<tool>
```

---

## Topics and Tools

This repository contains Bash automation examples and tools involving:

* `awk`
* `tee`
* `sed`
* `gawk`
* `tr`
* `case`
* `Docker`
* `until`
* `while`
* process management
* shell redirection
* subshells
* traps
* asynchronous execution

