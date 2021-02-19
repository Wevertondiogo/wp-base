using System.ComponentModel.DataAnnotations;

namespace wp_base.Domain.Models
{
    public class AuthModel
    {
        [Required(ErrorMessage = "Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "Formato de email incorreto.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Senha é obrigatório.")]
        [StringLength(100, ErrorMessage = "O minímo de caracteres aceitos são 6", MinimumLength = 6)]
        public string Password { get; set; }
    }
}