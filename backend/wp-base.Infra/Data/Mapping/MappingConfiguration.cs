// using Microsoft.EntityFrameworkCore;
// using wp_base.Domain.Entities;

// namespace wp_base.Infra.Data.Mapping
// {
//     public class MappingConfiguration : DbContext
//     {
//         protected override void OnModelCreating(ModelBuilder modelBuilder)
//         {
//             modelBuilder.Entity<ClientEntity>()
//                         .HasOne(c => c.Company)
//                         .WithMany(c => c.Clients)
//                         .HasForeignKey(c => c.CompanyForeignKey);
//         }
//     }
// }    