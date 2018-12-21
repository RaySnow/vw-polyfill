# vw-polyfill
  Make viewport units (vw) work in unsupported browsers

## Advantage
  1. small: 1kb only
  2. simply: just insert one file
  3. safe: insert vw element to test browser -> convert vw to rem -> set root font-size let 1rem=1vw  
    
## Usage 

  1. download vw-polyfill.min.js  
     or 
     npm i vw-polyfill --save
    
```html
<body>

  <!-- main -->  
  
  <script src="path/to/vw-polyfill.min.js"></script>
  <!--or-->
  <script src="./node_modules/vw-polyfill/vw-polyfill.min.js"></script>
</body>
```

  2. use webpack/gulp/grunt inject plugin （E: [gulp-inject](https://www.npmjs.com/package/gulp-inject)）

  
## Limitations
  1. only support vw unit, for layout, (vin/vmax/vh ✘)
  2. only support link and style tag css in head, （E: <div style="width: 100vw" ✘）
  3. unsupported old IEs (IE 4-8 ✘)

## Effect
  
  ![Image text](https://raw.githubusercontent.com/RaySnow/vw-polyfill/master/test/effect.png)

## Changelog

### 0.0.1 (November 21st 2018) ###


## License

[MIT License](http://opensource.org/licenses/mit-license).


## Suggestion

[使用建议: 推荐一个做移动端多屏兼容和适配的新方案](https://github.com/RaySnow/vw-polyfill/blob/master/other.md)

