#!/usr/bin/env python3
""" Write a type-annotated function to_kv """
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Return the tuple """
    return (k, v * v)
