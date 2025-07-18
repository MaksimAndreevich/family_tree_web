"use client";

import { Box, Button, Card, CardContent, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import { WEB_ROUTES } from "@/lib/routes";

import { useHeroFeaturesCards } from "./constants";

export const Hero = () => {
  const features = useHeroFeaturesCards();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 25%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid>
              <Typography variant="h2" component="h1" mb={1} fontWeight={700} fontSize={{ xs: 44, md: 60 }}>
                Создайте свое семейное дерево
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, fontSize: { xs: 20, md: 24 } }}>
                Изучайте историю своей семьи, сохраняйте воспоминания и делитесь ими с близкими
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={Link}
                  href={WEB_ROUTES.register}
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "primary.main",
                    fontWeight: 600,
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  Начать бесплатно
                </Button>
                <Button
                  component={Link}
                  href={WEB_ROUTES.login}
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontWeight: 600,
                    "&:hover": { borderColor: "grey.300", bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Войти
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" mb={1} fontSize={{ xs: 32, md: 40 }}>
          Возможности приложения
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Все что нужно для создания и управления семейным деревом
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card sx={{ height: "100%", textAlign: "center" }}>
                <CardContent>
                  {feature.icon}
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {feature.description}
                  </Typography>
                  <List dense>
                    {feature.details.map((detail, detailIndex) => (
                      <ListItem key={detailIndex}>
                        <ListItemIcon>
                          <FaCheck size={16} />
                        </ListItemIcon>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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
};
