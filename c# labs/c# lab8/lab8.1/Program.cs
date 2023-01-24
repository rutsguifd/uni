using System;

namespace lab8._1
{
    class Program
    {
        static double f(int x, int y, int z)
        {
            if (x + y - z > 10) return Math.Log10(x + y - z);
            else if (z - 10 < x + y && x + y < z + 1) return Math.Pow((Math.Abs(x + y) + 1), z);
            else if (x + y - z == 1) return x * x + y * y - z * z * z;
            else return Math.Cos(x) * Math.Cos(x) + Math.Sin(y) - Math.Exp(2*z+1);
        }
        static void Main(string[] args)
        {
            Console.Write("a= ");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.Write("b= ");
            int b = Convert.ToInt32(Console.ReadLine());
            Console.Write("c= ");
            int c = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(f(2,a,4) - 5 * f(a,b,-c));
        }
    }
}
