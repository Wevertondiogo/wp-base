using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using wp_base.Domain.Models.Filters;

namespace wp_base.Application.Validators
{
    public class ValidadeModelStateCustomers : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var validadeFieldViewModel = (new ValidateFieldViewModelOutput(context.ModelState.SelectMany(sm => sm.Value.Errors).Select(s => s.ErrorMessage)));
                context.Result = new BadRequestObjectResult(validadeFieldViewModel);
            }
        }
    }
}