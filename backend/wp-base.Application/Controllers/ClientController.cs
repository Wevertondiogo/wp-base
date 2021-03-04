using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;

namespace wp_base.Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IBaseRepository<ClientEntity> _baseRepository;
        public ClientController(IBaseRepository<ClientEntity> baseRepository) => _baseRepository = baseRepository;

        [HttpPost]
        public async Task<IActionResult> AddClient(ClientEntity client)
        {
            try
            {
                _baseRepository.Add(client);
                if (await _baseRepository.SaveChangesAsync()) return Ok(client);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
            return NoContent();
        }
    }
}