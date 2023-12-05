lines = open('inputs.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 

outputListOK = [] # Initialize list of ok games
outputListNOK = [] # Initialize list of nok games
output1 = 0 # Initialize output with 0

outputDict = {}
output2 = 0 # Initialize output with 0

for line in lines: # For each line of the inputs file
    allGames = line.split(":") # Separate the Game Id from the game sets
    currentId = [int(word) for word in allGames[0].split() if word.isdigit()][0] # Extract the ID number of the game
    individualGames = allGames[1].split(";") # Get the individual game sets from each other
    for game in individualGames: # For each individual game
        cubesSets = game.split(',') # Get an individual set of colour cubes and values
        for cubes in cubesSets: # For each color-value
            currentValue = [int(word) for word in cubes.split() if word.isdigit()][0] # Get the current value
            currentColour = cubes.split()[1] # Get the current color

            if (currentColour == 'red' and currentValue > 12) or (currentColour == 'green' and currentValue > 13) or (currentColour == 'blue' and currentValue > 14): # If statement
                if currentId not in outputListNOK: # If its not in the nok list
                    outputListNOK.append(currentId) # Append it to the nok
            else:
                 if currentId not in outputListOK: # If is not in the ok list already
                    outputListOK.append(currentId) # Append it to the list

for element in outputListNOK: # Remove duplicates from OK and NOK list
    if element in outputListOK:
        outputListOK.remove(element)

for element in outputListOK: # Finally, 
    output1 += element # Add each of the elements in the ok list to the output

print(output1) # Print, or return, the output

for line in lines: # For each line of the inputs file
    allGames = line.split(":") # Separate the Game Id from the game sets
    currentId = [int(word) for word in allGames[0].split() if word.isdigit()][0] # Extract the ID number of the game

    outputDict[currentId] = {'red': 0, 'green': 0, 'blue': 0} # Create a inner dictionary to keep count of the colours

    individualGames = allGames[1].split(";") # Get the individual game sets from each other
    for game in individualGames: # For each individual game
        cubesSets = game.split(',') # Get an individual set of colour cubes and values
        for cubes in cubesSets: # For each color-value
            currentValue = [int(word) for word in cubes.split() if word.isdigit()][0] # Get the current value
            currentColour = cubes.split()[1] # Get the current color

            if currentColour == 'red' and currentValue > outputDict[currentId]['red']: # If its the current colour, and its value is bigger than the value already assign in the dictionary
                outputDict[currentId]['red'] = currentValue # Reasign the value in the dictionary
            elif currentColour == 'green' and currentValue > outputDict[currentId]['green']: # Repeat for the green 
                outputDict[currentId]['green'] = currentValue
            elif currentColour == 'blue' and currentValue > outputDict[currentId]['blue']: # and blue colours
                outputDict[currentId]['blue'] = currentValue

for id in outputDict: # for each Id in the dictionary
    value = 1 # Initialize the current value to 1, to keep neutral the multiplication
    for colour in outputDict[id]: # for each color value in the id of the dictionary
        value *=  outputDict[id][colour] # multiply by the current value the value of said colour
    else:
        output2 += value # At the end of each id, add the value to the output

print(output2) # Print, or return, the output