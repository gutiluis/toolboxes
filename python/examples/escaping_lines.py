#!/usr/bin/env python3
"""Demonstrate newlines, carriage returns, and indentation."""

import textwrap

# Newline (LF)
print("first line\nsecond line")

# Carriage return (CR)
print("first line\rsecond line")

# Triple-quoted strings preserve indentation.
print("""
    program first line
    """)

# \n adds a newline; it does not remove indentation.
print("""
    \nremove the indentation
    however this line is still indented
    """)

# textwrap.dedent() removes common indentation.
print(textwrap.dedent("""
    new line
    another line
"""))
