import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const onSubmit = (values) => {
        console.log("Form data", values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="error"
                        />
                    </div>

                    <button type="submit" disabled={!formik.isValid}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
