import time, json
from datetime import datetime, timedelta, timezone

from flask import Flask, request, jsonify
from flask_jwt_extended import create_access_token, get_jwt, \
    get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager 
    
    
    
api = Flask(__name__)

api.config['JWT_SECRET_KEY'] = 'secret_goes_here'
api.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

jwt = JWTManager(api)

# After each request make sure the token is valid.
# If the token lifetime is near the end, reset the token
def refresh_expiring_jwts(response):
    pass



    
    