"use client";

import { Box, Button, Container, Divider, Link as MuiLink, Paper, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import * as Yup from "yup";

import { useLogin } from "@/lib/hooks/queries/useLogin";

// Схема валидации
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Введите корректный email").required("Email обязателен"),
  password: Yup.string().min(1, "Пароль обязателен").required("Пароль обязателен"),
});

// Начальные значения
const initialValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { login, isPending } = useLogin();

  const handleSubmit = (values: typeof initialValues) => {
    login({
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
              Вход в систему
            </Typography>
            <Typography color="text.secondary">Войдите в свой аккаунт для доступа к семейному дереву</Typography>
          </Box>

          <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
              <Form>
                <Stack spacing={3}>
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

                  <Button type="submit" variant="contained" size="large" disabled={isPending || !isValid || !dirty} sx={{ mt: 2 }}>
                    {isPending ? "Вход..." : "Войти"}
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
              Нет аккаунта?{" "}
              <MuiLink component={Link} href="/auth/register" underline="hover">
                Зарегистрироваться
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
