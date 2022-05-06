from core import api

from config import Configuration

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from sqlalchemy.orm import backref
from sqlalchemy import MetaData

db = SQLAlchemy(api)

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
login.login_view = 'auth.login'




