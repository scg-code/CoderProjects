from flask import abort
from flask_jwt_extended import get_jwt_identity
from models.user import User
from setup import db

def admin_required():
    user_id = get_jwt_identity()
    stmt = db.select(User).filter_by(id=user_id)
    user = db.session.scalar(stmt)
    if not (user and user.is_admin):
        abort(401)