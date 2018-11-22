# vw-polyfill（beta，未完成）
Making viewport units (vw) work in unSupported browser

## describe
局限性：
  1. 仅支持vw，不支持vh、vmin、vmax, 此插件的初衷是利用vw实现移动端多屏兼容，而不是支持vw、vh、wmin、wmax这些单位
  2. 只支持外链样式、styles标签内的样式，不支持styles属性样式（嵌入在styles中的样式，部分不支持vw的浏览器会被直接忽略）
  3. 未对ie进行支持


## Using 

## Changelog

### 0.0.1 (November 21st 2018) ###

* debut

## License

viewport-unit-buggyfill is published under the [MIT License](http://opensource.org/licenses/mit-license).

## todo

1. 判断是否支持vw vh 的办法 
2. 外链样式 内嵌样式 标签样式（可不支持）
3. 样式需要按照顺序加载 
4. 样式加载、屏幕翻转等各种情况下重新处理 
5. 使用文档： 布局字体和描述字体
6. 计算后保留4位小数
