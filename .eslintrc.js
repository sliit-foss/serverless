module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
    es6: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'no-unused-vars': 'error',
    'no-else-return': 'error',
    'no-return-await': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'prefer-const': 'error',
    'require-await': 'error'
  }
}
