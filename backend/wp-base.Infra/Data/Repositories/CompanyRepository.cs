using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;
using wp_base.Infra.Data.Context;

namespace wp_base.Infra.Data.Repositories
{
    public class CompanyRepository : BaseRepository<CompanyEntity>, ICompanyRepository
    {
        private readonly DataContext _context;

        public CompanyRepository(DataContext context) : base(context) => _context = context;
    }
}