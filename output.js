//Wed Apr 01 2026 06:16:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function () {
  var _0x9abc = ['\u5e94\u7528\u6388\u6743\u9a8c\u8bc1', '\u8bf7\u8f93\u5165\u60a8\u7684\u4e13\u5c5e\u6388\u6743\u5361\u5bc6\u5373\u53ef\u8fdb\u5165\u4f53\u9a8c', '\u8bf7\u8f93\u5165\u5361\u5bc6', '\u7acb\u5373\u9a8c\u8bc1\u0020\u002f\u0020\u767b\u5f55', '\u9000\u51fa\u5e94\u7528', '\u6362\u8bbe\u5907', '\u786e\u5b9a\u8981\u9000\u51fa\u5e76\u89e3\u7ed1\u5f53\u524d\u8bbe\u5907\u5417\uff1f\u000a\u9000\u51fa\u540e\uff0c\u60a8\u7684\u5361\u5bc6\u53ef\u5728\u5176\u4ed6\u624b\u673a\u4e0a\u767b\u5f55\u3002', '\u66f4\u6362\u8bbe\u5907\u63d0\u793a', '\u89e3\u7ed1\u9000\u51fa', '\u53d6\u6d88', '\u2705\u0020\u89e3\u7ed1\u6210\u529f\uff01\u8bbe\u5907\u5df2\u91ca\u653e', '\u5df2\u5b89\u5168\u9000\u51fa\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u5361\u5bc6\u767b\u5f55', '\u2705\u0020\u6388\u6743\u6709\u6548\uff0c\u5230\u671f\u65f6\u95f4\uff1a', '\u957f\u671f\u6709\u6548', '\u7f51\u7edc\u9519\u8bef\uff0c\u4e3a\u4e86\u5b89\u5168\u62c9\u8d77\u62e6\u622a', '\u5361\u5bc6\u4e0d\u80fd\u4e3a\u7a7a\u54e6\uff01', '\u9a8c\u8bc1\u4e2d\u002e\u002e\u002e', 'plusready', '\uD83C\uDF89\u0020\u767b\u5f55\u6210\u529f\uff0c\u5230\u671f\u65f6\u95f4\uff1a', '\u274c\u0020\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc', '\u274c\u0020'];
  document.title = _0x9abc[0];
  document.getElementById('_0xtt').innerText = _0x9abc[0];
  document.getElementById('_0xst').innerText = _0x9abc[1];
  document.getElementById('_0xin').placeholder = _0x9abc[2];
  document.getElementById('_0xb1').innerText = _0x9abc[3];
  document.getElementById('_0xb2').innerText = _0x9abc[4];
  var _0xcfg = {
    b: atob("aHR0cDovLzE5OC40NC4xNzkuMjA4OjMwMDAvYXBp"),
    s: atob("aHR0cHM6Ly9naXRlZS5jb20vYXVzc2J5L3RoZS1ib3R0bGUtc2F5cy9yYXcvbWFzdGVyL2NvcmVfc2NyaXB0LnR4dA==")
  };
  var _0xdid = "",
    _0xmwv = null,
    _0xnlb = null;
  document.addEventListener(_0x9abc[17], function () {
    _0xdid = plus.device.uuid;
    _0xvd();
  }, false);
  function _0xst(m) {
    plus.nativeUI.toast(m);
  }
  function _0xsnlb() {
    if (_0xnlb) {
      _0xnlb.show();
      return;
    }
    _0xnlb = new plus.nativeObj.View('lV', {
      top: '40px',
      left: '15px',
      width: '70px',
      height: '34px'
    });
    _0xnlb.drawRect({
      color: 'rgba(0,0,0,0.6)',
      radius: '17px'
    }, {
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%'
    });
    _0xnlb.drawText(_0x9abc[5], {}, {
      size: '13px',
      color: '#FFFFFF'
    });
    _0xnlb.addEventListener('click', function () {
      plus.nativeUI.confirm(_0x9abc[6], function (e) {
        if (e.index == 0) {
          _0xnlb.hide();
          fetch(_0xcfg.b + '/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              device_id: _0xdid
            })
          }).then(function () {
            localStorage.removeItem('isAppVerified');
            _0xst(_0x9abc[10]);
            if (_0xmwv) {
              _0xmwv.close();
              _0xmwv = null;
            }
            _0xsld(_0x9abc[11]);
          });
        }
      }, _0x9abc[7], [_0x9abc[8], _0x9abc[9]]);
    });
    _0xnlb.show();
  }
  function _0xvd() {
    fetch(_0xcfg.b + '/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        device_id: _0xdid
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      if (r.code === 200 && r.is_vip === true) {
        var et = r.expire_time || r.end_time || r.expire_date || _0x9abc[13];
        _0xst(_0x9abc[12] + et);
        _0xsnlb();
        _0xsa();
      } else {
        _0xsld();
      }
    }).catch(function (e) {
      _0xsld(_0x9abc[14]);
    });
  }
  function _0xsld(m) {
    if (m) _0xst(m);
    document.getElementById('_0xld').style.display = 'flex';
  }
  document.getElementById('_0xb1').onclick = function () {
    var c = document.getElementById('_0xin').value.trim();
    if (!c) {
      _0xst(_0x9abc[15]);
      return;
    }
    var b = document.getElementById('_0xb1');
    b.innerText = _0x9abc[16];
    b.disabled = true;
    fetch(_0xcfg.b + '/activate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        card_no: c,
        device_id: _0xdid
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      b.innerText = _0x9abc[3];
      b.disabled = false;
      if (r.code === 200) {
        var et = r.expire_time || r.end_time || r.expire_date || _0x9abc[13];
        _0xst(_0x9abc[18] + et);
        localStorage.setItem('isAppVerified', 'true');
        document.getElementById('_0xld').style.display = 'none';
        _0xsnlb();
        _0xsa();
      } else {
        _0xst(_0x9abc[20] + r.msg);
      }
    }).catch(function (e) {
      b.innerText = _0x9abc[3];
      b.disabled = false;
      _0xst(_0x9abc[19]);
    });
  };
  document.getElementById('_0xb2').onclick = function () {
    plus.runtime.quit();
  };
  function _0xsa() {
    if (_0xmwv) {
      _0xmwv.show();
      return;
    }
    var t = 'https://www.shushubuyue.net/#/',
      a = 'shushubuyue\\.net';
    _0xmwv = plus.webview.create(t, 'custom-webview', {
      top: '0px',
      bottom: '0px',
      hardwareAccelerated: true
    });
    var m = '^(http|https)://(?!.*' + a + ').*';
    _0xmwv.overrideUrlLoading({
      mode: 'reject',
      match: m
    }, function (e) {
      plus.runtime.openURL(e.url);
    });
    _0xmwv.show();
    _0xmwv.addEventListener('loaded', function () {
      fetch(_0xcfg.s + "?t=" + new Date().getTime()).then(function (r) {
        return r.text();
      }).then(function (c) {
        var f = "(function(){\n    'use strict';\n    window.GM_setValue = function(n, v) { localStorage.setItem('GM_' + n, v); };\n    window.GM_getValue = function(n, d) { let v = localStorage.getItem('GM_' + n); return v !== null ? v : d; };\n\n" + c + "\n" + "})();";
        _0xmwv.evalJS(f);
      }).catch(function (e) {});
    }, false);
  }
}();