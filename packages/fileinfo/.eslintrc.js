module.exports = {
  root: false,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    roject: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "prettier",
    "airbnb-typescript-prettier",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/prefer-default-export": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
