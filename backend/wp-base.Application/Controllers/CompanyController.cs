using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using wp_base.Domain.Entities;
using wp_base.Domain.Interfaces.Repositories;

namespace wp_base.Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyRepository _companyRepository;

        public CompanyController(ICompanyRepository companyRepository) => _companyRepository = companyRepository;

        [HttpGet]
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

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCompany(int? id, CompanyEntity company)
        {
            try
            {
                var result = await _companyRepository.GetByCompany(id);
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
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCompany(int? id, CompanyEntity company)
        {
            try
            {
                var result = await _companyRepository.GetByCompany(id);
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