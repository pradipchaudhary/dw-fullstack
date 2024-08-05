import Joi from "joi";

// product validation
const productValidation = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    quantity: Joi.number().required().min(1),
    description: Joi.string().required().min(4).max(100),
});

export default productValidation;
