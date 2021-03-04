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
        public virtual void Add(TEntity entity) => _context.Add(entity);
        public virtual void Update(TEntity entity) => _context.Entry(entity).State = EntityState.Modified;
        public virtual void Delete(TEntity entity) => _context.Remove(entity);
        public virtual async Task<bool> SaveChangesAsync() => (await _context.SaveChangesAsync() > 0);
       
}
}