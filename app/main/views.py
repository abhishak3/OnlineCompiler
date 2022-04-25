from . import main

@main.route('/')
def home():
    return "<h1> Working! </h1>"
