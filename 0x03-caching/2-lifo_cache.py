#!/usr/bin/env python3
""" Create a class LIFOCache that inherits from BaseCaching and is a caching system """
BaseCaching = __import__("base_caching").BaseCaching


class LIFOCache(BaseCaching):
    """ Represents a LIFO cache """
    def __init__(self):
        """ constructor """
        super().__init__()
        self.cache = []

    def put(self, key, item):
        """ Assign the item value for the key to the dictionary """
        if key is not None or item is not None:
            if key in self.cache_data:
                self.cache_data[key] = item
            elif len(self.cache_data) >= self.MAX_ITEMS:
                index = self.cache[-1]
                self.cache.pop()
                print("DISCARD: {}".format(index))
                self.cache_data.pop(index)
            self.cache_data[key] = item
            self.cache.append(key)

    def get(self, key):
        """ Return the value of key in the dictionary """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
