# # Read
file = open("cheese.txt", "r")
lines = file.readlines()
file.close()

# Edit
lines.insert(0, "I like cheese\n")

lines[1] = "Hello friend!\n"

lines[-1] = lines[-1] + "\n"
lines.append("Goodbye!")

# # Write
file = open("cheese.txt", "w")
file.writelines(lines)
file.close()

# challenge

# Read
file = open("numbers.txt", "r")
lines = file.readlines()
file.close()

#Edit
for x in range(len(lines)):
    lines [x]

    try:
            number = float(lines[x]) * 2
            lines[x] = f"{number}\n"
    except Exception as e:
            pass






# Write
file = open("numbers.txt", "w")
file.writelines(lines)
file.close()

