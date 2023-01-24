using System;
using System.Collections;

namespace lab10._1
{
    class Program
    {
        static void Main(string[] args)
        {
            ArrayList ann = new ArrayList();
            ann.Add(1);
            ann.Add(2);
            ann.Add(3);

            var obj = new SortedArray(3, ann);
            obj.add();
            obj.show();
            obj.search();
            obj.delete();
        }
    }
}
