module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-irregular-whitespace": "error",
    "no-unreachable": "error",
    "curly": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "no-empty-function": "error",
    "no-multi-spaces": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-trailing-spaces": "error",
    "default-case": "error",
    "no-fallthrough": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-redeclare": "error",
    "camelcase": "error",
    "brace-style": "error",
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}
