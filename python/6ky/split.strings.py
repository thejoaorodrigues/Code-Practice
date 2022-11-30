'''
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
'''


def solution(s):
    output = []
    if len(s)%2 != 0:
        s += '_'
    for i in range(0, len(s), 2):
        output.append(''.join([s[i], s[i+1]]))
    return output