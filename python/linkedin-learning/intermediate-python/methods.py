import random

class Dog:
    info = "A furry animal"

    def __init__(self, name):
        print("I'm Alive!")
        self.lucky_number = random.randint(1, 10)
        self.name = name

    def bark(self):
        print(f"woooof! My name is {self.name} and my number is {self.lucky_number}")

dog1 = Dog("Fido")
dog2 = Dog("Max")


dog1.bark()
dog2.bark()

class SmartPhone:
    type = "Iphone"

    def __init__(self, color, name):
        self.name = "Iphone"
        print("Ring ring")
        self.color = "Space Gray"
    
    def ring(self):
        print(f"Omg your {self.color} iphone is ringing!")


# Iphone = SmartPhone("Space Gray")

SmartPhone.ring.self()