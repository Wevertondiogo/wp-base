using Microsoft.EntityFrameworkCore;
using wp_base.Domain.Entities;

namespace wp_base.Infra.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<CompanyEntity> Test { get; set; }
    }
}