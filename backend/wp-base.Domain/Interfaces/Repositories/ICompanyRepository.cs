using System.Collections.Generic;
using System.Threading.Tasks;
using wp_base.Domain.Entities;

namespace wp_base.Domain.Interfaces.Repositories
{
    public interface ICompanyRepository : IBaseRepository<CompanyEntity>
    {
        Task<IEnumerable<CompanyEntity>> GetCompany();
        Task<CompanyEntity> GetCompanyById(int? id);
        Task<CompanyEntity> FetchCompany(string email, string password);
    }
}