using System;
using System.ComponentModel.DataAnnotations;

namespace wp_base.Domain.Entities
{
    public class ClientEntity
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "O nome é obrigatório.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "O email é obrigatório.")]
        [EmailAddress(ErrorMessage = "Formato de email está incorreto.")]
        public string email { get; set; }

        [Required(ErrorMessage = "O data de nascimento é obrigatório.")]
        public string BirthDate { get; set; }

        [Required(ErrorMessage = "O CPF é obrigatório.")]
        [RegularExpression(@"^\d{3}\.\d{3}\.\d{3}-\d{2}$", ErrorMessage = "Formato de CPF está incorreto.")]
        public string CPF { get; set; }

        [Required(ErrorMessage = "O RG é obrigatório.")]
        [RegularExpression(@"(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)", ErrorMessage = "Formato do RG está incorreto.")]
        public string RG { get; set; }

        [Required(ErrorMessage = "O número de celular é obrigatório.")]
        [RegularExpression(@"^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$", ErrorMessage = "Formato de número de celular está incorreto.")]
        public string CellNumber { get; set; }

        [Required(ErrorMessage = "O número de telefone é obrigatório.")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "O whatsapp é obrigatório.")]
        [RegularExpression(@"^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$", ErrorMessage = "Formato de número de celular está incorreto.")]
        public string Whatsapp { get; set; }

        public string Job { get; set; }

        [Required(ErrorMessage = "O sexo é obrigatório.")]
        public string Gender { get; set; }

        [Required(ErrorMessage = "O Endereço é obrigatório.")]
        public string Address { get; set; }

        [Required(ErrorMessage = "O Endereço é obrigatório.")]
        public string State { get; set; }

        [Required(ErrorMessage = "O número é obrigatório.")]
        public int Number { get; set; }

        [Required(ErrorMessage = "O complemento é obrigatório.")]
        public string Complement { get; set; }

        [Required(ErrorMessage = "O bairro é obrigatório.")]
        public string District { get; set; }

        [Required(ErrorMessage = "O cidade é obrigatório.")]
        public string City { get; set; }

        [Required(ErrorMessage = "O CEP é obrigatório.")]
        [RegularExpression(@"^\d{5}-\d{3}$", ErrorMessage = "Formato de CEP está incorreto.")]
        public string CEP { get; set; }

        [Required(ErrorMessage = "O estado civil é obrigatório.")]
        public string MaritalState { get; set; }

        [Required(ErrorMessage = "O nacionalidade é obrigatório.")]
        public string Nationality { get; set; }

        public int CompanyForeignKey { get; set; }
        public CompanyEntity Company { get; set; }
    }
}