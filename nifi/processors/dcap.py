#!/usr/bin/python3

import sys
import pandas as pd
from dcapclient.filter import clean

settings={
    "authorisation": {
        'username': 'admin@dcap.local',
        'password': 'admin'
    },
    "url": 'http://dcap:8989'
}

filters=[
    {
        'name': "SubstitutePupilFilter",
        'actualParameters': {
            'left_pupil': 'diameter_left',
            'right_pupil': 'diameter_right',
            'timestampcolumn': 'timestamp',
        },
        'columns': {
            'left_pupil': 'diameter_left',
            'right_pupil': 'diameter_right',
        }

    },
    {
        'name': "ButterworthFilter",
        'actualParameters': {
            'hertz': 4,
            'sampleRate': 300,
            'timestampcolumn': 'timestamp',
        },
        'columns': {
            'left_pupil': 'diameter_left',
            'right_pupil': 'diameter_right',
        },
        'decimalSeparator': '.'
    },
    {
        'name': "LinearInterpolationFilter",
        'actualParameters': {
            'left_pupil': 'diameter_left',
            'right_pupil': 'diameter_right',
            'timestampcolumn': 'timestamp',
        },
        'columns': {
            'left_pupil': 'diameter_left',
            'right_pupil': 'diameter_right',
        }
    }
]

df = pd.read_csv(sys.stdin)
baseline = df[df['type'] == 'BASELINE']
experiment = df[df['type'] == 'EXPERIMENT']

baseline = clean(baseline, settings, filters)
experiment = clean(experiment, settings, filters)

print(pd.concat([baseline,  experiment]).to_csv(index=False))

