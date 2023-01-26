#!/usr/bin/env python3
""" Create a class BasicCache that inherits from BaseCaching """
BaseCaching = __import__("base_caching").BaseCaching


class BasicCache(BaseCaching):
    """ Represents a BasicCach """
    def put(self, key, item):
        """ Assign the item value for the key to the dictionary """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Return the value of key in the dictionary """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
