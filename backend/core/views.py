

from core import api


@api.route('/')
def index():
    msg = 'React+Flask Starter Kit'
    return {'msg': msg}



# After request authenticate token
# authenticate token as a route for the frontend 
# store in db in needed.