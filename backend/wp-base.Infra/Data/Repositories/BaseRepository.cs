using System.Threading.Tasks;
using wp_base.Infra.Data.Context;

namespace wp_base.Infra.Data.Repositories
{
    public abstract class BaseRepository<TEntity> where TEntity : class
    {
        private readonly DataContext _context;
        public BaseRepository(DataContext context) => _context = context;
        public virtual void AddCompany(TEntity entity) => _context.Add(entity);
        public virtual async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync() > 0);
    }
}