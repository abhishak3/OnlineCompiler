#!/bin/bash
pipenv install
export FLASK_APP=manage.py
export FLASK_DEBUG=1
flask run
