# Number Below 100

# Write a function that asks the user to input a number from 1 to 100 (inclusive). If the user supplies a 
# value outside that range, the function should print an error message and prompt the user to try again. 
# Once the user successfully enters an acceptable number, the function should return that value.

# Keep all of your input() statements inside the loop!

# Don't worry about dealing with user inputs that aren't integers just yet, we'll save that for another challenge.



# def input_within_range():
#     # Initialise our minimum and maximum values as constants.
#     # This helps to avoid "magic numbers" that make code confusing to read
#     MIN_VALUE = 1
#     MAX_VALUE = 100

#     # We set the user_input to an incorrect value to begin with to ensure the loop runs atleast once
#     user_input = -1

#     # The boolean expression in our loop statement needs to be True when the input is incorrect
#     while user_input >= MAX_VALUE:
#         # The user input arrives as a string, so we conver it to an integer.
#         user_input = int(input("Please enter a number between 1 and 100: "))

#         # These tests could be combined, but seperating them lets us give tailored error text.
#         if user_input < MIN_VALUE:
#             print("ERROR: That value is too low!!")
#         if user_input > MAX_VALUE:
#             print("ERROR: That value is too high!!")

#     # If the interpreter gets to this point, it means the loop must have finished.
#     # That means the input must be within correct range, so we can return result.
#     return user_input

def input_within_range():
    MIN_VALUE = 1
    MAX_VALUE = 100

    user_input = 0

    while user_input < MIN_VALUE or user_input > MAX_VALUE:
        user_input = int(input("Please enter a number between 1 and 100: "))
        if user_input < MIN_VALUE:
            print("ERROR: That value is too low!")
        if user_input > MAX_VALUE:
            print("ERROR: That value is too high!") 

    return user_input


