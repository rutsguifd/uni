goods_amount = int(input('k-ty produktiv : '))
all_goods = {}
for i in range(goods_amount):
    name_g = str(input('nazva produktu : '))
    all_goods[name_g] = [int(input('k-ty : ')), input('odinicya vymiru : '), float(input('vvedit cinu za odinicu : '))]

#--------------------
amount_ubraty = int(input('vvedit skilyki produktiv potribno vybraty : '))
for i in range(amount_ubraty):
    print('vse tovary : ', list(all_goods))
    goods_change = input('vvedit produkt yakiy vy vybrali : ')
    amount_to_change = int(input('skolko vybrat : '))
    if all_goods[goods_change][0] - amount_to_change >= 0:
        all_goods[goods_change][0] -= amount_to_change
    else:
        print('netu stolyko predmetov!')
#-------------------
print(list(all_goods))
k_ty = int(input('za skolko produktiv nuzhno infu : '))
for i in range(k_ty):
    produkt = input('za kakoy tovar nuzhna infa : ')
    print(all_goods[produkt])

