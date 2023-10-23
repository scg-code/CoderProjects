

direction = input("Which direction? ").lower()

match direction:
    case "north":
        print("Up")
    case "south":
        print("Down")
    case "east":
        print("Right")
    case "west":
        print("Left")
    case _:
        print("Invalid direction")

floor_number = 4

match floor_number:
    case 4:
        print("unlucky in japan")
    case 13:
        print("unlucky in america")
    case _:
        print("no issues with this floor number")