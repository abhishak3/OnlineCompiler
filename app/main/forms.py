from flask_wtf import FlaskForm
from wtforms import SubmitField, SelectField
from wtforms.validators import DataRequired

class CodeForm(FlaskForm):
    """Form which handles code to compile/interpret. """
    language = SelectField('Language:',
                           choices=[('cpp', 'C++'),
                                    ('python3', 'Python3'),
                                    ('php', 'PHP')],
                           validators=[DataRequired()])
    submit = SubmitField()

