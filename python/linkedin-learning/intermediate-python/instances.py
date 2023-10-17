import random

class Dog:
    info = "A furry animal"

    def __init__(self, name):
        print("I'm Alive!")
        self.lucky_number = random.randint(1, 10)
        self.name = name



# dog1 = Dog("Fido")
# dog2 = Dog("Max")

# print(dog1.name)
# print(dog2.name)


class SmartPhone:
    type = "Iphone"

    def __init__(self, color):
        print("Ring ring")
        self.color = color


Iphone = SmartPhone("Space Gray")

print(Iphone.color)