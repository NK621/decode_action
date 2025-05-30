//Fri May 30 2025 18:44:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x607725, _0x422ee8, ..._0x25d15a) {
  QQ = _0x607725;
  index = _0x422ee8;
  AUTO_MSG = _0x25d15a;
};
setData("123456789", 0, "hello");
MainFunc = () => {
  function _0x410c1c() {
    function _0x3e8783(_0x59abaa, _0x3c7d6c = "ok") {
      vue.toasted.show(_0x59abaa, {
        action: {
          text: _0x3c7d6c,
          onClick: (_0x219d7f, _0x58a9c9) => {
            _0x58a9c9.goAway(0);
          }
        }
      });
    }
    function _0x5d2492(_0x529206) {
      chatPage.msgInput = _0x529206;
      chatPage.msgSend();
    }
    function _0x1b955e() {
      chatPage.sockets.emit("syscmd", {
        msg: "end",
        countReceive: false,
        chatId: chatPage.chatId,
        countTalked: false
      });
      chatPage.chatState = "SELF_LEFT";
    }
    function _0x180b10() {
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
              var _0x29e4ea = chatPage.partner.strGender;
              if (_0x29e4ea == chatPage.MatchWho) {
                if (justonce) {
                  {
                    try {
                      let _0x58debd = AUTO_MSG.length;
                      if (_0x58debd > 1) {
                        const _0x379991 = Math.random() < 0.5 ? 0 : 1;
                        let _0x227b5d = AUTO_MSG[_0x379991];
                        _0x5d2492(_0x227b5d);
                      } else {
                        if (_0x58debd > 0) {
                          {
                            let _0x44816b = AUTO_MSG[index];
                            _0x5d2492(_0x44816b);
                          }
                        }
                      }
                    } catch {}
                    $.toast("已匹配到" + chatPage.MatchWho + "并发送信息！", 800);
                    justonce = false;
                  }
                }
                break;
              }
              _0x1b955e();
              _0x180b10();
              justonce = true;
              break;
            }
          case "SELF_LEFT":
          case "PARTNER_LEFT":
            _0x180b10();
            justonce = true;
            break;
        }
      }
    }, 450);
    var _0x4a8197 = $("<div class=\"list-block\"><ul><li>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">脚本启动</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=\"txt_match\">仅女生</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">发送QQ<br></div><div style=\"width: 100%; text-align: left;\" id=\"btn_sendqq\">发送</div></div></div>                        </li></ul></div>");
    $("#panelLeft .content-block").eq(1).before(_0x4a8197);
    let _0x260812 = false;
    let _0x3792ab = false;
    function _0x2c4c91() {
      _0x260812 = !_0x260812;
      chatPage.scriptIsRun = _0x260812;
      _0x3e8783(chatPage.scriptIsRun ? "脚本已启动！" : "脚本已停止！");
    }
    function _0x1b14a3() {
      _0x3792ab = !_0x3792ab;
      var _0x22b945 = _0x3792ab;
      chatPage.MatchWho = _0x22b945 ? "女生" : "男生";
      $("#txt_match")[0].innerText = "仅" + chatPage.MatchWho;
    }
    function _0x46259e() {
      try {
        var _0x47dd9c = QQ.length;
        _0x47dd9c > 6 && _0x47dd9c <= 10 && (setTimeout(function () {
          _0x5d2492(QQ.substr(0, 3));
        }, 1000), setTimeout(function () {
          _0x5d2492(QQ.substr(3, 3));
        }, 2000), _0x47dd9c == 10 ? (setTimeout(function () {
          {
            _0x5d2492(QQ.substr(6, 3));
          }
        }, 3000), setTimeout(function () {
          _0x5d2492(QQ.substr(9));
        }, 3500)) : setTimeout(function () {
          _0x5d2492(QQ.substr(6));
        }, 3000));
      } catch (_0x40fd14) {}
    }
    $("#ckb_script")[0].onclick = _0x2c4c91;
    $("#ckb_match")[0].onclick = _0x1b14a3;
    $("#btn_sendqq")[0].onclick = _0x46259e;
    setTimeout(() => {
      {
        $("#panelLeft .content-block").eq(1).remove();
        $("#panelLeft .content-block").eq(1).remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $("#ckb_match").click();
        chatPage.MatchWho = "女生";
        _0x3e8783("听说内群专属，电报频道@bdsm368\r\n从倒卖者处获取插件导致无法使用我们概不负责");
      }
    }, 3);
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x410c1c();
  }
};
MainFunc();