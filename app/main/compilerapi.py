import requests
import json

with open('./compilerapi_creds.json', 'r') as f:
    read_data = f.read()
    payload = json.loads(read_data)

#language = input("Enter language: ")
payload['language'] = "python3"


#filename = input("Enter filename: ")
filename = "arr_test.py"

with open(filename, 'r') as f:
    read_data = f.read()
    payload['script'] = read_data

headers = {"Content-Type":"application/json; charset=UTF-8"}
#headers = {"Content-Type":"application/json;"}
submission_url = 'https://api.jdoodle.com/v1/execute'

r = requests.post(submission_url,
                  data = json.dumps(payload),
                  headers = headers)

print(r.json())
