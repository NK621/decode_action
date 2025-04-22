//Tue Apr 22 2025 17:34:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
let QQ = "",
  index = 0,
  AUTO_MSG = [];
setData = function (_0xb8921f, _0x404031, ..._0x53950d) {
  QQ = _0xb8921f;
  index = _0x404031;
  AUTO_MSG = _0x53950d;
};
setData("123456789", 0, "hello");
MainFunc = () => {
  function _0x33f8d0() {
    function _0x1a236d(_0x1e2b6d, _0x1c5807 = "ok") {
      vue.toasted.show(_0x1e2b6d, {
        "action": {
          "text": _0x1c5807,
          "onClick": (_0x10f7a8, _0x1b40fc) => {
            _0x1b40fc.goAway(0);
          }
        }
      });
    }
    function _0x4f15a5(_0x53beaa) {
      chatPage.msgInput = _0x53beaa;
      chatPage.msgSend();
    }
    function _0x2672b5() {
      chatPage.sockets.emit("syscmd", {
        "msg": "end",
        "countReceive": false,
        "chatId": chatPage.chatId,
        "countTalked": false
      });
      chatPage.chatState = "SELF_LEFT";
    }
    function _0x4d0b07() {
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
    let _0x370fda = true;
    chatPage.scriptIsRun = false;
    setInterval(() => {
      if (!chatPage.scriptIsRun) return;
      switch (chatPage.chatState) {
        case "REPAIRED":
        case "PAIRED":
          const _0x480f04 = chatPage.partner.strGender;
          if (_0x480f04 === chatPage.MatchWho) {
            if (_0x370fda) {
              try {
                const _0x325230 = AUTO_MSG[index];
                if (_0x325230) _0x4f15a5(_0x325230);
              } catch {}
              _0x370fda = false;
            }
            break;
          } else _0x2672b5(), _0x4d0b07(), _0x370fda = true;
          break;
        case "SELF_LEFT":
        case "PARTNER_LEFT":
          _0x4d0b07();
          _0x370fda = true;
          break;
      }
    }, 450);
    const _0x541a73 = $("<div class=\"list-block\"><ul><li>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">脚本启动</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=\"txt_match\">匹配女性</div><div class=\"item-input\"><label class=\"label-switch\"><input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\"><div class=\"checkbox\"></div></label></div></div></div>                        <div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\">联系方式<br></div><div style=\"width: 100%; text-align: left;\" id=\"btn_sendqq\">发送</div></div></div>                        </li></ul></div>");
    $("#panelLeft .content-block").eq(1).before(_0x541a73);
    let _0x197b68 = false,
      _0x5dae50 = true;
    $("#ckb_script")[0].onclick = () => {
      _0x197b68 = !_0x197b68;
      chatPage.scriptIsRun = _0x197b68;
      _0x1a236d(_0x197b68 ? "脚本已启动！" : "脚本已停止！");
    };
    $("#ckb_match").on("change", function () {
      _0x5dae50 = this.checked;
      chatPage.MatchWho = _0x5dae50 ? "女生" : "男生";
      $("#txt_match")[0].innerText = "匹配" + chatPage.MatchWho;
      _0x1a236d("当前选择：匹配 " + chatPage.MatchWho);
    });
    $("#btn_sendqq")[0].onclick = () => {
      _0x1a236d("发送联系方式");
      try {
        const _0x2006f8 = QQ;
        if (/^\d+$/.test(_0x2006f8)) {
          const _0x21e524 = [];
          for (let _0x1d78fe = 0; _0x1d78fe < _0x2006f8.length; _0x1d78fe += 3) {
            _0x21e524.push(_0x2006f8.substr(_0x1d78fe, 3));
          }
          _0x21e524.forEach((_0xb0fc9e, _0x1ca3d7) => {
            setTimeout(() => _0x4f15a5(_0xb0fc9e), (_0x1ca3d7 + 1) * 1000);
          });
        } else _0x4f15a5(_0x2006f8);
      } catch (_0x5d62e8) {
        console.error("发送失败:", _0x5d62e8);
      }
    };
    setTimeout(() => {
      $("#panelLeft .content-block").eq(1).remove();
      $("#panelLeft .content-block").eq(1).remove();
      $(".button.button-link.button-nav.pull-right").remove();
      $(".button.button-link.button-nav.pull-right").remove();
      $("#ckb_match")[0].checked = true;
      $("#txt_match")[0].innerText = "匹配女生";
      chatPage.MatchWho = "女生";
      _0x1a236d("驭师69号专用插件，如有问题请及时反馈");
    }, 3);
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x33f8d0();
  }
};
MainFunc();