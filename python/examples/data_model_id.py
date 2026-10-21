#!/bin/env python
'''
main data model itentifiers by group:
object setup methods
representation methods
comparison methods
container and iteration methods
arithmetic and operator methods
special behavior methods
'''


# script to instance data model identifiers

# __call__()
class User:
    def __call__(self, name):
        return f"Call, {name}"
instance = User()
print(instance("Goku"))
instance("goku") == instance.__call__("goku")

class Target:
    def __call__():
        return "destroy target"
Target.__call__()

# ------


# object setup methods
class Setup:
    '''
    __new__ python data model:
    creates an instance before __init__ runs
    '''
    def __new__(self, arg):
        return arg
Setup('d')
# same as above
Setup.__new__(Setup, 'd')


class Setup:
    def __new__(self):
        return self
a = Setup()
a.__new__('2')
Setup.__new__('2') # same as above

def __new__(arg):
    return arg


# ------------------------------------


# arithmetic and operator methods
class Arithmetic:
    def __add__(self, a, b):
        return a + b
a = Arithmetic()
a.__add__(3, 4)

def __add__():
    return 3 + 3

def __str__():
    return 'string'

def main():
    __add__()
    __str__()

main()


