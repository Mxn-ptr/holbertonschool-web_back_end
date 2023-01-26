#!/usr/bin/env python3
""" Create a class LFUCache"""
BaseCaching = __import__("base_caching").BaseCaching


class LFUCache(BaseCaching):
    """ Represents a LFU cache """
    def __init__(self):
        """ constructor """
        super().__init__()
        self.cache = {}

    def put(self, key, item):
        """ Assign the item value for the key to the dictionary """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                self.cache[key] += 1
            else:
                self.cache[key] = 0

            self.cache_data[key] = item
            if len(self.cache_data) > self.MAX_ITEMS:
                last_cache = self.cache.popitem()
                index = min(self.cache, key=self.cache.get)
                self.cache.pop(index)
                self.cache[last_cache[0]] = last_cache[1]
                print("DISCARD: {}".format(index))
                self.cache_data.pop(index)

    def get(self, key):
        """ Return the value of key in the dictionary """
        if key in self.cache_data:
            self.cache[key] += 1
            return self.cache_data[key]
        return None
