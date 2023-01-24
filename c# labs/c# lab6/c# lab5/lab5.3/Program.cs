using System;

namespace lab5._3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("x = ");
            double x = double.Parse(Console.ReadLine());
            Console.Write("E = ");
            double E = double.Parse(Console.ReadLine());
            Console.Write("n = ");
            double n = double.Parse(Console.ReadLine());
            double sum = 0;
            int nCount = 1;
            while (nCount<n)
            {
                sum += (Math.Pow(-1, nCount - 1) * Math.Pow(x, nCount)) / nCount;
                if (sum > E) break;
                nCount++;
            }
            Console.WriteLine($"suma = {sum}");
        }
    }
}
