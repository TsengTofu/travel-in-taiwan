// ESLINT 的 config 需要重新設定
module.exports = {
  env: {
    browser: true,
    es2017: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // only function declarations for named components
    'react/function-component-definition': [
      [2, { namedComponents: 'function-declaration' }],
    ],
    // 關閉命名駝峰檢查
    camelcase: 'off',
    // 關閉 import React 檢查，next.js 預設都有加
    'react/react-in-jsx-scope': 'off',
    // .js 和 .jsx 檔案都可以使用 jsx 語法
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 關閉 禁止這種寫法 <App {...props} /> 的檢查
    'react/jsx-props-no-spreading': 'off',
    // 關閉 PropType 型別只單寫 any 、array 或 object 的檢查
    'react/forbid-prop-types': 'off',
    // eslint 與 prettier 設定有衝突，以prettier 為主
    'object-curly-newline': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['CustomInput'],
      },
    ],
  },
};
