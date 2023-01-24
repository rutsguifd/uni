using System;

namespace lab7._2
{
    class Program
    {
        static int Factorial(int a)
        {
            int f = 1;
            if (a == 0) f = 1;

            else if (a>0)
            {
                while (a > 0)
                {
                    f *= a;
                    a -= 1;
                }
            }
                return f;
        }
        static int Jfunc(int j)
        {
            int res = 0;
            while (j > 0)
            {
                res += j*j;
                j -= 1;
            }
            return res;
        }
        static void Main(string[] args)
        {
            Console.Write("vvedit rozmir : ");
            int n = Convert.ToInt32(Console.ReadLine());
            int[,] arr = new int[n, n];
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    if ((i + j) % 2 == 0) arr[i, j] = Factorial(i);
                    else if ((i + j) % 2 == 1) arr[i, j] = Jfunc(j);
                    Console.WriteLine(arr[i,j]);
                }
            }
            for (int j = 0; j < n; j++)
            {
                for (int i = 0; i < n; i++)
                {

                }
            }
            int[] b = new int[n];
            for (int i = 0; i < n; i++)
            {

            }
        }
    }
}
