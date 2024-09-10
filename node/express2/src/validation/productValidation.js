import Joi from "joi";

let productValidation = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .messages({
        "any.required": "name is required",
        "string.base": "field must be string",
        // "string.min":"name must be atleast 2 character long",
        // "string.max":"name should be 10 character long"
      })
      .allow(""),
    price: Joi.number().required().messages({
      "any.required": "price is required",
      "number.base": "field must be number",
    }),
    quantity: Joi.number().required().messages({
      "any.required": "quantity is required",
      "number.base": "field must be number",
    }),
    description: Joi.string().required().messages({
      "any.required": "description is required",
      "string.base": "field must be string",
    }),
    productImage: Joi.string().required().messages({
      "any.required": "productImage is required",
      "string.base": "field must be number",
    }),
  })

  .unknown(true);

export default productValidation;
