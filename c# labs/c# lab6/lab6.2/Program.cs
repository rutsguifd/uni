using System;

namespace lab6._2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit n : ");
            int n = Convert.ToInt32(Console.ReadLine());
            double[] arr = new double[n];
            Console.Write("vvedit x : ");
            double x = Convert.ToDouble(Console.ReadLine());
            Console.Write("vvedit arr[1] : ");
            arr[0] = Convert.ToDouble(Console.ReadLine());
            Console.Write("vvedit arr[2] : ");
            arr[1] = Convert.ToDouble(Console.ReadLine());
            double sum = 1;
            for (int i = 2; i < n; i++)
            {
                arr[i] = (arr[i-1]+x/arr[i-2])/2;
                Console.WriteLine($"arr[{i+1}] = {arr[i]}");
            }
            for (int k = 0; k < n; k+=2)
            {
                sum *= arr[k];
            }
            Console.WriteLine($"sum = {sum}");
        }
    }
}
