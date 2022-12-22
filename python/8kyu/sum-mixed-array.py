'''
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
'''

def sum_mix(arr):
    #your code here
    return sum ([int(value) for value in arr])

def sum_mix(arr):
    return sum(map(int, arr))