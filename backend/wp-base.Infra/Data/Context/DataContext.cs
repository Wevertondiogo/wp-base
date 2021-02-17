using Microsoft.EntityFrameworkCore;
using wp_base.Domain.Entities;

namespace wp_base.Infra.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        // protected override void OnConfiguring(DbContextOptionsBuilder builder)
        // {
        //     builder.UseSqlServer("Server=WINDOWS7-PC\\SQLEXPRESS;Database=STUDIES;Trusted_Connection=True;MultipleActiveResultSets=true;");
        // }


        public DbSet<CompanyEntity> CompanyEntityTest { get; set; }
    }
}