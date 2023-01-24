using System;

namespace lab2._2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("x = ");
            int x = int.Parse(Console.ReadLine());
            Console.Write("y = ");
            int y = int.Parse(Console.ReadLine());
            if (x > 0 && y > 0) Console.WriteLine("1 chvert'");
            else if (x < 0 && y > 0) Console.WriteLine("2 chvert'");
            else if (x < 0 && y < 0) Console.WriteLine("3 chvert'");
            else if (x > 0 && y < 0) Console.WriteLine("4 chvert'");
            else Console.WriteLine("na osi x abo y");

        }
    }
}
