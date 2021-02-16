using System.Threading.Tasks;

namespace wp_base.Domain.Interfaces.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void AddCompany(TEntity entity);
        Task<bool> SaveChangesAsync();
    }
}