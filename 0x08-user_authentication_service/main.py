#!/usr/bin/env python3
""" Main """
from flask import json
import requests


def register_user(email: str, password: str) -> None:
    """ Test """
    data = {
        "email": email,
        "password": password
    }
    res = requests.post("{}/users".format(URL), data=data)
    assert res.status_code == 200


def log_in_wrong_password(email: str, password: str) -> None:
    """ Test """
    data = {
        "email": email,
        "password": password
    }
    res = requests.post("{}/sessions".format(URL), data=data)
    assert res.status_code == 401


def profile_unlogged() -> None:
    """ Test """
    res = requests.get("{}/profile".format(URL))
    assert res.status_code == 403


def log_in(email: str, password: str) -> str:
    """ Test """
    data = {
        "email": email,
        "password": password
    }
    res = requests.post("{}/sessions".format(URL), data=data)
    assert res.status_code == 200
    return res.cookies.get("session_id")


def profile_logged(session_id: str) -> None:
    """ Test """
    data = {
        "session_id": session_id
    }
    res = requests.get("{}/profile".format(URL), cookies=data)
    assert res.status_code == 200


def log_out(session_id: str) -> None:
    """ Test """
    data = {
        "session_id": session_id
    }
    res = requests.delete("{}/sessions".format(URL), cookies=data)
    assert res.status_code == 200


def reset_password_token(email: str) -> str:
    """ Test """
    data = {
        "email": email
    }
    res = requests.get("{}/reset_password".format(URL), data=data)
    assert res.status_code == 200
    payload = json.loads(res.content)
    return payload["reset_token"]


def update_password(email: str, reset_token: str, password: str) -> None:
    """ Test """
    data = {
        "email": email,
        "reset_token": reset_token,
        "new_password": password
    }
    res = requests.put("{}/reset_password".format(URL), data=data)
    assert res.status_code == 200


URL = "http://localhost:5000"
EMAIL = "guillaume@holberton.io"
PASSWD = "b4l0u"
NEW_PASSWD = "t4rt1fl3tt3"


if __name__ == "__main__":

    register_user(EMAIL, PASSWD)
    log_in_wrong_password(EMAIL, NEW_PASSWD)
    profile_unlogged()
    session_id = log_in(EMAIL, PASSWD)
    profile_logged(session_id)
    log_out(session_id)
    reset_token = reset_password_token(EMAIL)
    update_password(EMAIL, reset_token, NEW_PASSWD)
    log_in(EMAIL, NEW_PASSWD)
