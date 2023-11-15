from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import date

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://trello_dev:password123@127.0.0.1:5432/trello'

db = SQLAlchemy(app)

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    data_created = db.Column(db.Date())

@app.cli.command('db_create')
def db_create():
    db.drop_all()
    db.create_all()
    print('Created tables')

@app.cli.command('db_seed')
def db_seed():
    card = Card(
        title = 'Start the project',
        description = 'Stage 1 - Create ERD',
        data_created = date.today()
    )

    db.session.add(card)
    db.session.commit()

    print('Database seeded')

@app.route('/')
def index():
    return 'Hello World'
