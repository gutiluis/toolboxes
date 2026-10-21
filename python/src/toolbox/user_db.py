"""CSV file-backed user."""

import csv
from pathlib import Path

DEFAULT_DB = Path("users_db.csv")
FIELDS = ("username", "user_id", "password")


def initialize_db(path=DEFAULT_DB):
    """Initialize the user file if it does not exist."""
    path = Path(path)

    if not path.exists():
        with path.open("w", newline="", encoding="utf-8") as file:
            csv.DictWriter(file, fieldnames=FIELDS).writeheader()


def read_users(path=DEFAULT_DB):
    """Return all users from the user file."""
    path = Path(path)

    with path.open(newline="", encoding="utf-8") as file:
        return list(csv.DictReader(file))
