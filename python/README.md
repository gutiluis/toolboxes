# Python Toolbox

A collection of small, reusable Python utilities for scripting, automation, and development.

## Structure

```text
python/
├── src/
│   └── toolbox/             # Reusable Python modules
├── tests/                   # unittest test suite
├── examples/                # Usage examples and debugging exercises
├── docs/                    # Documentation
├── pyproject.toml           # Project configuration
├── README.md
└── LICENSE
```

## Library

Reusable functionality lives under `src/toolbox/`.

```python
from toolbox.indexfields import main
```

Modules are organized by purpose rather than by application.

```text
src/toolbox/
├── __init__.py
├── indexfields.py
├── listfiles.py
└── user_db.py
```

Keep modules small and focused so individual utilities can be reused independently.

## Testing

Tests use Python's built-in **unittest** framework and live under `tests/`.

Run the complete test suite:

```bash
python3 -m unittest discover -s tests -v
```

Run a specific test file:

```bash
python3 -m unittest discover -s tests -p 'test_user_db.py' -v
```

Run a specific test module, provided `tests/` is a Python package:

```bash
python3 -m unittest tests.test_user_db -v
```

## Development

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install the package in editable mode:

```bash
python3 -m pip install -e .
```

Run the tests:

```bash
python3 -m unittest discover -s tests -v
```

## Package

The package is configured for installation through `pyproject.toml` and is intended for eventual distribution through PyPI.

## Status

Currently under development.

