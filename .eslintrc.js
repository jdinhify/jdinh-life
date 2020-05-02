module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:mdx/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-quotes': ['off', 'prefer-double'],
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prefer-template': 'error',
  },
};
