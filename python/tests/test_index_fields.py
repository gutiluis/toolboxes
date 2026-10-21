import unittest

from toolbox.indexfields import main


class TestFieldsFromIndex(unittest.TestCase):
    def test_fields_from_index(self):
        fields = ["one", "two", "three", "four", "five"]

        result = main(fields, 2)

        self.assertEqual(result, ["three", "four", "five"])


if __name__ == "__main__":
    unittest.main()

