using System.Collections.Generic;
using System.Threading.Tasks;
using wp_base.Domain.Entities;

namespace wp_base.Domain.Interfaces.Repositories
{
    public interface IClientRepository : IBaseRepository<ClientEntity>
    {
        Task<IEnumerable<ClientEntity>> GetClients();
    }
}