// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow async-await
      'generator-star-spacing': 0,
  // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关闭语句强制分号结尾
    "semi": [0],
    "indent": [1,2],//缩进风格
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, {"max": 5}],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "key-spacing": [0, {
        "singleLine": {
          "beforeColon": false,
          "afterColon": true
        },
        "multiLine": {
          "beforeColon": true,
          "afterColon": true,
          "align": "colon"
        }
    }],
    "no-trailing-spaces":0,
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],
    "space-infix-ops":0,
    "comma-spacing": 0,//逗号前后的空格
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "no-new": 1,//禁止在使用new构造一个实例后不赋值
    "quotes": [1, "single"],//引号类型 `` "" ''
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
  }
}
