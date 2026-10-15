# `fields_from_index`

Returns all elements in a list starting at the specified index.

## Usage

```python
from toolbox.fields import fields_from_index

fields = ["one", "two", "three", "four", "five"]

result = fields_from_index(fields, 2)

print(result)
```

Output:

```text
['three', 'four', 'five']
```

## Arguments

* `fields` — list of values.
* `index` — zero-based index where the result starts.

## Example

```python
fields_from_index(["a", "b", "c", "d", "e"], 3)
```

Returns:

```text
['d', 'e']
```

