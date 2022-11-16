'''
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
'''

def accum(s):
    # your code
    temp = []
    for i in range(len(s)):
        if i == 0:
            temp.append(s[i].upper())
        else:
            word = ''.join([s[i].upper(),s[i].lower()*i])
            temp.append(word)
    return '-'.join(temp)

def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))