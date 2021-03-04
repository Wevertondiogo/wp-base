using System.Collections.Generic;
using System.Threading.Tasks;

namespace wp_base.Domain.Interfaces.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void Add(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        Task<bool> SaveChangesAsync();
    }
}