import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const TestForm = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password to short")
      .required("Password is required"),
    password2: Yup.string().test(
      "password-match",
      "Password must match",
      function(value) {
        return this.parent.password === value;
      }
    )
  });

  return (
    <div>
      <h1>test form</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          password2: "",
          gender: "male"
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(actions);
          console.log(values);
        }}
        render={props => (
          <Form>
            <Field type="email" name="email" />
            {props.errors.email && props.touched.email ? (
              <p>{props.errors.email}</p>
            ) : null}
            <Field type="password" name="password" />\
            {props.errors.password && props.touched.password ? (
              <p>{props.errors.password}</p>
            ) : null}
            <Field type="password" name="password2" />
            {props.errors.password2 && props.touched.password2 ? (
              <p>{props.errors.password2}</p>
            ) : null}
            <Field component="select" placeholder="Gender" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};

export default TestForm;
