"""subprocess shell call"""


import subprocess


def main() -> subprocess.CompletedProcess[str]:
    """Print and list files and directories"""
    return subprocess.run(
        ["ls", "-l"],
        capture_output=True,
        text=True,
        check=False,
    )

