import random
a=int (input())
b=int (input())
al=[]
k= [[random.randrange(-10,10) for y in range(a)] for x in range(b)]
for j in range(a):
    for s in range(b):
        if j%2==0 and s%2==1 and k[j][s]>0:
            al.append(k[j][s])
print(k)
print(al)
print(sum(al))