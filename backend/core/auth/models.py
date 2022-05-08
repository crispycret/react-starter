from .. import db

from werkzeug.security import generate_password_hash, check_password_hash

from .. import login
from flask_login import UserMixin
# from ..models import Fractal



# Classical user system.
class User(UserMixin, db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(65), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    
    # fractal = db.relationship('Fractal',backref='creator', lazy='dynamic')
    
    def __repr__(self):
        return '<User: {}>'.format(self.username)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
   
    def check_password(self, password):
       return check_password_hash(self.password_hash, password) 
   
    # Serialization property for json
    @property
    def serialized(self):
        """Return object data in serializeable format"""
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
        } 
    
    
@login.user_loader
def load_user(id):
    return User.query.get(id)
    

    
# # Discord influenced user system, work in progress...
# class DynamicUser(db.Model, UserMixin):
#     """
#     This User class combines the id and username columns 
#     to create a composite primary key for the table.
#     This allows users to share the same username but provides
#     an id that makes the combined primary key unique. 
#     """    

#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(64), primary_key=True)
#     email = db.Column(db.String(120), index=True, unique=True)
#     password_hash = db.Column(db.String(128))

#     # todo = db.relationship('Todo', backref='author', lazy='dynamic')

#     def __repr__(self):
#         return '<User: {}#>'.format(self.username, self.id)

#     def set_password(self, password):
#         """ Use the werkzeug.security library to get the password hash. """
#         self.password_hash = generate_password_hash(password)
        
#     def check_password(self, password):
#         """ Use the werkzeug.security library to validate the password. """
#         return check_password_hash(self.password_hash, password)














