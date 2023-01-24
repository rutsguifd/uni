n=int(input())
m=list(str(n))
k=0
for i in range(len(m)):
    if m[i]=='0':
        k=k+1
print(k)
