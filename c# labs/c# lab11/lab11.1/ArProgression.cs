using System;
using System.Collections.Generic;
using System.Text;

namespace lab11._1
{
    class ArProgression
    {
        private int firstEl;
        private int gap;
        public ArProgression(int firstEl, int gap)
        {
            this.firstEl = firstEl;
            this.gap = gap;
        }
        private int finding(int n, int s)
        {
            for (int i = 0; i < n-1; i++)
            {
                s += gap;
            }
            return s;
        }
        public void findNthEl()
        {
            Console.Write("type in n - ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"N th element - {finding(n, firstEl)}");
        }
        private int sum(int n, int s)
        {
            
            int sum = firstEl;
            for (int i = 0; i < n-1; i++)
            {
                s += gap;
                sum += s;
            }
            return sum;
        }
        public void showSum()
        {
            Console.Write("type in n - ");
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"sum - {sum(n, firstEl)}");
        }
        public static int operator +(ArProgression ar, ArProgression ar2)
        {
            return ar.firstEl + ar2.firstEl;
        }
        public static int operator -(ArProgression ar, ArProgression ar2)
        {
            return ar.firstEl - ar2.firstEl;
        }
    }
}
