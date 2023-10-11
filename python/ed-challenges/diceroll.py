import random

def roll_die(sides):
    # Pick a random integer between 1 and 6
    # Return the value
    return random.randint(1, sides)

def roll(roll_string):
    rolls = []
    # Split roll string into num_dice and sides
    parts = roll_string.split('d')
    num_dice = int(parts[0])
    sides = int(parts[1])
    # Roll num_dice dice and put each result in a list
    for die in range(num_dice):
    # Roll a single die
        result = roll_die(sides)
    # Add the result to the list
        rolls.append(result)
    # Return the list of rolls
    return rolls

# Main Function
print(roll('3d20'))