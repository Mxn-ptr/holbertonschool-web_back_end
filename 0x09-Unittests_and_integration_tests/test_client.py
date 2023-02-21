#!/usr/bin/env python3
""" Client module test"""
import unittest
from unittest.mock import patch, PropertyMock
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

    def test_public_repos_url(self):
        """ Test """
        expected = "https://api.github.com/orgs/google/repos"
        payload = {"repos_url": expected}
        patched = "client.GithubOrgClient.org"
        with patch(patched, PropertyMock(return_value=payload)):
            new = GithubOrgClient("google")
            self.assertEqual(new._public_repos_url, expected)
