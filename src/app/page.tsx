"use client";

import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FaArrowRight, FaDownload, FaProjectDiagram, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Создайте свое семейное дерево
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Изучайте историю своей семьи, сохраняйте воспоминания и делитесь ими с близкими
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  component={Link}
                  href="/auth/register"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  Начать бесплатно
                </Button>
                <Button
                  component={Link}
                  href="/auth/login"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": { borderColor: "grey.300", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Войти
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <FaUsers size={200} style={{ opacity: 0.8 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Возможности приложения
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Все что нужно для создания и управления семейным деревом
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center" }}>
              <CardContent>
                <FaProjectDiagram size={60} style={{ color: "#667eea", marginBottom: "16px" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Визуализация дерева
                </Typography>
                <Typography color="text.secondary">3D визуализация семейных связей с интерактивным интерфейсом</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center" }}>
              <CardContent>
                <FaShieldAlt size={60} style={{ color: "#667eea", marginBottom: "16px" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Безопасность данных
                </Typography>
                <Typography color="text.secondary">Ваши семейные данные защищены и доступны только вам</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", textAlign: "center" }}>
              <CardContent>
                <FaDownload size={60} style={{ color: "#667eea", marginBottom: "16px" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Экспорт в PDF
                </Typography>
                <Typography color="text.secondary">Скачивайте красивые отчеты о вашем семейном дереве</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography variant="h4" component="h2" gutterBottom>
              Готовы начать?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Присоединяйтесь к тысячам семей, которые уже создали свое дерево
            </Typography>
            <Button component={Link} href="/auth/register" variant="contained" size="large" endIcon={<FaArrowRight />}>
              Создать дерево
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
