#!/usr/bin/env python3
""" Annotate the below function """
from typing import List, Iterable, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return list"""
    return [(i, len(i)) for i in lst]
