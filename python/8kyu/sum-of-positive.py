'''
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
'''

def positive_sum(arr):
    sum = 0
    for value in arr:
        if value > 0:
            sum += value
    return sum if sum > 0 else 0

def positive_sum(arr):
    return sum(value for value in arr if value > 0)