import math
n=int(input())
a=float(input())
s=0
k=0
for i in range(n):
    k=k+1
    s=s+math.log(abs(a**k), math.e)
print("suma = ", s)
