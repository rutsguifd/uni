using System;

namespace lab14._1
{
    class Program
    {
        static void Main(string[] args)
        {
            TFraction t1 = new TFraction(1,2);
            TFraction t2 = new TFraction(1,3);
            int[] res1 = t1 + t2;
            Console.WriteLine($"{res1[0]} / {res1[1]}");
            int[] res2 = t1 - t2;
            Console.WriteLine($"{res2[0]} / {res2[1]}");
            TRFraction tr1 = new TRFraction(1,4);
            int[] res3 = tr1.inversia();
            Console.WriteLine($"{res3[0]} / {res3[1]}");
            TDFraction td1 = new TDFraction("1.44");
            int[] res4 = td1.inversia();
            Console.WriteLine($"{res4[0]} . {res4[1]}");

        }
    }
}
