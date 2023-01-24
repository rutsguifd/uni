using System;
using System.Collections.Generic;
using System.Text;

namespace lab14._1
{
    class TDFraction : TFraction
    {
        public string chyslo;
        public TDFraction(string chyslo) : base(chyslo)
        {
            this.chyslo = chyslo;
        }
        public int[] inversia()
        {
           string[] ass = chyslo.Split(new char[] {',', '.'});
            var arr = new int[ass.Length];
           for (int i = 0; i < ass.Length; i++)
           {
                arr[i] = Convert.ToInt32(ass[i]);
           }
            int aaa = arr[1];
            int bbb = arr[0];
            int[] ccc = {aaa, bbb};
            return ccc;
        }
    }
}
