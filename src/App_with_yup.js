import React from "react";
import { Form, Field } from "react-final-form";
import { schema } from "./schema";
import "./styles.css";

const validationSchema = schema;

function AppWithYup() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1 className="app-title">Bufex Form Example</h1>
      <section className="card">
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            try {
              validationSchema.validateSync(values, { abortEarly: false });
            } catch (e) {
              return e.inner.reduce((errors, error) => {
                return {
                  ...errors,
                  [error.path]: error.message
                };
              }, {});
            }
          }}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <h2 className="section-header">React-Final-Form</h2>
              <div className="section-item">
                <label>User Name : </label>
                <Field
                  name="userName"
                  component="input"
                  type="text"
                  placeholder="User Name"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} />
                      <p>{meta.error && meta.touched && meta.error}</p>
                    </>
                  )}
                </Field>
              </div>
              <div className="section-item small-top-margin">
                <label>Password : </label>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} />
                      <p>{meta.error && meta.touched && meta.error}</p>
                    </>
                  )}
                </Field>
              </div>
              <div className="section-item small-top-margin">
                <label>Bufex Email : </label>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} />
                      <p>{meta.error && meta.touched && meta.error}</p>
                    </>
                  )}
                </Field>
              </div>
              <div className="section-item small-top-margin">
                <label>Cell Phone : </label>
                <Field
                  name="cellPhone"
                  component="input"
                  type="text"
                  placeholder="555-555-5555"
                >
                  {({ input, meta }) => (
                    <>
                      <input {...input} />
                      <p>{meta.error && meta.touched && meta.error}</p>
                    </>
                  )}
                </Field>
              </div>
              <div className="section-item small-top-margin">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </section>
    </div>
  );
}
export default AppWithYup;
