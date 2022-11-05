from tabpy.tabpy_tools.client import Client
import requests

API_ENDPOINT_ROOT = 'http://localhost:3000'


def doubledGet(**_arg):
    output = requests.post(
        '{}/doubledGet'.format(API_ENDPOINT_ROOT), json=_arg).json()

    return output

def graphGet(**_arg):
    output = requests.post(
        '{}/graphGet'.format(API_ENDPOINT_ROOT), json=_arg
    ).json()

    return output


client = Client('http://localhost:9004/')

client.deploy('doubledGet', doubledGet, 'doubled get', override=True)

client.deploy('graphGet', graphGet, 'graph get', override=True)
