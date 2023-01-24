using System;
using System.Collections.Generic;

namespace lab4._1.Models
{
    public partial class Exports
    {

        public int Id { get; set; }
        public string Title { get; set; }
        public int? Pages { get; set; }
        public double? Price { get; set; }
        public DateTime? Exported { get; set; }

    }
}