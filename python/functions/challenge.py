# Write a function to calculate the score for one "frame" of ten-pin bowling. An entire game consists of 10 frames, with up to 2 balls bowled per frame.

# Due to how the scoring works, you will need to know how many pins were knocked down by the last 3 balls bowled in order to calculate the total score for the frame.

# The scoring rules are:
# 1 point for each pin knocked down (so between 0 and 10)
# If it's a strike (all 10 pins knocked down with 1 ball), add the total of the next 2 balls
# If it's a spare (all 10 pins knocked down with 2 balls), add the next ball

# Example calls with output:

# calc_frame(6, 2, 9)     # 8
# calc_frame(10, 6, 2)    # 18
# calc_frame(7, 3, 4)     # 14
# calc_frame(0, 10, 5)    # 15
# calc_frame(5, 0, 10)    # 5





# def calc_frame(ball1, ball2, ball3):
#     # First, let's calculate the total score for this frame.
#     frame_score = ball1 + ball2 + ball3

#     # If it's a strike (all pins knocked down with the first ball),
#     if ball1 == 10:
#         # Add the total of the next two balls to the frame_score.
#         frame_score += ball2 + ball3
#     # If it's not a strike but a spare (all pins knocked down with the first two balls),
#     elif ball1 + ball2 == 10:
#         # Add the next ball's score to the frame_score.
#         frame_score += ball3

#     # Return the total score for this frame.
#     return frame_score

# # Example calls with output:
# print(calc_frame(6, 2, 9))   # Output: 8
# print(calc_frame(10, 6, 2))  # Output: 18
# print(calc_frame(7, 3, 4))   # Output: 14
# print(calc_frame(0, 10, 5))  # Output: 15
# print(calc_frame(5, 0, 10))  # Output: 5






def calc_frame(ball1, ball2, ball3):
    # if strike, return 10 + next 2 balls
    # else if spare, return 10 + next ball
    # else return sum of first two balls
    if ball1 == 10 or ball1 + ball2 == 10: #Strike or spare
        return ball1 + ball2 + ball3
    # elif ball1 + ball2 == 10: # Spare
    #     return 10 + ball3
    else:
        return ball1 + ball2




# Main 
print(calc_frame(6, 2, 9))   # Output: 8
print(calc_frame(10, 6, 2))  # Output: 18
print(calc_frame(7, 3, 4))   # Output: 14
print(calc_frame(0, 10, 5))  # Output: 15
print(calc_frame(5, 0, 10))  # Output: 5