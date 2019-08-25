module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions":true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "comma-dangle": 2,
    "no-console": 2,
    "class-methods-use-this":0,
    "curly": ["error", "multi-line"],
    "import/no-unresolved": [2, { "commonjs": true }],
    "no-shadow": ["error", { "allow": ["req", "res", "err"] }],
  }
};