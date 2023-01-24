using System;
using System.Collections.Generic;
using System.Text;

namespace lab14._1
{
    class TRFraction : TFraction
    {
        public TRFraction(int chys, int znam) : base(chys,znam) { }
        public int[] inversia()
        {
            int aa = znamennyk;
            int bb = chyselnyk;
            int[] cc = {aa, bb};
            return cc;
        }
    }
}
