my_dog = { 
    "name": "John", 
    "age": 22, 
    "breed": "Human" 
}

my_dog["age"] = 25

my_dog["owner"] = "Sam"

# for k, v in my_dog.items():
#     print(f'The value of "{k}" is {v}')

print(my_dog.get("state", "Unknown"))