namespace wp_base.Domain.Entities
{
    public class CompanyEntity : EntityBase
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}