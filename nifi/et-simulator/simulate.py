from datetime import datetime
from time import sleep
import requests
import json
import argparse
import math
import random

SEND_ZERO_THRESH = 0.6
URL = 'http://localhost:1112'

parser = argparse.ArgumentParser(description='Sending x requests.')
parser.add_argument('count', type=int, help='how many requests to send')
args = parser.parse_args()

for _ in range(args.count):
    will_send_zero = random.random() < SEND_ZERO_THRESH
    requests.post(
        url=URL + "/data", 
        data=json.dumps({
            'timestamp': math.floor(datetime.now().timestamp() * 1000),
            'type': 'BASELINE',
            'subject': 'subject01',
            'study': 'simulator',
            'diameter': {
                'left': 0 if will_send_zero else random.uniform(3.1, 6.3),
                'right':  0 if will_send_zero else random.uniform(3.1, 6.3),
            }
        })
    )
    sleep(0.01)