using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;
using wp_base.Infra.Data.Context;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace wp_base.Infra.Data.Repositories
{
    public class CompanyRepository : BaseRepository<CompanyEntity>, ICompanyRepository
    {
        private readonly DataContext _context;
        public CompanyRepository(DataContext context) : base(context) => _context = context;
        public async Task<IEnumerable<CompanyEntity>> GetCompany()
        {
            IQueryable<CompanyEntity> query = _context.CompanyEntityTest.Include(c => c.Clients);
            query.AsNoTracking()
            .OrderBy(c => c.Id);

            return await query.ToListAsync();
        }
        public async Task<CompanyEntity> GetCompanyById(int? id)
        {
            IQueryable<CompanyEntity> query = _context.CompanyEntityTest;

            query = query.AsNoTracking()
                          .OrderBy(company => company.Id)
                           .Where(company => company.Id == id);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<CompanyEntity> FetchCompany(string email, string password)
        {
            IQueryable<CompanyEntity> query = _context.CompanyEntityTest;

            query = query.AsNoTracking()
                          .OrderBy(company => company.Id)
                           .Where(company => company.Email == email && company.Password == password);

            return await query.FirstOrDefaultAsync();
        }

    }
}
