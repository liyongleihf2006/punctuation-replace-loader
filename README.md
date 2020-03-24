# punctuation-replace-loader

根据上下文，汉语上下文中的英文字符转换成中文字符,英文上下文中的汉语字符转换成英文字符

## Install:

```bash
$ npm install --save-dev punctuation-replace-loader
```

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'punctuation-replace-loader',
        options: {
          zh_en: [
              ['，',','],
              ['。','.'],
              ['：',':']
          ]
        }
      }
    ]
  }
}
```