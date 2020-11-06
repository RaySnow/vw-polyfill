# vw-polyfill
  Make viewport units (vw) work in unsupported browsers

## Advantage
  1. small: 1kb only(before gzip)
  2. simply: just insert one file
  3. safe: insert vw element to test browser -> convert vw to rem -> set root font-size let 1rem=1vw

## Usage

### npm

```bash
   npm i vw-polyfill --save
```
```js
        // main.js
       import vwPolyfill from "vw-polyfill"
       vwPolyfill.init()

       // 部分异步加载的CSS文件，可在渲染完成后重新调用 vwPolyfill.init() 方法
       // reRander: vwPolyfill.init()

```
### cdn

```html
<body>
  <!-- after main script -->
  <script src="path/to/vw-polyfill.min.js"></script>
  <!-- 默认自动调用，如需重新调用，使用： -->
  <!-- auto run init, if you need reRander:  -->
  <!-- window.__vwPolyfill.init() -->
</body>
```


### gulp
  - use webpack/gulp/grunt inject plugin into html （E: [gulp-inject](https://www.npmjs.com/package/gulp-inject)）


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
### 0.1.0 (October 21st 2020) ###
  - 修复部分浏览器（ios微信webview）宽度无法正常获取的问题
  - ！！！不支持vw单位的浏览器，会修改<html>font-size，依赖全局font-size大小的字体会受影响，建议在<body>上添加默认font-size，不要依赖<html>的font-size


## License

[MIT License](http://opensource.org/licenses/mit-license).


## Suggestion

[使用建议: 推荐一个做移动端多屏兼容和适配的新方案](https://github.com/RaySnow/vw-polyfill/blob/master/other.md)

