using System;

namespace lab13._1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.Write("type in first el - ");
            //int FirEl = Convert.ToInt32(Console.ReadLine());
            //Console.Write("type in gap - ");
            //int gap = Convert.ToInt32(Console.ReadLine());

            //var obj = new ArProgression(FirEl, gap);
            //var obj2 = new ArProgression(FirEl, gap);
            //obj.findNthEl();
            //obj.showSum();
            //int a = obj + obj2;
            //Console.WriteLine(a);
            //int b = obj - obj2;
            //Console.WriteLine(b);
            //-----------------------------------
            ArProgressionM a1 = new ArProgressionM(1,1,1);
            int[] c = { 2, 5, 8, 11 };
            a1.ifProg(c);
            a1.ifElInProg();
        }
    }
}
