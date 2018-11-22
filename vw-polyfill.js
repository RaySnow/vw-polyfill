(function () {
  // 当前浏览器是否支持 vw vh
  function isSupportVw() {
    var body, head, style_block, test_element, test_results;

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
    test_results = testVWSupport(test_element, style_block);
    body.removeChild(test_element);
    head.removeChild(style_block);
    console.log("is support: ", test_results);
    return test_results;
  }

  // 设置html根元素font-size
  function setRootFontSize() {
    var docEl = document.documentElement;

    // set 1rem = clientWidth / 100
    function setRemUnit() {
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

    // 通过ajax重新请求css文件内容
    var getCors = function (url, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = success;
      xhr.onerror = error;
      xhr.send();
      return xhr;
    };

    //   find out and replac all vw to rem
    var replaceAll = function (cssText) {

      return cssText
    };

    // replace vw -> rem
    var replaceVw = function (cssText) {
      console.log("cssTest: ", cssText);
      var vwRe = /([+-]?[0-9.]+)vw/g;
      var vwReOnce = /([+-]?[0-9.]+)vw/;
      var style = document.createElement('style');

      var vmList = cssText.match(vwRe);
      if (vmList) {
        vmList.forEach(function (item) {
          cssText = cssText.replace(vwReOnce, item.replace("vw", "rem"))
        });

        var textNode = document.createTextNode(cssText);
        style.type = 'text/css';
        style.appendChild(textNode);
        var head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(style);
      }
    };

    var styleSheets = document.styleSheets;
    var forEach = [].forEach;
    forEach.call(styleSheets, function(styleSheet) {
      var ownerNode = styleSheet.ownerNode || {};
      if (ownerNode.href) {
        //handle link tag stylesSheet
        getCors(ownerNode.href, function () {
          replaceVw(this.responseText)
        });
      } else if (ownerNode.tagName && ownerNode.tagName.toLowerCase() === "style") {
        //handle style tag stylesSheet
        replaceVw(ownerNode.textContent)
      }
    });
  }

  // 不支持的处理逻辑
  if (!isSupportVw()) {
    console.log("========== 嘿，我执行了");
    setRootFontSize();
    vmToRem()
  }
})();
