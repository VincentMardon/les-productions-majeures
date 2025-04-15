const js = require('@eslint/js')
const globals = require('globals')
const reactHooks = require('eslint-plugin-react-hooks')
const reactRefresh = require('eslint-plugin-react-refresh')
const tseslint = require('typescript-eslint')
const prettier = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.config.recommended,
  ...tseslint.config(
    {
      ignores: ['dist', 'build', 'node_modules'],
    },
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        globals: globals.browser,
        parser: tseslint.parser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        prettier,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': 'warn',
      },
    },
  ),
  prettierConfig,
]
