//Tue Apr 22 2025 17:33:02 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
let _0x2f90e5 = "",
  _0x299170 = 0,
  _0x266fb5 = [];
setData = function (_0x303b4c, _0x5d820e, ..._0x59ca17) {
  _0x2f90e5 = _0x303b4c;
  _0x299170 = _0x5d820e;
  _0x266fb5 = _0x59ca17;
};
setData("123456789", 0, "hello");
MainFunc = () => {
  function _0x1ffcd9() {
    function _0x1d6afa(_0x579101, _0x36b305 = "ok") {
      vue.toasted.show(_0x579101, {
        "action": {
          "text": _0x36b305,
          "onClick": (_0x56cf3e, _0x5a8aff) => {
            _0x5a8aff.goAway(0);
          }
        }
      });
    }
    function _0x545e5c(_0x5d3db8) {
      chatPage.msgInput = _0x5d3db8;
      chatPage.msgSend();
    }
    function _0x119b18() {
      chatPage.sockets.emit("syscmd", {
        "msg": "end",
        "countReceive": false,
        "chatId": chatPage.chatId,
        "countTalked": false
      });
      chatPage.chatState = "SELF_LEFT";
    }
    function _0x2dd303() {
      chatPage.sockets.emit("syscmd", {
        "msg": "new",
        "gender": chatPage.gender,
        "vipCode": chatPage.vipCode,
        "age": store.get("ageNew"),
        "ageWant": store.get("ageWant"),
        "secretCode": chatPage.secretCode,
        "province": chatPage.province,
        "provinceWant": store.get("provinceWant"),
        "savedId": chatPage.usrId,
        "isShowLocation": false,
        "fp": chatPage.fingerPrints,
        "phoneNumber": store.get(chatPage.Config.STORE_PHONE_NUMBER),
        "userPwdEncrypted": store.get(chatPage.Config.STORE_PASSWORD_ENCRYPTED)
      });
    }
    let _0x5cffd1 = true;
    chatPage.scriptIsRun = false;
    setInterval(() => {
      {
        if (!chatPage.scriptIsRun) return;
        switch (chatPage.chatState) {
          case "REPAIRED":
          case "PAIRED":
            const _0x463400 = chatPage.partner.strGender;
            if (_0x463400 === chatPage.MatchWho) {
              {
                if (_0x5cffd1) {
                  {
                    try {
                      {
                        const _0x235bea = _0x266fb5[_0x299170];
                        if (_0x235bea) _0x545e5c(_0x235bea);
                      }
                    } catch {}
                    _0x5cffd1 = false;
                  }
                }
                break;
              }
            } else _0x119b18(), _0x2dd303(), _0x5cffd1 = true;
            break;
          case "SELF_LEFT":
          case "PARTNER_LEFT":
            _0x2dd303();
            _0x5cffd1 = true;
            break;
        }
      }
    }, 450);
    const _0x40eb60 = $("<div class=\"list-block\"><ul><li>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">脚本启动</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=\"txt_match\">匹配女性</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">联系方式<br></div><div style=\"width: 100%; text-align: left;\" id=\"btn_sendqq\">发送</div></div></div>                        </li></ul></div>");
    $("#panelLeft .content-block").eq(1).before(_0x40eb60);
    let _0x12c115 = false,
      _0x3f5e03 = true;
    $("#ckb_script")[0].onclick = () => {
      _0x12c115 = !_0x12c115;
      chatPage.scriptIsRun = _0x12c115;
      _0x1d6afa(_0x12c115 ? "脚本已启动！" : "脚本已停止！");
    };
    $("#ckb_match").on("change", function () {
      _0x3f5e03 = this.checked;
      chatPage.MatchWho = _0x3f5e03 ? "女生" : "男生";
      $("#txt_match")[0].innerText = "匹配" + chatPage.MatchWho;
      _0x1d6afa("当前选择：匹配 " + chatPage.MatchWho);
    });
    $("#btn_sendqq")[0].onclick = () => {
      _0x1d6afa("发送联系方式");
      try {
        {
          const _0x1b87c8 = _0x2f90e5;
          if (/^\d+$/.test(_0x1b87c8)) {
            {
              const _0x5acc01 = [];
              for (let _0xdc028b = 0; _0xdc028b < _0x1b87c8.length; _0xdc028b += 3) {
                _0x5acc01.push(_0x1b87c8.substr(_0xdc028b, 3));
              }
              _0x5acc01.forEach((_0x472aa6, _0x126f79) => {
                setTimeout(() => _0x545e5c(_0x472aa6), (_0x126f79 + 1) * 1000);
              });
            }
          } else {
            _0x545e5c(_0x1b87c8);
          }
        }
      } catch (_0x8b482c) {
        console.error("发送失败:", _0x8b482c);
      }
    };
    setTimeout(() => {
      {
        $("#panelLeft .content-block").eq(1).remove();
        $("#panelLeft .content-block").eq(1).remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $(".button.button-link.button-nav.pull-right").remove();
        $("#ckb_match")[0].checked = true;
        $("#txt_match")[0].innerText = "匹配女生";
        chatPage.MatchWho = "女生";
        _0x1d6afa("驭师69号专用插件，如有问题请及时反馈");
      }
    }, 3);
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x1ffcd9();
  }
};
MainFunc();