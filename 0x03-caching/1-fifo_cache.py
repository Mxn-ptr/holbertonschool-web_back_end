#!/usr/bin/env python3
""" Create a class FIFOCache """
BaseCaching = __import__("base_caching").BaseCaching


class FIFOCache(BaseCaching):
    """ Represents a FIFOCache """
    def put(self, key, item):
        """ Assign the item value for the key to the dictionary """
        if key and item:
            if key in self.cache_data:
                self.cache_data[key] = item
            elif len(self.cache_data) >= self.MAX_ITEMS:
                index = list(self.cache_data.keys())[0]
                print("DISCARD: {}".format(index))
                self.cache_data.pop(index)
            self.cache_data[key] = item

    def get(self, key):
        """ Return the value of key in the dictionary """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
