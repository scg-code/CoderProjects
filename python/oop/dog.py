# my_dog = { 
#     "name": "John", 
#     "age": 22, 
#     "breed": "Human" 
# }

class Dog:
    def __init__(self, name):
        self.name = name
        self.state = "happy"




    def greet(self, prefix):
        # print(f'spam: {spam})
        print(f"{prefix}, {self.name}")



