import os
from dotenv import load_dotenv


load_dotenv()

basedir = os.path.abspath(os.path.dirname(__file__))

# Import the database SECRET_KEY and DATABASE_URI if available from 
# the OS environment added by loading the .env file.
class Configuration(object):
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI') or \
        'sqlite:///' + os.path.join(basedir, 'fractals.db')
        
    SQLALCHEMY_TRACK_MODIFICATIONS = False



