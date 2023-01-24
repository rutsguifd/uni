using System;

namespace lab7._3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit m : ");
            int m = Convert.ToInt32(Console.ReadLine());
            Console.Write("vvedit n : ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[,] arr = new int[m, n];
            for (int i = 0; i < m; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write($"vvedit arr[{i},{j}] : ");
                    arr[i, j] = Convert.ToInt32(Console.ReadLine());
                }
            }
            int count = 0;
            for (int i = 0; i < m; i++)
            {
                for (int j = 1; j < n; j++)
                {
                    if (arr[i, j] == 0) count++;
                }
            }
            if (count != 0) Console.WriteLine("nyzhnyotrykutna");
            else Console.WriteLine("ne nyzhnyotrykutna");
        }
    }
}
