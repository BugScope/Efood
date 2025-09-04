// eslint.config.js (Flat, ESLint 9)
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["dist", "node_modules"] },

  // Regras TS recomendadas (flat)
  ...tseslint.configs.recommended,

  // Regras do projeto (TS/TSX + React + Hooks)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.es2021 },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      // pega só as RULES dos presets recomendados
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ajustes comuns
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },

  // Desliga regras de formatação que conflitam com o Prettier
  eslintConfigPrettier,
];
