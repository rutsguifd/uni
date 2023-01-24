using class1;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            var class1 = new RobotHandler();
            var class2 = new AuthorizeHendler();
            var class3 = new SMSHandler();

            var req = new Request("Name", "Login");
            class1.SetNext(class2).SetNext(class3);
            class1.Handle(req);  
        }
    }
}
