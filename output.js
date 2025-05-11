//Sun May 11 2025 07:20:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x3a32f5, _0x4a36be, ..._0x5e1bed) {
  QQ = _0x3a32f5;
  index = _0x4a36be;
  AUTO_MSG = _0x5e1bed;
};
setData("123456789", 0, "hello");
MainFunc = () => {
  function _0x531923() {
    {
      function _0x2350b1(_0x1d84bd, _0x278209 = "ok") {
        {
          vue.toasted.show(_0x1d84bd, {
            action: {
              text: _0x278209,
              onClick: (_0x1feeab, _0x32f998) => {
                _0x32f998.goAway(0);
              }
            }
          });
        }
      }
      function _0xde1ee2(_0x56c1ba) {
        chatPage.msgInput = _0x56c1ba;
        chatPage.msgSend();
      }
      function _0x206990() {
        {
          chatPage.sockets.emit("syscmd", {
            msg: "end",
            countReceive: false,
            chatId: chatPage.chatId,
            countTalked: false
          });
          chatPage.chatState = "SELF_LEFT";
        }
      }
      function _0x53f571() {
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
        if (!chatPage.scriptIsRun) {
          return;
        }
        switch (chatPage.chatState) {
          case "REPAIRED":
          case "PAIRED":
            {
              {
                var _0xcb95f8 = chatPage.partner.strGender;
                if (_0xcb95f8 == chatPage.MatchWho) {
                  if (justonce) {
                    try {
                      {
                        let _0x3e4e33 = AUTO_MSG.length;
                        if (_0x3e4e33 > 1) {
                          {
                            const _0x2d3f95 = Math.random() < 0.5 ? 0 : 1;
                            let _0x323594 = AUTO_MSG[_0x2d3f95];
                            _0xde1ee2(_0x323594);
                          }
                        }
                        if (_0x3e4e33 > 0) {
                          let _0x53ee45 = AUTO_MSG[index];
                          _0xde1ee2(_0x53ee45);
                        }
                      }
                    } catch {}
                    $.toast("已匹配到" + chatPage.MatchWho + "并发送信息！", 800);
                    justonce = false;
                  }
                  break;
                }
                _0x206990();
                _0x53f571();
                justonce = true;
                break;
              }
            }
          case "SELF_LEFT":
          case "PARTNER_LEFT":
            _0x53f571();
            justonce = true;
            break;
        }
      }, 450);
      var _0x4b1715 = $("<div class=\"list-block\"><ul><li>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">脚本启动</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=\"txt_match\">仅女生</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">发送QQ<br></div><div style=\"width: 100%; text-align: left;\" id=\"btn_sendqq\">发送</div></div></div>                        </li></ul></div>");
      $("#panelLeft .content-block").eq(1).before(_0x4b1715);
      let _0x2c3e87 = false;
      let _0x5f19e7 = false;
      function _0x45a19d() {
        _0x2c3e87 = !_0x2c3e87;
        chatPage.scriptIsRun = _0x2c3e87;
        _0x2350b1(chatPage.scriptIsRun ? "脚本已启动！" : "脚本已停止！");
      }
      function _0x103955() {
        _0x5f19e7 = !_0x5f19e7;
        var _0x2541d0 = _0x5f19e7;
        chatPage.MatchWho = _0x2541d0 ? "女生" : "男生";
        $("#txt_match")[0].innerText = "仅" + chatPage.MatchWho;
      }
      function _0x54a116() {
        try {
          {
            var _0x589c21 = QQ.length;
            _0x589c21 > 6 && _0x589c21 <= 10 && (setTimeout(function () {
              _0xde1ee2(QQ.substr(0, 3));
            }, 1000), setTimeout(function () {
              _0xde1ee2(QQ.substr(3, 3));
            }, 2000), _0x589c21 == 10 ? (setTimeout(function () {
              {
                _0xde1ee2(QQ.substr(6, 3));
              }
            }, 3000), setTimeout(function () {
              {
                _0xde1ee2(QQ.substr(9));
              }
            }, 3500)) : setTimeout(function () {
              _0xde1ee2(QQ.substr(6));
            }, 3000));
          }
        } catch (_0xe3c3b0) {}
      }
      $("#ckb_script")[0].onclick = _0x45a19d;
      $("#ckb_match")[0].onclick = _0x103955;
      $("#btn_sendqq")[0].onclick = _0x54a116;
      setTimeout(() => {
        $("#introTitle").remove();
        $("#introTitleEn").remove();
        $(".title").remove();
        $(".title-en").remove();
        $("#panelLeft .content-block").eq(1).remove();
        $("#panelLeft .content-block").eq(1).remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $("#ckb_match").click();
        chatPage.MatchWho = "女生";
        _0x2350b1("听说内群专属，电报频道@bdsm368\r\n从倒卖者处获取插件导致无法使用我们概不负责");
      }, 3);
    }
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x531923();
  }
};
MainFunc();