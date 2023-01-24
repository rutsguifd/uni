using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace lab3._1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            using (Context context = new Context()) 
            {
                dataGridView1.DataSource = context.Goods.ToList<Goods>();
            }
        }

        private void button6_Click(object sender, EventArgs e)
        {
            using (Context context = new Context())
            {
                MessageBox.Show( context.Goods.All(x=>x.Volume>1).ToString());
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            dataGridView1.Columns.Clear();
            using (Context context = new Context())
            {
                dataGridView1.DataSource = context.Goods.Where(x=>x.ExportCountry == "uk").ToList<Goods>();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            dataGridView1.Columns.Clear();
            using (Context context = new Context())
            {
                dataGridView1.DataSource = context.Goods.OrderByDescending(x => x.Volume).Take(1).ToList<Goods>();
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            dataGridView1.Columns.Clear();
            using (Context context = new Context())
            {

                dataGridView1.DataSource = context.Goods.OrderBy(x => x.Volume).Skip(1).ToList<Goods>();
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            dataGridView1.Columns.Clear();
            using (Context context = new Context())
            {
                var list = context.Goods.ToList<Goods>().GroupBy(x => x.ExportCountry);

                dataGridView1.DataSource = null;

                dataGridView1.Columns.Add("export country", null);
                dataGridView1.Columns.Add("country counter", null);
                foreach (var x in list)
                {
                    dataGridView1.Rows.Add(x.Key, x.Count());
                }
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            dataGridView1.Columns.Clear();
            using (Context context = new Context())
            {
                context.Goods.ToList<Goods>().ForEach(x => x.Volume = x.Volume + 7);
                dataGridView1.DataSource = context.Goods.ToList<Goods>();
            }
        }

        private void button7_Click(object sender, EventArgs e)
        {
            using (Context context = new Context())
            {
                MessageBox.Show(context.Goods.Any(x => x.Volume > 1).ToString());
            }
        }
    }
}
