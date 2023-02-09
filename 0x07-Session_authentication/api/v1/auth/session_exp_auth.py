#!/usr/bin/env python3
""" Module for the session auth exp """
from api.v1.auth.session_auth import SessionAuth
import os
import datetime


class SessionExpAuth(SessionAuth):
    """ Class to manage the api """
    def __init__(self) -> None:
        """ Constructor """
        try:
            self.session_duration = int(os.getenv('SESSION_DURATION', 0))
        except Exception:
            self.session_duration = 0

    def create_session(self, user_id=None):
        """ Create a session """
        session_id = super().create_session(user_id)
        if not session_id:
            return None
        session_directory = {
            "user_id": user_id,
            "created_at": datetime.now()
        }
        self.user_id_by_session_id[session_id] = session_directory
        return session_id

    def user_id_for_session_id(self, session_id=None):
        """ Returns a User ID based on a Session ID """
        if not session_id or session_id not in self.user_id_by_session_id:
            return None
        session_directory = self.user_id_by_session_id.get(
            session_id, None)

        if not session_directory:
            return None
        if 'created_at' not in session_directory:
            return None
        if self.session_duration <= 0:
            return session_directory.get('user_id')

        created = session_directory.get('created_at')
        time = datetime.timedelta(seconds=self.session_duration)
        expiration = created + time
        if expiration < datetime.now():
            return None
        return session_directory.get('user_id')
