# Sum to X

# Great work on that last challenge. Can you modify your code
# to make it more powerful please? Specifically, can you make it so that the function calculates 
# the sum of all integers up to (and including) a target value, which is specified as an argument?

# For example:

#     sum_to_x(3) outputs 6 (the sum of 1, 2 and 3)

#     sum_to_x(4) outputs 10 (the sum of 1, 2, 3, and 4)

#     sum_to_x(100) outputs 5050 (the sum of every integer up to and including 100)



# Our function needs to take the target integer as an argument
def sum_to_x(target_integer):
    # Just as before, we initialise our count and result to 0
    count = 0
    result = 0

    # We want the loop to run until we've worked through to the target
    # This could alternatively use `count < (target_integer + 1)`
    while count <= target_integer:
        # Just as before, in each iteration we add the count to our sum, 
        # and then increment it
        result += count
        count += 1

    return result

def sum_to_x(target_integer):
    count = 0
    result = 0

    while count <= target_integer:
        result += count
        count += 1
    return result