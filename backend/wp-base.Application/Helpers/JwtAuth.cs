using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using wp_base.Domain.Entities;
using Microsoft.Extensions.Configuration;


namespace wp_base.Application.Helpers
{
    public class JwtAuth
    {

        public static string GenerateToken(CompanyEntity company)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(Setting.Key);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Role, company.Id.ToString()),
                    new Claim(ClaimTypes.Name, company.Name),
                    new Claim(ClaimTypes.Email, company.Email),
                }),
                Expires = DateTime.UtcNow.AddHours(5),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}