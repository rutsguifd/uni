import numpy as np
import sys
high= int(input('vvedit vysotu matryci '))
width= int(input('vvedit shyrynu matryci '))
vector_n_d=int(input('k-ty u vektori '))
matrix=[[int(input('element matryci ')) for i in range(high)] for j in range(width)]
#matrix=[ [2, 1], [2, 2], [4, 3] ]
vector= []
for i in range(vector_n_d):
    n_r=int(input('vvedit n vektor '))
    kator=[n_r]
    vector.append((kator))
a = np.array(matrix)
b = np.array(vector)
total = a.dot(b)
print(total)
print(matrix)
print(vector)
