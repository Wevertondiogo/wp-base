using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using wp_base.Application.Validators;
using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;
using wp_base.Domain.Models.Filters;

namespace wp_base.Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IClientRepository _clientRepository;
        public ClientController(IClientRepository clientRepository) => _clientRepository = clientRepository;
        [SwaggerResponse(statusCode: 200, description: "Success in request!", Type = typeof(ClientEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad Request.", Type = typeof(ValidateFieldViewModelOutput))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(GenericErrorViewModel))]
        [ValidadeModelStateCustomers]
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
        [SwaggerResponse(statusCode: 201, description: "Client was created with success!", Type = typeof(ClientEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad Request.", Type = typeof(ValidateFieldViewModelOutput))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(GenericErrorViewModel))]
        [ValidadeModelStateCustomers]
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
                return BadRequest($"Error: {ex.InnerException}");
            }
            return NoContent();
        }
    }

}