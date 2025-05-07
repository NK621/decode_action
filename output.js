//Wed May 07 2025 01:20:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let 开关 = GM_getValue("开关"),
  男 = GM_getValue("男"),
  女 = GM_getValue("女"),
  省份开关 = GM_getValue("省份开关"),
  消息开关 = GM_getValue("消息开关"),
  省份 = GM_getValue("省份"),
  消息 = GM_getValue("消息");
function leave() {
  var _0x1b2377 = document.querySelector("a.button-link.chat-control");
  if (_0x1b2377) _0x1b2377.click();
  var _0x2e48b1 = document.querySelector("span.actions-modal-button.actions-modal-button-bold.color-danger");
  if (_0x2e48b1) _0x2e48b1.click();
  var _0x131b2f = document.querySelector("span.chat-control");
  if (_0x131b2f && _0x131b2f.innerText) {
    if (typeof _0x131b2f.innerText == "string" && _0x131b2f.innerText == "离开") _0x131b2f.click(), setTimeout(function () {
      _0x131b2f.click();
    }, 500);else typeof _0x131b2f.innerText == "string" && _0x131b2f.innerText == "重新开始" ? _0x131b2f.click() : (location.reload(), console.log("error restartButton"));
  }
}
function match() {
  console.log("开始匹配");
  var _0x1c1959 = document.querySelector("div[class=\"sys-msg-keep sys-msg-partner-info\"]>div[class=\"message-text\"]>div[id=\"partnerInfoText\"]");
  if (_0x1c1959) var _0x2e7e17 = _0x1c1959.innerText;
  let _0x2c76db = _0x2e7e17.split(" "),
    _0x4376f5 = GM_getValue("男"),
    _0x5eeee4 = GM_getValue("女"),
    _0x160dec = GM_getValue("省份"),
    _0x5c4107 = GM_getValue("消息"),
    _0x165260 = GM_getValue("省份开关"),
    _0xecff08 = GM_getValue("消息开关");
  if (_0x4376f5 ^ _0x5eeee4) {
    {
      console.log("男：" + _0x4376f5 + "女：" + _0x5eeee4);
      if (!_0x5eeee4 && _0x4376f5 && _0x165260 == false || _0x160dec == "任意") {
        {
          if (_0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2e7e17.indexOf("男") !== -1) {
            if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0xecff08 == true && _0x5c4107 !== "空") {
              console.log("性别男省份" + _0x160dec);
              console.log("匹配成功");
              document.querySelector("#msgInput").focus();
              document.querySelector("#msgInput").value = _0x5c4107;
              let _0xef78 = new Event("change"),
                _0xe5dc00 = new Event("input");
              document.querySelector("#msgInput").dispatchEvent(_0xef78);
              document.querySelector("#msgInput").dispatchEvent(_0xe5dc00);
              setTimeout(() => {
                document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
              }, 500);
            }
          }
          _0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2e7e17.indexOf("男") == -1 && leave();
        }
      }
      if (!_0x5eeee4 && _0x4376f5 && _0x165260 == true && _0x160dec !== "任意") {
        if (_0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2e7e17.indexOf("男") !== -1 && _0x2c76db[_0x2c76db.length - 1] == _0x160dec) {
          if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0xecff08 == true && _0x5c4107 !== "空") {
            console.log("性别男省份" + _0x160dec);
            console.log("匹配成功");
            document.querySelector("#msgInput").focus();
            document.querySelector("#msgInput").value = _0x5c4107;
            let _0x34036a = new Event("change"),
              _0x389246 = new Event("input");
            document.querySelector("#msgInput").dispatchEvent(_0x34036a);
            document.querySelector("#msgInput").dispatchEvent(_0x389246);
            setTimeout(() => {
              document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
            }, 500);
          }
        }
        _0x2e7e17 && typeof _0x2e7e17 == "string" && (_0x2e7e17.indexOf("男") == -1 || _0x2c76db[_0x2c76db.length - 1] !== _0x160dec) && leave();
      }
      if (!_0x4376f5 && _0x5eeee4 && _0x165260 == false || _0x160dec == "任意") {
        if (_0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2e7e17.indexOf("女") !== -1) {
          {
            if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0xecff08 == true && _0x5c4107 !== "空") {
              console.log("性别女省份" + _0x160dec);
              console.log("匹配成功");
              document.querySelector("#msgInput").focus();
              document.querySelector("#msgInput").value = _0x5c4107;
              let _0x34f2ec = new Event("change"),
                _0x8830df = new Event("input");
              document.querySelector("#msgInput").dispatchEvent(_0x34f2ec);
              document.querySelector("#msgInput").dispatchEvent(_0x8830df);
              setTimeout(() => {
                document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
              }, 500);
            }
          }
        }
        _0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2e7e17.indexOf("女") == -1 && leave();
      }
      if (!_0x4376f5 && _0x5eeee4 && _0x165260 == true && _0x160dec !== "任意") {
        {
          if (_0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2e7e17.indexOf("女") !== -1 && _0x2c76db[_0x2c76db.length - 1] == _0x160dec) {
            {
              if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0xecff08 == true && _0x5c4107 !== "空") {
                {
                  console.log("性别女省份" + _0x160dec);
                  console.log("匹配成功");
                  document.querySelector("#msgInput").focus();
                  document.querySelector("#msgInput").value = _0x5c4107;
                  let _0x5401c7 = new Event("change"),
                    _0x4f989b = new Event("input");
                  document.querySelector("#msgInput").dispatchEvent(_0x5401c7);
                  document.querySelector("#msgInput").dispatchEvent(_0x4f989b);
                  setTimeout(() => {
                    document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
                  }, 500);
                }
              }
            }
          }
          _0x2e7e17 && typeof _0x2e7e17 == "string" && (_0x2e7e17.indexOf("女") == -1 || _0x2c76db[_0x2c76db.length - 1] !== _0x160dec) && leave();
        }
      }
    }
  } else {
    {
      if (!_0x4376f5 ^ _0x5eeee4) {
        {
          if (_0x165260 == false || _0x160dec == "任意") {
            if (_0x2e7e17 && typeof _0x2e7e17 == "string") {
              {
                if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0xecff08 == true && _0x5c4107 !== "空") {
                  {
                    console.log("性别省份皆任意");
                    console.log("匹配成功");
                    document.querySelector("#msgInput").focus();
                    document.querySelector("#msgInput").value = _0x5c4107;
                    let _0x3e61a6 = new Event("change"),
                      _0x3a363a = new Event("input");
                    document.querySelector("#msgInput").dispatchEvent(_0x3e61a6);
                    document.querySelector("#msgInput").dispatchEvent(_0x3a363a);
                    setTimeout(() => {
                      document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
                    }, 500);
                  }
                }
              }
            }
          } else {
            {
              if (_0x160dec !== "任意" && _0x165260 == true) {
                if (_0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2c76db[_0x2c76db.length - 1] == _0x160dec) {
                  if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0xecff08 == true && _0x5c4107 !== "空") {
                    console.log("性别任意省份" + _0x160dec);
                    console.log("匹配成功");
                    document.querySelector("#msgInput").focus();
                    document.querySelector("#msgInput").value = _0x5c4107;
                    let _0x76958f = new Event("change"),
                      _0x54328a = new Event("input");
                    document.querySelector("#msgInput").dispatchEvent(_0x76958f);
                    document.querySelector("#msgInput").dispatchEvent(_0x54328a);
                    setTimeout(() => {
                      document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
                    }, 500);
                  }
                }
                _0x2e7e17 && typeof _0x2e7e17 == "string" && _0x2c76db[_0x2c76db.length - 1] !== _0x160dec && leave();
              }
            }
          }
          console.log("男：" + _0x4376f5 + "女：" + _0x5eeee4);
        }
      }
    }
  }
}
function check(_0x3b4597) {
  setInterval(() => {
    if (_0x3b4597 == 1 && document.querySelector("#脚本开关 > input[type=checkbox]").checked == true) {
      {
        if (document.querySelector("div[class=\"sys-msg sys-msg-red\"]")) console.log("离开"), leave();else match(), console.log("匹配");
      }
    }
    if (document.querySelector("#脚本开关 > input[type=checkbox]").checked == false || _0x3b4597 == 0) {
      {
        {
          clearInterval();
          return;
        }
      }
    }
  }, 1000);
}
setTimeout(() => {
  if (!开关) GM_setValue("开关", false);
  GM_getValue("开关") == true && (GM_setValue("开关", false), document.querySelector("#脚本开关 > input[type=checkbox]").checked = false);
  if (!男) GM_setValue("男", false);
  if (GM_getValue("男") == true) document.querySelector("#仅匹配男 > input[type=checkbox]").checked = true;
  if (!女) GM_setValue("女", false);
  if (GM_getValue("女") == true) document.querySelector("#仅匹配女 > input[type=checkbox]").checked = true;
  if (!省份开关) GM_setValue("省份开关", false);
  if (GM_getValue("省份开关") == true) document.querySelector("#筛选省份 > input[type=checkbox]").checked = true;
  if (!消息开关) GM_setValue("消息开关", false);
  if (GM_getValue("消息开关") == true) document.querySelector("#自动消息 > input[type=checkbox]").checked = true;
  !省份 && GM_setValue("省份", "任意");
  !消息 && GM_setValue("消息", "空");
  console.log("开关:" + 开关 + " 男:" + 男 + " 女:" + 女 + " 省份开关:" + 省份开关 + " 消息开关:" + 消息开关 + " 省份:" + 省份 + " 消息:" + 消息);
  document.querySelector("#脚本开关 > input[type=checkbox]").onchange = function () {
    GM_getValue("开关") == false ? (new Message().show("脚本启动", "tick"), GM_setValue("开关", true), check(1)) : (new Message().show("脚本关闭"), GM_setValue("开关", false), check(0));
  };
  document.querySelector("#仅匹配男 > input[type=checkbox]").onchange = function () {
    GM_getValue("男") == false ? (new Message().show("仅男开启", "tick"), GM_setValue("男", true)) : (new Message().show("仅男关闭"), GM_setValue("男", false));
  };
  document.querySelector("#仅匹配女 > input[type=checkbox]").onchange = function () {
    {
      GM_getValue("女") == false ? (new Message().show("仅女开启", "tick"), GM_setValue("女", true)) : (new Message().show("仅女关闭"), GM_setValue("女", false));
    }
  };
  document.querySelector("#筛选省份 > input[type=checkbox]").onchange = function () {
    if (GM_getValue("省份开关") == false) new Message().show("省份开启", "tick"), GM_setValue("省份开关", true);else new Message().show("省份关闭"), GM_setValue("省份开关", false);
  };
  document.querySelector("#自动消息 > input[type=checkbox]").onchange = function () {
    GM_getValue("消息开关") == false ? (new Message().show("消息开启", "tick"), GM_setValue("消息开关", true)) : (new Message().show("消息关闭"), GM_setValue("消息开关", false));
  };
  document.querySelector("div[id=\"APP插件更稳定不风控\"]").onclick = function () {
    $.alert("插件获取请加Q群：764356489");
  };
  document.querySelector("div[id=\"筛选省份\"]").onclick = function () {
    let _0x40089a = prompt("输入想匹配的省份(与网站的相同)，不填不修改，当前为：" + GM_getValue("省份"));
    if (_0x40089a != null && _0x40089a != "") GM_setValue("省份", _0x40089a);
  };
  document.querySelector("div[id=\"自动消息\"]").onclick = function () {
    {
      let _0x1f9de0 = prompt("输入想自动发的话，不填不修改，当前为：" + GM_getValue("消息"));
      if (_0x1f9de0 != null && _0x1f9de0 != "") GM_setValue("消息", _0x1f9de0);
    }
  };
}, 500);
function createtit(_0x360667, _0x173870, _0x314e68, _0x1aa539) {
  (function () {})();
  let _0x1156c9 = document.createElement("div");
  _0x1156c9.className = "content-block";
  _0x1156c9.style = _0x314e68;
  _0x1156c9.innerText = _0x360667;
  if (!_0x1aa539) _0x173870.prepend(_0x1156c9);else _0x173870.insertBefore(_0x1156c9, document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]").children[_0x1aa539]);
}
function createblock(_0xb292bb, _0x3d8409, _0x41e17b, _0x50ee34) {
  let _0x2d9dc6 = document.createElement("div"),
    _0x56c9cb = "",
    _0xcc37d3 = "";
  _0x2d9dc6.className = "list-block";
  _0x2d9dc6.style = "margin:0px";
  for (let _0xe1310 = 0; _0xe1310 < _0xb292bb.length; _0xe1310++) {
    _0x56c9cb = _0x56c9cb + "<div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=" + _0xb292bb[_0xe1310] + ">" + _0xb292bb[_0xe1310] + "</div><div class=\"item-input\"><label class=\"label-switch\" id=" + _0xb292bb[_0xe1310] + "><input tabindex=\"-1\" type=\"checkbox\"><div class=\"checkbox\"></div></label></div></div></div>";
  }
  for (let _0x577fb6 = 0; _0x577fb6 < _0x3d8409.length; _0x577fb6++) {
    _0xcc37d3 = _0xcc37d3 + "<div class=\"item-title label\" style=\"width:auto;color:red\" id=" + _0x3d8409[_0x577fb6] + ">" + _0x3d8409[_0x577fb6] + "</div>";
  }
  _0x2d9dc6.innerHTML = "\n\t<ul><li>" + _0x56c9cb + "<div class=\"item-content\"><div class=\"item-inner\">" + _0xcc37d3 + "</div></div></li></ul>";
  if (!_0x50ee34) _0x41e17b.prepend(_0x2d9dc6);else _0x41e17b.insertBefore(_0x2d9dc6, document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]").children[_0x50ee34]);
}
createtit("全自动脚本", document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]"), "margin:0.5rem 0px;font-size:20px");
createtit("", document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]"), "margin:0.5rem 0px;", 1);
createblock(["脚本开关", "仅匹配男", "仅匹配女", "筛选省份", "自动消息"], ["APP插件更稳定不风控"], document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]"), 2);
class Message {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "messageContainer";
    this.container.style.cssText = "position: fixed; top: 20px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 9999;";
    document.body.appendChild(this.container);
  }
  ["show"](_0x502c90, _0x3273d9) {
    const _0x1a6118 = document.createElement("p");
    _0x1a6118.style.cssText = "margin: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 4px; display: flex; align-items: center;";
    let _0x138370;
    if (_0x3273d9 === "tick") {
      _0x138370 = document.createElement("span");
      _0x138370.style.cssText = "width: 32px; height: 32px; background-color: green; border-radius: 50%; margin-right: 10px;";
      const _0x2076c8 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      _0x2076c8.setAttribute("viewBox", "0 0 24 24");
      _0x2076c8.setAttribute("width", "32");
      _0x2076c8.setAttribute("height", "32");
      const _0x2ff781 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      _0x2ff781.setAttribute("d", "M9 16.2l-3.6-3.6c-.8-.8-.8-2 0-2.8s2-.8 2.8 0L9 11.6l6.2-6.2c.8-.8 2-.8 2.8 0s.8 2 0 2.8L11.8 16.2c-.4.4-.8.6-1.3.6-.5 0-.9-.2-1.3-.6z");
      _0x2ff781.setAttribute("fill", "white");
      _0x2076c8.appendChild(_0x2ff781);
      _0x138370.appendChild(_0x2076c8);
    } else _0x138370 = document.createElement("span"), _0x138370.style.cssText = "width: 32px; height: 32px; background-color: green; border-radius: 50%; margin-right: 10px;";
    _0x1a6118.appendChild(_0x138370);
    const _0x579d50 = document.createTextNode(_0x502c90);
    _0x1a6118.appendChild(_0x579d50);
    this.container.appendChild(_0x1a6118);
    setTimeout(() => {
      this.container.removeChild(_0x1a6118);
    }, 1000);
  }
}