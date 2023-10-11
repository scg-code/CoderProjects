spam = ["cat", "dog", "bird"]
eggs = [12, 78, 100, 54, 69]
foo = ["Sam", 20, 185.0]
tic_tac_toe = [
    ["", "", ""],
    [ "X", "O", ""],
    [ "X", "O", ""]
]

# index = 1 
# for index, animal in enumerate(spam):
#     print(f"{index + 1}. {animal}")



# x = "dog" in spam
# print(x)


def display_person(person):
    # name = person[0]
    # age = person[1]
    # height = person[2]
    name, age, height = person   #Unpacking
    print(f"{name} is {age} years old and {height} cm tall")

# display_person(foo)

spam.insert(2,"kangaroo")
spam.sort()
print(spam)