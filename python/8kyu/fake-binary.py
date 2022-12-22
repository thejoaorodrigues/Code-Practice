'''
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
'''

def fake_bin(x):
    output = ''
    for value in x:
        if value < '5':
            output += '0'
        else:
            output += '1'
    return output

def fake_bin(x):
    return ''.join('0' if bit < '5' else '1' for bit in x)