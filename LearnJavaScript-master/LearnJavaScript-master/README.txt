--> npm init 
--> npm install http-server -save--dev // Lo Guardardos como dependencia de desarrollo 


// Archivos de Configuración 
 .-package.json
 .-eslintrc.js

// Visual Code Extensions 
 .- Material Icon Theme
 .-ESLint
 .-Debugger for Chrome
 .-Live Server
 .-Auto Rename Tag
 .-Bracket Pair Colorizer
 .-Format in context menus
 .-Auto Close Tag
 .-Visual Studio IntelliCode
 .-IntelliSense for CSS class names in HTML
 .-Prettier

 // Visual Code Settings
 .- Word Wrap: ON


// VSCode - ESLint, Prettier & Airbnb Setup

--> npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
--> sudo npm i -g eslint 
--> eslint --init // Configuración Inicial 

// Settings.json configuración del Visual Code Studio

{
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "One Monokai",
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "eslint.autoFixOnSave": true,
    "editor.autoClosingBrackets": "always",
    "editor.autoClosingQuotes": "always",
    "eslint.alwaysShowStatus": true,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "eslint.validate": [
        "javascriptreact",
        {
            "language": "javascript",
            "autoFix": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        "typescriptreact"
    ],
    "[html]": {
        "editor.defaultFormatter": "HookyQR.beautify",
        "editor.formatOnSave": true
    },
    "[css]": {
        "editor.defaultFormatter": "HookyQR.beautify",
        "editor.formatOnSave": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true,
        "editor.wordWrap": "on",
        "editor.formatOnPaste": true,
        "editor.autoClosingBrackets": "always",
        "editor.autoClosingQuotes": "always",
        "editor.suggestSelection": "first",
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
}


//ESLint
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


// prettier
module.exports = {
  printWidth: 128,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'never'
};

