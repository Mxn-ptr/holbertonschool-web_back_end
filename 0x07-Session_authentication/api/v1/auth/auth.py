#!/usr/bin/env python3
""" Module of the Auth """
from flask import request
from typing import List, TypeVar
import os


class Auth:
    """ Class to manage the API """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ See if routes need authentification or not """
        if path is None or excluded_paths is None or excluded_paths == []:
            return True
        if path[-1] != '/':
            path += '/'
        for exclu in excluded_paths:
            if '*' in exclu:
                index = exclu.find('*')
                if exclu[:index] == path[:index]:
                    return False
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """ Return the value of the header request Authorization """
        if request is None:
            return None
        return request.headers.get('Authorization')

    def current_user(self, request=None) -> TypeVar('User'):
        """ Return None """
        return None

    def session_cookie(self, request=None):
        """ Returns a cookie value from a request """
        if request is None:
            return None

        cookie_name = os.getenv('SESSION_NAME')
        return request.cookies.get(cookie_name)
