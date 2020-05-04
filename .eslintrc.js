/**
 * desc：eslint代码规则配置
 * author：DestinyJun
 * date：  2020/5/3 18:51
 */
module.exports = {
  root: true,
  extends: "enough",
  env: {
    "browser": true,
    "node": true
  },
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "single"], // 字符串单引号双引号都行
    "semi": ["warn", "always"],
    "no-console": "error",
    "arrow-parens": 0,
    "linebreak-style": [0,"error", "windows"],// 空格不符合兼容
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }], // 微末可加逗号可不加
    "padding-line-between-statements":[0,"always"] // 关闭空排行错误提示
  }
};

