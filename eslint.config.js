import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig({
  ignores: ['node_modules', '.next'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: globals.browser,
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    react: 'eslint-plugin-react',
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
  },
})
