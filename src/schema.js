import * as yup from "yup";

export const schema = yup
  .object({
    userName: yup
      .string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters long")
      .max(10, "Username must not be more than 25 characters long"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^.{8,}$/, "Must be at least 8 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@bufex+\.com$/,
        "Must be an @bufex.com email."
      ),
    cellPhone: yup
      .string()
      .required("Cell Phone is required")
      .matches(/^\d{3}-\d{3}-\d{4}$/, "Please follow the format 555-555-5555")
  })
  .required();
