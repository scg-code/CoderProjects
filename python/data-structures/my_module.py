import random

s = "Hello there!"
a = [10, 20, 30, 40, 50, 60, 70]
person = { "name": "Jim", "age": 40}

def test(person):
    print(f"{person.get("name")} is {person.get("age")} years old")


x = random.randint(50,100)