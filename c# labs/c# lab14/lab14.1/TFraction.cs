using System;
using System.Collections.Generic;
using System.Text;

namespace lab14._1
{
    class TFraction
    {
        public int chyselnyk;
        public int znamennyk;
        public TFraction(int chys, int znam)
        {
            chyselnyk = chys;
            znamennyk = znam;
        }
        public TFraction(string chyslo) { }
        public static int[] operator +(TFraction t1, TFraction t2)
        {
            int a1 = t1.chyselnyk * t2.znamennyk + t2.chyselnyk * t1.znamennyk;
            int b1 = t1.znamennyk * t2.znamennyk;
            int[] c1 = { a1, b1 };
            return c1;
        }
        public static int[] operator -(TFraction t1, TFraction t2)
        {
            int a1 = t1.chyselnyk * t2.znamennyk - t2.chyselnyk * t1.znamennyk;
            int b1 = t1.znamennyk * t2.znamennyk;
            int[] c1 = { a1, b1 };
            return c1;
        }
    }
}
