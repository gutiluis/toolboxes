# Python Toolbox

A collection of small, reusable Python tools and utilities for everyday scripting, automation, and development.

The project keeps tools **small, reusable, composable, command-line friendly, and easy to test**.

## Structure

```text
python-toolbox/
├── src/
│   └── toolbox/             # Reusable Python modules
├── tests/                   # pytest tests
├── docs/                    # Documentation
├── pyproject.toml           # Project configuration
├── README.md
└── LICENSE
```

## Library

Reusable functionality lives under `src/toolbox/`.

```python
from toolbox.fields import fields_from_index
```

Modules are organized by purpose rather than by application.

```text
src/toolbox/
├── __init__.py
├── fields.py
├── files.py
├── csv.py
├── json.py
└── shell.py
```

The modules are intended to remain small and focused so that individual utilities can be reused independently.

## Testing

Tests use **pytest** and live under `tests/`.

Run the complete test suite with:

```bash
pytest
```

Run a specific test file:

```bash
pytest tests/test_fields.py
```

Run a specific test:

```bash
pytest tests/test_fields.py::test_fields_from_index
```

## Development

Create a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

Install the project in editable mode:

```bash
python -m pip install -e .
```

Run the tests:

```bash
pytest
```

## Design Principles

* Small, focused utilities
* Reusable Python code
* Command-line friendly
* Minimal dependencies
* Standard library where practical
* Easy to test
* Composable tools
* Clear interfaces
* No unnecessary abstractions

## Package

The package is designed for distribution through PyPI so the utilities can be installed and reused across projects.

## Status

Currently under development.

## License

See [LICENSE](LICENSE).

