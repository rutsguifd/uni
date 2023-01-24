using System;

namespace lab6._3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit rozmitnist vektoriv : ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[] a = new int[n];
            int[] b = new int[n];
            int[] c = new int[n];

            Random rand = new Random(DateTime.Now.Millisecond);
            for (int i = 0; i < n; i++)
            {
                a[i] = rand.Next(1, 10);
                Console.WriteLine($"a[{i}] = {a[i]}");
                b[i] = rand.Next(1, 10);
                Console.WriteLine($"b[{i}] = {b[i]}");
                c[i] = rand.Next(1, 10);
                Console.WriteLine($"c[{i}] = {c[i]}");
            }

            for (int k = 0; k < n; k++)
            {
                c[k] = 2 * (a[k] + c[k]) - 3 * (a[k] - b[k]);
            }

            foreach (int el in c) Console.WriteLine(el);
        }
    }
}
