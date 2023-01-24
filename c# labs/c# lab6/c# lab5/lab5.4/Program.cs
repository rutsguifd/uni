using System;

namespace lab5._4
{
    class Program
    {
        static void Main(string[] args)
        {
            double x0 = 1, x1 = 1, x2 = 8;
            double x=0;
            Console.Write("vvedit n : ");
            int n = Convert.ToInt32(Console.ReadLine());
            if (n == 0) x=x0;
            if (n == 1) x=x1;
            if (n == 2) x=x2;
            if (n>2)
            {
                for (int i = 0; i < n-2; i++)
                {
                    x = Math.Sin(x0) + 2 * x2 + 3 * x1;
                    x0 = x1;
                    x1 = x2;
                    x2 = x;
                }
            }
            Console.WriteLine($"x[n] = {x}");
        }
    }
}
