from flask import abort
from flask_jwt_extended import get_jwt_identity
from models.user import User
from setup import db

def admin_required():
    user_email = get_jwt_identity()
    stmt = db.select(User).where(email= user_email)
    user = db.session.scalar(stmt)
    if not (user and user.is_admin):
        abort(401)