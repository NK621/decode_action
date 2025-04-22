//Tue Apr 22 2025 02:51:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x1f4e07, _0x43bf65, ..._0x406748) {
  QQ = _0x1f4e07;
  index = _0x43bf65;
  AUTO_MSG = _0x406748;
};
setData("123456789", 0, "hello");
MainFunc = () => {
  function _0x1a8d9a() {
    function _0x3c78a2(_0x569d39, _0xed9fe9 = "ok") {
      vue.toasted.show(_0x569d39, {
        action: {
          text: _0xed9fe9,
          onClick: (_0x35b2d0, _0x1419a8) => {
            _0x1419a8.goAway(0);
          }
        }
      });
    }
    function _0x43a392(_0x48cb1b) {
      chatPage.msgInput = _0x48cb1b;
      chatPage.msgSend();
    }
    function _0x233162() {
      chatPage.sockets.emit("syscmd", {
        msg: "end",
        countReceive: false,
        chatId: chatPage.chatId,
        countTalked: false
      });
      chatPage.chatState = "SELF_LEFT";
    }
    function _0x5607fd() {
      chatPage.sockets.emit("syscmd", {
        msg: "new",
        gender: chatPage.gender,
        vipCode: chatPage.vipCode,
        age: store.get("ageNew"),
        ageWant: store.get("ageWant"),
        secretCode: chatPage.secretCode,
        province: chatPage.province,
        provinceWant: store.get("provinceWant"),
        savedId: chatPage.usrId,
        isShowLocation: false,
        fp: chatPage.fingerPrints,
        phoneNumber: store.get(chatPage.Config.STORE_PHONE_NUMBER),
        userPwdEncrypted: store.get(chatPage.Config.STORE_PASSWORD_ENCRYPTED)
      });
    }
    justonce = true;
    chatPage.scriptIsRun = false;
    setInterval(function () {
      {
        if (!chatPage.scriptIsRun) {
          return;
        }
        switch (chatPage.chatState) {
          case "REPAIRED":
          case "PAIRED":
            {
              var _0x563b95 = chatPage.partner.strGender;
              if (_0x563b95 == chatPage.MatchWho) {
                if (justonce) {
                  try {
                    let _0xc6c72d = AUTO_MSG.length;
                    if (_0xc6c72d > 0) {
                      {
                        let _0x5842c0 = AUTO_MSG[index];
                        _0x43a392(_0x5842c0);
                      }
                    }
                  } catch {}
                  $.toast("已匹配到" + chatPage.MatchWho + "并发送信息！", 800);
                  justonce = false;
                }
                break;
              }
              _0x233162();
              _0x5607fd();
              justonce = true;
              break;
            }
          case "SELF_LEFT":
          case "PARTNER_LEFT":
            _0x5607fd();
            justonce = true;
            break;
        }
      }
    }, 450);
    var _0x11bfb3 = $("<div class=\"list-block\"><ul><li>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">脚本启动</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=\"txt_match\">仅女生</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">发送QQ<br></div><div style=\"width: 100%; text-align: left;\" id=\"btn_sendqq\">发送</div></div></div>                        </li></ul></div>");
    $("#panelLeft .content-block").eq(1).before(_0x11bfb3);
    let _0x75500f = false;
    let _0x33308c = false;
    function _0x5f4ff5() {
      {
        _0x75500f = !_0x75500f;
        chatPage.scriptIsRun = _0x75500f;
        _0x3c78a2(chatPage.scriptIsRun ? "脚本已启动！" : "脚本已停止！");
      }
    }
    function _0x59c9af() {
      _0x33308c = !_0x33308c;
      var _0x2c6dec = _0x33308c;
      chatPage.MatchWho = _0x2c6dec ? "女生" : "男生";
      $("#txt_match")[0].innerText = "仅" + chatPage.MatchWho;
    }
    function _0x38eb20() {
      try {
        var _0x145855 = QQ.length;
        _0x145855 > 6 && _0x145855 <= 10 && (setTimeout(function () {
          _0x43a392(QQ.substr(0, 3));
        }, 1000), setTimeout(function () {
          _0x43a392(QQ.substr(3, 3));
        }, 2000), _0x145855 == 10 ? (setTimeout(function () {
          {
            _0x43a392(QQ.substr(6, 3));
          }
        }, 3000), setTimeout(function () {
          {
            _0x43a392(QQ.substr(9));
          }
        }, 3500)) : setTimeout(function () {
          {
            _0x43a392(QQ.substr(6));
          }
        }, 3000));
      } catch (_0x2bb7b2) {}
    }
    $("#ckb_script")[0].onclick = _0x5f4ff5;
    $("#ckb_match")[0].onclick = _0x59c9af;
    $("#btn_sendqq")[0].onclick = _0x38eb20;
    setTimeout(() => {
      {
        $("#panelLeft .content-block").eq(1).remove();
        $("#panelLeft .content-block").eq(1).remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $("#ckb_match").click();
        chatPage.MatchWho = "女生";
        _0x3c78a2("听说内群专属，电报频道@bdsm368\r\n从倒卖者处获取插件导致无法使用我们概不负责");
      }
    }, 3);
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x1a8d9a();
  }
};
MainFunc();