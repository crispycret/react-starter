import time, json
from datetime import datetime, timedelta, timezone

from flask import Flask, request, jsonify
from flask_jwt_extended import create_access_token, get_jwt, \
    get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager 
    
  

from core import api, jwt



# After each request make sure the token is valid.
# If the token lifetime is near the end, reset the token
@api.after_request
def refresh_expiring_jwts(response):
    try:
        # get and define timestamps to test if token is expiring soon.
        exp_timestamp = get_jwt()['exp']
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        
        # If token is expiring, create a new token
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            # Insert the token into the response object
            if (type(data) is dict):
                data['access_token'] = access_token
                response.data = json.dumps(data)
                
        # Return the response with a token that is not expiring soon.
        return response
    except (RuntimeError, KeyError):
        # Case where the token is invalid, return the original response.
        return response        






@api.route('/token', methods=['POST'])
def create_token():
    pass




# Destory the jwt cookie
@api.route('/logout', methods=['POST'])
def logout():
    response = jsonify({'msg': 'logout success'})
    unset_jwt_cookies(response)
    return response
























