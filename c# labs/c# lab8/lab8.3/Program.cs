using System;

namespace lab8._3
{
    class Program
    {
        static double f(int n)
        {
            double x0=2, x1=1;
            if (n == 0) return x0;
            if (n == 1) return x1;
            return f(n - 1)*Math.Pow(Math.Cos(x1), x0);
        }
        static void Main(string[] args)
        {
            Console.WriteLine(f(10));
        }
    }
}
