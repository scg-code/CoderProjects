class Character:
    def __init__(self, name, race):
        self.name = name
        self.race = race
        self.inv = Inventory([], 0, 0, 0 )
    



class Chest:
    def __init__(self, items, gold, silver, copper):
        self.inv = Inventory(items, gold, silver, copper)

class Inventory:
    def __init__(self, items, gold, silver, copper):
        self.items = items # list
        self.set_currency(gold, silver, copper) # Delegation

    # from_inv and to_inv are instances of Inventory
    def transfer(self, to_inv):
         to_inv.items.extend(self.items)
         self.items = []
         # Add the currency from from_inv to to_inv
         to_inv.copper += self.copper
         # Set currency to from_inv to 0
         self.copper = 0
         
         


        # Setter
    def set_currency(self, gold, silver, copper):
            self.copper = gold * 10000 + silver * 100 + copper

        # Getter
    def get_currency(self): 
            gold = self.copper // 10000
            silver = (self.copper % 10000) // 100
            copper = self.copper % 100
            return gold, silver, copper
        # return gold, silver, copper



