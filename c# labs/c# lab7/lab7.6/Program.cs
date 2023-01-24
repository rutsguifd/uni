using System;

namespace lab7._6
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit rozmir : ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[][] arr = new int[n][];
            int count = 0;
            for (int i = 0; i < n; i++)
            {
                arr[i] = new int[n];
                for (int j = 0; j < n; j++)
                {
                    Console.Write($"arr[{i}][{j}] = ");
                    arr[i][j] = Convert.ToInt32(Console.ReadLine());
                }
            }
                for (int j = 0; j < n; j++)
                {
                int[] x = new int[n];
                Array.Copy(arr[j], x, n);
                Console.WriteLine(x[j]);
                Array.Sort(arr[j]);
                Console.WriteLine(arr[j]);
                if (x == arr[j]) count++;
                }
            Console.WriteLine(count);
        }
    }
}
