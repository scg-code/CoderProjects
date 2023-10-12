import dog

# dog1 = dog.create("Ted", 15, "border collie")
# dog2 = dog.create("Loki", 4, "border collie")



# dog.walks(dog1)
# dog.walks(dog2)


dog1 = dog.Dog("Ted")
# dog1.name = "Ted" #creates a new attribute

dog2 = dog.Dog("Loki")

print(f'dog1: {dog1.__dict__}')
print(f'dog2: {dog2.__dict__}')
# dog1.greet("Goodbye")
#dog2.greet())

