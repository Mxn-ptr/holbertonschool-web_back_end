#!/usr/bin/env python3
""" Web cache and tracker """
import requests
import redis

red = redis.Redis()


def get_page(url: str):
    """ Track how many times a particular URL
     was accessed in the key "count:{url}" """
    red.incr("cached:{}".format(url))
    res = requests.get(url)
    red.setex("cached:{}".format(url), 10, red.get("cached:{}".format(url)))
    return res.text
