using System.Collections.Generic;
using System.Collections;
namespace wp_base.Domain.Models.Filters
{
    public class ValidateFieldViewModelOutput
    {
        public ValidateFieldViewModelOutput(IEnumerable<string> errors) => Errors = errors;
        public IEnumerable<string> Errors;
    }
}