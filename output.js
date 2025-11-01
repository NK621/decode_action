//Sat Nov 01 2025 11:41:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x3d7acd, _0x115a52, ..._0x2632ed) {
  QQ = _0x3d7acd;
  index = _0x115a52;
  AUTO_MSG = _0x2632ed;
};
setData("123456789", 0, "hello");
try {
  ma == undefined;
} catch (_0x2f1e23) {
  ma = "zaomima";
}
const chatPage = {
  scriptRunning: false,
  target: "女生",
  alreadySent: false,
  nextInterval: 600,
  chat: null,
  page: null,
  findEl: false,
  loadFailnum: 0,
  magic() {
    return ma == "114514fk";
  },
  sendMsg(_0x4bb9c0) {
    this.chat.emit("typing");
    const _0x5e6ca9 = "tmp_" + Date.now() + Math.floor(1000 * Math.random());
    messageAdded = {
      id: _0x5e6ca9,
      content: _0x4bb9c0,
      time: new Date().toLocaleTimeString(),
      type: "text",
      user: "self",
      status: "sending",
      isRead: false,
      isDelivered: false,
      tmpId: _0x5e6ca9
    };
    this.chat.emit("message-added", messageAdded);
    const _0x8c35a6 = {
      content: _0x4bb9c0,
      tmpId: _0x5e6ca9
    };
    this.chat.emit("send", _0x8c35a6);
  },
  leave() {
    this.chat.emit("leave");
    this.page.chatState = "SELF_LEFT";
  },
  rematch() {
    this.alreadySent = false;
    this.chat.emit("next-person");
  },
  getPartnerInfo() {
    return this.page.partnerInfo;
  },
  isTarget() {
    return this.getPartnerInfo().gender == this.target;
  },
  getChatState() {
    const _0x25a6c4 = localStorage.bottle_partner_left_status;
    const _0x398fcc = _0x25a6c4 && JSON.parse(_0x25a6c4).data;
    if (_0x398fcc) {
      return "PARTNER_LEFT";
    }
    return this.page.chatState;
  },
  sendContactInfo(_0x402365) {
    let _0x1d7a66 = 0;
    let _0x107098 = "";
    let _0xd4a8bf = [];
    console.log("开始处理: \"" + _0x402365 + "\"");
    for (let _0x6ba508 = 0; _0x6ba508 < _0x402365.length; _0x6ba508++) {
      {
        const _0x54b92d = _0x402365[_0x6ba508];
        _0x107098 += _0x54b92d;
        if (/\d/.test(_0x54b92d)) {
          _0x1d7a66++;
        }
        (_0x1d7a66 === 3 || _0x6ba508 === _0x402365.length - 1) && (_0xd4a8bf.push(_0x107098), _0x107098 = "", _0x1d7a66 = 0);
      }
    }
    _0xd4a8bf.forEach((_0x45ecac, _0x1f80e5) => {
      {
        setTimeout(() => {
          this.sendMsg(_0x45ecac);
        }, (_0x1f80e5 + 1) * 800);
      }
    });
    return _0xd4a8bf;
  },
  initialize() {
    if (document.getElementById("floatingBtn")) {
      {
        console.log("悬浮面板已存在，正在移除...");
        document.getElementById("floatingBtn")?.["remove"]();
        document.getElementById("overlay")?.["remove"]();
        document.getElementById("controlPanel")?.["remove"]();
        const _0x95c322 = document.getElementById("floatingPanelStyle");
        if (_0x95c322) {
          _0x95c322.remove();
        }
      }
    }
    const _0x247f61 = document.createElement("style");
    _0x247f61.id = "floatingPanelStyle";
    _0x247f61.textContent = "\n            .floating-btn {\n                position: fixed;\n                bottom: 120px;\n                right: 10px;\n                width: 50px;\n                height: 50px;\n                background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%);\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-size: 12px;\n                cursor: pointer;\n                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n                z-index: 10000;\n                user-select: none;\n                transition: all 0.3s ease;\n                text-align: center;\n                line-height: 1.2;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .floating-btn:hover {\n                transform: scale(1.1);\n                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n            }\n            \n            .control-panel {\n                position: fixed;\n                bottom: 170px;\n                right: 20px;\n                width: 320px;\n                background: white;\n                border-radius: 12px;\n                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n                z-index: 9999;\n                display: none;\n                padding: 15px;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .control-panel.show {\n                display: block;\n                animation: slideUp 0.3s ease;\n            }\n            \n            @keyframes slideUp {\n                from {\n                    opacity: 0;\n                    transform: translateY(20px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }\n            \n            .list-block {\n                margin: 0;\n            }\n            \n            .list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .list-block li {\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .list-block li:last-child {\n                border-bottom: none;\n            }\n            \n            .item-content {\n                display: flex;\n                align-items: center;\n                padding: 12px 0;\n                min-height: 44px;\n            }\n            \n            .item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                flex-wrap: wrap;\n            }\n            \n            .item-title {\n                font-size: 14px;\n                color: #333;\n                flex: 1;\n                min-width: 120px;\n                margin-right: 10px;\n            }\n            \n            .item-input {\n                flex-shrink: 0;\n                display: flex;\n                align-items: center;\n            }\n            \n            .label-switch {\n                position: relative;\n                display: inline-block;\n            }\n            \n            .label-switch input {\n                display: none;\n            }\n            \n            .checkbox {\n                width: 52px;\n                height: 32px;\n                background: #e5e5e5;\n                border-radius: 16px;\n                position: relative;\n                transition: all 0.3s ease;\n                cursor: pointer;\n            }\n            \n            .checkbox:before {\n                content: '';\n                position: absolute;\n                width: 28px;\n                height: 28px;\n                background: white;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                transition: all 0.3s ease;\n                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n            }\n            \n            input:checked + .checkbox {\n                background: #4CD964;\n            }\n            \n            input:checked + .checkbox:before {\n                transform: translateX(20px);\n            }\n            \n            .contact-btn {\n                background: #007AFF;\n                color: white;\n                padding: 10px 16px;\n                border-radius: 8px;\n                text-align: center;\n                cursor: pointer;\n                transition: all 0.3s ease;\n                font-size: 14px;\n                border: none;\n                min-width: 120px;\n                margin-top: 5px;\n                flex-shrink: 0;\n            }\n            \n            .contact-btn:hover {\n                background: #0056CC;\n                transform: translateY(-1px);\n            }\n            \n            .contact-btn:active {\n                transform: translateY(0);\n            }\n            \n            .contact-btn.sending {\n                background: #999;\n                cursor: not-allowed;\n            }\n            \n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.3);\n                z-index: 9998;\n                display: none;\n            }\n            \n            .overlay.show {\n                display: block;\n            }\n            \n            /* 关闭按钮 */\n            .panel-close {\n                position: absolute;\n                top: 10px;\n                right: 15px;\n                background: none;\n                border: none;\n                font-size: 20px;\n                cursor: pointer;\n                color: #999;\n                width: 24px;\n                height: 24px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            \n            .panel-close:hover {\n                color: #333;\n            }\n            \n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 10px;\n                padding-bottom: 10px;\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .panel-title {\n                font-size: 16px;\n                font-weight: bold;\n                color: #333;\n            }\n            \n            /* Toast 样式 */\n            .toast-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 10001;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .toast {\n                background: #333;\n                color: white;\n                padding: 12px 20px;\n                border-radius: 8px;\n                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n                font-size: 14px;\n                max-width: 300px;\n                animation: toastSlideIn 0.3s ease;\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            \n            .toast.success {\n                background: #4CD964;\n            }\n            \n            .toast.error {\n                background: #FF3B30;\n            }\n            \n            .toast.warning {\n                background: #FF9500;\n            }\n            \n            .toast.info {\n                background: #007AFF;\n            }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s ease forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n            }\n            \n            @keyframes toastSlideOut {\n                from {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n                to {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n            }\n            \n            .toast-icon {\n                font-size: 16px;\n            }\n            \n            /* 测试按钮区域 */\n            .test-buttons {\n                margin-top: 15px;\n                padding-top: 15px;\n                border-top: 1px solid #f0f0f0;\n                display: flex;\n                flex-wrap: wrap;\n                gap: 8px;\n            }\n            \n            .test-btn {\n                background: #f0f0f0;\n                border: none;\n                padding: 6px 12px;\n                border-radius: 6px;\n                font-size: 12px;\n                cursor: pointer;\n                transition: background 0.3s ease;\n                flex: 1;\n                min-width: 60px;\n            }\n            \n            .test-btn:hover {\n                background: #e0e0e0;\n            }\n            \n            .test-btn.success {\n                background: #4CD964;\n                color: white;\n            }\n            \n            .test-btn.error {\n                background: #FF3B30;\n                color: white;\n            }\n            \n            .test-btn.warning {\n                background: #FF9500;\n                color: white;\n            }\n            \n            .test-btn.info {\n                background: #007AFF;\n                color: white;\n            }\n        ";
    document.head.appendChild(_0x247f61);
    const _0x35339b = document.createElement("div");
    _0x35339b.className = "floating-btn";
    _0x35339b.id = "floatingBtn";
    _0x35339b.innerHTML = "控制<br>面板";
    _0x35339b.title = "点击打开控制面板";
    const _0x5cfdc6 = document.createElement("div");
    _0x5cfdc6.className = "overlay";
    _0x5cfdc6.id = "overlay";
    const _0x28dd05 = document.createElement("div");
    _0x28dd05.className = "control-panel";
    _0x28dd05.id = "controlPanel";
    _0x28dd05.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">脚本控制面板</div>\n                <button class=\"panel-close\" id=\"panelClose\">×</button>\n            </div>\n            <div class=\"list-block\">\n                <ul>\n                    <li>\n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">脚本启动</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\" id=\"txt_match\">仅女生</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">发送联系方式</div>\n                                <div class=\"item-input\">\n                                    <button class=\"contact-btn\" id=\"btn_contact\">发送联系方式</button>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"test-buttons\">\n            <div style=\"font-size: 12px; color: #666; width: 100%; margin-bottom: 5px;\">听说 by 2025.10.13</div>\n            </div>\n\n        ";
    const _0x5166de = document.createElement("div");
    _0x5166de.className = "toast-container";
    _0x5166de.id = "toastContainer";
    document.body.appendChild(_0x35339b);
    document.body.appendChild(_0x5cfdc6);
    document.body.appendChild(_0x28dd05);
    document.body.appendChild(_0x5166de);
    function _0x16c726() {
      {
        _0x28dd05.classList.toggle("show");
        _0x5cfdc6.classList.toggle("show");
      }
    }
    function _0x2197fe() {
      {
        _0x28dd05.classList.remove("show");
        _0x5cfdc6.classList.remove("show");
      }
    }
    _0x35339b.addEventListener("click", _0x16c726);
    _0x5cfdc6.addEventListener("click", _0x2197fe);
    document.getElementById("panelClose").addEventListener("click", _0x2197fe);
    document.addEventListener("keydown", function (_0x3718aa) {
      {
        if (_0x3718aa.key === "Escape" && _0x28dd05.classList.contains("show")) {
          {
            _0x2197fe();
          }
        }
      }
    });
    function _0x5cb203(_0x2c430c, _0x22b7c4 = "info", _0x424d3f = 4000) {
      {
        const _0x3e0de4 = document.createElement("div");
        _0x3e0de4.className = "toast " + _0x22b7c4;
        const _0x45145f = {
          success: "✅",
          error: "❌",
          warning: "⚠️",
          info: "ℹ️"
        };
        _0x3e0de4.innerHTML = "\n                <span class=\"toast-icon\">" + (_0x45145f[_0x22b7c4] || "ℹ️") + "</span>\n                <span>" + _0x2c430c + "</span>\n            ";
        _0x5166de.appendChild(_0x3e0de4);
        setTimeout(() => {
          {
            _0x3e0de4.classList.add("fade-out");
            setTimeout(() => {
              {
                _0x3e0de4.parentNode && _0x3e0de4.parentNode.removeChild(_0x3e0de4);
              }
            }, 300);
          }
        }, _0x424d3f);
        return _0x3e0de4;
      }
    }
    chatPage.showToast = _0x5cb203;
    document.getElementById("ckb_script").addEventListener("change", function () {
      {
        const _0x2180cb = this.checked ? "开启" : "关闭";
        chatPage.scriptRunning = this.checked;
        _0x5cb203("脚本" + _0x2180cb, this.checked ? "success" : "info");
        console.log("脚本启动: " + _0x2180cb);
      }
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      {
        const _0x4b98d8 = this.checked ? "女生" : "男生";
        document.getElementById("txt_match").textContent = "仅" + _0x4b98d8;
        chatPage.target = _0x4b98d8;
        _0x5cb203("匹配模式: " + _0x4b98d8, "info");
        console.log("匹配模式: " + _0x4b98d8);
      }
    });
    document.getElementById("btn_contact").addEventListener("click", function () {
      {
        console.log("发送联系方式按钮被点击");
        const _0x2e0e7c = this;
        const _0xc2deff = _0x2e0e7c.textContent;
        _0x2e0e7c.textContent = "发送中...";
        _0x2e0e7c.classList.add("sending");
        _0x5cb203("正在发送联系方式...", "info", 2000);
        chatPage.sendContactInfo(QQ);
        setTimeout(() => {
          {
            _0x2e0e7c.textContent = _0xc2deff;
            _0x2e0e7c.classList.remove("sending");
            _0x5cb203("联系方式发送成功！", "success");
          }
        }, 2000);
      }
    });
    document.getElementById("ckb_match").click();
    _0x5cb203("听说内群专属，电报频道@bdsm368\r\n从倒卖者处获取插件导致无法使用我们概不负责", "success");
  },
  setTimer() {
    setInterval(() => {
      {
        if (!this.findEl) {
          {
            const _0x4303c0 = document.querySelectorAll("[data-v-d506a6c7]");
            _0x4303c0.length == 14 && _0x4303c0[13].remove();
            const _0x2d0886 = document.querySelector("[data-v-bc442254]");
            if (_0x2d0886) {
              this.chat = _0x2d0886.__vueParentComponent.parent;
            }
            const _0x348e8b = document.querySelector("[data-v-f10347d0]");
            if (_0x348e8b) {
              this.page = _0x348e8b.__vueParentComponent.parent.props;
            }
            if (this.chat && this.page) {
              this.nextInterval = 600;
              this.findEl = true;
            } else {
              {
                this.nextInterval = 2000;
                this.loadFailnum++;
                if (this.loadFailnum % 5 == 0 && this.loadFailnum >= 5) {
                  this.showToast("正在尝试加载, 云端可能需要更新...", "warning", this.nextInterval);
                }
              }
            }
          }
        }
        if (!this.scriptRunning) {
          return;
        }
        switch (this.getChatState()) {
          case "REPAIRED":
          case "PAIRED":
            {
              {
                if (this.isTarget()) {
                  {
                    if (!this.alreadySent) {
                      {
                        this.alreadySent = true;
                        this.showToast("已匹配到: " + this.target + "！", "success", 1000);
                        if (AUTO_MSG.length > 0) {
                          {
                            let _0x9a248e = AUTO_MSG[index];
                            index++;
                            if (index >= AUTO_MSG.length) {
                              index = 0;
                            }
                            this.sendMsg(_0x9a248e);
                          }
                        }
                      }
                    }
                    break;
                  }
                }
                this.leave();
                break;
              }
            }
          case "PARTNER_LEFT":
            this.leave();
          case "FIRST":
          case "SELF_LEFT":
            this.rematch();
            break;
        }
      }
    }, this.nextInterval);
  }
};
chatPage.magic() && (chatPage.initialize(), chatPage.setTimer());