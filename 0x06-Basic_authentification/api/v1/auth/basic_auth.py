#!/usr/bin/env python3
""" Module for the basic Auth """
from api.v1.auth.auth import Auth
from models.user import User
import base64
from typing import Tuple, TypeVar


class BasicAuth(Auth):
    """ Class to manage the API """
    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """ Returns the Base64 part of the Authorization header """
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if authorization_header[0:6] != 'Basic ':
            return None
        return authorization_header[6:]

    def decode_base64_authorization_header(self,
                                           base64_authorization_header:
                                           str) -> str:
        """ Returns the decoded value of a Base64 string """
        if base64_authorization_header is None:
            return None
        if not isinstance(base64_authorization_header, str):
            return None
        try:
            return base64.b64decode(base64_authorization_header).decode(
                'UTF-8')
        except Exception:
            return None

    def extract_user_credentials(
            self, decoded_base64_authorization_header: str) -> Tuple[str]:
        """ Returns the user email and password """
        if decoded_base64_authorization_header is None:
            return (None, None)
        if not isinstance(decoded_base64_authorization_header, str):
            return (None, None)
        if ':' not in decoded_base64_authorization_header:
            return (None, None)
        user = decoded_base64_authorization_header.split(':')
        return (user[0], user[1])

    def user_object_from_credentials(
            self, user_email: str, user_pwd: str) -> TypeVar('User'):
        """ Return the User instance based on his email and password """
        if user_email is None or not isinstance(user_email, str):
            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None
        try:
            user = User.search({'email': user_email})
        except Exception:
            return None
        if len(user) == 0:
            return None
        if user[0].is_valid_password(user_pwd):
            return user[0]
        else:
            return None

    def current_user(self, request=None) -> TypeVar('User'):
        """ Retrieves the user instance for a request """
        if request is None:
            return None
        auth_header = super().authorization_header(request)
        base64 = self.extract_base64_authorization_header(auth_header)
        decode = self.decode_base64_authorization_header(base64)
        id = self.extract_user_credentials(decode)
        user = self.user_object_from_credentials(id[0], id[1])
        return user
