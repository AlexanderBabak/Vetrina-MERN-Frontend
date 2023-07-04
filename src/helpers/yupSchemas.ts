import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Incorrect email",
    ),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const registerSchema = yup.object({
  name: yup.string().required().min(2),
  email: yup
    .string()
    .required()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Incorrect email",
    ),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .required()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Incorrect email",
    ),
});

export const newPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: yup
    .string()
    .when("newPassword", (newPassword, field) =>
      newPassword
        ? field
            .required("No password provided")
            .oneOf([yup.ref("newPassword")], "Password does not match")
        : field,
    ),
});
