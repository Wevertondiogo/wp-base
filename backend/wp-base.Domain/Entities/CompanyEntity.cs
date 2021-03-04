using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace wp_base.Domain.Entities
{
    public class CompanyEntity
    {
        public int? CompanyId { get; set; }
        [Required(ErrorMessage = "Nome é obrigatório.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "Formato de email incorreto.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Senha é obrigatório.")]
        [StringLength(100, ErrorMessage = "O minímo de caracteres aceitos são 6", MinimumLength = 6)]
        public string Password { get; set; }

        public virtual ICollection<ClientEntity> Clients { get; set; }
    }
}