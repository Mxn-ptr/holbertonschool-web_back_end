#!/usr/bin/env python3
""" Client module test"""
import unittest
from unittest.mock import patch
from parameterized import parameterized
from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    """ Test the class """
    @parameterized.expand([
        ("google"),
        ('abc')
    ])
    @patch('client.get_json', return_value={})
    def test_org(self, org, patched):
        """ Test """
        test = GithubOrgClient(org)
        self.assertEqual(test.org, patched.return_value)
        patched.assert_called_once()
