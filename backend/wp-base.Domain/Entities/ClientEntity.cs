using System;
using System.ComponentModel.DataAnnotations;

namespace wp_base.Domain.Entities
{
    public class ClientEntity
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [EmailAddress(ErrorMessage = "Formato de email está incorreto.")]
        public string email { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string BirthDate { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [RegularExpression(@"^\d{3}\.\d{3}\.\d{3}-\d{2}$", ErrorMessage = "Formato de CPF está incorreto.")]
        public string CPF { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [RegularExpression(@"(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)", ErrorMessage = "Formato do RG está incorreto.")]
        public string RG { get; set; }
        [RegularExpression(@"^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$", ErrorMessage = "Formato de número de celular está incorreto.")]
        public string CellNumber { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [RegularExpression(@"^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$", ErrorMessage = "Formato de número de celular está incorreto.")]
        public string Whatsapp { get; set; }
        public string Job { get; set; }
        public string Gender { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string Address { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public int Number { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string Complement { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string District { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string City { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        [RegularExpression(@"^\d{5}-\d{3}$", ErrorMessage = "Formato de CEP está incorreto.")]
        public string CEP { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string MatrialState { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public string Nationality { get; set; }
        [Required(ErrorMessage = "Este campo é obrigatório.")]
        public int CompanyForeignKey { get; set; }
        public CompanyEntity Company { get; set; }
    }
}