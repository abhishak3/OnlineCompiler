#!/bin/bash
python3 -m pipenv install
export FLASK_APP=manage.py
export FLASK_DEBUG=1
python3 -m flask run
