using System;

namespace lab_7._1
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
            Random rand = new Random(DateTime.Now.Millisecond);
            for (int i = 0; i < m; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    arr[i, j] = rand.Next(-10, 10);
                    Console.WriteLine(arr[i, j]);
                }
            }
            Console.WriteLine("=========");
            int sum = 0;
            for (int k = 0; k < m; k++)
            {
                Console.WriteLine(arr[k, m - k] + "   m= " + m + "  k=" + k);
                if (arr[k, m - k] < 0) sum += arr[k, m - k];
            }
            Console.WriteLine($"sum = {sum}");
        }
    }
}
