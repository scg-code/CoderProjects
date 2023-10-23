import pickle

age = [23, 55523, 32, 253, 22, 455]

file = open("text.txt", "wb")
pickle.dump(age, file)
file.close()

file = open("text.txt", "rb")
new_age = pickle.load(file)
file.close()

print(new_age)

