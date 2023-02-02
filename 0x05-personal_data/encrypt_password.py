#!/usr/bin/env python3
""" Module for encrypting """
import bcrypt


def hash_password(password: str) -> bytes:
    """ Hash a password """
    password = password.encode('utf-8')
    return bcrypt.hashpw(password, bcrypt.gensalt())


def is_valid(hash_password: bytes, password: str) -> bool:
    """ Check if the hash password correspond to the password """
    password = password.encode('utf-8')
    if bcrypt.checkpw(password, hash_password):
        return True
    return False
