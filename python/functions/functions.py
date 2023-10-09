# def hello(name, age=21):
#     print (f"Hello, {name}, you are {age} years old!")

# def goodbye():
#     print("Goodbye")

# # Main
# x = "john"
# goodbye()
# hello(name=input("What is your name? "))


TAX_RATE= 0.1
FLAT_SHIPPING= 10

def add_tax(amount):
    return amount * (1 + TAX_RATE)

def add_shipping(amount):
    return amount + FLAT_SHIPPING

def calc_grand_total(amount):
    return add_tax(add_shipping(amount))

# Main
subtotal = float(input("Subtotal: $"))
grand_total = calc_grand_total(subtotal)
print(f"Total:  ${grand_total:.2f}")
