import pyfiglet
from termcolor import colored

def generate_colorful_ascii_art(text, font="standard", color="white"):
    try:
        # Create an ASCII art object with the specified font
        ascii_art = pyfiglet.Figlet(font=font)

        # Generate the ASCII art
        result = ascii_art.renderText(text)

        # Apply color to the ASCII art
        if color:
            colored_ascii = colored(result, color)
        else:
            colored_ascii = result  # Use default color if color is not specified

        return colored_ascii
    except pyfiglet.FigletError:
        return "Font not found."

if __name__ == "__main__":
    input_text = input("Enter the text: ")
    input_font = input("Enter the font (optional, press Enter for default): ")
    input_color = input("Enter the color (optional, press Enter for default): ")

    if input_font:
        ascii_result = generate_colorful_ascii_art(input_text, input_font, input_color)
    else:
        ascii_result = generate_colorful_ascii_art(input_text, color=input_color)

    print(ascii_result)
