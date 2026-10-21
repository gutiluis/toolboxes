#!/usr/bin/env python3

"""Debugger (pdb) impementation."""

import pdb


def calculate_age(birth_year, current_year):
    """Calculate birth age and age"""
    return subtract(current_year, birth_year)


def add(a, b):
    print(f"Add: {a} + {b}")
    return a + b

def subtract(a, b):
    print(f"Subtract: {a} - {b}")
    return a - b

def main():
    """Year prompt debugging"""
    while True:
        try:
            birth_year = int(input("Enter your birth year: "))
            current_year = int(input("Enter the current year: "))
            if birth_year > current_year:
                print("Birth year can't be greater than the current year. Please try again.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter valid numbers.")

    breakpoint()
    pdb.set_trace()

    age = calculate_age(birth_year, current_year)
    print(f"Your age is: {age}")

if __name__ == "__main__":
    main()
