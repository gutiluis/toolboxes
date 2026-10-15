# Shell Automation

![Status](https://img.shields.io/badge/Status-Under%20Development-orange?style=flat-square)
![Bash](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge\&logo=gnu-bash\&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge\&logo=linux\&logoColor=black)

🚧 **Currently under development** 🚧

General-purpose Bash automation tools and reusable shell code.

---

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

## Getting Started

Clone the repository:

```bash
git clone https://github.com/gutiluis/bash-toolbox.git
cd bash-toolbox
```

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

---

## Contributing

If you are interested in reporting or fixing issues and contributing directly to the code base, please see [CONTRIBUTING.md](https://github.com/gutiluis/.github/blob/main/CONTRIBUTING.md) for more information on what we're looking for and how to get started.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](https://github.com/gutiluis/.github/blob/main/CODE_OF_CONDUCT.md).

---

## Security Policy

If you discover a security vulnerability, please review our [Security Policy](https://github.com/gutiluis/.github/blob/main/SECURITY.md) for reporting guidelines.

---

## Support

If you run into any issues or have questions, please check our [SUPPORT.md](https://github.com/gutiluis/.github/blob/main/SUPPORT.md) file for guidance, or reach out through one of our community channels below.

---

## Community

Information on reporting bugs, getting help, finding third-party tools, and sample applications can be found through our **Community** channels:

* **Discord:** [Community channel](https://discord.gg/ajVdrQnZ4h)
* **Slack:** [technobool.slack.com](https://technobool.slack.com)
* **GitHub Discussions:** [Open a discussion](https://github.com/gutiluis/bash-toolbox/discussions)

---

## License

[MIT License](LICENSE)
