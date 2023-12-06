lines = open('inputs-lite.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 

engine = [] # create engine blueprint, to store every char

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

def isnumber(table, dx, dy):
    if table[dx][dy].isnumeric():
        print(table[dx][dy])

for i in range(len(engine)):
    for j in range(len(engine[i])):
        if engine[i][j] in symbols: # If a symbol is encountered
            # LOOK FOR VALUES AROUND IT
            # [i-1][j-1]
            if isnumber(engine, i-1, j-1):
                
            # [i-1][j]
            isnumber(engine, i-1, j)
            # [i-1][j+1]
            isnumber(engine, i-1, j+1)
            # [i][j-1]
            isnumber(engine, i, j-1)
            # [i][j+1]
            isnumber(engine, i, j+1)
            # [i+1][j-1]
            isnumber(engine, i+1, j-1)
            # [i+1][j]
            isnumber(engine, i+1, j)
            # [i+1][j+1]
            isnumber(engine, i+1, j+1)