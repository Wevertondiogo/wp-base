using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;
using wp_base.Infra.Data.Context;

namespace wp_base.Infra.Data.Repositories.Client
{
    public class ClientRepository : BaseRepository<ClientEntity>, IClientRepository
    {
        private readonly DataContext _context;
        public ClientRepository(DataContext context) : base(context) => _context = context;
        public async Task<IEnumerable<ClientEntity>> GetClients() => await _context.ClientEntityTest.ToListAsync();
    }
}