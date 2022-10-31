# Simple, remove the spaces from the string, then return the resultant string

def no_space(x):
    #your code here
    x = x.split(' ')
    return ''.join(x)

def no_space(x):
    return x.replace(' ' ,'')