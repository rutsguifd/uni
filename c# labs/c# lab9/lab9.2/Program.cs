using System;
using System.Globalization;
using System.Collections;


namespace lab9._2
{
    struct EOM
    {
        private ArrayList CPU;
        private ArrayList frequency;
        private ArrayList RAMCapacity;
        private ArrayList ROMCapacity;
        private ArrayList GPU;
        private ArrayList price;

        public EOM(int o)
        {
            CPU = new ArrayList();
            frequency = new ArrayList();
            RAMCapacity = new ArrayList();
            ROMCapacity = new ArrayList();
            GPU = new ArrayList();
            price = new ArrayList();
        }

        public void AddEOM()
        {
            Console.Write("How many EOMs u wanna add? : ");
            int addCount = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < addCount; i++)
            {
                
                Console.Write("Enter CPU name : ");
                CPU.Add(Console.ReadLine());
                Console.Write("Enter frequency of the CPU : ");
                frequency.Add(Console.ReadLine());
                Console.Write("Enter RAM capacity : ");
                RAMCapacity.Add(Console.ReadLine());
                Console.Write("Enter ROM capacity : ");
                ROMCapacity.Add(Console.ReadLine());
                Console.Write("Enter GPU name : ");
                GPU.Add(Console.ReadLine());
                Console.Write("Enter price : ");
                price.Add(Console.ReadLine());
                Console.WriteLine($"You ve added a new EOM to our database!");
            }
        }
        private void cpu_find(string input)
        {
            for (int i = 0; i < CPU.Count; i++)
            {
                bool comparison = CPU[i].Equals(input);
                if (comparison == true)
                {
                    Console.WriteLine($"CPU - {CPU[i]}\n" +
                        $"frequency - {frequency[i]}\n" +
                        $"RAm capacity - {RAMCapacity[i]}\n" +
                        $"ROM capacity - {ROMCapacity[i]}\n" +
                        $"GPU - {GPU[i]}\n" +
                        $"price - {price[i]}");
                    Console.WriteLine("---------------");
                }
                else Console.WriteLine("there is no EOM u r searching for :(");
            }

        }
        private void frequency_find(string input)
        {
            for (int i = 0; i < CPU.Count; i++)
            {
                bool comparison = frequency[i].Equals(input);
                if (comparison == true)
                {
                    Console.WriteLine($"CPU - {CPU[i]}\n" +
                        $"frequency - {frequency[i]}\n" +
                        $"RAm capacity - {RAMCapacity[i]}\n" +
                        $"ROM capacity - {ROMCapacity[i]}\n" +
                        $"GPU - {GPU[i]}\n" +
                        $"price - {price[i]}");
                    Console.WriteLine("---------------");
                }
                else Console.WriteLine("there is no EOM u r searching for :(");
            }
        }
        private void RAM_find(string input)
        {
            for (int i = 0; i < CPU.Count; i++)
            {
                bool comparison = RAMCapacity[i].Equals(input);
                if (comparison == true)
                {
                    Console.WriteLine($"CPU - {CPU[i]}\n" +
                        $"frequency - {frequency[i]}\n" +
                        $"RAm capacity - {RAMCapacity[i]}\n" +
                        $"ROM capacity - {ROMCapacity[i]}\n" +
                        $"GPU - {GPU[i]}\n" +
                        $"price - {price[i]}");
                    Console.WriteLine("---------------");
                }
                else Console.WriteLine("there is no EOM u r searching for :(");
            }
        }
        private void ROM_find(string input)
        {
            for (int i = 0; i < CPU.Count; i++)
            {
                bool comparison = ROMCapacity[i].Equals(input);
                if (comparison == true)
                {
                    Console.WriteLine($"CPU - {CPU[i]}\n" +
                        $"frequency - {frequency[i]}\n" +
                        $"RAm capacity - {RAMCapacity[i]}\n" +
                        $"ROM capacity - {ROMCapacity[i]}\n" +
                        $"GPU - {GPU[i]}\n" +
                        $"price - {price[i]}");
                    Console.WriteLine("---------------");
                }
                else Console.WriteLine("there is no EOM u r searching for :(");
            }
        }
        private void GPU_find(string input)
        {
            for (int i = 0; i < CPU.Count; i++)
            {
                bool comparison = GPU[i].Equals(input);
                if (comparison == true)
                {
                    Console.WriteLine($"CPU - {CPU[i]}\n" +
                        $"frequency - {frequency[i]}\n" +
                        $"RAm capacity - {RAMCapacity[i]}\n" +
                        $"ROM capacity - {ROMCapacity[i]}\n" +
                        $"GPU - {GPU[i]}\n" +
                        $"price - {price[i]}");
                    Console.WriteLine("---------------");
                }
                else Console.WriteLine("there is no EOM u r searching for :(");
            }
        }
        private void price_find(string input)
        {
            for (int i = 0; i < CPU.Count; i++)
            {
                bool comparison = price[i].Equals(input);
                if (comparison == true)
                {
                    Console.WriteLine($"CPU - {CPU[i]}\n" +
                        $"frequency - {frequency[i]}\n" +
                        $"RAm capacity - {RAMCapacity[i]}\n" +
                        $"ROM capacity - {ROMCapacity[i]}\n" +
                        $"GPU - {GPU[i]}\n" +
                        $"price - {price[i]}");
                    Console.WriteLine("---------------");
                }
                else Console.WriteLine("there is no EOM u r searching for :(");
            }
        }
        public void findEOM()
        {

            Console.WriteLine($"We have already {CPU.Count} EOMs");
            Console.Write("If u wanna search by CPUs - type '1'\n" +
                "if u wanna search by frequency - type '2'\n" +
                "if u wanna search by RAM capacity - type '3'\n" +
                "if u wanna search by ROM capacity - type '4'\n" +
                "if u wanna search by GPUs - type '5'\n" +
                "if u wanna search by price - type '6'\n" +
                "Here we go : ");
            int counter = Convert.ToInt32(Console.ReadLine());
            Console.Write("Now type the element u r lookin for : ");
            string typeInfo = Console.ReadLine();
            if (counter == 1) { Console.WriteLine("Info about the EOM : "); cpu_find(typeInfo); }
            if (counter == 2) { Console.WriteLine("Info about the EOM : "); frequency_find(typeInfo); }
            if (counter == 3) { Console.WriteLine("Info about the EOM : "); RAM_find(typeInfo); }
            if (counter == 4) { Console.WriteLine("Info about the EOM : "); ROM_find(typeInfo); }
            if (counter == 5) { Console.WriteLine("Info about the EOM : "); GPU_find(typeInfo); }
            if (counter == 6) { Console.WriteLine("Info about the EOM : "); price_find(typeInfo); }
            else if (counter > 6) Console.WriteLine("enum out of range!");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
                EOM eom = new EOM(0);
                eom.AddEOM();
                eom.findEOM();
        }
    }
}
