from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from os import environ
from marshmallow.exceptions import ValidationError

app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = environ.get('JWT_KEY')

app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DB_URI')   #database connection string

db = SQLAlchemy(app)  # alchemy instance
ma = Marshmallow(app) # marshmallow instance
bcrypt = Bcrypt(app) # bcrypt instance
jwt = JWTManager(app) # jwt instance

@app.errorhandler(401)
def unauthorized(err):
    return {'error': 'You are not authorized to access this resource'}

@app.errorhandler(ValidationError)
def validation_error(err):
    return {'error': err.messages}