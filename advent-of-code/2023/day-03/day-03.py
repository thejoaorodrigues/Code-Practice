import numpy as np

lines = open('inputs.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 
engine_schematic = [list(line.strip()) for line in lines]

output = 0 # Initialize the output to 0
symbols = [] # Initialize a symbols list to retrieve the symbols

for line in lines: # for each line of the document
    for char in line: # and for each character of every line
        if not char.isnumeric() and not char.isdigit(): # If its not a character nor a number, its a symbol
            if char not in symbols: # If its not in the list already
                symbols.append(char) # Append the symbol

# Remove the non-non symbols for this problem
symbols.remove('\n')
symbols.remove('.')



# create an map of all valid engine part spots on the schematic
width = len(engine_schematic)
height = len(engine_schematic[0])
include = np.zeros((width, height), dtype=bool)

print(include)