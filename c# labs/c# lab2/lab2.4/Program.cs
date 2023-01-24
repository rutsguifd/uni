using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("x = ");
            int X = int.Parse( Console.ReadLine());
            int Y = 2 * X * X - 3;
            if (Y == 0) Console.WriteLine(1);
            else if (Y>0) Console.WriteLine(2*X);
            else Console.WriteLine(X);
        }
    }
}
