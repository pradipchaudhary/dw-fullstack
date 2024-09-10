import Joi from "joi";

let userValidation = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .messages({
        "any.required": "name is required",
        "string.base": "field must be string",
      })
      .allow(""),

    email: Joi.string()
      .required()
      .custom((value, msg) => {
        let validEmail = value.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );
        if (validEmail) {
          return true;
        } else {
          return msg.message("invalid email ");
        }
      }),
    phoneNumber: Joi.number().required(),
    password: Joi.string()
      .required()
      .custom((value, msg) => {
        let validPass = value.match(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_\-+=]).{8,20}$/
        );
        if (validPass) {
          return true;
        } else {
          return msg.message(
            "password  must be min 8 character ,max 20 character, must have at least one upper case, must have at least on special character and must have at least one lowercase"
          );
        }
      }),
    gender: Joi.string().required().valid("male", "female", "other").messages({
      "any.required": "gender is required",
      "string.base": "field must be string",
      "any.only": "gender must be either male or female or other",
    }),
  })
  .unknown(true);
export default userValidation;
