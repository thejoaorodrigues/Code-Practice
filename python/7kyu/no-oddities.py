'''
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
'''

def no_odds(values):
    # Return list of only even values
    return [val for val in values if val%2 == 0]