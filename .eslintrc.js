module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'no-empty-function': 'off',
    'class-methods-use-this': 'off',
    camelcase: 'off',
  },
};
