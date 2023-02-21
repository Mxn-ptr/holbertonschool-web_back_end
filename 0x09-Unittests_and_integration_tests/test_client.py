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

    @patch('client.get_json', return_value={})
    def test_public_repos(self, mocked):
        """ Test """
        with patch("client.GithubOrgClient._public_repos_url",
                   new_callable=PropertyMock,
                   return_value=[]
                   ) as patched:
            new = GithubOrgClient("google")
            result = new.public_repos(license="f")
            self.assertEqual(result, patched.return_value)
            mocked.assert_called_once()
            patched.assert_called_once()

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False)
    ])
    def test_has_license(self, repo, license_key, expected):
        """ Test """
        test = GithubOrgClient('test')
        self.assertEqual(test.has_license(repo, license_key), expected)
