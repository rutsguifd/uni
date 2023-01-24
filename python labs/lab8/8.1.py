from math import sin
def function(x, y):
    if x>0 and y>0:
        solu = x**3+(x**2+y**4)**0.5
    elif x>0 and y<0:
        solu = (x**2-2*x+x**0.5)/x**0.6
    else:
        solu = sin(x*y)
    return solu
a=float(input('vvedit a '))
b=float(input('vvedit b '))
f1=function(a, b)
f2=function(2, a)
print(f1+f2+2)