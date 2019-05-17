import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password to short")
      .required("Password is required")
  });
  return (
    <div className="form-group">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={(values, { setErrors }) => {
          console.log(values);
        }}
        render={props => (
          <Form>
            <label>First Name</label>
            <Field
              className="form-control"
              type="text"
              name="firstName"
              aria-describedby="firstName"
            />
            <ErrorMessage name="firstName">
              {mssg => (
                <small id="firstName" className="form-text text-muted">
                  {mssg}
                </small>
              )}
            </ErrorMessage>

            <label>Last Name</label>
            <Field
              className="form-control"
              type="text"
              name="lastName"
              aria-describedby="lastName"
            />
            <ErrorMessage name="lastName">
              {mssg => (
                <small id="lastName" className="form-text text-muted">
                  {mssg}
                </small>
              )}
            </ErrorMessage>

            <label>Email</label>
            <Field
              className="form-control"
              type="email"
              name="email"
              aria-describedby="email"
            />
            <ErrorMessage name="email">
              {mssg => (
                <small id="email" className="form-text text-muted">
                  {mssg}
                </small>
              )}
            </ErrorMessage>

            <label>Password</label>
            <Field
              className="form-control"
              type="password"
              name="password"
              aria-describedby="password"
            />
            <ErrorMessage name="password">
              {mssg => (
                <small id="password" className="form-text text-muted">
                  {mssg}
                </small>
              )}
            </ErrorMessage>

            <button className="btn btn-success mt-3" type="submit">
              Submit
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default Signup;
