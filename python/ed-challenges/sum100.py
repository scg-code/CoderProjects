# Sum to 100

# Use a while loop to write a function that calculates and returns 
# the sum of all integers up to and including 100.

# def sum_to_one_hundred():

#  # We initialise both the sum and the count to zero.

#  result = 0

#  count = 0

#  # We need our loop to run until every number up to and including 100 has been added.

#  # So we set the loop to run until the count is becomes 101 or greater.

#  while count < 101:

#  # In each loop, we add the current count to the total sum.

#  result += count

#  # Then we increase the count by one. 

#  count += 1

#  # This means that we will loop through each number from 0 to 100 (inclusive),

#  # adding each to the total, and then end the loop!

#  # Finally, we return our result, which is 5050.

#  return result

def sum_to_one_hundred():

    result = 0
    count = 0

    while count < 101:
        result += count
        count += 1
    
    return result