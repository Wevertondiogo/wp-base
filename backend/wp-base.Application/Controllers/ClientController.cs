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
        private readonly IClientRepository _clientRepository;
        public ClientController(IClientRepository clientRepository) => _clientRepository = clientRepository;

        [HttpGet]
        public async Task<IActionResult> GetClients()
        {
            try
            {
                var clients = await _clientRepository.GetClients();
                return Ok(clients);

            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddClient(ClientEntity client)
        {
            try
            {
                _clientRepository.Add(client);
                if (await _clientRepository.SaveChangesAsync()) return Ok(client);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
            return NoContent();
        }
    }

}