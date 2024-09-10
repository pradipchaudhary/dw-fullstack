import Joi from "joi";

const userValidation = Joi.object().keys({
    username: Joi.string().required().min(4).max(30),
    email: Joi.string()
        .required()
        .custom((value, msg) => {
            const validEmail = value.match(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            );
            if (validEmail) {
                return true;
            } else {
                return "Invalid email";
            }
        }),
    password: Joi.string()
        .required()
        .min(4)
        .max(20)
        .custom((value, msg) => {
            const validePass = value.match(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_\-+=]).{8,20}$/
            );
            if (validePass) {
                return true;
            } else {
                return "password  must be min 8 character ,max 20 character, must have at least one upper case, must have at least on special character and must have at least one lowercase";
            }
        }),
    gender: Joi.string().required().valid("male", "female", "other"),
});

export default userValidation;
