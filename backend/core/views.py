

from core import api


@api.route('/')
def index():
    greeting = 'hello'
    return {'greeting': greeting}

