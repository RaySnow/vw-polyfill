
(function () {
  // 当前浏览器是否支持 vw vh
  function isSupportVw() {
    var body, head, style_block, test_element, test_results;

    var testVHSupport = function (element, style_block) {
      var comp_style, height;
      applyStyleTest(style_block, 'height: 50vh');
      height = parseInt(window.innerHeight / 2, 10);
      comp_style = parseInt(testElementStyle(element).height, 10);
      clearStyleTests(style_block);
      return comp_style === height;
    };
    var testVWSupport = function (element, style_block) {
      var comp_style, width;
      applyStyleTest(style_block, 'width: 50vw');
      width = parseInt(window.innerWidth / 2, 10);
      comp_style = parseInt(testElementStyle(element).width, 10);
      clearStyleTests(style_block);
      return comp_style === width;
    };
    var applyStyleTest = function (style_block, style) {
      var new_style, test_style;
      new_style = "#vminpolyTests { " + style + "; }";
      if (style_block.styleSheet) {
        return style_block.styleSheet.cssText = new_style;
      } else {
        test_style = document.createTextNode(new_style);
        return style_block.appendChild(test_style);
      }
    };
    var testElementStyle = function (element) {
      if (window.getComputedStyle) {
        return getComputedStyle(element, null);
      } else {
        return element.currentStyle;
      }
    };
    var clearStyleTests = function (style_block) {
      if (style_block.styleSheet) {
        return style_block.styleSheet.cssText = '';
      } else {
        return style_block.innerHTML = '';
      }
    };

    test_element = document.createElement('div');
    test_element.id = "vminpolyTests";
    body = document.body;
    body.appendChild(test_element);
    style_block = document.createElement('style');
    head = document.getElementsByTagName('head')[0];
    head.appendChild(style_block);
    test_results = testVWSupport(test_element, style_block) && testVHSupport(test_element, style_block);
    body.removeChild(test_element);
    head.removeChild(style_block);
    console.log("is support: ", test_results);
    return test_results;
  }

  // 设置html根元素font-size
  function setRootFontSize() {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;

    // adjust body font size
    function setBodyFontSize () {
      if (document.body) {
        document.body.style.fontSize = (12 * dpr) + 'px'
      }
      else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize)
      }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 100
    function setRemUnit () {
      var rem = docEl.clientWidth / 100;
      docEl.style.fontSize = rem + 'px'
    }
    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit()
      }
    })
  }

  // 转换所有样式中的vw -> rem
  function vmToRem() {
    var styleSheets = document.styleSheets;

    styleSheets.forEach(function (styleSheet) {
      var ownerNode = styleSheet.ownerNode;
      if (ownerNode && ownerNode.href) {

      }
    });

    //handle link stylesSheet

    //handle global stylesSheet && inside styleSheet
//    styleSheet.insertRule('.a {color: red;}', 0); //添加到第一个
//    styleSheet.insertRule('.b {width: 100px;}', styleSheet.rules.length);//添加到最后一个
//    var cssRules = styleSheet.cssRules; //cssRules.length可返回CSS规则的个数
//    var cssRules = styleSheet.rules;
//    var cssRule = cssRules[0];


    function getCors(url, success, error) {
      var xhr = new XMLHttpRequest();
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open('GET', url, true);
      xhr.onload = success;
      xhr.onerror = error;
      xhr.send();
      return xhr;
    }
    var ownerNode = styleSheet.ownerNode;
    getCors(ownerNode.href, function() {
      var style = document.createElement('style');
      style.type = 'text/css';
      var cssTest = this.responseText;
      console.log("cssTest: ", cssTest);
      var cssTest_e = cssTest.replace(/vh|vw|vmin|vmax/g,'px');
      var textNode = document.createTextNode(cssTest_e);
      style.appendChild(textNode);
      var head = document.head || document.getElementsByTagName('head')[0];
      head.appendChild(style);


//   循环查找字符串的位子
//      var str = "I think of other ages that floated upon the stream of life and love and death";
//      var positions = new Array();
//      function searchSubStr(str,subStr){
//        var pos = str.indexOf(subStr);
//        while(pos>-1){
//          positions.push(pos);
//          pos = str.indexOf(subStr,pos+1);
//        }
//      }
//      searchSubStr(str,"o");
//      alert(positions);//8,11,29,37,51,64

    });
  }

  // 不支持的处理逻辑
  if (!isSupportVw()) {
    setRootFontSize();
    vmToRem()
  }



})();
