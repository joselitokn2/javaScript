module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
    "max-classes-per-file": "off",
    "class-methods-use-this": ["off"],
    "linebreak-style": ["off"],
    "no-console": ["off"]
  }
};