using System;

namespace lab12._1
{
    class Program
    {
        static void Main(string[] args)
        {
            TQuadrangle q = new TQuadrangle(1,2,3,4,-5,3,3,4);
            q.show();
            Console.WriteLine(q.per());
            Console.WriteLine(q.sq());
            q.defineQ();
        }
    }
}
