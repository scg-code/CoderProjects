from my_module import test as bar, person, x
import my_module
from colort import colorize, ForegroundColor as fc, Style, BackgroundColor as bc

# print(dir(my_module))

def test(x):
    print(x)

test(person)
bar({ "name": "John", "age": 18})

print(x)


colored_text = colorize('Hello World!', fc.LIGHT_BLUE, Style.BOLD, bc.LIGHT_YELLOW)
print("colored text: ", colored_text)

