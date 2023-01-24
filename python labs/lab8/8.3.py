import math
def rekursia(g_i):
    if g_i==0:
        return 9
    elif g_i==1:
        return 35
    else:
        return math.sin(rekursia(g_i-1)+math.cos(rekursia(g_i-2)))
i = int(input('vvedit i '))
print(rekursia(i))
