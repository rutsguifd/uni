using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace lab4._1.Models
{
    public partial class MYCONTEXT : DbContext
    {
        public MYCONTEXT()
        {
        }

        public MYCONTEXT(DbContextOptions<MYCONTEXT> options)
            : base(options)
        {
        }

        public virtual DbSet<Exports> Exports { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=ExampleDB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Exports>(entity =>
            {
                entity.Property(e => e.Exported).HasColumnType("date");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}