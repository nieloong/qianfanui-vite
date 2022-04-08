module.exports = {
  tabWidth: 2, // 缩进2个空格
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true, // 将所有双引号改为单引号
  semi: false, // 去掉末尾分号
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
};
