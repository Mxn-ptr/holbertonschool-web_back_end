#!/usr/bin/env python3
""" Web cache and tracker """
import requests
import redis


def get_page(url: str) -> str:
    """ Track how many times a particular URL
     was accessed in the key "count:{url}" """
    count_key = f"count:{url}"
    redis.incr(count_key)
    redis.expire(count_key, 10)

    res = requests.get(url)
    return res.text
