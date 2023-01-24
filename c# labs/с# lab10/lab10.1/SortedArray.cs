using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace lab10._1
{
    class SortedArray
    {
        private int n;
        private ArrayList arr;
        public SortedArray(int n, ArrayList ann)
        {
            this.n = n;
            arr = ann;
        }
        public void show()
        {
            arr.Sort();
            Console.WriteLine("show : ");
            for (int i = 0; i < arr.Count; i++)
            {
                Console.Write($"{arr[i]} ");
            }
                Console.WriteLine("  ");
        }
        public void add()
        {
            Console.Write("enter a new element : ");
            arr.Add(Convert.ToInt32(Console.ReadLine()));
            arr.Sort();
            show();
        }
        public void delete()
        {
            Console.WriteLine("enter element u wanna delete : ");
            int count = 0;
            int a = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < arr.Count; i++)
            {
                bool b = arr[i].Equals(a);
                if (b == true) { arr.Remove(a); count++; }

            }
            show();
            if (count == 0) Console.WriteLine($"there s no such element({a})");
        }
        public void search()
        {
            Console.WriteLine("what u wanna find? : ");
            int el = Convert.ToInt32(Console.ReadLine());
            arr.Sort();
            int find = arr.BinarySearch(el);
            if (find == el) Console.WriteLine($"we got a {el} in our array");
            if (find < 0) Console.WriteLine($"there s no {el} in our array");
        }

    }
}
