# vw-polyfill
  Make viewport units (vw) work in unsupported browsers

## Advantage
  1. small: 1kb only
  2. simply: just insert one file
  3. safe: insert vw element to test browser -> convert vw to rem -> set root font-size let 1rem=1vw

## Usage

### npm

```bash
   npm i vw-polyfill --save
```
```js
       import vwPolyfill from "vw-polyfill"
       vwPolyfill.init()

       // 页面初始化完成后，异步加载的CSS文件，可在渲染完成后重新调用 vwPolyfill.run() 方法

```
### cdn

```html
<body>
  <!-- after main script -->
  <script src="path/to/vw-polyfill.min.js"></script>
</body>
```


### gulp
  - use webpack/gulp/grunt inject plugin into html （E: [gulp-inject](https://www.npmjs.com/package/gulp-inject)）


## API
  - init 判断当前浏览器是否支持vw单位，如不支持，运行run方法
  - run 查找和替换css文件中的vw单位为rem单位
  - isSupportVw 判断当前浏览器是否支持VW单位
  - 通过script方式引入的，以上API在window.__vwPolyfill对象上（会默认运行init方法）



## Limitations
  1. only support vw unit, for layout, (vin/vmax/vh ✘)
  2. only support link and style tag css in head, （E: <div style="width: 100vw" ✘）
  3. unsupported old IEs (IE 4-8 ✘)

## Effect

  ![Image text](https://raw.githubusercontent.com/RaySnow/vw-polyfill/master/test/effect.png)

## Changelog

### 0.0.1 (November 21st 2018) ###
### 0.1.0 (November 21st 2020) ###
  - 支持npm方式引入
  - 支持异步加载css文件的处理 （文件加载后手动调用 'run' 方法）


## License

[MIT License](http://opensource.org/licenses/mit-license).


## Suggestion

[使用建议: 推荐一个做移动端多屏兼容和适配的新方案](https://github.com/RaySnow/vw-polyfill/blob/master/other.md)

