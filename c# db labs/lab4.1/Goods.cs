namespace lab3._1
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Goods
    {
        public Guid Id { get; set; }

        [StringLength(50)]
        public string Title { get; set; }

        [StringLength(50)]
        public string ExportCountry { get; set; }

        public int? Volume { get; set; }

        [StringLength(10)]
        public string Price { get; set; }
    }
}
