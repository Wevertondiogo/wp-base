using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wp_base.Domain.Entities;
using wp_base.Infra.Data.Context;

namespace wp_base.Infra.Data.Repositories
{
    public abstract class BaseRepository<TEntity> where TEntity : class
    {
        private readonly DataContext _context;
        public BaseRepository(DataContext context) => _context = context;
        public virtual void AddCompany(TEntity entity) => _context.Add(entity);
        public virtual void UpdateCompany(TEntity entity) => _context.Entry(entity).State = EntityState.Modified;
        public virtual void DeleteCompany(TEntity entity) => _context.Remove(entity);
        public virtual async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync() > 0);
        public async virtual Task<IEnumerable<TEntity>> GetCompany() => (IEnumerable<TEntity>)await _context.CompanyEntityTest.ToListAsync();
        public async virtual Task<CompanyEntity> GetByCompany(int? id)
        {
            IQueryable<CompanyEntity> query = _context.CompanyEntityTest;

            query = query.AsNoTracking()
                          .OrderBy(company => company.Id)
                           .Where(company => company.Id == id);

            return await query.FirstOrDefaultAsync();
        }
    }
}