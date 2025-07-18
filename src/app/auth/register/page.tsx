"use client";

import { Box, Button, Container, Divider, Link as MuiLink, Paper, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import * as Yup from "yup";

import { useRegister } from "@/lib/hooks/queries/useRegister";

// Схема валидации
const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, "Имя должно содержать минимум 2 символа").max(50, "Имя не должно превышать 50 символов").required("Имя обязательно"),
  email: Yup.string().email("Введите корректный email").required("Email обязателен"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Пароль должен содержать хотя бы одну букву, одну заглавную букву и одну цифру")
    .required("Пароль обязателен"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли должны совпадать")
    .required("Подтвердите пароль"),
});

// Начальные значения
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, isPending } = useRegister();

  const handleSubmit = (values: typeof initialValues) => {
    register({
      username: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Регистрация
            </Typography>
            <Typography color="text.secondary">Создайте аккаунт для начала работы с семейным деревом</Typography>
          </Box>

          <Formik initialValues={initialValues} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
              <Form>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Имя"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    InputProps={{
                      startAdornment: <FaUser style={{ marginRight: "8px", color: "#666" }} />,
                    }}
                  />

                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      startAdornment: <FaEnvelope style={{ marginRight: "8px", color: "#666" }} />,
                    }}
                  />

                  <TextField
                    fullWidth
                    name="password"
                    label="Пароль"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      startAdornment: <FaLock style={{ marginRight: "8px", color: "#666" }} />,
                      endAdornment: (
                        <Button onClick={() => setShowPassword(!showPassword)} sx={{ minWidth: "auto", p: 1 }}>
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    name="confirmPassword"
                    label="Подтвердите пароль"
                    type={showConfirmPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    InputProps={{
                      startAdornment: <FaLock style={{ marginRight: "8px", color: "#666" }} />,
                      endAdornment: (
                        <Button onClick={() => setShowConfirmPassword(!showConfirmPassword)} sx={{ minWidth: "auto", p: 1 }}>
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      ),
                    }}
                  />

                  <Button type="submit" variant="contained" size="large" disabled={isPending || !isValid || !dirty} sx={{ mt: 2 }}>
                    {isPending ? "Регистрация..." : "Зарегистрироваться"}
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              или
            </Typography>
          </Divider>

          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Уже есть аккаунт?{" "}
              <MuiLink component={Link} href="/auth/login" underline="hover">
                Войти
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
