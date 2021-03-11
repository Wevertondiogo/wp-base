using System;
namespace wp_base.Domain.Entities
{
    public class ClientEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string email { get; set; }
        public string BirthDate { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string CellNumber { get; set; }
        public string PhoneNumber { get; set; }
        public string Whatsapp { get; set; }
        public string Job { get; set; }
        public string Gender { get; set; }

        public string Address { get; set; }
        public int Number { get; set; }
        public string Complement { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public int CEP { get; set; }
        public string MatrialState { get; set; }
        public string Nationality { get; set; }
        public int CompanyForeignKey { get; set; }
        public CompanyEntity Company { get; set; }
    }
}