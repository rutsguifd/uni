using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            if (a > 0 && b > 0) Console.WriteLine("1");
            else if (a < 0 && b > 0) Console.WriteLine("1 chvert'");
            else if (a < 0 && b < 0) Console.WriteLine("2 chvert'");
            else if (a > 0 && b < 0) Console.WriteLine("3 chvert'");
            else if (a > 0 && b < 0) Console.WriteLine("4 chvert'");

        }
    }
}
