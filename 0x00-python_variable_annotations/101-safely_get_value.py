#!/usr/bin/env python3
""" Add type annotations to the function """
from typing import TypeVar, Mapping, Any, Union


def safely_get_value(dct: Mapping, key: Any, default: Union[TypeVar('T'), None] = None) -> Union[(Any, TypeVar('T'))]:
    """ Return the value """
    if key in dct:
        return dct[key]
    else:
        return default
