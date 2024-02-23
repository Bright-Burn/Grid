import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsEslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  prettierRecommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsEslint.parser,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'array-callback-return': ['error', { checkForEach: true }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'id-length': [
        'error',
        {
          min: 2,
          properties: 'never',
          exceptionPatterns: ['_|e|i|j|x|y|z'],
        },
      ],
      'linebreak-style': 'off',
      'no-else-return': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-restricted-globals': 'error',
      'no-return-await': 'error',
      'no-underscore-dangle': 'error',
      'no-unneeded-ternary': 'error',
      'nonblock-statement-body-position': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'prettier/prettier': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single'],
      'template-curly-spacing': 'error',
      radix: 'error',
      'wrap-iife': 'error',

      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/extensions': 'error',
      'import/no-unused-modules': ['warn', { unusedExports: true }],
      'import/no-mutable-exports': 'error',
      'import/no-webpack-loader-syntax': 'error',
    },
  },
]
