class BankAccount:
    def __init__(self, name, initial_balance):
        self.name = name
        self.balance = initial_balance


    def deposit(self, amount):    #signature
        self.balance += amount




# Main

acc1= BankAccount("John Smith", 1000)
acc2= BankAccount("Mary Jones", 500)






acc1.deposit(100)
acc2.deposit(200)
acc1.deposit(50)
print(acc1.balance)
print(acc2.balance)