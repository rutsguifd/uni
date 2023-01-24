import random
m=int (input())
al=[]
a= [[random.randrange(-10, 10) for y in range(m)] for x in range(m)]
for j in range(m):
    if j%2==1:
        al.extend(a[j])
al.sort()
print(a)
print(al)