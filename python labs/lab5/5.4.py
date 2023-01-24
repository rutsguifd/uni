n=int(input())
a=1
b=1
for i in range(n-1):
    c=a+2*b
    b=a
    a=c
print(c)
