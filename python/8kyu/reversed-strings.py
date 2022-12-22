'''
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
'''

def solution(string):
    # Slice the string from 0 to the lenght, with -1 as the step incremental
    return string[::-1]