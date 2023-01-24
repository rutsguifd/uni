using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace lab3._2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        string cs = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\VIKTOR\Desktop\uni\ca2 coding\lab3.2\Table.mdf;Integrated Security=True";
        private void Form1_Load(object sender, EventArgs e)
        {
            
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            SqlCommand getList = new SqlCommand("SELECT * FROM Goods", con);
            SqlDataAdapter adapt = new SqlDataAdapter(getList);
            con.Open();
            adapt.Fill(dt);
            con.Close();

            dataGridView1.DataSource = dt;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            SqlCommand getList = new SqlCommand("SELECT * FROM Goods WHERE ExportCountry = @x", con);
            getList.Parameters.AddWithValue("x", "uk");
            SqlDataAdapter adapt = new SqlDataAdapter(getList);
            con.Open();
            adapt.Fill(dt);
            con.Close();

            dataGridView1.DataSource = dt;

        }

        private void button2_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            SqlCommand getList = new SqlCommand("SELECT TOP(1) * FROM Goods ORDER BY Price DESC", con);
            SqlDataAdapter adapt = new SqlDataAdapter(getList);
            con.Open();
            adapt.Fill(dt);
            con.Close();

            dataGridView1.DataSource = dt;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            SqlCommand getList = new SqlCommand("SELECT ExportCountry, COUNT(ExportCountry) FROM Goods GROUP BY ExportCountry", con);
            SqlDataAdapter adapt = new SqlDataAdapter(getList);
            con.Open();
            adapt.Fill(dt);
            con.Close();

            dataGridView1.DataSource = dt;
        }

        private void button4_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            con.Open();
            SqlCommand ChangeList = new SqlCommand("UPDATE Goods SET Price = Price + 7", con);
            SqlCommand getList = new SqlCommand("SELECT * FROM Goods ", con);
            SqlDataAdapter adaptGet = new SqlDataAdapter(getList);
            ChangeList.ExecuteNonQuery();
            adaptGet.Fill(dt);
            con.Close();

            dataGridView1.DataSource = dt;
        }

        private void button5_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            con.Open();
            SqlCommand ChangeList = new SqlCommand("WITH BD AS (SELECT TOP(1) * FROM Goods ORDER BY Volume)DELETE FROM BD", con);
            SqlCommand getList = new SqlCommand("SELECT * FROM Goods ", con);
            SqlDataAdapter adaptGet = new SqlDataAdapter(getList);
            ChangeList.ExecuteNonQuery();
            adaptGet.Fill(dt);
            con.Close();

            dataGridView1.DataSource = dt;
        }

        private void button6_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            DataTable dt1 = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            SqlCommand getFilter = new SqlCommand("SELECT ExportCountry FROM Goods WHERE ExportCountry= @x", con);
            getFilter.Parameters.AddWithValue("x", "uk");
            SqlCommand getAll = new SqlCommand("SELECT * FROM Goods", con);
            SqlDataAdapter adaptFilter = new SqlDataAdapter(getFilter);
            SqlDataAdapter adaptAll = new SqlDataAdapter(getAll);

            con.Open();
            adaptFilter.Fill(dt);
            adaptAll.Fill(dt1);
            MessageBox.Show($"All UK: {dt.Rows.Count == dt1.Rows.Count}");
            con.Close();
        }

        private void button7_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            SqlConnection con = new SqlConnection(cs);
            SqlCommand getFilter = new SqlCommand("SELECT ExportCountry FROM Goods WHERE ExportCountry = @x", con);
            getFilter.Parameters.AddWithValue("x", "uk");
            SqlDataAdapter adaptFilter = new SqlDataAdapter(getFilter);
            con.Open();
            adaptFilter.Fill(dt);
            MessageBox.Show($"Any UK: {dt.Rows.Count > 0}");
            con.Close();
        }
    }
}
