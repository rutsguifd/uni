using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace lab10._2
{
    class hotel
    {
        private string name;
        private string hotelType;
        private int facilityCount;
        private string[] facilityName;
        private int[] facilityPrice;
        private int[] facilityTime;

        public hotel()
        {
            Console.WriteLine("enter hotel name - ");
            this.name = Console.ReadLine();
            Console.WriteLine("enter hotel type - ");
            this.hotelType = Console.ReadLine();
            Console.WriteLine("enter amount of facilities - ");
            this.facilityCount = Convert.ToInt32(Console.ReadLine());
            facilityName = new string[facilityCount];
            facilityPrice = new int[facilityCount];
            facilityTime = new int[facilityCount];
            for (int i = 0; i < facilityCount; i++)
            {
                Console.WriteLine($"enter {i+1} facility name - ");
                facilityName[i] = Console.ReadLine();
                Console.WriteLine($"enter {i + 1} facility price - ");
                facilityPrice[i] = Convert.ToInt32( Console.ReadLine());
                Console.WriteLine($"enter {i + 1} facility time - ");
                facilityTime[i] = Convert.ToInt32( Console.ReadLine());
            }

        }
        public void aviliable()
        {
            Console.WriteLine("enter money u have - ");
            int money = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("enter time which it has to durate (in min) - ");
            int time = Convert.ToInt32(Console.ReadLine());
            int count = 0;
            for (int i = 0; i < facilityCount; i++)
            {
                if (facilityPrice[i] <= money && facilityTime[i] <= time) { Console.WriteLine($"{facilityName[i]} is aviliable for u!"); count++;  }
            }
            if (count == 0) Console.WriteLine("there s nothing aviliable for u :(");
        }

    }
}
