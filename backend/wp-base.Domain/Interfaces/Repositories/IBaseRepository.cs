using System.Collections.Generic;
using System.Threading.Tasks;

namespace wp_base.Domain.Interfaces.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void AddCompany(TEntity entity);
        void UpdateCompany(TEntity entity);
        void DeleteCompany(TEntity entity);
        Task<bool> SaveChangesAsync();
        Task<IEnumerable<TEntity>> GetCompany();
        Task<TEntity> GetCompanyById(int? id);
        Task<TEntity> FetchCompany(string email, string password);
    }
}