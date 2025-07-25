# GENO TREE

Приложение для создания своего семейного дерева

### Цели

1. Демонстрация навыков.
   > Приложение создано как showcase-проект для демонстрации моих технических и архитектурных навыков при отклике на вакансии.
2. Попробовать возможности языка программирования [Golang](https://go.dev/).
   > Golang выбран в первую очерелдь для его изучения, а так же для сравнения его с node js - в частности с фреймворком [NestJS](https://nestjs.com/)
3. 3D визуализация.
   > Всегда было желание пощуать 3D графику на базе js. Приложение с графами семейного дерева как раз для этого подходит.
4. Для себя.
   > Для создания собственного семейного дерева

### Функционал

- Регистрация/авторизация. Для персонализации данных каждого пользователя
- Создания персон в семейном дереве и связей между ними
- Возможность скачать дерево ввиде pdf документа

## Frontend

### Технологии и стэк

- [Next JS 15.4](https://nextjs.org/blog/next-15)
- [Three JS](https://threejs.org/)
- [Docker](https://www.docker.com/)
- [Tanstack Query 5.83](https://tanstack.com/query/latest/docs/framework/react/quick-start)
- [MUI 7.2](https://mui.com/material-ui/getting-started/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)

В приложени используется 3D на основе ThreeJS.

### Разработка

1. Скачать зависимости

```bash
   yarn install
```

2. Запусить dev режим

```bash
   yarn dev
```

### Линтинг

Проект настроен с ESLint и Prettier для поддержания качества кода:

```bash
# Проверка кода
yarn lint

# Автоматическое исправление ошибок
yarn lint:fix

# Строгая проверка (--max-warnings 0)
yarn lint:strict

# Форматирование кода
yarn format

# Проверка форматирования
yarn format:check
```

**Настроенные правила:**

- TypeScript строгая типизация
- React Hooks правила
- Import сортировка и группировка
- Accessibility (jsx-a11y)
- Prettier форматирование

## Backend можно посмотреть [тут](https://github.com/MaksimAndreevich/family_tree_server)
