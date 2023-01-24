using System;

namespace lab5._2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("vvedit number = ");
            char[] a = Console.ReadLine().ToCharArray();
            int[] b = new int[a.Length];
            for (int i = 0; i < a.Length; i++)
            {
                b[i] = a[i] - '0';
            }
            int Icount = 1, nCount = 0;
             
            foreach (var item in b)
            {
                if (item > b[Icount]) nCount++;
                if (Icount<b.Length-1) Icount++;
            }
            if (nCount>0) Console.WriteLine("ye spadnoyu");
            else Console.WriteLine("ne ye spadnoyu");

        }
    }
}
