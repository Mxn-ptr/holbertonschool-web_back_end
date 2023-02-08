#!/usr/bin/env python3
""" Module of session views """
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
import os


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    """ Login the user from the form """
    email = request.form.get("email")
    if not email or len(email) == 0:
        return jsonify({"error": "email missing"}), 400

    password = request.form.get("password")
    if not password or len(password) == 0:
        return jsonify({"error": "password missing"}), 400

    try:
        users = User.search({"email": email})
    except Exception:
        return jsonify({"error": "no user found for this email"}), 404

    if len(users) == 0:
        return jsonify({"error": "no user found for this email"}), 404

    for user in users:
        if not user.is_valid_password(password):
            return jsonify({"error": "wrong password"}), 401

    from api.v1.app import auth

    session_id = auth.create_session(users[0].id)
    SESSION_NAME = os.getenv("SESSION_NAME")
    response = jsonify(users[0].to_json())
    response.set_cookie(SESSION_NAME, session_id)
    return response


@app_views.route('auth_session/logout', methods=['DELETE'],
                 strict_slashes=False)
def logout():
    """ Logout """
    from api.v1.app import auth

    destroy = auth.destroy_session(request)

    if destroy is False:
        abort(404)

    return jsonify({}), 200
