#!/usr/bin/env python3
""" Web cache and tracker """
import requests
import redis

red = redis.Redis()


def get_page(url: str):
    """ Track how many times a particular URL
     was accessed in the key "count:{url}" """
    count_key = f"count:{url}"
    red.incr(count_key)
    red.expire(count_key, 10)

    res = requests.get(url)
    return res.text
