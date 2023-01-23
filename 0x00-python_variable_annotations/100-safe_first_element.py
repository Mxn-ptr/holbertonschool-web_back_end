#!/usr/bin/env python3
""" Type annoations to the function """
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """ Return first element """
    if lst:
        return lst[0]
    else:
        return None
