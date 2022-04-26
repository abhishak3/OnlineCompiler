from flask import render_template, request

from . import main
from .forms import CodeForm

@main.route('/', methods=['GET','POST'])
def home():
    form = CodeForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            language = form.language.data
            script = form.script.data
    return render_template("index.html", form=form)
