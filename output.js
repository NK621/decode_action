//Tue Nov 25 2025 17:08:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x4ea864, _0x306e9a, ..._0x25a5ba) {
  QQ = _0x4ea864;
  index = _0x306e9a;
  AUTO_MSG = _0x25a5ba;
};
setData("123456789", 0, "hello");
try {
  ma == undefined;
} catch (_0x3563b4) {
  ma = "zaomima";
}
const chatPage = {
  scriptRunning: false,
  target: "濂崇敓",
  alreadySent: false,
  nextInterval: 600,
  chat: null,
  page: null,
  findEl: false,
  loadFailnum: 0,
  magic() {
    return ma == "114514fk";
  },
  sendMsg(_0x160abf) {
    this.chat.emit("typing");
    const _0x4d2686 = "tmp_" + Date.now() + Math.floor(1000 * Math.random());
    messageAdded = {
      id: _0x4d2686,
      content: _0x160abf,
      time: new Date().toLocaleTimeString(),
      type: "text",
      user: "self",
      status: "sending",
      isRead: false,
      isDelivered: false,
      tmpId: _0x4d2686
    };
    this.chat.emit("message-added", messageAdded);
    const _0x458dda = {
      content: _0x160abf,
      tmpId: _0x4d2686
    };
    this.chat.emit("send", _0x458dda);
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
    const _0x17b71c = localStorage.bottle_partner_left_status;
    const _0x3418c8 = _0x17b71c && JSON.parse(_0x17b71c).data;
    if (_0x3418c8) {
      return "PARTNER_LEFT";
    }
    return this.page.chatState;
  },
  sendContactInfo(_0x593f93) {
    let _0x4f67ba = 0;
    let _0x1b0a8b = "";
    let _0x34e630 = [];
    console.log("开始处理: \"" + _0x593f93 + "\"");
    for (let _0x6addf1 = 0; _0x6addf1 < _0x593f93.length; _0x6addf1++) {
      {
        const _0x1901d8 = _0x593f93[_0x6addf1];
        _0x1b0a8b += _0x1901d8;
        if (/\d/.test(_0x1901d8)) {
          _0x4f67ba++;
        }
        if (_0x4f67ba === 3 || _0x6addf1 === _0x593f93.length - 1) {
          {
            _0x34e630.push(_0x1b0a8b);
            _0x1b0a8b = "";
            _0x4f67ba = 0;
          }
        }
      }
    }
    _0x34e630.forEach((_0x1701fe, _0x202084) => {
      {
        setTimeout(() => {
          {
            this.sendMsg(_0x1701fe);
          }
        }, (_0x202084 + 1) * 800);
      }
    });
    return _0x34e630;
  },
  initialize() {
    if (document.getElementById("floatingBtn")) {
      {
        console.log("悬浮面板已存在，正在移除...");
        document.getElementById("floatingBtn")?.["remove"]();
        document.getElementById("overlay")?.["remove"]();
        document.getElementById("controlPanel")?.["remove"]();
        const _0x2c6327 = document.getElementById("floatingPanelStyle");
        if (_0x2c6327) {
          _0x2c6327.remove();
        }
      }
    }
    const _0xa88134 = document.createElement("style");
    _0xa88134.id = "floatingPanelStyle";
    _0xa88134.textContent = "\n            .floating-btn {\n                position: fixed;\n                bottom: 120px;\n                right: 10px;\n                width: 50px;\n                height: 50px;\n                background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%);\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-size: 12px;\n                cursor: pointer;\n                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n                z-index: 10000;\n                user-select: none;\n                transition: all 0.3s ease;\n                text-align: center;\n                line-height: 1.2;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .floating-btn:hover {\n                transform: scale(1.1);\n                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n            }\n            \n            .control-panel {\n                position: fixed;\n                bottom: 170px;\n                right: 20px;\n                width: 320px;\n                background: white;\n                border-radius: 12px;\n                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n                z-index: 9999;\n                display: none;\n                padding: 15px;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .control-panel.show {\n                display: block;\n                animation: slideUp 0.3s ease;\n            }\n            \n            @keyframes slideUp {\n                from {\n                    opacity: 0;\n                    transform: translateY(20px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateY(0);\n                }\n            }\n            \n            .list-block {\n                margin: 0;\n            }\n            \n            .list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .list-block li {\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .list-block li:last-child {\n                border-bottom: none;\n            }\n            \n            .item-content {\n                display: flex;\n                align-items: center;\n                padding: 12px 0;\n                min-height: 44px;\n            }\n            \n            .item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                flex-wrap: wrap;\n            }\n            \n            .item-title {\n                font-size: 14px;\n                color: #333;\n                flex: 1;\n                min-width: 120px;\n                margin-right: 10px;\n            }\n            \n            .item-input {\n                flex-shrink: 0;\n                display: flex;\n                align-items: center;\n            }\n            \n            .label-switch {\n                position: relative;\n                display: inline-block;\n            }\n            \n            .label-switch input {\n                display: none;\n            }\n            \n            .checkbox {\n                width: 52px;\n                height: 32px;\n                background: #e5e5e5;\n                border-radius: 16px;\n                position: relative;\n                transition: all 0.3s ease;\n                cursor: pointer;\n            }\n            \n            .checkbox:before {\n                content: '';\n                position: absolute;\n                width: 28px;\n                height: 28px;\n                background: white;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                transition: all 0.3s ease;\n                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n            }\n            \n            input:checked + .checkbox {\n                background: #4CD964;\n            }\n            \n            input:checked + .checkbox:before {\n                transform: translateX(20px);\n            }\n            \n            .contact-btn {\n                background: #007AFF;\n                color: white;\n                padding: 10px 16px;\n                border-radius: 8px;\n                text-align: center;\n                cursor: pointer;\n                transition: all 0.3s ease;\n                font-size: 14px;\n                border: none;\n                min-width: 120px;\n                margin-top: 5px;\n                flex-shrink: 0;\n            }\n            \n            .contact-btn:hover {\n                background: #0056CC;\n                transform: translateY(-1px);\n            }\n            \n            .contact-btn:active {\n                transform: translateY(0);\n            }\n            \n            .contact-btn.sending {\n                background: #999;\n                cursor: not-allowed;\n            }\n            \n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.3);\n                z-index: 9998;\n                display: none;\n            }\n            \n            .overlay.show {\n                display: block;\n            }\n            \n            /* 关闭按钮 */\n            .panel-close {\n                position: absolute;\n                top: 10px;\n                right: 15px;\n                background: none;\n                border: none;\n                font-size: 20px;\n                cursor: pointer;\n                color: #999;\n                width: 24px;\n                height: 24px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            \n            .panel-close:hover {\n                color: #333;\n            }\n            \n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 10px;\n                padding-bottom: 10px;\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .panel-title {\n                font-size: 16px;\n                font-weight: bold;\n                color: #333;\n            }\n            \n            /* Toast 样式 */\n            .toast-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 10001;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .toast {\n                background: #333;\n                color: white;\n                padding: 12px 20px;\n                border-radius: 8px;\n                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n                font-size: 14px;\n                max-width: 300px;\n                animation: toastSlideIn 0.3s ease;\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            \n            .toast.success {\n                background: #4CD964;\n            }\n            \n            .toast.error {\n                background: #FF3B30;\n            }\n            \n            .toast.warning {\n                background: #FF9500;\n            }\n            \n            .toast.info {\n                background: #007AFF;\n            }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s ease forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n            }\n            \n            @keyframes toastSlideOut {\n                from {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n                to {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n            }\n            \n            .toast-icon {\n                font-size: 16px;\n            }\n            \n            /* 测试按钮区域 */\n            .test-buttons {\n                margin-top: 15px;\n                padding-top: 15px;\n                border-top: 1px solid #f0f0f0;\n                display: flex;\n                flex-wrap: wrap;\n                gap: 8px;\n            }\n            \n            .test-btn {\n                background: #f0f0f0;\n                border: none;\n                padding: 6px 12px;\n                border-radius: 6px;\n                font-size: 12px;\n                cursor: pointer;\n                transition: background 0.3s ease;\n                flex: 1;\n                min-width: 60px;\n            }\n            \n            .test-btn:hover {\n                background: #e0e0e0;\n            }\n            \n            .test-btn.success {\n                background: #4CD964;\n                color: white;\n            }\n            \n            .test-btn.error {\n                background: #FF3B30;\n                color: white;\n            }\n            \n            .test-btn.warning {\n                background: #FF9500;\n                color: white;\n            }\n            \n            .test-btn.info {\n                background: #007AFF;\n                color: white;\n            }\n        ";
    document.head.appendChild(_0xa88134);
    const _0x43d299 = document.createElement("div");
    _0x43d299.className = "floating-btn";
    _0x43d299.id = "floatingBtn";
    _0x43d299.innerHTML = "控制<br>面板";
    _0x43d299.title = "点击打开控制面板";
    const _0x452157 = document.createElement("div");
    _0x452157.className = "overlay";
    _0x452157.id = "overlay";
    const _0x16157a = document.createElement("div");
    _0x16157a.className = "control-panel";
    _0x16157a.id = "controlPanel";
    _0x16157a.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">脚本控制面板</div>\n                <button class=\"panel-close\" id=\"panelClose\">×</button>\n            </div>\n            <div class=\"list-block\">\n                <ul>\n                    <li>\n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">脚本启动</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\" id=\"txt_match\">仅女生</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">发送联系方式</div>\n                                <div class=\"item-input\">\n                                    <button class=\"contact-btn\" id=\"btn_contact\">发送联系方式</button>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"test-buttons\">\n            <div style=\"font-size: 12px; color: #666; width: 100%; margin-bottom: 5px;\">听说 by 2025.10.13</div>\n            </div>\n\n        ";
    const _0xc99c12 = document.createElement("div");
    _0xc99c12.className = "toast-container";
    _0xc99c12.id = "toastContainer";
    document.body.appendChild(_0x43d299);
    document.body.appendChild(_0x452157);
    document.body.appendChild(_0x16157a);
    document.body.appendChild(_0xc99c12);
    function _0x5c227a() {
      {
        _0x16157a.classList.toggle("show");
        _0x452157.classList.toggle("show");
      }
    }
    function _0x1f981e() {
      _0x16157a.classList.remove("show");
      _0x452157.classList.remove("show");
    }
    _0x43d299.addEventListener("click", _0x5c227a);
    _0x452157.addEventListener("click", _0x1f981e);
    document.getElementById("panelClose").addEventListener("click", _0x1f981e);
    document.addEventListener("keydown", function (_0x38052e) {
      {
        if (_0x38052e.key === "Escape" && _0x16157a.classList.contains("show")) {
          {
            _0x1f981e();
          }
        }
      }
    });
    function _0xdddcb0(_0x3cd540, _0x932a6e = "info", _0x53711d = 4000) {
      {
        const _0x2f034f = document.createElement("div");
        _0x2f034f.className = "toast " + _0x932a6e;
        const _0x263139 = {
          success: "鉁 ",
          error: "鉂 ",
          warning: "鈿狅笍",
          info: "鈩癸笍"
        };
        _0x2f034f.innerHTML = "\n                <span class=\"toast-icon\">" + (_0x263139[_0x932a6e] || "鈩癸笍") + "</span>\n                <span>" + _0x3cd540 + "</span>\n            ";
        _0xc99c12.appendChild(_0x2f034f);
        setTimeout(() => {
          _0x2f034f.classList.add("fade-out");
          setTimeout(() => {
            {
              if (_0x2f034f.parentNode) {
                {
                  _0x2f034f.parentNode.removeChild(_0x2f034f);
                }
              }
            }
          }, 300);
        }, _0x53711d);
        return _0x2f034f;
      }
    }
    chatPage.showToast = _0xdddcb0;
    document.getElementById("ckb_script").addEventListener("change", function () {
      {
        const _0x2cb7f8 = this.checked ? "寮€鍚 " : "鍏抽棴";
        chatPage.scriptRunning = this.checked;
        _0xdddcb0("鑴氭湰" + _0x2cb7f8, this.checked ? "success" : "info");
        console.log("脚本启动: " + _0x2cb7f8);
      }
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      {
        const _0x10cd4d = this.checked ? "濂崇敓" : "鐢风敓";
        document.getElementById("txt_match").textContent = "浠 " + _0x10cd4d;
        chatPage.target = _0x10cd4d;
        _0xdddcb0("匹配模式: " + _0x10cd4d, "info");
        console.log("匹配模式: " + _0x10cd4d);
      }
    });
    document.getElementById("btn_contact").addEventListener("click", function () {
      {
        console.log("发送联系方式按钮被点鍑 ");
        const _0x1e2762 = this;
        const _0xfb1fdd = _0x1e2762.textContent;
        _0x1e2762.textContent = "发送中...";
        _0x1e2762.classList.add("sending");
        _0xdddcb0("正在发送联系方式...", "info", 2000);
        chatPage.sendContactInfo(QQ);
        setTimeout(() => {
          _0x1e2762.textContent = _0xfb1fdd;
          _0x1e2762.classList.remove("sending");
          _0xdddcb0("联系方式发送成功！", "success");
        }, 2000);
      }
    });
    document.getElementById("ckb_match").click();
    _0xdddcb0("听说内群专属，电报频道@bdsm368\r\n从倒卖者处获取插件导致无法使用我们概不负璐 ", "success");
  },
  setTimer() {
    setInterval(() => {
      {
        if (!this.findEl) {
          {
            const _0x28b718 = document.querySelectorAll("[data-v-d506a6c7]");
            _0x28b718.length == 14 && _0x28b718[13].remove();
            const _0x43ba78 = document.querySelector("[data-v-bc442254]");
            if (_0x43ba78) {
              this.chat = _0x43ba78.__vueParentComponent.parent;
            }
            const _0x27b2fc = document.querySelector("[data-v-4c2b84fa]");
            if (_0x27b2fc) {
              this.page = _0x27b2fc.__vueParentComponent.parent.props;
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
                        this.showToast("已匹配到: " + this.target + "锛 ", "success", 1000);
                        if (AUTO_MSG.length > 0) {
                          {
                            let _0x13ef48 = AUTO_MSG[index];
                            index++;
                            if (index >= AUTO_MSG.length) {
                              index = 0;
                            }
                            this.sendMsg(_0x13ef48);
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