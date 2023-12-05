lines = open('inputs.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 

numbers = {'one': 1, # Dictionary for the spelled numbers and its value
           'two': 2, 
           'three': 3,
           'four': 4, 
           'five': 5, 
           'six': 6, 
           'seven': 7, 
           'eight': 8, 
           'nine': 9
           }

output1 = 0 # Initialize output with 0

output2 = 0 # Initialize output with 0
digit1 = None # Initialize the digit1 and 
digit2 = None # digit1 to 0
 
for line in lines: # For each line
    digits = [char for char in line[::] if char.isdigit()] # Do a list comprehension of the characters that are digits
    output1 += int(digits[0] + digits[-1]) # Add to the output the first and last number combined
    # print(f'{line.replace('\n', ' ').replace('\r', '')}, {digits[0]} + {digits[-1]} = {digits[0] + digits[-1]}') # Print for each line the desired information for better debugging

print(output1) # Print (or return) the output

for line in lines: # For each line
    spacing = 1 # Define and reset the spacing
    digit1 = None # Reset the digit1
    digit2 = None # and digit 2 to 0
    while digit1 == None or digit2 == None: # While the two digits are Nome
        line1 = line[:spacing] # Create a "snapshot" on the beginning
        line2 = line[-spacing:] # and end of the line
        for key in numbers: # for each key in the dictionary above
            if digit1 == None: # If digit still None
                if key in line1: # If some key is in line 
                    digit1 = numbers[key] # assign the key value
                if str(numbers[key]) in line1: # or if there's some number
                    digit1 = numbers[key] # assign its value
            if digit2 == None: # repeat for digit 2
                if key in line2:
                    digit2 = numbers[key]
                if str(numbers[key]) in line2:
                    digit2 = numbers[key]
        spacing += 1 # If no digit is encountered, add to the spacing
        if digit1 and digit2: # When we have both digits
            output2 += int(str(digit1) + str(digit2)) # Add its value combined as string to the output

print(output2) # Print (or return) the second output