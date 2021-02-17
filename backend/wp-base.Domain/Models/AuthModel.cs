using System.ComponentModel.DataAnnotations;

namespace wp_base.Domain.Models
{
    public class AuthModel
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "E-mail in formatt invalid.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "password is required")]
        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}