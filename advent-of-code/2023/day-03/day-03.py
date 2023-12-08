lines = open('inputs.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 

engine = [] # create engine blueprint, to store every char
partPositions = [] # Initialize the part positions list
partNumbers = [] # Initialize the part numbers list
output = 0 # Initialize the output to 0
symbols = [] # Initialize a symbols list to retrieve the symbols

#### PART 2 ####
symbol = ['*'] # Initialize a list for a gear single gear symbol
output2 = 0 # Initialize the output to 0
partNumbers2 = []  # Initialize a second part numbers list

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

def getNumber(table, dx, dy, origin):
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
            partNumbers2.append([origin, partValue]) # Add the part number to the second part number list, with the origin point

        return True # Return true

for i in range(len(engine)):
    for j in range(len(engine[i])):
        coords = [[i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]] # Iteration from surrounding coords
        if engine[i][j] in symbols: # If a symbol is encountered
            # LOOK FOR VALUES AROUND IT
            for coord in coords:
                getNumber(engine, coord[0], coord[1], False) # [i-1][j-1]

for part in partNumbers: # For every part in the partNumbers list
    output += int(part) # Add its value to the output  

print(output) # Print, or return, the output

################### PART 2 ########################################

partPositions = [] # Reinitialize the array
partNumbers = [] # Reinitialize the array
buffer = [] # initialize a buffer

for i in range(len(engine)):
    for j in range(len(engine[i])):
        coords = [[i-1, j-1], [i-1, j], [i-1, j+1], [i, j-1], [i, j+1], [i+1, j-1], [i+1, j], [i+1, j+1]]
        if engine[i][j] in symbol: # If a * is encountered
            point = (i, j)
            # LOOK FOR VALUES AROUND IT
            for coord in coords:
                getNumber(engine, coord[0], coord[1], point) # [i-1][j-1]
            adjCounter = 0

# Three consecutive for loops
for part in partNumbers2: # For each part in the part numbers list
    if [part[0]] not in buffer: # If origin point of part not in the buffer
        buffer.append([part[0]]) # Append the origin point

for part in partNumbers2: # for each part
    for buf in buffer: # For each origin point
        if buf[0] == part[0]: # If part's original point is equal to the original point of the part
            buf.append(part[1]) # append the part number
 
for buf in buffer: # And finally
    if len(buf) == 3: # If the current buf has a length of 3 (2 part numbers, with a single origin point)
        output2 += (int(buf[-1]) * int(buf[-2])) # Add to the output the multiplication of the last two elements

print(output2) # Print, or return, the output