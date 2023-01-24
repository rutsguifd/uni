using System;

namespace lab6._4
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit dovzhinu masyva : ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[] arr = new int[n];
            Random rand = new Random(DateTime.Now.Millisecond);
            for (int i = 0; i < n; i++)
            {
                arr[i] = rand.Next(-10, 10);
                Console.WriteLine($"arr[{i}] = {arr[i]}");
                if (arr[i] < 0) arr[i] *= -1;
            }
            Array.Sort(arr);
            Console.WriteLine("===============");
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine($"arr[{i}] = {arr[i]}");
            }
        }
    }
}
