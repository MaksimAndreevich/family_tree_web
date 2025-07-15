import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "*.min.js",
      "*.min.css",
      "*.bundle.js",
      "coverage/**",
      ".nyc_output/**",
      ".cache/**",
      ".parcel-cache/**",
      "*.tmp",
      "*.temp",
      "next.config.js",
      "next.config.ts",
      "postcss.config.js",
      "tailwind.config.js",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
      ".env*",
      "*.log",
      ".DS_Store",
      "Thumbs.db",
      ".vscode/**",
      ".idea/**",
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ),
  {
    rules: {
      // Prettier правила
      "prettier/prettier": "error",

      // Import правила
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // React правила
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Общие правила
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  },
];

export default eslintConfig;
