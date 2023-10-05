# x = int(input("What is X? "))
# y = int(input("What is Y? "))

# if x < y:
#     print("x is less than y")
# elif x > y:    #else if
#     print("x is greater than y")
# else:
#     print("x is equal to y")       


# score = int(input("Score: "))

# if score >= 90:
#     print("HD")
# elif score >= 80:
#     print("D")
# elif score >= 70:
#     print("CR")
# elif score >= 50:
#     print("Pass")
# else:
#     print("FAIL")                


# Match statements

name = input("What is your name?")

match name:
    case "Harry" | "Ron" | "Hermione":
        print("Griffindor")
    case "Draco":
        print("slitherin")
    case _:
        print("Mudblood")             