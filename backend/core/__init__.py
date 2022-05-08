from datetime import datetime, timedelta, timezone

from flask import Flask, request, jsonify
from config import Configuration
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager    

from sqlalchemy.orm import backref
from sqlalchemy import MetaData

from flask_jwt_extended import create_access_token, get_jwt, \
    get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
    
    
   
# Creat the flask app to serve as the API endpoint for the react web application. 
api = Flask(__name__)

# Add database settings to the flask app.
api.config.from_object(Configuration)

db = SQLAlchemy(api)

# Create a location for user authentication token and settings that apply to the token.
api.config['JWT_SECRET_KEY'] = 'secret_goes_here'
api.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

# Create an instance of the JWTManager to manager the token,
jwt = JWTManager(api)

naming_convention = {
    'ix': 'ix_$(column_0_label)s',
    'uq': 'uq_%(table_name)s_%(column_0_name)s',
    'ck': 'ck_%(table_name)s_%(column_0_name)s',
    'fk': 'fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s',
    'pk': 'pk_%(table_name)s'
}

db = SQLAlchemy(metadata=MetaData(naming_convention=naming_convention))

migrate = Migrate(api, db, render_as_batch=True)

login = LoginManager(api)
# login.login_view = 'http://localhost:3000/login'


# register api blueprints
from .auth import auth as auth_blueprint
api.register_blueprint(auth_blueprint)

# blueprint for auth route in the api



# blueprint for for non-authentication sections of the api



from core import views, models



    
    