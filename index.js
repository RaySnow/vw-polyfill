'use strict';

function appendStyle(style, cssText) {
  if (style.type) {
    style.type = 'text/css';
  }
  if (style.styleSheet) {
    return style.styleSheet.cssText = cssText;
  } else {
    var cssTextNode = document.createTextNode(cssText);
    style.appendChild(cssTextNode);
  }
}
function getEleStyle(element) {
  if (window.getComputedStyle) {
    return getComputedStyle(element, null);
  } else {
    return element.currentStyle;
  }
}

// set html root font-size
function setRootFontSize() {
  var de = document.documentElement;
  // set 1rem = clientWidth / 100  (1rem = 1vw)
  function setRem() {
    var rem = de.clientWidth / 100;
    de.style.fontSize = rem + 'px';
  }
  setRem();
  // reset rem unit on page resize
  window.addEventListener('resize', setRem);
  window.addEventListener('pageshow', function (e) {
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
    var styleNew = document.createElement('style');

    var vwList = cssText.match(vwRe);
    if (vwList) {
      vwList.forEach(function (item) {
        cssText = cssText.replace(vwReOnce, item.replace("vw", "rem"))
      });
      appendStyle(styleNew, cssText);
      var head = document.head || document.getElementsByTagName('head')[0];
      head.appendChild(styleNew);
    }
  };

  var links = document.getElementsByTagName("link");
  var styles = document.getElementsByTagName("style");
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
function run() {
  try {
    setRootFontSize();
    vwToRem()
  } catch (e) {
    console.log("ERROR: ", e)
  }
}

function init() {
  try {
    if (!window) {	// 仅在浏览器环境中运行
      return
    }
    var body = document.body;
    var head = document.getElementsByTagName('head')[0];
    var testEle = document.createElement('div');
    var styleEle = document.createElement('style');
    var testCss = "#testVw {  width: 50vw; }";
    var halfWidth = parseInt(window.innerWidth / 2, 10);

    testEle.id = "testVw";
    body.appendChild(testEle);
    head.appendChild(styleEle);

    appendStyle(styleEle, testCss);
    // 修复部分浏览器（ios微信webview）宽度无法正常获取的问题
    setTimeout(() => {
      var testWidth = parseInt(getEleStyle(testEle).width, 10);
      if (testWidth === halfWidth) {
        run()
      }
      body.removeChild(testEle);
      head.removeChild(styleEle);
    }, 1)
  } catch (e) {
    console.log("ERROR: ", e)
  }
}

module.exports = {
  init: init
}
