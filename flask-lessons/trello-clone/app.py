from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date
from flask_marshmallow import Marshmallow



app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:password123@127.0.0.1:5432/trello'   #database connection string

db = SQLAlchemy(app)  # alchemy instance
ma = Marshmallow(app) # marshmallow instance

class Card(db.Model):   # define card class, extends db.Model
    __tablename__ = "cards"  # set table name

    id = db.Column(db.Integer, primary_key=True)     # setup columns in database
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    status = db.Column(db.String(30))
    date_created = db.Column(db.Date())


class CardSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description', 'status', 'date_created')


@app.cli.command('db_create')
def db_create():
    db.drop_all()
    db.create_all()
    print('Created tables')

@app.cli.command('db_seed')
def db_seed():
    cards = [
        Card(
            title = 'Start the project',
            description = 'Stage 1 - Create ERD',
            status = 'Done',
            date_created = date.today(),
        ),
        Card(
            title = 'ORM Queries',
            description = 'Stage 2 - Implement CRUD queries',
            status = 'In Progress',
            date_created = date.today(),
        ),
        Card(
            title = 'Marshmallow',
            description = 'Stage 3 - Implement JSONify of models',
            status = 'In Progress',
            date_created = date.today(),
        ), 
    ]

    db.session.add_all(cards)
    db.session.commit()

    print('Database seeded')


@app.route('/cards')
def all_cards():
    # selct * from cards;
    stmt = db.select(Card).where(db.or_(Card.status != 'Done', Card.id > 2)).order_by(Card.title.desc())
    cards = db.session.scalars(stmt).all()
    return CardSchema(many=True).dump(cards)
    # print(list(cards))
    # # print(cards.all())
    # for card in cards:
    #     print(card.__dict__)


@app.route('/')
def index():
    return 'Hello World'
