using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;

namespace wp_base.Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]

    public class CompanyController : ControllerBase
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyController(ICompanyRepository companyRepository) => _companyRepository = companyRepository;

        [HttpGet]
        [SwaggerResponse(statusCode: 200, description: "Success in request", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad request", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(CompanyEntity))]
        public async Task<IActionResult> GetCompany()
        {
            try
            {
                var companies = await _companyRepository.GetCompany();
                return Ok(companies);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }
        }

        [SwaggerResponse(statusCode: 201, description: "Company was created with success", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad request", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 404, description: "Not Found", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(CompanyEntity))]
        [HttpPost("add")]
        public async Task<IActionResult> AddCompany(CompanyEntity company)
        {
            try
            {
                _companyRepository.AddCompany(company);
                if (await _companyRepository.SaveChangesAsync()) return Ok(company);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }
            return NoContent();
        }
        [SwaggerResponse(statusCode: 200, description: "Success in Update", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad request", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 404, description: "Not Found", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(CompanyEntity))]
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCompany(int? id, CompanyEntity company)
        {
            try
            {
                var result = await _companyRepository.GetCompanyById(id);
                if (result == null || result.Id != id) return NotFound();

                _companyRepository.UpdateCompany(company);
                if (await _companyRepository.SaveChangesAsync()) return Ok(company);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }
            return NoContent();
        }

        [SwaggerResponse(statusCode: 200, description: "Success in Delete", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 400, description: "Bad request", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 404, description: "Not Found", Type = typeof(CompanyEntity))]
        [SwaggerResponse(statusCode: 500, description: "Internal server error", Type = typeof(CompanyEntity))]
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCompany(int? id, CompanyEntity company)
        {
            try
            {
                var result = await _companyRepository.GetCompanyById(id);
                if (result == null || result.Id != id) return NotFound();

                _companyRepository.DeleteCompany(company);
                if (await _companyRepository.SaveChangesAsync()) return Ok("company was Deleted!");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error {ex.Message}");
            }
            return NoContent();
        }
    }
}