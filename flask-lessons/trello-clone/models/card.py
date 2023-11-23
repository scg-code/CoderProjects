from setup import db, ma

class Card(db.Model):   # define card class, extends db.Model
    __tablename__ = "cards"  # set table name

    id = db.Column(db.Integer, primary_key=True)     # setup columns in database
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    status = db.Column(db.String(30))
    date_created = db.Column(db.Date)


class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created')