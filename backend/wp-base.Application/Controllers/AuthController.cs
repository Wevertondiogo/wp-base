using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using wp_base.Application.Helpers;
using wp_base.Application.Validators;
using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;
using wp_base.Domain.Models;

namespace wp_base.Application.Controllers
{

    [ApiController]
    public class AuthController : ControllerBase
    {
        public readonly ICompanyRepository _companyRepository;

        public AuthController(ICompanyRepository companyRepository) => _companyRepository = companyRepository;


        [HttpPost("[controller]")]
        [AllowAnonymous]

        [SwaggerResponse(statusCode: 200, description: "Success in authentication", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad request", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 404, description: "Not Found", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(CompanyEntity))]
        [ValidadeModelStateCustomers]
        public async Task<IActionResult> Auth([FromBody] AuthModel authCompany)
        {
            try
            {
                var companyExists = await _companyRepository.FetchCompany(authCompany.Email, authCompany.Password);

                if (companyExists == null)
                    return NotFound(new { Message = "Email e/ou senha está(ão) inválido(s)." });

                var token = JwtAuth.GenerateToken(companyExists);
                return Ok
                (
                    new
                    {
                        Token = token,
                        Company = companyExists
                    });
            }
            catch (Exception error)
            {
                return BadRequest($"Error {error.Message}");
            }
        }

    }
}
