import Joi from "joi";

let reviewValidation = Joi.object()
  .keys({
    user: Joi.string().required().messages({
      "any.required": "user is required",
      "string.base": "user field must be string",
    }),
    product: Joi.string().required().messages({
      "any.required": "product is required",
      "string.base": "product field must be string",
    }),
    description: Joi.string().required().messages({
      "any.required": "description is required",
      "string.base": "description field must be string",
    }),
  })
  .unknown(true);

export default reviewValidation;
