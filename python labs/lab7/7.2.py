import random
m=int (input())
n=int (input())
a= [[random.randrange(-10, 10) for y in range(m)] for x in range(n)]
b= [[random.randrange(-10, 10) for y in range(m)] for x in range(n)]
for j in range(m):
    for s in range(n):
        if a[j][s]==0:
            a[j][s]=b[j][s]
print(a)
print(b)
