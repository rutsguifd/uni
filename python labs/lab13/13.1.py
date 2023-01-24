class TRectangle():
    def __init__(self, a = 0, b = 0):
        self.a = a
        self.b = b
        self.a_print()
        self.b_print()
    def a_print(self):
        self.a = float(input('vvedit a '))
        print('a = ', self.a)
    def b_print(self):
        self.b = float(input('vvedit b '))
        print('b = ', self.b)
    def area(self):
        return  self.a*self.b
    def perimetr(self):
        return 2*self.a+2*self.b
    def __add__(self, other_side):
        return TRectangle(self.a+other_side.a, self.b+other_side.b)
    def __sub__(self, other_side):
        return TRectangle(self.a-other_side.a, self.b-other_side.b)
    def __mul__(self, other_side):
        return TRectangle(self.a*other_side.a, self.b*other_side.b)

class TParallelepiped(TRectangle):
    def __init__(self, a = 0, b = 0, c =0):
        super().__init__(a, b)
        self.c = c
        self.c_print()

    def c_print(self):
        self.c = float(input('vvedit c '))
        print('c = ', self.a)

    def v(self):
        return super().area()*self.c

    def perimetr(self):
        return 2*super().perimetr()+2*self.a*self.c+2*self.b*self.c

rect1 = TParallelepiped()
print(rect1.v())
print(rect1.perimetr())

rect2 = TParallelepiped()
print(rect2.v())
print(rect2.perimetr())