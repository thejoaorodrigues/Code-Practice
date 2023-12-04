lines = open('inputs.txt', 'r').readlines() # Open file inputs.txt and separate content by lines 

output = 0 # Initialize output with 0
 
for line in lines: # For each line
    digits = [char for char in line[::] if char.isdigit()] # Do a list comprehension of the characters that are digits
    output += int(digits[0] + digits[-1]) # Add to the output the first and last number combined
    print(f'{line.replace('\n', ' ').replace('\r', '')}, {digits[0]} + {digits[-1]} = {digits[0] + digits[-1]}') # Print for each line the desired information for better debugging

print(output) # Print (or return) the output
