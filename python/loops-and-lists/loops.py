# While loop

# spam = 0
# while spam < 5:
#     print("Hello")
#     spam += 1     # spam = spam + 1

# print("Done")


# For in loop

# for spam in range(1, 11, 3):
#     print(f"Hello {spam}")



import random

count = int(input("How many random integers? "))
for i in range(count):
    print(random.randint(1, 100))
    