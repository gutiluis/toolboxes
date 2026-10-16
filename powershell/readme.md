# PowerShell Toolbox

A collection of reusable PowerShell scripts and utilities for everyday command-line tasks.

---

## Structure

- `functions/` _ Reusable Powershell functions.
- `examples/` _ Usage examples.
- `scripts/` — Standalone PowerShell scripts.
- `tests/` — Pester tests.

## Usage

Run a script from the PowerShell terminal:

```powershell
./scripts/list-files.ps1
```

Pass parameters when needed:

```powershell
./scripts/list-files.ps1 -Path "/path/to/directory"
```

## Testing

Run the test suite with Pester:

```powershell
Invoke-Pester ./tests/
```

## Requirements

- PowerShell 7+
- Pester
