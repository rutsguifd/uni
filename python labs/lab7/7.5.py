x=int(input('vvedit k-ty stovbciv '))
y=int(input('vvedit k-tvo znach u ryadku '))
matrix = [[int(input('vvedit znachenie ')) for l in range(x)] for l1 in range(y)]
counter=0
new_st=list(zip(*matrix))
for i in range(x):
    if 0 in new_st[i]:
        continue
    else:
        counter+=1
print(matrix)
print(new_st)
print(counter)