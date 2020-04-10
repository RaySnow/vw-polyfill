(function () {
  var win = window;
  var doc = win.document;
  function appendStyle(style, cssText) {
    if (style.type) {
      style.type = 'text/css';
    }
    if (style.styleSheet) {
      return style.styleSheet.cssText = cssText;
    } else {
      var cssTextNode = doc.createTextNode(cssText);
      style.appendChild(cssTextNode);
    }
  }
  function getEleStyle(element) {
    if (win.getComputedStyle) {
      return getComputedStyle(element, null);
    } else {
      return element.currentStyle;
    }
  }

  // is current browser support vw
  function isSupportVw() {
    var body = doc.body;
    var head = doc.getElementsByTagName('head')[0];
    var testEle = doc.createElement('div');
    var styleEle = doc.createElement('style');
    var testCss = "#testVw {  width: 50vw; }";
    var width = parseInt(win.innerWidth / 2, 10);

    testEle.id = "testVw";
    body.appendChild(testEle);
    head.appendChild(styleEle);

    appendStyle(styleEle, testCss);
    var test_width = parseInt(getEleStyle(testEle).width, 10);
    var isSupport = test_width === width;
    body.removeChild(testEle);
    head.removeChild(styleEle);
    return isSupport;
  }

  // set html root font-size
  function setRootFontSize() {
    var de = doc.documentElement;
    // set 1rem = clientWidth / 100  (1rem = 1vw)
    function setRem() {
      var rem = de.clientWidth / 100;
      de.style.fontSize = rem + 'px';
    }
    setRem();
    // reset rem unit on page resize
    win.addEventListener('resize', setRem);
    win.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRem()
      }
    })
  }

  // replace all vw -> rem
  function vwToRem() {
    // get css from url use ajax
    var getCssText = function (url, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = success;
      xhr.onerror = error;
      xhr.send();
      return xhr;
    };

    // replace vw -> rem
    var replaceVw = function (cssText) {
      var vwRe = /([+-]?[0-9.]+)vw/g;
      var vwReOnce = /([+-]?[0-9.]+)vw/;
      var styleNew = doc.createElement('style');

      var vwList = cssText.match(vwRe);
      if (vwList) {
        vwList.forEach(function (item) {
          cssText = cssText.replace(vwReOnce, item.replace("vw", "rem"))
        });
        appendStyle(styleNew, cssText);
        var head = doc.head || doc.getElementsByTagName('head')[0];
        head.appendChild(styleNew);
      }
    };

    var links = doc.getElementsByTagName("link");
    var styles = doc.getElementsByTagName("style");
    var forEach = [].forEach;
    forEach.call(styles, function(style) {
        replaceVw(style.textContent)
    });
    forEach.call(links, function(link) {
      getCssText(link.href, function () {
        replaceVw(this.responseText)
      });
    });
  }

  win.__vwPolyfill = {
    isSupportVw: isSupportVw,
    run: run,
    init: init
  }

  if (!isSupportVw()) {
    setRootFontSize();
    vwToRem()
  }
})();
