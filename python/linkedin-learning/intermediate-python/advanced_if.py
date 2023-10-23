age = 10
height = 170

#and
if age >= 8 and height >= 135:
    print("you can ride the ride!")

# or
if age >= 17 or height >= 160:
    print("You can ride the super ride!")

# elif 
if height < 120:
    print("You can't ride any rides!")
elif height < 135:
    print("You can ride level 1 rides.")
elif height < 200:
    print("You can ride any ride!")
else:
    print("You are too tall to ride any ride!")



if age % 2 == 0 and age > 100 or age == 0:
    print("You have an interesting age!")

    