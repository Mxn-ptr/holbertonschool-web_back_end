#!/usr/bin/env python3
""" Create a class LRUCache """
BaseCaching = __import__("base_caching").BaseCaching


class LRUCache(BaseCaching):
    """ Represents a LRU cache """
    def __init__(self):
        """ constructor """
        super().__init__()
        self.cache = []

    def put(self, key, item):
        """ Assign the item value for the key to the dictionary """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
                self.cache.remove(key)
            elif len(self.cache_data) >= self.MAX_ITEMS:
                index = self.cache[0]
                self.cache.pop(0)
                print("DISCARD: {}".format(index))
                self.cache_data.pop(index)
            self.cache_data[key] = item
            self.cache.append(key)

    def get(self, key):
        """ Return the value of key in the dictionary """
        if key in self.cache_data:
            self.cache.remove(key)
            self.cache.append(key)
            return self.cache_data[key]
        return None
