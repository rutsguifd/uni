import scipy.integrate
from math import sin
def integrate(a, b):
    f = lambda x: (4*x+sin(x**1.5))**0.5
    i = scipy.integrate.quad(f, a, b)
    return i[0]
a = int(input('vvedit a : '))
b = int(input('vvedit b : '))
s = integrate(a, 3) + integrate(a, b)
print(s)