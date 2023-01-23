#!/usr/bin/env python3
""" Write a type-annotated function sum_list """
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of the float in the list """
    return sum(input_list)
