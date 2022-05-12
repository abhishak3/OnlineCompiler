from flask import render_template, request, jsonify

from . import main
from .compilerapi import process

@main.route('/', methods=['GET'])
def home():
    return render_template("index.html")

@main.route('/api', methods=['GET','POST'])
def api():
    data = request.get_json(force=True)
    language = data.get('language', 'cpp')
    script = data.get('script', '')
    output = process(language, script)
    return jsonify(output)

