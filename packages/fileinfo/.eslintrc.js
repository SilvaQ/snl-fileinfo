// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: path.resolve(__dirname, './tsconfig.json'),
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'prettier',
    'airbnb-typescript-prettier',
    'prettier/@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/prefer-default-export': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
