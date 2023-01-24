using System;
using System.Text.Json;

namespace class1
{
    public interface IHandler
    {
        IHandler SetNext(IHandler handler);

        object Handle(Request request);
    }

    class AbstractHandler : IHandler
    {
        private IHandler _nextHandler = null;

        public IHandler SetNext(IHandler handler)
        {
            this._nextHandler = handler;
            return handler;
        }

        public virtual object Handle(Request request)
        {
            if (this._nextHandler == null)
                return null;
            return this._nextHandler.Handle(request);
        }
    }

    public class Request
    {
        public String Login { get; set; }
        public String Password { get; set; }
        public int Count { get; set; } = 0;
        public DateTime Created { get; set; } = DateTime.Now;
        public Request(string Login, string Password)
        {
            this.Login = Login;
            this.Password = Password;
        }
    }
    class SMSHandler : AbstractHandler
    {
        public override object Handle(Request request)
        {
            Console.WriteLine($"U logged in; Hi, {request.Login}");
            return null;
        }
    }

    class AuthorizeHendler : AbstractHandler
    {
        private bool Check(string Login, string Password)
        {
            return Login == "Name" && Password == "Login";
        }
        public override object Handle(Request request)
        {
            Console.WriteLine("Authorized");
            if (Check(request.Login, request.Password))
                return base.Handle(request);
            else
            {
                Console.WriteLine("Wrong login or password");
                return null;
            }
        }
    }
    class RobotHandler : AbstractHandler
    {
        public bool RobotCheck()
        {
            Random rand = new Random();
            int a = rand.Next(0, 101);
            int b = rand.Next(0, 101);
            Console.Write($"{a} + {b} = ");
            int ans = Convert.ToInt32(Console.ReadLine());
            if (a + b == ans)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public override object Handle(Request request)
        {
            Console.WriteLine("Robot Check");
            if (RobotCheck())
            {
                return base.Handle(request);
            }
            else
            {
                return null;
            }
        }
    }
}
