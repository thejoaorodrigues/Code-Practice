'''
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
'''

def string_to_array(s):
    # your code here
    return s.split() if s else ['']

def string_to_array(string):
    return string.split(" ")