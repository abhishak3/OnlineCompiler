def process(language, script):
    import requests
    import json
    import os

    with open(os.path.join(".","app","main","compilerapi_creds.json"), 'r') as f:
        read_data = f.read()
        payload = json.loads(read_data)

    payload['language'] = language
    payload['script'] = script

    headers = {"Content-Type":"application/json; charset=UTF-8"}
    submission_url = 'https://api.jdoodle.com/v1/execute'

    r = requests.post(submission_url,
                      data = json.dumps(payload),
                      headers = headers)

    return r.json()
