

from core import api


@api.route('/')
def index():
    msg = 'React+Flask Starter Kit'
    return {'msg': msg}

