using System;

namespace lab2._6
{
    class Program
    {
        static void Main(string[] args)
        {
            double x = double.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            double summ = 0;
            int k = 1;
            int fact = 1;
            for (int i = 0; i < n; ++i)
            {

                summ += (Math.Pow(x, 2*i)/2*fact) * Math.Pow(-1, i);
                fact = k * (k + 1);
                if (i == n - 1) Console.WriteLine(summ);
            }
        }
    }
}
