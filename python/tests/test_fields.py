from toolbox.fields import fields_from_index


def test_fields_from_index():
    fields = ["one", "two", "three", "four", "five"]

    result = fields_from_index(fields, 2)

    assert result == ["three", "four", "five"]
