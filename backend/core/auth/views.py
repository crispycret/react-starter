# Library Imports
import time, json
from datetime import datetime, timedelta, timezone

from flask import Flask, request, jsonify
from flask_login import current_user
from flask_jwt_extended import create_access_token, get_jwt, \
    get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager 


# Program Imports
from .. import db 

# Application Imports
from . import auth
from .models import User




# After each request make sure the token is valid.
# If the token lifetime is near the end, reset the token
@auth.after_request
def refresh_expiring_jwts(response):
    """ Return a new access token if the current token is about to expire. """
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



def validate_user(email, password):
    """ Return True if the user is valid given the email and password. """
    user = User.query.filter_by(email=email).one()
    if user is None: 
        return {'msg': 'no account exists with this email.'}
    
    if not user.check_password(password):
        return {'msg': 'inccorect password.'}
    
    return True    


def create_token(email):
    """ Given an email address, create an access token for the user. """
    print ("[+] Create Token")        
    access_token = create_access_token(identity=email)
    response = {'access_token': access_token}
    return response




@auth.route('/login', methods=['POST'])
def login():
    """ Return a new access token for the user if the provided credentials are valid. """
    print ("[+] Login")    
    email = request.json.get('email', None)
    password = request.json.get('password',)

    # Validate email and password
    response = validate_user(email, password)
    if (response is not True): return response
    
    return create_token(email)




# Destory the jwt cookie
@auth.route('/logout', methods=['POST'])
def logout():
    """ Destroy the jwt cookie that holds the users access token. """
    print ("[+] Logout")    
    
    response = jsonify({'msg': 'logout success'})
    unset_jwt_cookies(response)
    return response



@auth.route('/register', methods=['POST'])
def register():
    """ Register a new valid user to the database. """
    print ("[+] Registering")    
    
    # If user is logged in, return and error message.
    if current_user.is_authenticated:
        return {'msg': 'already logged in', 'status': '01'}
    
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')
    
    # Validate user details.
    user = User.query.filter_by(username=username).first()
    if user is not None:
        return {'msg': 'username already in use', 'status': '02'}

    user = User.query.filter_by(email=email).first()
    if user is not None:
        return {'msg': 'email already in use', 'status': '03'}
        
    user = User(username=username, email=email)
    user.set_password(password)
    
    db.session.add(user)
    db.session.commit()
    
    return {'msg': 'registration success', 'status': '0'}
        
    
    
    

@auth.route('/users', methods=['GET'])
def get_users():
    """ Return a list of serialized users witholding security information. """
    users = User.query.all()
    
    data = {'data': [user.serialized for user in User.query.all()]}
    print ()
    print (data)
    print ()
    
    return jsonify(data)

















