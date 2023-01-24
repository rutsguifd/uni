using System;

namespace lab7._4
{
    class Program
    {
        static void Main(string[] args)
        {
            int m =3;
            int n = 4;
            int[][] arr = new int[m][];
            for (int i = 0; i < m; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write($"vvedit arr[{i}][{j}] : ");
                    arr[i][j] = Convert.ToInt32(Console.ReadLine());
                }
            }
            for (int k = 0; k < m; k++)
            {
                Array.Sort(arr[k]);
            }
            for (int i = 0; i < m; i++)
            {
                arr[i] = new int[n];
                for (int j = 0; j < n; j++)
                {
                    Console.WriteLine($"arr[{i}][{j}] = {arr[i][j]} ");
                }
            }
        }
    }
}
