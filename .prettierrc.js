module.exports = {
  printWidth: 200,
  useTabs: false,
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  semi: true, // 语句结尾打分号
  trailingComma: 'none',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ],
  arrowParens: 'always'
};
