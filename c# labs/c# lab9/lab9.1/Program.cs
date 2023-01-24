using System;

namespace lab9._1
{
    struct PhoneNums
    {
        private string[] fullName;
        private int[] birthYear;
        private string[] homePhoneNumber;
        private string[] phoneNumber;

        public int[] BirthYear
        {
            get
            {
                return birthYear;
            }
            private set
            {
                if (value[0] < 1900) { birthYear[0] = 1900; }
                else if (value[0] >= 1900) birthYear[0] = value[0];
            }
        } 
        public PhoneNums(int n)
        {
            fullName = new string[100];
            birthYear = new int[100];
            homePhoneNumber = new string[100];
            phoneNumber = new string[100];
        }
        public void addFriend()
        {
            Console.Write("How many friends u wanna add? : ");
            int addCount = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < addCount; i++)
            {
                Console.Write("Enter fullname : ");
                fullName[i] = Console.ReadLine();
                Console.Write("Enter the year of birth : ");
                BirthYear[i] = Convert.ToInt32(Console.ReadLine());
                Console.Write("Enter home phone number : ");
                homePhoneNumber[i] = Console.ReadLine();
                Console.Write("Enter phone number : ");
                phoneNumber[i] = Console.ReadLine();
                Console.WriteLine($"You ve added {fullName[i]} to ur contact list!");
                Console.WriteLine(birthYear[i]);
            }
        }
        public void findFriend()
        {
            Console.WriteLine("Enter friends name : ");
            string name = Console.ReadLine();
            for(int i=0;i<fullName.Length;i++)
            {
                int a = fullName[i].CompareTo(name);
                if (a == 1) Console.WriteLine("yea");
            }
        }
        

    }
    class Program
    {
        static void Main(string[] args)
        {
            PhoneNums phoneCol = new PhoneNums(0);
            phoneCol.addFriend();
            phoneCol.findFriend();
        }
    }
}
