from flask import render_template, request

from . import main
from .forms import CodeForm
from .compilerapi import process

@main.route('/', methods=['GET','POST'])
def home():
    form = CodeForm()
    output = None
    if request.method == 'POST':
        if form.validate_on_submit():
            language = form.language.data
            script = form.script.data
            output = process(language, script)
            print(f"{language=}")
            print(f"{script=}")
            print(f"{output=}")
            #print(f"{request.form['codescript']=}")
            output = output['output'] if 'output' in output else output['error']
    return render_template("index.html", form=form, output=output)
