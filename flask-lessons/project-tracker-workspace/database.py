from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import registry, relationship, Session

engine = create_engine("postgresql+psycopg2://postgres")