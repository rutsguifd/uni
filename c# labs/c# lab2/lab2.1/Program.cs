using System;

namespace lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("x1 = ");
            int x1 = int.Parse( Console.ReadLine());
            Console.Write("x2 = ");
            int x2 = int.Parse(Console.ReadLine());
            Console.Write("x3 = ");
            int x3 = int.Parse(Console.ReadLine());
            Console.Write("y1 = ");
            int y1 = int.Parse(Console.ReadLine());
            Console.Write("y2 = ");
            int y2 = int.Parse(Console.ReadLine());
            Console.Write("y3 = ");
            int y3 = int.Parse(Console.ReadLine());
            int z1 = 2*x1+3*y1;
            int z2 = 2 * x2 + 3 * y2;
            int z3 = 2 * x3 + 3 * y3;
            Console.WriteLine($"z = ({z1},{z2},{z3})");


        }
    }
}
