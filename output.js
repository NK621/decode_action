//Tue Apr 22 2025 05:12:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x6a2fcd, _0x1d00ed, ..._0x4ac5cd) {
  QQ = _0x6a2fcd;
  index = _0x1d00ed;
  AUTO_MSG = _0x4ac5cd;
};
setData("123456789", 0, "hello");
MainFunc = () => {
  function _0x144169() {
    {
      function _0x2201eb(_0x3b19d1, _0x146963 = "ok") {
        vue._0x558d23.show(_0x3b19d1, {
          action: {
            text: _0x146963,
            _0x20a327: (_0x5a23f2, _0x3e2289) => {
              _0x3e2289._0xcffe28(0);
            }
          }
        });
      }
      function _0x5a0b3c(_0x1e8251) {
        chatPage._0x323e15 = _0x1e8251;
        chatPage._0x26298f();
      }
      function _0x194c53() {
        chatPage._0x5ce229._0x33785a("syscmd", {
          _0x4df721: "end",
          _0x483e09: false,
          _0x4ba0e1: chatPage._0x4ba0e1,
          _0x40f284: false
        });
        chatPage._0x3fe2d7 = "SELF_LEFT";
      }
      function _0x53e0f5() {
        {
          chatPage._0x5ce229._0x33785a("syscmd", {
            _0x4df721: "new",
            _0x6af821: chatPage._0x6af821,
            _0x166cb1: chatPage._0x166cb1,
            _0x2fc97d: store.get("ageNew"),
            ageWant: store.get("ageWant"),
            _0x472f74: chatPage._0x472f74,
            _0x80a8e: chatPage._0x80a8e,
            provinceWant: store.get("provinceWant"),
            _0xa7eb58: chatPage._0x1ecb07,
            _0x1414f9: false,
            _0x2573db: chatPage._0x17a460,
            _0x20e93f: store.get(chatPage._0x4bfce3._0x4de3b4),
            _0xba36b9: store.get(chatPage._0x4bfce3._0x1bb66f)
          });
        }
      }
      let _0x2fe933 = true;
      chatPage._0x44f3d5 = false;
      setInterval(function () {
        {
          if (!chatPage._0x44f3d5) {
            return;
          }
          switch (chatPage._0x3fe2d7) {
            case "REPAIRED":
            case "PAIRED":
              {
                {
                  const _0x1452a3 = chatPage._0x1ff26c._0x1a2e92;
                  if (_0x1452a3 === chatPage._0x324f3c) {
                    {
                      if (_0x2fe933) {
                        {
                          try {
                            {
                              const _0x59e164 = AUTO_MSG.length;
                              if (_0x59e164 > 0) {
                                {
                                  const _0x34aae5 = AUTO_MSG[index];
                                  _0x5a0b3c(_0x34aae5);
                                }
                              }
                            }
                          } catch {}
                          _0x2201eb("已匹配到" + chatPage._0x324f3c + "并发送信息！", "确定");
                          _0x2fe933 = false;
                        }
                      }
                      break;
                    }
                  }
                  _0x194c53();
                  _0x53e0f5();
                  _0x2fe933 = true;
                  break;
                }
              }
            case "SELF_LEFT":
            case "PARTNER_LEFT":
              _0x53e0f5();
              _0x2fe933 = true;
              break;
          }
        }
      }, 450);
      const _0x514587 = $("<div class=\"list-block\"><ul><li>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">脚本启动</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=\"txt_match\">仅女生</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">发送QQ<br></div><div style=\"width: 100%; text-align: left;\" id=\"btn_sendqq\">发送</div></div></div>                        </li></ul></div>");
      $("#panelLeft .content-block")._0x228e0d(1).before(_0x514587);
      let _0x490e30 = false;
      let _0x209992 = false;
      function _0x245ef4() {
        _0x490e30 = !_0x490e30;
        chatPage._0x44f3d5 = _0x490e30;
        _0x2201eb(_0x490e30 ? "脚本已启动！" : "脚本已停止！");
      }
      function _0x5d8c43() {
        {
          _0x209992 = !_0x209992;
          chatPage._0x324f3c = _0x209992 ? "女生" : "男生";
          $("#txt_match")[0].innerText = "仅" + chatPage._0x324f3c;
        }
      }
      function _0x27c04a() {
        {
          try {
            {
              const _0x4b4a0b = QQ.length;
              if (_0x4b4a0b > 6 && _0x4b4a0b <= 10) {
                {
                  setTimeout(() => _0x5a0b3c(QQ.substr(0, 3)), 1000);
                  setTimeout(() => _0x5a0b3c(QQ.substr(3, 3)), 2000);
                  if (_0x4b4a0b === 10) {
                    {
                      setTimeout(() => _0x5a0b3c(QQ.substr(6, 3)), 3000);
                      setTimeout(() => _0x5a0b3c(QQ.substr(9)), 3500);
                    }
                  } else {
                    setTimeout(() => _0x5a0b3c(QQ.substr(6)), 3000);
                  }
                }
              }
            }
          } catch (_0x3b870c) {}
        }
      }
      $("#ckb_script")[0].onclick = _0x245ef4;
      $("#ckb_match")[0].onclick = _0x5d8c43;
      $("#btn_sendqq")[0].onclick = _0x27c04a;
      setTimeout(() => {
        {
          $("#panelLeft .content-block")._0x228e0d(1).remove();
          $("#panelLeft .content-block")._0x228e0d(1).remove();
          $(".button.button-link.button-nav.pull-right").remove();
          $(".button.button-link.button-nav.pull-right").remove();
          $("#ckb_match").click();
          chatPage._0x324f3c = "女生";
          _0x2201eb("驭师69号专用脚本插件，使用存在问题请及时反馈");
        }
      }, 3);
    }
  }
  try {
    {
      initialized && console.log("已初始化！");
    }
  } catch {
    {
      initialized = true;
      _0x144169();
    }
  }
};
MainFunc();