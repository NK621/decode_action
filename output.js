//Wed Dec 03 2025 16:18:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
let currentAutoIndex = 0;
let filterQingliu = true;
let filterUnder18 = false;
let blacklistEnabled = true;
let blacklist = [];
function loadBlacklist() {
  const _0x3454c5 = function () {
    let _0x3ad2aa = true;
    return function (_0x72d072, _0x48dfd9) {
      const _0x43f548 = _0x3ad2aa ? function () {
        if (_0x48dfd9) {
          const _0xff2c11 = _0x48dfd9.apply(_0x72d072, arguments);
          _0x48dfd9 = null;
          return _0xff2c11;
        }
      } : function () {};
      _0x3ad2aa = false;
      return _0x43f548;
    };
  }();
  const _0x1d055a = _0x3454c5(this, function () {
    const _0x1167b0 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    const _0x89e41c = function () {
      const _0x4474c3 = new _0x1167b0.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !_0x4474c3.test(_0x1d055a);
    };
    return _0x89e41c();
  });
  _0x1d055a();
  try {
    const _0x217ec7 = localStorage.getItem("ssby_blacklist");
    blacklist = _0x217ec7 ? JSON.parse(_0x217ec7) : [];
  } catch (_0x49a2ef) {
    console.error("[黑名单] 加载失败:", _0x49a2ef);
    blacklist = [];
  }
  return blacklist;
}
function saveBlacklist() {
  try {
    localStorage.setItem("ssby_blacklist", JSON.stringify(blacklist));
  } catch (_0x3d4681) {
    console.error("[黑名单] 保存失败:", _0x3d4681);
  }
}
function addToBlacklist(_0x58687e, _0x41eacd = "", _0x4fb4dc = "", _0x35d22d = "") {
  if (!_0x58687e) {
    return false;
  }
  const _0x8695c5 = blacklist.find(_0x8bfb3d => _0x8bfb3d.id === _0x58687e);
  if (_0x8695c5) {
    return false;
  }
  blacklist.push({
    id: _0x58687e,
    remark: _0x41eacd,
    gender: _0x4fb4dc,
    age: _0x35d22d,
    addTime: Date.now()
  });
  saveBlacklist();
  return true;
}
function removeFromBlacklist(_0x425fdf) {
  const _0x2585af = blacklist.findIndex(_0x2c74e1 => _0x2c74e1.id === _0x425fdf);
  if (_0x2585af > -1) {
    blacklist.splice(_0x2585af, 1);
    saveBlacklist();
    return true;
  }
  return false;
}
function clearBlacklist() {
  blacklist = [];
  saveBlacklist();
}
function updateBlacklistRemark(_0x4dc300, _0x21a9a1) {
  const _0x3e1c99 = blacklist.find(_0x409f7f => _0x409f7f.id === _0x4dc300);
  if (_0x3e1c99) {
    _0x3e1c99.remark = _0x21a9a1;
    saveBlacklist();
    return true;
  }
  return false;
}
function isInBlacklist(_0x2870e8) {
  return blacklist.find(_0x2ee664 => _0x2ee664.id === _0x2870e8);
}
function exportBlacklist() {
  const _0x7cdf1 = JSON.stringify(blacklist, null, 2);
  const _0x424a2e = {
    type: "application/json"
  };
  const _0x54bb11 = new Blob([_0x7cdf1], _0x424a2e);
  const _0x2a4e8a = URL.createObjectURL(_0x54bb11);
  const _0x58655a = document.createElement("a");
  _0x58655a.href = _0x2a4e8a;
  _0x58655a.download = "ssby_blacklist_" + new Date().toISOString().slice(0, 10) + ".json";
  _0x58655a.click();
  URL.revokeObjectURL(_0x2a4e8a);
}
function importBlacklist(_0x4cb4d7) {
  return new Promise((_0x1047c6, _0x3a9cf) => {
    const _0x587c82 = new FileReader();
    _0x587c82.onload = _0x2e7da9 => {
      try {
        const _0x41b7f2 = JSON.parse(_0x2e7da9.target.result);
        if (Array.isArray(_0x41b7f2)) {
          let _0x4c199b = 0;
          _0x41b7f2.forEach(_0x2d0e64 => {
            _0x2d0e64.id && !blacklist.find(_0x9bfa95 => _0x9bfa95.id === _0x2d0e64.id) && (blacklist.push({
              id: _0x2d0e64.id,
              remark: _0x2d0e64.remark || "",
              gender: _0x2d0e64.gender || "",
              age: _0x2d0e64.age || "",
              addTime: _0x2d0e64.addTime || Date.now()
            }), _0x4c199b++);
          });
          saveBlacklist();
          _0x1047c6(_0x4c199b);
        } else {
          _0x3a9cf(new Error("无效的黑名单格式"));
        }
      } catch (_0x135bfb) {
        _0x3a9cf(_0x135bfb);
      }
    };
    _0x587c82.onerror = () => _0x3a9cf(new Error("读取文件失败"));
    _0x587c82.readAsText(_0x4cb4d7);
  });
}
loadBlacklist();
setData = function (_0x227244, _0x5f3bbc, ..._0x1e5e3d) {
  QQ = _0x227244;
  index = _0x5f3bbc;
  AUTO_MSG = _0x1e5e3d;
};
setData("123456789", 0, "你好|hello", "很高兴认识你|nice to meet you");
let vipCardAllowed = false;
function openVIPCardWallet() {
  vipCardAllowed = true;
  console.log("[脚本] 通过面板按钮打开VIP卡包");
  window.popupVIPCardWallet && window.popupVIPCardWallet.fetchCards && window.popupVIPCardWallet.fetchCards();
  typeof $ !== "undefined" && $.popup && $.popup("#popupVIPCardWallet");
  setTimeout(() => {
    vipCardAllowed = false;
  }, 5000);
}
document.addEventListener("click", function (_0x2bb102) {
  let _0x16f77a = _0x2bb102.target;
  while (_0x16f77a && _0x16f77a !== document.body) {
    const _0x274b6c = _0x16f77a.getAttribute("onclick") || "";
    if (_0x274b6c.includes("popupVIPCardWallet") || _0x274b6c.includes("VIPCardWallet")) {
      _0x2bb102.stopPropagation();
      _0x2bb102.stopImmediatePropagation();
      _0x2bb102.preventDefault();
      console.log("[脚本] 已阻止网站VIP卡包按钮点击");
      return false;
    }
    _0x16f77a = _0x16f77a.parentElement;
  }
}, true);
setInterval(function () {
  const _0x393582 = document.querySelector("#popupVIPCardWallet");
  if (!_0x393582) {
    return;
  }
  const _0x5116a9 = _0x393582.classList.contains("modal-in");
  if (_0x5116a9 && !vipCardAllowed) {
    _0x393582.style.display = "none";
    _0x393582.style.opacity = "0";
    _0x393582.style.visibility = "hidden";
    _0x393582.classList.remove("modal-in");
    _0x393582.classList.add("modal-out");
    const _0x4cbfeb = document.querySelector(".popup-overlay.modal-overlay-visible");
    _0x4cbfeb && (_0x4cbfeb.classList.remove("modal-overlay-visible"), _0x4cbfeb.style.display = "none");
  } else {
    !_0x5116a9 && (_0x393582.style.display = "", _0x393582.style.opacity = "", _0x393582.style.visibility = "", vipCardAllowed = false);
  }
}, 100);
MainFunc = () => {
  function _0x3fa83a() {
    function _0x18b56a() {
      const _0x1780f3 = document.querySelector(".toasted-container");
      if (_0x1780f3) {
        const _0x451aab = _0x1780f3.querySelectorAll(".toasted");
        _0x451aab.forEach(_0x533f0c => {
          const _0x3b5e51 = _0x533f0c.innerText || _0x533f0c.textContent || "";
          _0x3b5e51.includes("VIP") && _0x3b5e51.includes("激活") && (_0x533f0c.remove(), console.log("[脚本] 已移除VIP激活提示"));
        });
      }
    }
    const _0x35d904 = new MutationObserver(_0x3d5a2f => {
      for (const _0x28aba9 of _0x3d5a2f) {
        for (const _0x4e928b of _0x28aba9.addedNodes) {
          if (_0x4e928b.nodeType === 1 && _0x4e928b.classList?.["contains"]("toasted")) {
            const _0x14d325 = _0x4e928b.innerText || _0x4e928b.textContent || "";
            _0x14d325.includes("VIP") && _0x14d325.includes("激活") && (_0x4e928b.remove(), console.log("[脚本] 已拦截VIP激活提示"));
          }
        }
      }
    });
    const _0x6638fd = setInterval(() => {
      const _0x39379d = document.querySelector(".toasted-container");
      if (_0x39379d) {
        const _0x56adf3 = {
          childList: true,
          subtree: true
        };
        _0x35d904.observe(_0x39379d, _0x56adf3);
        clearInterval(_0x6638fd);
        console.log("[脚本] 已开始监听VIP激活提示");
      }
    }, 500);
    setInterval(_0x18b56a, 300);
    function _0x147f7d() {
      let _0x4ec74b = "";
      let _0x2ad081 = "";
      const _0x304d54 = document.querySelector("#partnerInfoText");
      if (_0x304d54) {
        const _0x744da3 = _0x304d54.innerText || _0x304d54.textContent || "";
        if (_0x744da3.includes("18岁以下")) {
          _0x4ec74b = "18岁以下";
        } else {
          if (_0x744da3.includes("18-23岁")) {
            _0x4ec74b = "18-23岁";
          } else {
            _0x744da3.includes("23岁以上") && (_0x4ec74b = "23岁以上");
          }
        }
      }
      const _0x1191ed = document.querySelector("#partnerLabelContainer");
      _0x1191ed && (_0x2ad081 = _0x1191ed.innerText || _0x1191ed.textContent || "");
      const _0x48e0f3 = {
        ageTag: _0x4ec74b,
        userTag: _0x2ad081
      };
      return _0x48e0f3;
    }
    function _0x4b6319() {
      return _0x147f7d().ageTag === "18岁以下";
    }
    function _0x2a521b() {
      return (_0x147f7d().userTag || "").includes("清流");
    }
    function _0x5188d9(_0x609920, _0x471ba5 = "ok") {
      vue.toasted.show(_0x609920, {
        action: {
          text: _0x471ba5,
          onClick: (_0xb596d2, _0x1b1137) => {
            _0x1b1137.goAway(0);
          }
        }
      });
    }
    function _0x503c0f(_0x50d391) {
      chatPage.msgInput = _0x50d391;
      chatPage.msgSend();
    }
    function _0x56123d() {
      chatPage.sockets.emit("syscmd", {
        msg: "end",
        countReceive: false,
        chatId: chatPage.chatId,
        countTalked: false
      });
      chatPage.chatState = "SELF_LEFT";
    }
    function _0x55bea7() {
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
    let _0x50ac41 = true;
    chatPage.scriptIsRun = false;
    chatPage.MatchWho = "女生";
    setInterval(function () {
      try {
        document.querySelectorAll("a[href=\"./lost-found\"]").forEach(_0x364e57 => _0x364e57.remove());
        document.querySelectorAll("a.button.button-link.button-nav.pull-right").forEach(_0x82da13 => _0x82da13.remove());
        document.querySelectorAll("header a, .bar-nav a").forEach(_0x376b88 => {
          (_0x376b88.innerText || "").trim() === "寻人" && _0x376b88.remove();
        });
        document.querySelectorAll(".advert").forEach(_0x560362 => _0x560362.remove());
        document.querySelectorAll(".message-text").forEach(_0x1ed322 => {
          const _0x1a071f = _0x1ed322.innerText || "";
          (_0x1a071f.includes("叔叔不约App") || _0x1a071f.includes("点击获取")) && _0x1ed322.remove();
        });
        document.querySelectorAll(".sys-msg-chat-end > div > div").forEach(_0xa0758a => {
          const _0x575237 = _0xa0758a.innerText || "";
          _0x575237.includes("分区") && _0xa0758a.remove();
        });
        document.querySelectorAll(".leave-footer").forEach(_0x5ee61f => _0x5ee61f.remove());
      } catch (_0x384e9e) {}
      if (!chatPage.scriptIsRun) {
        return;
      }
      switch (chatPage.chatState) {
        case "REPAIRED":
        case "PAIRED":
          {
            let _0x2079e5 = chatPage.partner.strGender;
            if (blacklistEnabled && chatPage.partner.idEncrypted) {
              const _0x265666 = isInBlacklist(chatPage.partner.idEncrypted);
              if (_0x265666) {
                console.log("[脚本] 对方在黑名单中，自动离开:", _0x265666.remark);
                _0x138ecc("🚫 已自动跳过黑名单用户：" + _0x265666.remark, "warning", 2000);
                _0x56123d();
                _0x55bea7();
                _0x50ac41 = true;
                break;
              }
            }
            if (filterUnder18 && _0x4b6319()) {
              console.log("[脚本] 对方为18岁以下，自动离开");
              _0x138ecc("对方为18岁以下，自动离开", "warning", 1500);
              _0x56123d();
              _0x55bea7();
              _0x50ac41 = true;
              break;
            }
            if (filterQingliu && _0x2a521b()) {
              console.log("[脚本] 对方标签包含清流，自动离开");
              _0x138ecc("对方标签包含清流，自动离开", "warning", 1500);
              _0x56123d();
              _0x55bea7();
              _0x50ac41 = true;
              break;
            }
            if (_0x2079e5 == chatPage.MatchWho) {
              if (_0x50ac41) {
                try {
                  let _0x5e7089 = AUTO_MSG.length;
                  if (_0x5e7089 > 1) {
                    const _0x50de06 = Math.floor(Math.random() * _0x5e7089);
                    let _0x337279 = AUTO_MSG[_0x50de06];
                    let _0x69c51f = _0x337279.split("|").map(_0xea64c3 => _0xea64c3.trim());
                    currentAutoIndex = 0;
                    _0x2fb40e(_0x69c51f);
                  } else {
                    let _0x39655b = AUTO_MSG[index];
                    let _0x3fa086 = _0x39655b.split("|").map(_0x2743f7 => _0x2743f7.trim());
                    currentAutoIndex = 0;
                    _0x2fb40e(_0x3fa086);
                  }
                } catch {}
                _0x138ecc("已匹配到" + chatPage.MatchWho + "并发送信息！", "success", 800);
                _0x50ac41 = false;
              }
              break;
            }
            _0x56123d();
            _0x55bea7();
            _0x50ac41 = true;
            break;
          }
        case "SELF_LEFT":
        case "PARTNER_LEFT":
          _0x55bea7();
          _0x50ac41 = true;
          break;
      }
    }, 450);
    function _0x2fb40e(_0x242563) {
      currentAutoIndex < _0x242563.length && (_0x503c0f(_0x242563[currentAutoIndex]), currentAutoIndex++, setTimeout(() => {
        _0x2fb40e(_0x242563);
      }, 2000));
    }
    function _0x5cec67() {
      try {
        const _0x4a521e = QQ.trim();
        if (/^\d{5,12}$/.test(_0x4a521e)) {
          let _0x51343a = _0x4a521e.length;
          _0x51343a > 6 && _0x51343a <= 10 ? (setTimeout(() => _0x503c0f(_0x4a521e.substr(0, 3)), 1000), setTimeout(() => _0x503c0f(_0x4a521e.substr(3, 3)), 2000), _0x51343a == 10 ? (setTimeout(() => _0x503c0f(_0x4a521e.substr(6, 3)), 3000), setTimeout(() => _0x503c0f(_0x4a521e.substr(9)), 3500)) : setTimeout(() => _0x503c0f(_0x4a521e.substr(6)), 3000)) : _0x503c0f(_0x4a521e);
        } else {
          _0x503c0f(_0x4a521e);
        }
      } catch (_0x4a7970) {
        console.error("发送QQ号码失败：", _0x4a7970);
      }
    }
    if (document.getElementById("floatingBtn")) {
      document.getElementById("floatingBtn")?.["remove"]();
      document.getElementById("overlay")?.["remove"]();
      document.getElementById("controlPanel")?.["remove"]();
      document.getElementById("toastContainer")?.["remove"]();
      const _0x31083f = document.getElementById("floatingPanelStyle");
      if (_0x31083f) {
        _0x31083f.remove();
      }
    }
    const _0x495c9e = document.createElement("style");
    _0x495c9e.id = "floatingPanelStyle";
    _0x495c9e.textContent = "\n            /* 悬浮按钮 */\n            .floating-btn {\n                position: fixed;\n                bottom: 15%;\n                right: 20px;\n                width: 56px;\n                height: 56px;\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-size: 13px;\n                cursor: pointer;\n                box-shadow: 0 8px 20px rgba(118, 75, 162, 0.4);\n                z-index: 10000;\n                user-select: none;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                text-align: center;\n                line-height: 1.2;\n                font-weight: 600;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n                border: 2px solid rgba(255, 255, 255, 0.2);\n            }\n            \n            .floating-btn:hover {\n                transform: translateY(-2px) scale(1.05);\n                box-shadow: 0 12px 25px rgba(118, 75, 162, 0.5);\n            }\n            \n            .floating-btn:active {\n                transform: translateY(1px) scale(0.95);\n            }\n            \n            /* 控制面板 */\n            .control-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                width: 340px;\n                background: rgba(255, 255, 255, 0.98);\n                backdrop-filter: blur(20px);\n                border-radius: 24px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n                z-index: 9999;\n                display: none;\n                padding: 24px;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n                opacity: 0;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                border: 1px solid rgba(0, 0, 0, 0.05);\n            }\n            \n            .control-panel.show {\n                display: block;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            /* 面板头部 */\n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 24px;\n                border-bottom: 1px solid rgba(0,0,0,0.05);\n                padding-bottom: 16px;\n            }\n            \n            .panel-title {\n                font-size: 20px;\n                font-weight: 700;\n                color: #1a1a1a;\n                letter-spacing: -0.5px;\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n            }\n            \n            .panel-close {\n                width: 32px;\n                height: 32px;\n                border-radius: 50%;\n                background: #f5f5f7;\n                border: none;\n                color: #888;\n                font-size: 20px;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s;\n            }\n            \n            .panel-close:hover {\n                background: #eee;\n                color: #333;\n                transform: rotate(90deg);\n            }\n            \n            /* 列表项 - 增加cp-前缀防止冲突 */\n            .cp-list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .cp-item-content {\n                padding: 16px 0;\n                border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n                display: block; /* 确保是块级元素 */\n            }\n            \n            .cp-item-content:last-child {\n                border-bottom: none;\n            }\n            \n            .cp-item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                position: relative; /* 防止绝对定位元素跑偏 */\n            }\n            \n            .cp-item-title {\n                font-size: 15px;\n                font-weight: 500;\n                color: #333;\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                flex: 1; /* 占据剩余空间 */\n                margin-right: 16px; /* 与右侧开关保持距离 */\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n            \n            .cp-item-input {\n                flex-shrink: 0; /* 防止被压缩 */\n            }\n            \n            /* 开关样式优化 */\n            .cp-label-switch {\n                position: relative;\n                display: inline-block;\n                width: 52px; /* 稍微加宽 */\n                height: 30px;\n                vertical-align: middle;\n            }\n            \n            .cp-label-switch input {\n                display: none;\n            }\n            \n            .cp-checkbox {\n                width: 100%;\n                height: 100%;\n                background: #e9e9eb;\n                border-radius: 30px;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                position: relative;\n                cursor: pointer;\n                display: block;\n            }\n            \n            .cp-checkbox:before {\n                content: '';\n                position: absolute;\n                width: 26px;\n                height: 26px;\n                background: white;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            }\n            \n            input:checked + .cp-checkbox {\n                background: #34c759;\n            }\n            \n            input:checked + .cp-checkbox:before {\n                transform: translateX(22px);\n            }\n            \n            /* 按钮组 */\n            .btn-group {\n                display: grid;\n                grid-template-columns: 1fr 1fr;\n                gap: 12px;\n                margin-top: 20px;\n            }\n            \n            .contact-btn {\n                background: linear-gradient(135deg, #007AFF 0%, #0051D4 100%);\n                color: white;\n                border: none;\n                padding: 12px;\n                border-radius: 12px;\n                font-size: 14px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: all 0.2s;\n                width: 100%;\n                box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);\n            }\n            \n            .contact-btn:hover {\n                transform: translateY(-2px);\n                box-shadow: 0 6px 16px rgba(0, 122, 255, 0.3);\n            }\n            \n            .contact-btn:active {\n                transform: translateY(0);\n            }\n            \n            #btn_vip_card {\n                background: linear-gradient(135deg, #FF9500 0%, #FF5E3A 100%);\n                box-shadow: 0 4px 12px rgba(255, 94, 58, 0.2);\n            }\n            \n            #btn_vip_card:hover {\n                box-shadow: 0 6px 16px rgba(255, 94, 58, 0.3);\n            }\n            \n            /* 底部版权 */\n            .panel-footer {\n                margin-top: 24px;\n                padding-top: 16px;\n                border-top: 1px solid rgba(0, 0, 0, 0.04);\n                font-size: 12px;\n                color: #999;\n                display: flex;\n                justify-content: space-between;\n                font-weight: 500;\n            }\n            \n            /* 遮罩层 */\n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.4);\n                backdrop-filter: blur(4px);\n                z-index: 9998;\n                display: none;\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n            \n            .overlay.show {\n                display: block;\n                opacity: 1;\n            }\n            \n            /* Toast 样式 */\n            .toast-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 10001;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .toast {\n                background: rgba(0, 0, 0, 0.8);\n                backdrop-filter: blur(10px);\n                color: white;\n                padding: 12px 20px;\n                border-radius: 12px;\n                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n                font-size: 14px;\n                max-width: 300px;\n                animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                display: flex;\n                align-items: center;\n                gap: 12px;\n                font-weight: 500;\n            }\n            \n            .toast.success { border-left: 4px solid #34c759; }\n            .toast.error { border-left: 4px solid #ff3b30; }\n            .toast.warning { border-left: 4px solid #ff9500; }\n            .toast.info { border-left: 4px solid #007aff; }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from { opacity: 0; transform: translateX(100px); }\n                to { opacity: 1; transform: translateX(0); }\n            }\n            \n            @keyframes toastSlideOut {\n                from { opacity: 1; transform: translateX(0); }\n                to { opacity: 0; transform: translateX(100px); }\n            }\n            \n            .toast-icon { font-size: 18px; }\n            \n            /* 黑名单弹窗样式 */\n            .blacklist-modal {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                width: 360px;\n                max-height: 80vh;\n                background: rgba(255, 255, 255, 0.98);\n                backdrop-filter: blur(20px);\n                border-radius: 20px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n                z-index: 10002;\n                display: none;\n                flex-direction: column;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n                opacity: 0;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            }\n            \n            .blacklist-modal.show {\n                display: flex;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            .bl-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 20px;\n                border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n            }\n            \n            .bl-title {\n                font-size: 18px;\n                font-weight: 700;\n                color: #1a1a1a;\n            }\n            \n            .bl-close {\n                width: 30px;\n                height: 30px;\n                border-radius: 50%;\n                background: #f5f5f7;\n                border: none;\n                color: #888;\n                font-size: 18px;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s;\n            }\n            \n            .bl-close:hover {\n                background: #eee;\n                color: #333;\n            }\n            \n            .bl-list {\n                flex: 1;\n                overflow-y: auto;\n                padding: 10px 20px;\n                max-height: 350px;\n            }\n            \n            .bl-empty {\n                text-align: center;\n                color: #999;\n                padding: 40px 20px;\n                font-size: 14px;\n            }\n            \n            .bl-item {\n                background: #f8f8fa;\n                border-radius: 12px;\n                padding: 14px;\n                margin-bottom: 10px;\n                position: relative;\n            }\n            \n            .bl-item-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: flex-start;\n                margin-bottom: 6px;\n            }\n            \n            .bl-item-remark {\n                font-size: 15px;\n                font-weight: 600;\n                color: #333;\n                flex: 1;\n                word-break: break-all;\n            }\n            \n            .bl-item-actions {\n                display: flex;\n                gap: 8px;\n                flex-shrink: 0;\n            }\n            \n            .bl-item-btn {\n                width: 28px;\n                height: 28px;\n                border-radius: 8px;\n                border: none;\n                cursor: pointer;\n                font-size: 14px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s;\n            }\n            \n            .bl-item-btn.edit {\n                background: #e3f2fd;\n                color: #1976d2;\n            }\n            \n            .bl-item-btn.delete {\n                background: #ffebee;\n                color: #d32f2f;\n            }\n            \n            .bl-item-btn:hover {\n                transform: scale(1.1);\n            }\n            \n            .bl-item-info {\n                font-size: 12px;\n                color: #888;\n                display: flex;\n                gap: 12px;\n            }\n            \n            .bl-footer {\n                padding: 16px 20px;\n                border-top: 1px solid rgba(0, 0, 0, 0.06);\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n            }\n            \n            .bl-count {\n                font-size: 13px;\n                color: #666;\n                text-align: center;\n            }\n            \n            .bl-actions {\n                display: flex;\n                gap: 10px;\n            }\n            \n            .bl-btn {\n                flex: 1;\n                padding: 10px;\n                border-radius: 10px;\n                border: none;\n                font-size: 13px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: all 0.2s;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                gap: 4px;\n            }\n            \n            .bl-btn.export {\n                background: #e8f5e9;\n                color: #2e7d32;\n            }\n            \n            .bl-btn.import {\n                background: #e3f2fd;\n                color: #1565c0;\n            }\n            \n            .bl-btn.clear {\n                background: #ffebee;\n                color: #c62828;\n            }\n            \n            .bl-btn:hover {\n                transform: translateY(-1px);\n                filter: brightness(0.95);\n            }\n            \n            /* 拉黑确认弹窗 */\n            .blacklist-confirm {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                width: 300px;\n                background: white;\n                border-radius: 16px;\n                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n                z-index: 10003;\n                display: none;\n                opacity: 0;\n                transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n            }\n            \n            .blacklist-confirm.show {\n                display: block;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            .bc-header {\n                padding: 20px 20px 12px;\n                text-align: center;\n            }\n            \n            .bc-title {\n                font-size: 17px;\n                font-weight: 700;\n                color: #1a1a1a;\n                margin-bottom: 8px;\n            }\n            \n            .bc-info {\n                font-size: 13px;\n                color: #666;\n            }\n            \n            .bc-body {\n                padding: 0 20px 16px;\n            }\n            \n            .bc-label {\n                font-size: 13px;\n                color: #888;\n                margin-bottom: 8px;\n            }\n            \n            .bc-input {\n                width: 100%;\n                padding: 12px;\n                border: 1px solid #e0e0e0;\n                border-radius: 10px;\n                font-size: 14px;\n                box-sizing: border-box;\n                transition: border-color 0.2s;\n            }\n            \n            .bc-input:focus {\n                outline: none;\n                border-color: #007aff;\n            }\n            \n            .bc-footer {\n                display: flex;\n                border-top: 1px solid #eee;\n            }\n            \n            .bc-btn {\n                flex: 1;\n                padding: 14px;\n                border: none;\n                background: none;\n                font-size: 15px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: background 0.2s;\n            }\n            \n            .bc-btn:first-child {\n                border-right: 1px solid #eee;\n                color: #666;\n            }\n            \n            .bc-btn:last-child {\n                color: #ff3b30;\n            }\n            \n            .bc-btn:hover {\n                background: #f5f5f5;\n            }\n            \n            /* 黑名单遮罩 */\n            .bl-overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.5);\n                z-index: 10001;\n                display: none;\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n            \n            .bl-overlay.show {\n                display: block;\n                opacity: 1;\n            }\n            \n            /* 隐藏的文件输入 */\n            #blacklistFileInput {\n                display: none;\n            }\n        ";
    document.head.appendChild(_0x495c9e);
    const _0x5a6205 = document.createElement("div");
    _0x5a6205.className = "floating-btn";
    _0x5a6205.id = "floatingBtn";
    _0x5a6205.innerHTML = "控制<br>面板";
    _0x5a6205.title = "点击打开控制面板 | 长按拖动";
    let _0x5290a5 = false;
    let _0x2c50d4 = 0;
    let _0x3f3916 = 0;
    let _0x4fdb3d = 0;
    let _0x5f79ac = 0;
    let _0x2d093a = false;
    const _0x1eb0c8 = document.createElement("div");
    _0x1eb0c8.className = "overlay";
    _0x1eb0c8.id = "overlay";
    const _0x5a049a = document.createElement("div");
    _0x5a049a.className = "control-panel";
    _0x5a049a.id = "controlPanel";
    _0x5a049a.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">脚本控制面板</div>\n                <button class=\"panel-close\" id=\"panelClose\">×</button>\n            </div>\n            \n            <div class=\"cp-list-block\">\n                <ul>\n                    <li>\n                        <div class=\"cp-item-content\">\n                            <div class=\"cp-item-inner\">\n                                <div class=\"cp-item-title\">⚡ 脚本启动</div>\n                                <div class=\"cp-item-input\">\n                                    <label class=\"cp-label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                        <div class=\"cp-checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"cp-item-content\">\n                            <div class=\"cp-item-inner\">\n                                <div class=\"cp-item-title\" id=\"txt_match\">🚺 仅女生</div>\n                                <div class=\"cp-item-input\">\n                                    <label class=\"cp-label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                        <div class=\"cp-checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"cp-item-content\">\n                            <div class=\"cp-item-inner\">\n                                <div class=\"cp-item-title\">🏷️ 过滤清流</div>\n                                <div class=\"cp-item-input\">\n                                    <label class=\"cp-label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_qingliu\" checked>\n                                        <div class=\"cp-checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"cp-item-content\">\n                            <div class=\"cp-item-inner\">\n                                <div class=\"cp-item-title\">🔞 过滤未成年</div>\n                                <div class=\"cp-item-input\">\n                                    <label class=\"cp-label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_under18\">\n                                        <div class=\"cp-checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"cp-item-content\">\n                            <div class=\"cp-item-inner\">\n                                <div class=\"cp-item-title\">🚫 启用黑名单</div>\n                                <div class=\"cp-item-input\">\n                                    <label class=\"cp-label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_blacklist\" checked>\n                                        <div class=\"cp-checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            \n            <div class=\"btn-group\">\n                <button class=\"contact-btn\" id=\"btn_contact\">📲 发送联系方式</button>\n                <button class=\"contact-btn\" id=\"btn_vip_card\">💳 VIP卡包</button>\n            </div>\n            \n            <div class=\"btn-group\">\n                <button class=\"contact-btn\" id=\"btn_blacklist_add\" style=\"background: linear-gradient(135deg, #ff3b30 0%, #ff6b6b 100%); box-shadow: 0 4px 12px rgba(255, 59, 48, 0.2);\">🔒 拉黑对方</button>\n                <button class=\"contact-btn\" id=\"btn_blacklist_manage\" style=\"background: linear-gradient(135deg, #5856d6 0%, #af52de 100%); box-shadow: 0 4px 12px rgba(88, 86, 214, 0.2);\">📋 管理黑名单</button>\n            </div>\n            \n            <div class=\"panel-footer\">\n                <span>© 驭师69号</span>\n                <span>V1.0.4 Pro</span>\n            </div>\n        ";
    const _0x4341c6 = document.createElement("div");
    _0x4341c6.className = "toast-container";
    _0x4341c6.id = "toastContainer";
    const _0xa27fb9 = document.createElement("div");
    _0xa27fb9.className = "bl-overlay";
    _0xa27fb9.id = "blOverlay";
    const _0x4f1e01 = document.createElement("div");
    _0x4f1e01.className = "blacklist-modal";
    _0x4f1e01.id = "blacklistModal";
    _0x4f1e01.innerHTML = "\n        <div class=\"bl-header\">\n            <div class=\"bl-title\">📋 黑名单管理</div>\n            <button class=\"bl-close\" id=\"blClose\">×</button>\n        </div>\n        <div class=\"bl-list\" id=\"blList\"></div>\n        <div class=\"bl-footer\">\n            <div class=\"bl-count\" id=\"blCount\">共 0 人</div>\n            <div class=\"bl-actions\">\n                <button class=\"bl-btn export\" id=\"blExport\">📤 导出</button>\n                <button class=\"bl-btn import\" id=\"blImport\">📥 导入</button>\n                <button class=\"bl-btn clear\" id=\"blClear\">🗑️ 清空</button>\n            </div>\n        </div>\n    ";
    const _0x33901f = document.createElement("div");
    _0x33901f.className = "blacklist-confirm";
    _0x33901f.id = "blacklistConfirm";
    _0x33901f.innerHTML = "\n        <div class=\"bc-header\">\n            <div class=\"bc-title\">🚫 添加到黑名单</div>\n            <div class=\"bc-info\" id=\"bcInfo\">对方: 未知</div>\n        </div>\n        <div class=\"bc-body\">\n            <div class=\"bc-label\">备注原因（可选）:</div>\n            <input type=\"text\" class=\"bc-input\" id=\"bcRemark\" placeholder=\"如：广告党、骚扰者...\">\n        </div>\n        <div class=\"bc-footer\">\n            <button class=\"bc-btn\" id=\"bcCancel\">取消</button>\n            <button class=\"bc-btn\" id=\"bcConfirm\">确认拉黑</button>\n        </div>\n    ";
    const _0x38bbc1 = document.createElement("input");
    _0x38bbc1.type = "file";
    _0x38bbc1.id = "blacklistFileInput";
    _0x38bbc1.accept = ".json";
    document.body.appendChild(_0x5a6205);
    document.body.appendChild(_0x1eb0c8);
    document.body.appendChild(_0x5a049a);
    document.body.appendChild(_0x4341c6);
    document.body.appendChild(_0xa27fb9);
    document.body.appendChild(_0x4f1e01);
    document.body.appendChild(_0x33901f);
    document.body.appendChild(_0x38bbc1);
    function _0x1b7a18() {
      _0x5a049a.classList.toggle("show");
      _0x1eb0c8.classList.toggle("show");
    }
    function _0x3e2777() {
      _0x5a049a.classList.remove("show");
      _0x1eb0c8.classList.remove("show");
    }
    _0x5a6205.addEventListener("mousedown", function (_0x45f1b8) {
      _0x5290a5 = true;
      _0x2d093a = false;
      _0x2c50d4 = _0x45f1b8.clientX;
      _0x3f3916 = _0x45f1b8.clientY;
      const _0xbcf5c6 = _0x5a6205.getBoundingClientRect();
      _0x4fdb3d = _0xbcf5c6.left;
      _0x5f79ac = _0xbcf5c6.top;
      _0x5a6205.style.cursor = "grabbing";
      _0x5a6205.style.opacity = "0.8";
      _0x5a6205.style.transition = "none";
      _0x45f1b8.preventDefault();
      _0x45f1b8.stopPropagation();
    });
    document.addEventListener("mousemove", function (_0x5584b8) {
      if (!_0x5290a5) {
        return;
      }
      const _0x47a89a = _0x5584b8.clientX - _0x2c50d4;
      const _0xe94580 = _0x5584b8.clientY - _0x3f3916;
      if (Math.abs(_0x47a89a) > 5 || Math.abs(_0xe94580) > 5) {
        _0x2d093a = true;
      }
      let _0x3019c9 = _0x4fdb3d + _0x47a89a;
      let _0x48efcf = _0x5f79ac + _0xe94580;
      const _0x32c22e = window.innerWidth - _0x5a6205.offsetWidth;
      const _0x38aac2 = window.innerHeight - _0x5a6205.offsetHeight;
      _0x3019c9 = Math.max(0, Math.min(_0x3019c9, _0x32c22e));
      _0x48efcf = Math.max(0, Math.min(_0x48efcf, _0x38aac2));
      _0x5a6205.style.left = _0x3019c9 + "px";
      _0x5a6205.style.top = _0x48efcf + "px";
      _0x5a6205.style.right = "auto";
      _0x5a6205.style.bottom = "auto";
      _0x5584b8.preventDefault();
    });
    document.addEventListener("mouseup", function (_0x434dd2) {
      if (_0x5290a5) {
        _0x5290a5 = false;
        _0x5a6205.style.cursor = "grab";
        _0x5a6205.style.opacity = "1";
        _0x5a6205.style.transition = "all 0.3s ease";
        if (!_0x2d093a) {
          _0x1b7a18();
        }
      }
    });
    const _0x21d46f = {
      passive: false
    };
    _0x5a6205.addEventListener("touchstart", function (_0x4155b9) {
      _0x5290a5 = true;
      _0x2d093a = false;
      const _0x56b0c3 = _0x4155b9.touches[0];
      _0x2c50d4 = _0x56b0c3.clientX;
      _0x3f3916 = _0x56b0c3.clientY;
      const _0x796fea = _0x5a6205.getBoundingClientRect();
      _0x4fdb3d = _0x796fea.left;
      _0x5f79ac = _0x796fea.top;
      _0x5a6205.style.opacity = "0.8";
      _0x5a6205.style.transition = "none";
      _0x4155b9.preventDefault();
    }, _0x21d46f);
    const _0x388433 = {
      passive: false
    };
    document.addEventListener("touchmove", function (_0x343f6a) {
      if (!_0x5290a5) {
        return;
      }
      const _0x29965e = _0x343f6a.touches[0];
      const _0x164bf1 = _0x29965e.clientX - _0x2c50d4;
      const _0x4e47fb = _0x29965e.clientY - _0x3f3916;
      if (Math.abs(_0x164bf1) > 5 || Math.abs(_0x4e47fb) > 5) {
        _0x2d093a = true;
      }
      let _0x431aa5 = _0x4fdb3d + _0x164bf1;
      let _0xb55c51 = _0x5f79ac + _0x4e47fb;
      const _0x2f73b3 = window.innerWidth - _0x5a6205.offsetWidth;
      const _0x32593 = window.innerHeight - _0x5a6205.offsetHeight;
      _0x431aa5 = Math.max(0, Math.min(_0x431aa5, _0x2f73b3));
      _0xb55c51 = Math.max(0, Math.min(_0xb55c51, _0x32593));
      _0x5a6205.style.left = _0x431aa5 + "px";
      _0x5a6205.style.top = _0xb55c51 + "px";
      _0x5a6205.style.right = "auto";
      _0x5a6205.style.bottom = "auto";
      _0x343f6a.preventDefault();
    }, _0x388433);
    document.addEventListener("touchend", function (_0x2eb7cd) {
      if (_0x5290a5) {
        _0x5290a5 = false;
        _0x5a6205.style.opacity = "1";
        _0x5a6205.style.transition = "all 0.3s ease";
        if (!_0x2d093a) {
          _0x1b7a18();
        }
      }
    });
    _0x1eb0c8.addEventListener("click", _0x3e2777);
    document.getElementById("panelClose").addEventListener("click", _0x3e2777);
    document.addEventListener("keydown", function (_0x49f9ef) {
      _0x49f9ef.key === "Escape" && _0x5a049a.classList.contains("show") && _0x3e2777();
    });
    function _0x138ecc(_0x58abb6, _0x44fab7 = "info", _0x480bc5 = 4000) {
      const _0x56997d = document.createElement("div");
      _0x56997d.className = "toast " + _0x44fab7;
      const _0x119feb = {
        success: "✅",
        error: "❌",
        warning: "⚠️",
        info: "ℹ️"
      };
      _0x56997d.innerHTML = "\n        <span class=\"toast-icon\">" + (_0x119feb[_0x44fab7] || "ℹ️") + "</span>\n        <span>" + _0x58abb6 + "</span>\n      ";
      _0x4341c6.appendChild(_0x56997d);
      setTimeout(() => {
        _0x56997d.classList.add("fade-out");
        setTimeout(() => {
          _0x56997d.parentNode && _0x56997d.parentNode.removeChild(_0x56997d);
        }, 300);
      }, _0x480bc5);
      return _0x56997d;
    }
    document.getElementById("ckb_script").addEventListener("change", function () {
      const _0x1a8795 = this.checked ? "开启" : "关闭";
      chatPage.scriptIsRun = this.checked;
      _0x138ecc("脚本" + _0x1a8795, this.checked ? "success" : "info");
      console.log("脚本启动: " + _0x1a8795);
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      const _0x18a84f = this.checked ? "女生" : "男生";
      const _0xe14afa = this.checked ? "🚺 " : "🚹 ";
      document.getElementById("txt_match").textContent = _0xe14afa + "仅" + _0x18a84f;
      chatPage.MatchWho = _0x18a84f;
      _0x138ecc("匹配模式: " + _0x18a84f, "info");
      console.log("匹配模式: " + _0x18a84f);
    });
    document.getElementById("ckb_qingliu").addEventListener("change", function () {
      const _0x5df069 = this.checked ? "开启" : "关闭";
      filterQingliu = this.checked;
      _0x138ecc("过滤清流标签: " + _0x5df069, this.checked ? "warning" : "info");
      console.log("过滤清流标签: " + _0x5df069);
    });
    document.getElementById("ckb_under18").addEventListener("change", function () {
      const _0x2159fc = this.checked ? "开启" : "关闭";
      filterUnder18 = this.checked;
      _0x138ecc("过滤18岁以下: " + _0x2159fc, this.checked ? "warning" : "info");
      console.log("过滤18岁以下: " + _0x2159fc);
    });
    document.getElementById("btn_contact").addEventListener("click", function () {
      const _0x3a7809 = this;
      const _0x28a574 = _0x3a7809.textContent;
      _0x3a7809.textContent = "发送中...";
      _0x3a7809.classList.add("sending");
      _0x138ecc("正在发送联系方式...", "info", 2000);
      _0x5cec67();
      setTimeout(() => {
        _0x3a7809.textContent = _0x28a574;
        _0x3a7809.classList.remove("sending");
        _0x138ecc("联系方式发送成功！", "success");
      }, 2000);
    });
    document.getElementById("btn_vip_card").addEventListener("click", function () {
      openVIPCardWallet();
      _0x138ecc("正在打开VIP卡包...", "info", 1500);
    });
    document.getElementById("ckb_blacklist").addEventListener("change", function () {
      const _0x4e7726 = this.checked ? "开启" : "关闭";
      blacklistEnabled = this.checked;
      _0x138ecc("黑名单功能: " + _0x4e7726, this.checked ? "warning" : "info");
      console.log("黑名单功能: " + _0x4e7726);
    });
    function _0x1840df() {
      try {
        const _0x53ac64 = localStorage.getItem("partner");
        return _0x53ac64 ? JSON.parse(_0x53ac64) : null;
      } catch (_0x487b01) {
        return null;
      }
    }
    function _0x5cb988(_0x1289f9) {
      const _0x1f5785 = {
        "1": "18岁以下",
        "2": "18-22岁",
        "3": "23岁以上"
      };
      return _0x1f5785[String(_0x1289f9)] || "";
    }
    function _0x43f580(_0x1f1d95) {
      const _0x27f34b = new Date(_0x1f1d95);
      const _0x564229 = {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      return _0x27f34b.toLocaleDateString("zh-CN", _0x564229);
    }
    function _0x488b3c() {
      const _0x465c91 = document.getElementById("blList");
      const _0x280be0 = document.getElementById("blCount");
      blacklist.length === 0 ? _0x465c91.innerHTML = "<div class=\"bl-empty\">🎉 黑名单为空</div>" : _0x465c91.innerHTML = blacklist.map((_0x303f4a, _0xfabcdb) => "\n          <div class=\"bl-item\" data-id=\"" + _0x303f4a.id + "\">\n            <div class=\"bl-item-header\">\n              <div class=\"bl-item-remark\">" + (_0x303f4a.remark || "未备注") + "</div>\n              <div class=\"bl-item-actions\">\n                <button class=\"bl-item-btn edit\" data-index=\"" + _0xfabcdb + "\" title=\"编辑\">✏️</button>\n                <button class=\"bl-item-btn delete\" data-index=\"" + _0xfabcdb + "\" title=\"删除\">🗑️</button>\n              </div>\n            </div>\n            <div class=\"bl-item-info\">\n              <span>" + (_0x303f4a.gender || "未知") + " " + _0x5cb988(_0x303f4a.age) + "</span>\n              <span>" + _0x43f580(_0x303f4a.addTime) + "</span>\n            </div>\n          </div>\n        ").join("");
      _0x280be0.textContent = "共 " + blacklist.length + " 人";
    }
    function _0x1c28d4() {
      _0x488b3c();
      _0xa27fb9.classList.add("show");
      _0x4f1e01.classList.add("show");
    }
    function _0x5e7953() {
      _0xa27fb9.classList.remove("show");
      _0x4f1e01.classList.remove("show");
    }
    function _0x3c1045() {
      const _0x181450 = _0x1840df();
      if (!_0x181450) {
        _0x138ecc("当前没有聊天对象", "warning");
        return;
      }
      if (!_0x181450.idEncrypted) {
        _0x138ecc("无法获取对方信息", "error");
        return;
      }
      if (isInBlacklist(_0x181450.idEncrypted)) {
        _0x138ecc("对方已在黑名单中", "warning");
        return;
      }
      document.getElementById("bcInfo").textContent = "对方: " + (_0x181450.strGender || "未知") + " " + _0x5cb988(_0x181450.strAge);
      document.getElementById("bcRemark").value = "";
      _0xa27fb9.classList.add("show");
      _0x33901f.classList.add("show");
    }
    function _0x36b6a6() {
      _0x33901f.classList.remove("show");
      _0xa27fb9.classList.remove("show");
    }
    function _0x31ea43() {
      const _0x3fdef2 = _0x1840df();
      if (!_0x3fdef2 || !_0x3fdef2.idEncrypted) {
        _0x138ecc("无法获取对方信息", "error");
        _0x36b6a6();
        return;
      }
      const _0x587293 = document.getElementById("bcRemark").value.trim();
      const _0x483d2c = addToBlacklist(_0x3fdef2.idEncrypted, _0x587293 || "未备注", _0x3fdef2.strGender || "", _0x3fdef2.strAge || "");
      if (_0x483d2c) {
        _0x138ecc("已将对方加入黑名单", "success");
        _0x36b6a6();
        const _0xf216ab = document.querySelector("a.tab-link[href=\"#view-leave\"]");
        if (_0xf216ab) {
          _0xf216ab.click();
        }
      } else {
        _0x138ecc("对方已在黑名单中", "warning");
      }
    }
    document.getElementById("btn_blacklist_manage").addEventListener("click", function () {
      _0x1c28d4();
    });
    document.getElementById("btn_blacklist_add").addEventListener("click", function () {
      _0x3c1045();
    });
    document.getElementById("blClose").addEventListener("click", _0x5e7953);
    _0xa27fb9.addEventListener("click", function () {
      _0x5e7953();
      _0x36b6a6();
    });
    document.getElementById("blList").addEventListener("click", function (_0x37da23) {
      const _0x3548b0 = _0x37da23.target.closest(".bl-item-btn");
      if (!_0x3548b0) {
        return;
      }
      const _0x498c81 = parseInt(_0x3548b0.dataset.index);
      const _0x1a4ec5 = blacklist[_0x498c81];
      if (!_0x1a4ec5) {
        return;
      }
      if (_0x3548b0.classList.contains("edit")) {
        const _0x2f38fd = prompt("修改备注:", _0x1a4ec5.remark);
        _0x2f38fd !== null && (updateBlacklistRemark(_0x1a4ec5.id, _0x2f38fd.trim() || "未备注"), _0x488b3c(), _0x138ecc("备注已更新", "success"));
      } else {
        _0x3548b0.classList.contains("delete") && confirm("确定要将此人从黑名单移除吗？") && (removeFromBlacklist(_0x1a4ec5.id), _0x488b3c(), _0x138ecc("已从黑名单移除", "success"));
      }
    });
    document.getElementById("blExport").addEventListener("click", function () {
      if (blacklist.length === 0) {
        _0x138ecc("黑名单为空，无法导出", "warning");
        return;
      }
      exportBlacklist();
      _0x138ecc("黑名单已导出", "success");
    });
    document.getElementById("blImport").addEventListener("click", function () {
      _0x38bbc1.click();
    });
    _0x38bbc1.addEventListener("change", function (_0x330375) {
      const _0x27fb1f = _0x330375.target.files[0];
      if (!_0x27fb1f) {
        return;
      }
      importBlacklist(_0x27fb1f).then(_0x2231f8 => {
        _0x488b3c();
        _0x138ecc("成功导入 " + _0x2231f8 + " 人", "success");
      }).catch(_0x135c06 => {
        _0x138ecc("导入失败: " + _0x135c06.message, "error");
      });
      _0x38bbc1.value = "";
    });
    document.getElementById("blClear").addEventListener("click", function () {
      if (blacklist.length === 0) {
        _0x138ecc("黑名单已为空", "info");
        return;
      }
      confirm("确定要清空全部 " + blacklist.length + " 人吗？此操作不可恢复！") && (clearBlacklist(), _0x488b3c(), _0x138ecc("黑名单已清空", "success"));
    });
    document.getElementById("bcCancel").addEventListener("click", _0x36b6a6);
    document.getElementById("bcConfirm").addEventListener("click", _0x31ea43);
    let _0x197ddf = null;
    let _0x22cd94 = false;
    function _0x298d69() {
      if (!chatPage.scriptIsRun) {
        return false;
      }
      if (!blacklistEnabled || _0x22cd94) {
        return false;
      }
      const _0x4aacde = _0x1840df();
      if (!_0x4aacde || !_0x4aacde.idEncrypted) {
        return false;
      }
      const _0x1e99b0 = _0x4aacde.extra ? _0x4aacde.extra.chatId : null;
      const _0x4a43c8 = _0x1e99b0 + "_" + _0x4aacde.idEncrypted;
      if (_0x197ddf === _0x4a43c8) {
        return false;
      }
      const _0x29da2e = isInBlacklist(_0x4aacde.idEncrypted);
      if (_0x29da2e) {
        _0x197ddf = _0x4a43c8;
        _0x22cd94 = true;
        console.log("[黑名单] 检测到黑名单用户:", _0x29da2e.remark);
        _0x138ecc("🚫 已自动跳过黑名单用户：" + _0x29da2e.remark, "warning", 3000);
        setTimeout(() => {
          const _0x43f2cb = document.querySelector("a.tab-link[href=\"#view-leave\"]");
          _0x43f2cb && _0x43f2cb.click();
          setTimeout(() => {
            _0x22cd94 = false;
            _0x197ddf = null;
          }, 2000);
        }, 100);
        return true;
      }
      _0x197ddf = _0x4a43c8;
      return false;
    }
    window.checkBlacklist = _0x298d69;
    window.isInBlacklist = isInBlacklist;
    window.getCurrentPartner = _0x1840df;
    setInterval(_0x298d69, 500);
    setTimeout(_0x298d69, 100);
    document.getElementById("ckb_match").click();
    _0x138ecc("驭师插件，欢迎您的使用！", "success");
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x3fa83a();
  }
};
MainFunc();