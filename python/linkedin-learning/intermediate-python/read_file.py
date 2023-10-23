file = open("cheese.txt", "r")

# file_text = file.read()
# print(file_text)

# lines = file.readlines()
# print(lines)

for line in file:
    print(line)

file.close()


file = open("numbers.txt", "r")

total = 1
for line in file:
    try:
        number = float(line)
        total *= number
    except Exception as e:
        pass
       
print(total)

file.close()