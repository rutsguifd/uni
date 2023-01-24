using System;

namespace lab8._2
{
    class Program
    {
        static int f(int n, int l)
        {
            int[] arr = new int[n];
            int[] com = new int[n];
            int[] com2 = new int[n];

            for (int i = 0; i < n; i++)
            {
                arr[i] =int.Parse( Console.ReadLine());
            }
            if (l == 1) {
                Array.Reverse(arr);
            }
            if (l==0)
            {
                arr.ToString();
                 
            }
            return arr[0];
        }
        static void Main(string[] args)
        {
            Console.WriteLine(f(4,1));
        }
    }
}
