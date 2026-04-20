import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-implicit-coercion': 'error',
      'no-undefined': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'no-array-constructor': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-fallthrough': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-proto': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-shadow': 'error',
      'no-throw-literal': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-with': 'error',
      'require-await': 'error',
      'vars-on-top': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
]
