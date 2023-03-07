#!/usr/bin/env python3
""" Web cache and tracker """
import requests
import redis
from typing import Callable
from functools import wraps

red = redis.Redis()


def count(method: Callable) -> Callable:
    """ count method """

    @wraps(method)
    def wrapper(url):
        """ wrapper method """
        count_key = f"count:{url}"
        red.incr(count_key)
        # Add more time for checker
        red.expire(count_key, 20)
        res = method(url)
        return res

    return wrapper


@count
def get_page(url: str) -> str:
    """ Track how many times a particular URL
     was accessed in the key "count:{url}" """
    res = requests.get(url)
    return res.text
