"use client";

import { useRegister } from "@/lib/hooks/queries/useRegister";
import { Box, Button, Container, Divider, Link as MuiLink, Paper, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { register, isPending } = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Имя обязательно";
    if (!formData.email) newErrors.email = "Email обязателен";
    if (!formData.password) newErrors.password = "Пароль обязателен";
    if (formData.password.length < 6) newErrors.password = "Пароль должен быть не менее 6 символов";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
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

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Имя"
                value={formData.name}
                onChange={handleChange("name")}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  startAdornment: <FaUser style={{ marginRight: "8px", color: "#666" }} />,
                }}
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: <FaEnvelope style={{ marginRight: "8px", color: "#666" }} />,
                }}
              />

              <TextField
                fullWidth
                label="Пароль"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange("password")}
                error={!!errors.password}
                helperText={errors.password}
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
                label="Подтвердите пароль"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                InputProps={{
                  startAdornment: <FaLock style={{ marginRight: "8px", color: "#666" }} />,
                  endAdornment: (
                    <Button onClick={() => setShowConfirmPassword(!showConfirmPassword)} sx={{ minWidth: "auto", p: 1 }}>
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  ),
                }}
              />

              <Button type="submit" variant="contained" size="large" disabled={isPending} sx={{ mt: 2 }}>
                {isPending ? "Регистрация..." : "Зарегистрироваться"}
              </Button>
            </Stack>
          </form>

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
