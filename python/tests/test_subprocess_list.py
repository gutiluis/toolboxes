import unittest

from toolbox.listfiles import main


class TestListFiles(unittest.TestCase):
    def test_subprocess_shell(self):
        """Test subprocess output and return code."""
        result = main()

        self.assertTrue(result.stdout)
        self.assertEqual(result.stderr, "")
        self.assertEqual(result.returncode, 0)


if __name__ == "__main__":
    unittest.main()

