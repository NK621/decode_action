//Sun Apr 27 2025 02:05:57 GMT+0000 (Coordinated Universal Time)
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
  var _0x4b21fc = document.querySelector("a.button-link.chat-control");
  if (_0x4b21fc) _0x4b21fc.click();
  var _0x1f5d0a = document.querySelector("span.actions-modal-button.actions-modal-button-bold.color-danger");
  if (_0x1f5d0a) _0x1f5d0a.click();
  var _0x23971b = document.querySelector("span.chat-control");
  if (_0x23971b && _0x23971b.innerText) {
    if (typeof _0x23971b.innerText == "string" && _0x23971b.innerText == "离开") _0x23971b.click(), setTimeout(function () {
      _0x23971b.click();
    }, 500);else typeof _0x23971b.innerText == "string" && _0x23971b.innerText == "重新开始" ? _0x23971b.click() : (location.reload(), console.log("error restartButton"));
  }
}
function match() {
  console.log("开始匹配");
  var _0x14ac92 = document.querySelector("div[class=\"sys-msg-keep sys-msg-partner-info\"]>div[class=\"message-text\"]>div[id=\"partnerInfoText\"]");
  if (_0x14ac92) var _0x452360 = _0x14ac92.innerText;
  let _0x203f31 = _0x452360.split(" "),
    _0x45ad6d = GM_getValue("男"),
    _0x2f0765 = GM_getValue("女"),
    _0xde0635 = GM_getValue("省份"),
    _0x5ac8a3 = GM_getValue("消息"),
    _0xfbe544 = GM_getValue("省份开关"),
    _0x45ddb2 = GM_getValue("消息开关");
  if (_0x45ad6d ^ _0x2f0765) {
    {
      console.log("男：" + _0x45ad6d + "女：" + _0x2f0765);
      if (!_0x2f0765 && _0x45ad6d && _0xfbe544 == false || _0xde0635 == "任意") {
        if (_0x452360 && typeof _0x452360 == "string" && _0x452360.indexOf("男") !== -1) {
          if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0x45ddb2 == true && _0x5ac8a3 !== "空") {
            console.log("性别男省份" + _0xde0635);
            console.log("匹配成功");
            document.querySelector("#msgInput").focus();
            document.querySelector("#msgInput").value = _0x5ac8a3;
            let _0xaa8a6b = new Event("change"),
              _0x251357 = new Event("input");
            document.querySelector("#msgInput").dispatchEvent(_0xaa8a6b);
            document.querySelector("#msgInput").dispatchEvent(_0x251357);
            setTimeout(() => {
              document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
            }, 500);
          }
        }
        _0x452360 && typeof _0x452360 == "string" && _0x452360.indexOf("男") == -1 && leave();
      }
      if (!_0x2f0765 && _0x45ad6d && _0xfbe544 == true && _0xde0635 !== "任意") {
        if (_0x452360 && typeof _0x452360 == "string" && _0x452360.indexOf("男") !== -1 && _0x203f31[_0x203f31.length - 1] == _0xde0635) {
          if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0x45ddb2 == true && _0x5ac8a3 !== "空") {
            console.log("性别男省份" + _0xde0635);
            console.log("匹配成功");
            document.querySelector("#msgInput").focus();
            document.querySelector("#msgInput").value = _0x5ac8a3;
            let _0x10cc33 = new Event("change"),
              _0x39f339 = new Event("input");
            document.querySelector("#msgInput").dispatchEvent(_0x10cc33);
            document.querySelector("#msgInput").dispatchEvent(_0x39f339);
            setTimeout(() => {
              document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
            }, 500);
          }
        }
        _0x452360 && typeof _0x452360 == "string" && (_0x452360.indexOf("男") == -1 || _0x203f31[_0x203f31.length - 1] !== _0xde0635) && leave();
      }
      if (!_0x45ad6d && _0x2f0765 && _0xfbe544 == false || _0xde0635 == "任意") {
        if (_0x452360 && typeof _0x452360 == "string" && _0x452360.indexOf("女") !== -1) {
          if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0x45ddb2 == true && _0x5ac8a3 !== "空") {
            console.log("性别女省份" + _0xde0635);
            console.log("匹配成功");
            document.querySelector("#msgInput").focus();
            document.querySelector("#msgInput").value = _0x5ac8a3;
            let _0x4f8810 = new Event("change"),
              _0x56b4ce = new Event("input");
            document.querySelector("#msgInput").dispatchEvent(_0x4f8810);
            document.querySelector("#msgInput").dispatchEvent(_0x56b4ce);
            setTimeout(() => {
              document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
            }, 500);
          }
        }
        _0x452360 && typeof _0x452360 == "string" && _0x452360.indexOf("女") == -1 && leave();
      }
      if (!_0x45ad6d && _0x2f0765 && _0xfbe544 == true && _0xde0635 !== "任意") {
        if (_0x452360 && typeof _0x452360 == "string" && _0x452360.indexOf("女") !== -1 && _0x203f31[_0x203f31.length - 1] == _0xde0635) {
          if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0x45ddb2 == true && _0x5ac8a3 !== "空") {
            {
              console.log("性别女省份" + _0xde0635);
              console.log("匹配成功");
              document.querySelector("#msgInput").focus();
              document.querySelector("#msgInput").value = _0x5ac8a3;
              let _0x46c9f2 = new Event("change"),
                _0x549186 = new Event("input");
              document.querySelector("#msgInput").dispatchEvent(_0x46c9f2);
              document.querySelector("#msgInput").dispatchEvent(_0x549186);
              setTimeout(() => {
                document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
              }, 500);
            }
          }
        }
        _0x452360 && typeof _0x452360 == "string" && (_0x452360.indexOf("女") == -1 || _0x203f31[_0x203f31.length - 1] !== _0xde0635) && leave();
      }
    }
  } else {
    if (!_0x45ad6d ^ _0x2f0765) {
      {
        if (_0xfbe544 == false || _0xde0635 == "任意") {
          if (_0x452360 && typeof _0x452360 == "string") {
            if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0x45ddb2 == true && _0x5ac8a3 !== "空") {
              {
                console.log("性别省份皆任意");
                console.log("匹配成功");
                document.querySelector("#msgInput").focus();
                document.querySelector("#msgInput").value = _0x5ac8a3;
                let _0xf2f926 = new Event("change"),
                  _0x5fc930 = new Event("input");
                document.querySelector("#msgInput").dispatchEvent(_0xf2f926);
                document.querySelector("#msgInput").dispatchEvent(_0x5fc930);
                setTimeout(() => {
                  document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
                }, 500);
              }
            }
          }
        } else {
          if (_0xde0635 !== "任意" && _0xfbe544 == true) {
            {
              if (_0x452360 && typeof _0x452360 == "string" && _0x203f31[_0x203f31.length - 1] == _0xde0635) {
                {
                  if (!document.querySelector("div[class=\"message right\"]>div[class=\"message-text\"]") && _0x45ddb2 == true && _0x5ac8a3 !== "空") {
                    {
                      console.log("性别任意省份" + _0xde0635);
                      console.log("匹配成功");
                      document.querySelector("#msgInput").focus();
                      document.querySelector("#msgInput").value = _0x5ac8a3;
                      let _0x4b5cd7 = new Event("change"),
                        _0x4653fb = new Event("input");
                      document.querySelector("#msgInput").dispatchEvent(_0x4b5cd7);
                      document.querySelector("#msgInput").dispatchEvent(_0x4653fb);
                      setTimeout(() => {
                        document.querySelector("#chat > div.bar.bar-footer.msg-footer > div > div.bottom-tool-bar > a.button-link.msg-send").click();
                      }, 500);
                    }
                  }
                }
              }
              _0x452360 && typeof _0x452360 == "string" && _0x203f31[_0x203f31.length - 1] !== _0xde0635 && leave();
            }
          }
        }
        console.log("男：" + _0x45ad6d + "女：" + _0x2f0765);
      }
    }
  }
}
function check(_0x17254b) {
  setInterval(() => {
    if (_0x17254b == 1 && document.querySelector("#脚本开关 > input[type=checkbox]").checked == true) {
      {
        if (document.querySelector("div[class=\"sys-msg sys-msg-red\"]")) {
          console.log("离开");
          leave();
        } else match(), console.log("匹配");
      }
    }
    if (document.querySelector("#脚本开关 > input[type=checkbox]").checked == false || _0x17254b == 0) {
      {
        clearInterval();
        return;
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
      if (GM_getValue("女") == false) {
        new Message().show("仅女开启", "tick");
        GM_setValue("女", true);
      } else {
        new Message().show("仅女关闭");
        GM_setValue("女", false);
      }
    }
  };
  document.querySelector("#筛选省份 > input[type=checkbox]").onchange = function () {
    if (GM_getValue("省份开关") == false) new Message().show("省份开启", "tick"), GM_setValue("省份开关", true);else {
      new Message().show("省份关闭");
      GM_setValue("省份开关", false);
    }
  };
  document.querySelector("#自动消息 > input[type=checkbox]").onchange = function () {
    GM_getValue("消息开关") == false ? (new Message().show("消息开启", "tick"), GM_setValue("消息开关", true)) : (new Message().show("消息关闭"), GM_setValue("消息开关", false));
  };
  document.querySelector("div[id=\"点击查询更新/获取会员\"]").onclick = function () {
    $.alert("获取更新版本体验\nvip/svip会员\n添加Naruto唯一QQ:956072973");
  };
  document.querySelector("div[id=\"筛选省份\"]").onclick = function () {
    let _0x812fd6 = prompt("输入想匹配的省份(与网站的相同)，不填不修改，当前为：" + GM_getValue("省份"));
    if (_0x812fd6 != null && _0x812fd6 != "") GM_setValue("省份", _0x812fd6);
  };
  document.querySelector("div[id=\"自动消息\"]").onclick = function () {
    {
      let _0x2876d2 = prompt("输入想自动发的话，不填不修改，当前为：" + GM_getValue("消息"));
      if (_0x2876d2 != null && _0x2876d2 != "") GM_setValue("消息", _0x2876d2);
    }
  };
}, 500);
function createtit(_0x4a109c, _0x5af6de, _0x49c5ba, _0x35ed61) {
  let _0x56e6b3 = document.createElement("div");
  _0x56e6b3.className = "content-block";
  _0x56e6b3.style = _0x49c5ba;
  _0x56e6b3.innerText = _0x4a109c;
  if (!_0x35ed61) _0x5af6de.prepend(_0x56e6b3);else _0x5af6de.insertBefore(_0x56e6b3, document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]").children[_0x35ed61]);
}
function createblock(_0x248bae, _0x21e5e0, _0x1152e8, _0x41076d) {
  let _0x45f9bc = document.createElement("div"),
    _0x127201 = "",
    _0x5a527f = "";
  _0x45f9bc.className = "list-block";
  _0x45f9bc.style = "margin:0px";
  for (let _0x29762a = 0; _0x29762a < _0x248bae.length; _0x29762a++) {
    _0x127201 = _0x127201 + "<div class=\"item-content\"><div class=\"item-inner\"><div class=\"item-title label\" id=" + _0x248bae[_0x29762a] + ">" + _0x248bae[_0x29762a] + "</div><div class=\"item-input\"><label class=\"label-switch\" id=" + _0x248bae[_0x29762a] + "><input tabindex=\"-1\" type=\"checkbox\"><div class=\"checkbox\"></div></label></div></div></div>";
  }
  for (let _0x452581 = 0; _0x452581 < _0x21e5e0.length; _0x452581++) {
    _0x5a527f = _0x5a527f + "<div class=\"item-title label\" style=\"width:auto;color:red\" id=" + _0x21e5e0[_0x452581] + ">" + _0x21e5e0[_0x452581] + "</div>";
  }
  _0x45f9bc.innerHTML = "\n\t<ul><li>" + _0x127201 + "<div class=\"item-content\"><div class=\"item-inner\">" + _0x5a527f + "</div></div></li></ul>";
  if (!_0x41076d) {
    _0x1152e8.prepend(_0x45f9bc);
  } else _0x1152e8.insertBefore(_0x45f9bc, document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]").children[_0x41076d]);
}
createtit("全自动脚本V2.0 Naruto", document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]"), "margin:0.5rem 0px;font-size:20px");
createtit("", document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]"), "margin:0.5rem 0px;", 1);
createblock(["脚本开关", "仅匹配男", "仅匹配女", "筛选省份", "自动消息"], ["点击查询更新/获取会员"], document.querySelector("div[id=\"panelLeft\"]>div[style^=\"z-index: 1\"]"), 2);
class Message {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "messageContainer";
    this.container.style.cssText = "position: fixed; top: 20px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 9999;";
    document.body.appendChild(this.container);
  }
  ["show"](_0x63dc83, _0x48a54d) {
    const _0x308489 = document.createElement("p");
    _0x308489.style.cssText = "margin: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 4px; display: flex; align-items: center;";
    let _0x2f91d4;
    if (_0x48a54d === "tick") {
      _0x2f91d4 = document.createElement("span");
      _0x2f91d4.style.cssText = "width: 32px; height: 32px; background-color: green; border-radius: 50%; margin-right: 10px;";
      const _0x19703b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      _0x19703b.setAttribute("viewBox", "0 0 24 24");
      _0x19703b.setAttribute("width", "32");
      _0x19703b.setAttribute("height", "32");
      const _0x259ebb = document.createElementNS("http://www.w3.org/2000/svg", "path");
      _0x259ebb.setAttribute("d", "M9 16.2l-3.6-3.6c-.8-.8-.8-2 0-2.8s2-.8 2.8 0L9 11.6l6.2-6.2c.8-.8 2-.8 2.8 0s.8 2 0 2.8L11.8 16.2c-.4.4-.8.6-1.3.6-.5 0-.9-.2-1.3-.6z");
      _0x259ebb.setAttribute("fill", "white");
      _0x19703b.appendChild(_0x259ebb);
      _0x2f91d4.appendChild(_0x19703b);
    } else _0x2f91d4 = document.createElement("span"), _0x2f91d4.style.cssText = "width: 32px; height: 32px; background-color: green; border-radius: 50%; margin-right: 10px;";
    _0x308489.appendChild(_0x2f91d4);
    const _0x5a6984 = document.createTextNode(_0x63dc83);
    _0x308489.appendChild(_0x5a6984);
    this.container.appendChild(_0x308489);
    setTimeout(() => {
      this.container.removeChild(_0x308489);
    }, 1000);
  }
}