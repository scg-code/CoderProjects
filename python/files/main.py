# shopping_list = []
# with open("shopping.txt") as f:
#     data = f.read()
#     shopping_list = data.split("\n")
#     # for line in f:
#     #     shopping_list.append(line.strip())
        
        
# print(shopping_list)

# shows = [
#     "The Mandalorian",
#     "The Witcher",
#     "The X-Files"
# ]

# with open("tv-shows.txt", "w") as f:
#     # f.write("\n".join(shows))
#     for s in shows:
#         f.write(f"{s}\n")



item = input("What do you need to buy? ")
with open("shopping.txt", "a") as f:
    f.write(f"\n{item}")