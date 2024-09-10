const validation = (validationSchema) => {
    return (req, res, next) => {
        const data = validationSchema.validate(req.body);
        const error = data.error;
        if (error) {
            res.json({
                success: false,
                message: error.details[0].message,
            });
        } else {
            next();
        }
    };
};

export default validation;
