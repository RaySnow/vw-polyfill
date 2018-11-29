# vw-polyfill（beta，未完成）
Making viewport units (vw) work in unSupported mobile browsers

## purpose
  1. 为了移动端浏览器能安全的使用vw单位实现多屏适配，从而让css代码运行在各种尺寸的手机屏幕上，并且和设计稿保持一致
  2. 技术方案为：通过js动态判断当前浏览器是否支持vw单位，如果不支持，把所有css样式中vw转为rem，并设置html font-size为当前浏览器宽度
  的 1/100, 从而使1rem=1vw；
  3. write once run everywhere, 开发者无需考虑多屏适配问题和vw兼容问题
  4. 使用尽可能简单，代码量尽可能少，尽可能不阻塞页面基础样式和逻辑
  
## limitations
  1. 仅支持vw，不支持vh、vmin、vmax, 此插件的初衷是利用vw实现移动端多屏适配，而不是支持vw、vh、wmin、wmax这些单位
  2. 只支持外链样式、styles标签内的样式，不支持styles属性样式（嵌入在styles中的样式，部分不支持vw的浏览器会被直接忽略）
  3. 未对老版本ie进行兼容

## Usage 
  1. 下载引用
    建议在body开始或最后加载，必须加载在head后面，保证css解析完成后执行
  2. gulp
  3. webpack
  4. cdn 


## Changelog

### 0.0.1 (November 21st 2018) ###


## License

[MIT License](http://opensource.org/licenses/mit-license).

## todo
  1. npm 包
  2. gulp、webpack打包办法
  3. cdn
  4. 多浏览器测试
  5. 打包和压缩  
