import csv
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

from toolbox.user_db import FIELDS, initialize_db, read_users


class TestUserDatabase(unittest.TestCase):
    """Test user database initialization and reading."""

    def setUp(self):
        """Create a temporary directory for each test."""
        self.temp_dir = TemporaryDirectory()
        self.addCleanup(self.temp_dir.cleanup)
        self.db_path = Path(self.temp_dir.name) / "users_db.csv"

    def test_initialize_db_creates_file(self):
        """Create a user file with the expected headers."""
        initialize_db(self.db_path)

        with self.db_path.open(newline="", encoding="utf-8") as file:
            reader = csv.reader(file)
            self.assertEqual(next(reader), list(FIELDS))
            self.assertEqual(list(reader), [])

    def test_initialize_db_preserves_existing_file(self):
        """Do not overwrite an existing user file."""
        original_content = "username,user_id,password\nalice,001,secret\n"
        self.db_path.write_text(original_content, encoding="utf-8")

        initialize_db(self.db_path)

        self.assertEqual(
            self.db_path.read_text(encoding="utf-8"),
            original_content,
        )

    def test_read_users_returns_empty_list(self):
        """Return an empty list when the file contains only headers."""
        initialize_db(self.db_path)

        self.assertEqual(read_users(self.db_path), [])

    def test_read_users_returns_user_records(self):
        """Read user records as dictionaries."""
        initialize_db(self.db_path)

        with self.db_path.open("a", newline="", encoding="utf-8") as file:
            writer = csv.DictWriter(file, fieldnames=FIELDS)
            writer.writerow(
                {
                    "username": "alice",
                    "user_id": "001",
                    "password": "secret",
                }
            )

        self.assertEqual(
            read_users(self.db_path),
            [
                {
                    "username": "alice",
                    "user_id": "001",
                    "password": "secret",
                }
            ],
        )


if __name__ == "__main__":
    unittest.main()

