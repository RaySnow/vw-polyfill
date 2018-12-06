# vw-polyfill
  Make viewport units (vw) work in unsupported browsers

## Advantage
  1. small: 1kb only
  2. simply: test browser -> convert vw to rem -> set root font-size let 1rem=1vw  
  3. safe: insert vw element to test browser
    
## Usage 

  1. download vw-polyfill.min.js  
     or 
     npm i vw-polyfill --save
    
```html
<body>
  <script src="path/to/vw-polyfill.min.js"></script>
  <!--or-->
  <script src="./node_modules/vw-polyfill/vw-polyfill.min.js"></script>
  <!-- main -->  
</body>
```

  2. use webpack/gulp/grunt inject plugin （E: [gulp-inject](https://www.npmjs.com/package/gulp-inject)）inject into html(<body> -> <script>) 
    
```html
<body>
    <script>
    <!-- inject:/path/to/vw-polyfill.min.js -->
//    or
    <!-- inject:/node_modules/vw-polyfill/polyfill.min.js -->
    <!-- endinject -->    
    </script>
</body>
```
  
## Limitations
  1. only support vw unit, for layout, (vin/vmax/vh  X)
  2. only support <link href=""> and <style > css in <head>, （<div style="width: 100vw">  X）
  3. not old IEs (IE 4-8  X)


## Changelog

### 0.0.1 (November 21st 2018) ###


## License

[MIT License](http://opensource.org/licenses/mit-license).

