import numpy
class Vector:
    def __init__(self):
        self.rozmirnist= self.enter_rozmirnist()
        self.vector = self.enter_vector()
    def enter_rozmirnist(self):
        return int(input('enter rozmirnist: '))
    def enter_vector(self):
        return [float(input('enter value: ')) for i in range(self.rozmirnist)]
    def print_vector(self):
        return self.vector
    def lenght_vector(self):
        return sum([el**2 for el in self.vector])**0.5
    def normizing_vector(self):
        return self.vector/numpy.linalg.norm(self.vector)

#------------------
vect = Vector()
print('vector = ', vect.print_vector())
print('vector lenght = ', vect.lenght_vector())
print('normized vector = ', vect.normizing_vector())