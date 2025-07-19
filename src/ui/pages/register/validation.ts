import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Имя должно содержать минимум 2 символа").max(50, "Имя не должно превышать 50 символов").required("Имя обязательно"),
  email: Yup.string().email("Введите корректный email").required("Email обязателен"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Пароль должен содержать хотя бы одну букву, одну заглавную букву и одну цифру")
    .required("Пароль обязателен"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли должны совпадать")
    .required("Подтвердите пароль"),
});

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
