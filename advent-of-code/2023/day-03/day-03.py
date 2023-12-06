lines = open('inputs.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 

engine = [] # create engine blueprint, to store every char
partPositions = []
partNumbers = []

output = 0 # Initialize the output to 0
symbols = [] # Initialize a symbols list to retrieve the symbols

for line in lines: # for each line of the document
    buffer = [] # create a buffer for every character in the engine
    for char in line: # and for each character of every line
        buffer.append(char) # append every character to the buffer
        if not char.isnumeric() and not char.isdigit(): # If its not a character nor a number, its a symbol
            if char not in symbols: # If its not in the list already
                symbols.append(char) # Append the symbol
    try:
        buffer.remove('\n') # Remove the newline, except for the last line
    except:
        pass
    engine.append(buffer) # Append to the engine blueprint the buffer

# Remove the non-non symbols for this problem
symbols.remove('\n')
symbols.remove('.')

def getNumber(table, dx, dy):
    if table[dx][dy].isnumeric():
        # TRAIL BACKWARDS TILL THERE'S NO NUMBERS LEFT (OR BEGGINING OF ENGINE BLUEPRINT LINE) AND THEN TO THE END OF THE NUMBER
        partPosition = [] # to track the part position in the blueprint
        partValue = '' # to add the numerical values of the part
        while table[dx][dy].isnumeric() and dy >= 0:
            # print(f'table[dx][dy].isnumeric(): {table[dx][dy].isnumeric()}, dy >= 0: {dy >= 0} >> {table[dx][dy].isnumeric() and dy >= 0} >> {dx, dy} >> {table[dx][dy]}') # for debugging
            dy -= 1 # Retreat one horizontal space to the left

        # Breaks out of the loop
        dy += 1 # Resets the dy position
        partPosition.append((dx, dy)) # Add the correct position to the part position list as a tupple
        
        while table[dx][dy].isnumeric() and dy <= len(table[dx]): # While current part is a number, and its inside of the blueprint
            # print(f'table[dx][dy].isnumeric(): {table[dx][dy].isnumeric()}, dy < len(table[dx]): {dy < len(table[dx])},  len(table[dx]: {len(table[dx])} >> {table[dx][dy].isnumeric() and dy < len(table[dx])} >> {dx, dy} >> {table[dx][dy]}')
            partValue += table[dx][dy] # Add the number to the part value
            if dy != len(table[dx]) - 1: # If the dy position is not the last character of the line
                dy += 1 # Add one position to the right
            else: # Else
                break # break out of the while loop to not have index errors

        dy -= 1 # Breaking out of the loop, we reset the dy position to the correct on
        partPosition.append((dx, dy)) # And add the second position to the part position one

        if partPosition not in partPositions: # If the current part position is not already in the list (values can be duplicated, but positions dont)
            partPositions.append(partPosition) # Add the position to the list
            partNumbers.append(partValue) # Add the part number to the list

for i in range(len(engine)):
    for j in range(len(engine[i])):
        if engine[i][j] in symbols: # If a symbol is encountered
            # LOOK FOR VALUES AROUND IT
            getNumber(engine, i-1, j-1) # [i-1][j-1]          
            getNumber(engine, i-1, j) # [i-1][j]           
            getNumber(engine, i-1, j+1) # [i-1][j+1]        
            getNumber(engine, i, j-1) # [i][j-1]         
            getNumber(engine, i, j+1) # [i][j+1]          
            getNumber(engine, i+1, j-1) # [i+1][j-1]          
            getNumber(engine, i+1, j) # [i+1][j]
            getNumber(engine, i+1, j+1) # [i+1][j+1]


for part in partNumbers: # For every part in the partNumbers list
    output += int(part) # Add its value to the output  

print(output) # Print, or return, the output