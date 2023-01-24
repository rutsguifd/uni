x=float(input())
eps=float(input())
suma=0
el = 0
k=1
while (x ** k) / (k)>eps:
    suma+=(x ** k) / (k)
    k+=1

print(suma)
print(k)