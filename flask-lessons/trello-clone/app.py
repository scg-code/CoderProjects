from flask import request, abort
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user import User
from models.card import Card, CardSchema
from setup import *
from blueprints.cli_bp import db_commands
from blueprints.users_bp import users_bp

def admin_required():
    user_email = get_jwt_identity()
    stmt = db.select(User).where(email= user_email)
    user = db.session.scalar(stmt)
    if not (user and user.is_admin):
        abort(401)

@app.errorhandler(401)
def unauthorized(err):
    return {'error': 'You are not authorized to access this resource'}

app.register_blueprint(db_commands)

app.register_blueprint(users_bp)


@app.route('/cards')
@jwt_required()
def all_cards():
    admin_required()
    # selct * from cards;
    stmt = db.select(Card)    #.where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)
