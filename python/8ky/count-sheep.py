'''
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
'''

def count_sheep(n):
    # your code
    if n < 1:
        return ''
    else:
        output = ''
        for i in range(n):
            output += f'{i+1} sheep...'
        return output
            