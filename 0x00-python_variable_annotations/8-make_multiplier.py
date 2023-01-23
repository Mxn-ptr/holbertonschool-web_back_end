#!/usr/bin/env python3
""" Write a type-annoted function make_multiplier """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Return a function """
    def mult(n: float) -> float:
        """ Return multiplier * number """
        return multiplier * n
    return mult
