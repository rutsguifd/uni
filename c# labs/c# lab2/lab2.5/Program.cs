using System;

namespace lab2._5
{
    class Program
    {
        static void Main(string[] args)
        {
            double x =double.Parse( Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            double[] posEl = new double[n];
            double summ = 0;
            int k = 1;
            for (int i = 0; i<n; ++i)
            {

                summ += (Math.Sin(x) * Math.Cos(x * k)) * Math.Pow(-1, i) ;
                int fact =k*( k + 1);
                if (summ > 0) { posEl[i] = summ; }
                if (i == n - 1)
                {
                    for (int s = 0; s < posEl.Length; s++) Console.WriteLine(posEl[s]);
                }
            }




        }
    }
}
