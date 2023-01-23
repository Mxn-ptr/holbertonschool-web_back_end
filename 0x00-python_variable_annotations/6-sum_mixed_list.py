#!/usr/bin/env python3
""" Write a type-annotated function sum_mixed_list """
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ Return the sum of the elements of the list mxd_lst """
    return sum(mxd_lst)
