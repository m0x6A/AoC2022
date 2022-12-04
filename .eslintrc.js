module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      tsx: true,
    },
  },

  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'prettier',
  ],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-fallthrough': 'off', 
    '@typescript-eslint/no-unused-vars': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  }
};
