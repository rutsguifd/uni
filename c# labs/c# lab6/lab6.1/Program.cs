using System;

namespace lab6._1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit rozmir masyva : ");
            int n = Convert.ToInt32(Console.ReadLine());
            double[] arr = new double[n];
            for (int k = 0; k < n; k++)
            {
                Console.Write($"vvedit arr[{k}]");
                arr[k] = Convert.ToDouble(Console.ReadLine());
            }
            int i = 0;
            double sum = 0;
            while (arr[i] > 0) { sum += arr[i]; i++; }
            Console.WriteLine($"sum = {sum}");
        }
    }
}
