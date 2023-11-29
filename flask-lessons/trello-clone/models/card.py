from setup import db, ma
from datetime import datetime
from marshmallow import fields

class Card(db.Model):
    __tablename__ = "cards"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.String(30), default='To Do')
    date_created = db.Column(db.Date, default=datetime.now().strftime('%Y-%m-%d'))

    # Foreign key - establishes a relationship at the database level
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # SQLAlchemy relationship - nests an instance of a User model in this one
    user = db.relationship('User', back_populates='cards')


class CardSchema(ma.Schema):
    # Tell Marshmallow to nest a UserSchema instance when serializing
    user = fields.Nested('UserSchema', exclude=['password'])

    class Meta:
        fields = ("id", "title", "description", "status", "date_created", "user")
