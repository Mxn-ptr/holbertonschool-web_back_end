#!/usr/bin/env python3
""" Web cache and tracker """
import requests
import redis

red = redis.Redis()


def get_page(url: str):
    """ Track how many times a particular URL
     was accessed in the key "count:{url}" """
    count_key = f"count:{url}"
    count = red.incr(count_key)
    if count == 1:
        red.expire(count_key, 10)

    res = requests.get(url)
    return res.text

if __name__ == "__main__":
    get_page('httt://slowwly.robertomurray.co.uk')
