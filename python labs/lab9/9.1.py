goods_amount = int(input('k-ty tovariv : '))
all_goods = {}
for i in range(goods_amount):
    name_g = str(input('nazva tovaru : '))
    all_goods[name_g] = [int(input('k-ty : ')), input('odinicya vymiru : ')]

#--------------------
amount_change = int(input('vvedit skilyki tovariv potribno perereyestruvaty : '))
for i in range(amount_change):
    print('vse tovary : ', list(all_goods))
    goods_change = input('vvedit tovar yakiy nuzhno izmenit : ')
    what_to_do = input("'add' ili 'sub' : ")
    amount_to_change = int(input('na skolko smenit : '))
    if what_to_do == 'add':
        all_goods[goods_change][0] += amount_to_change
    elif what_to_do == 'sub':
        if all_goods[goods_change][0] - amount_to_change >= 0:
            all_goods[goods_change][0] -= amount_to_change
        else:
            print('netu stolyko predmetov!')
    else:
        print('nepravylno vvel, durak!')
#-------------------
print(str(all_goods))

