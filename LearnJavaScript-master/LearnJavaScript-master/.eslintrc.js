module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:promise/recommended', 'plugin:node/recommended'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'no-prototype-builtins': 'off',
    'func-names': 'warn',
    'no-process-exit': 'warn',
    'object-shorthand': 'warn',
    'class-methods-use-this': 'warn',
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error'
  }
};
