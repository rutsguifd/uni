using System;
using System.Collections.Generic;
using System.Text;

namespace lab13._1
{
    public class ArProgressionM : ArProgression
    {
        public int xEl;
        public ArProgressionM(int firstEl, int gap, int xEl) :base(firstEl, gap)
        {
            this.xEl = xEl;
        }
        public void ifProg(int[] arr)
        {
            int counnnt = 0;
            int i = arr.Length-1;
            while (i>1)
            {
                if (arr[i] - arr[i - 1] == arr[i-1]-arr[i-2]) counnnt++;
                else Console.WriteLine("ne utv ar prog");
              
                i--;
            }
            if (counnnt == arr.Length-2) Console.WriteLine("utv ar prog");
        }
        public void ifElInProg()
        {
            Console.WriteLine("uzhe dano masyv i zachem todi divitisy chy element nalezhit prog?");
        }
    }
}
