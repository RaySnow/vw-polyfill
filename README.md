# vw-polyfill
Make viewport units (vw) work in unsupported mobile browsers

## purpose
  1. 为了移动端浏览器能安全的使用vw单位实现多屏适配，从而让css代码运行在各种尺寸的手机屏幕上，并且和设计稿保持一致
  2. 技术方案为：通过js动态判断当前浏览器是否支持vw单位，如果不支持，把所有css样式中vw转为rem，并设置html font-size为当前浏览器宽度
  的 1/100, 从而使1rem=1vw；
  3. write once run everywhere, 开发者无需考虑多屏适配问题和vw兼容问题
  4. 使用尽可能简单，代码量尽可能少，尽可能不阻塞页面基础样式和逻辑

## Usage 
  1. 下载引用
    下载 vw-polyfill.min.js
    建议在body开始或最后加载，必须加载在head后面，保证css解析完成后执行
    
```html
<body>
  <!-- main -->
  <!-- It is recommended to load vw-polyfill at the bottom of the body tag -->
  <script src="path/to/vw-polyfill.min.js"></script>
</body>
```

  
## limitations
  1. 仅支持vw，不支持vh、vmin、vmax, 此插件的初衷是利用vw实现移动端多屏适配，而不是支持vw、vh、wmin、wmax这些单位
  2. 只支持外链样式和styles标签的样式，不支持其他tag内的style属性样式（Example: <div style="width: 100vw">）
  3. 未对老版本ie进行兼容


## Changelog

### 0.0.1 (November 21st 2018) ###


## License

[MIT License](http://opensource.org/licenses/mit-license).

## TODO
  1. gulp、webpack打包办法
  2. 多浏览器测试
