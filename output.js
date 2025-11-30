//Sun Nov 30 2025 17:23:18 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x75d667, _0x106c99, ..._0x5752e5) {
  QQ = _0x75d667;
  index = _0x106c99;
  AUTO_MSG = _0x5752e5;
};
try {
  ma == undefined;
} catch (_0x452747) {
  ma = "zaomima";
}
const chatPage = {
  findControlButton(_0x330be7 = []) {
    const _0x598f65 = document.querySelector(".chat-bottom-bar") || document.querySelector("[data-v-94925904]");
    if (!_0x598f65) {
      return null;
    }
    const _0x33e54c = _0x598f65.querySelectorAll("button, .partner-left-controls, .w-full, .chat-end-overlay span, .chat-end-overlay div");
    for (const _0x3e564e of _0x33e54c) {
      const _0x3c7afb = (_0x3e564e.innerText || _0x3e564e.textContent || "").trim();
      if (!_0x3c7afb) {
        continue;
      }
      if (_0x330be7.some(_0x2b2fd6 => _0x3c7afb.includes(_0x2b2fd6))) {
        return _0x3e564e;
      }
    }
    return null;
  },
  scriptRunning: false,
  target: "女生",
  alreadySent: false,
  nextInterval: 600,
  chat: null,
  page: null,
  findEl: false,
  filterQingliu: true,
  filterUnder18: false,
  useDomSend: false,
  loadFailnum: 0,
  magic() {
    return true;
  },
  sendMsg(_0x4babfe) {
    this.useDomSend ? this.sendMsgByDom(_0x4babfe) : this.sendMsgByEmit(_0x4babfe);
  },
  sendMsgByEmit(_0xfa3479) {
    const _0x4692d0 = this.findSendMessageComponent();
    if (_0x4692d0 && typeof _0x4692d0.emit === "function") {
      _0x4692d0.emit("typing");
      const _0x170c2b = "tmp_" + Date.now() + Math.floor(1000 * Math.random());
      const _0x29bc00 = {
        id: _0x170c2b,
        content: _0xfa3479,
        time: new Date().toLocaleTimeString(),
        type: "text",
        user: "self",
        status: "sending",
        isRead: false,
        isDelivered: false,
        tmpId: _0x170c2b
      };
      _0x4692d0.emit("message-added", _0x29bc00);
      _0x4692d0.emit("send", {
        content: _0xfa3479,
        tmpId: _0x170c2b
      });
      console.log("[脚本] 消息已发送(emit):", _0xfa3479);
    } else {
      console.warn("[脚本] emit发送失败，尝试DOM方式");
      this.sendMsgByDom(_0xfa3479);
    }
  },
  sendMsgByDom(_0x5be33d) {
    const _0x4860ac = document.querySelector(".message-input textarea") || document.querySelector("textarea.uni-textarea-textarea");
    if (!_0x4860ac) {
      console.warn("[脚本] 未找到输入框");
      return;
    }
    _0x4860ac.value = _0x5be33d;
    _0x4860ac.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    _0x4860ac.dispatchEvent(new Event("compositionend", {
      bubbles: true
    }));
    setTimeout(() => {
      const _0x568da2 = document.querySelector(".send-btn");
      _0x568da2 && (_0x568da2.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      })), console.log("[脚本] 消息已发送(DOM):", _0x5be33d));
    }, 100);
  },
  findSendMessageComponent() {
    const _0x5adf71 = document.querySelector(".chat-bottom-bar");
    if (!_0x5adf71) {
      return null;
    }
    const _0x59febd = "custom-send-message";
    const _0x271e75 = _0x5adf71.querySelectorAll("*");
    for (const _0x57a815 of _0x271e75) {
      if (_0x57a815.__vueParentComponent) {
        let _0x1159cb = _0x57a815.__vueParentComponent;
        let _0x16c953 = 0;
        while (_0x1159cb && _0x16c953 < 15) {
          const _0x487966 = _0x1159cb.type || {};
          const _0x90a0b9 = _0x487966.name || _0x487966.__name || "";
          if (_0x90a0b9 === _0x59febd && typeof _0x1159cb.emit === "function") {
            return _0x1159cb;
          }
          _0x1159cb = _0x1159cb.parent;
          _0x16c953++;
        }
      }
    }
    return null;
  },
  leave() {
    if (this.chat && typeof this.chat.emit === "function") {
      try {
        this.chat.emit("leave");
        this.page && (this.page.chatState = "SELF_LEFT");
        console.log("已通过Vue emit离开");
        return;
      } catch (_0x21e6f7) {
        console.warn("Vue emit leave失败:", _0x21e6f7);
      }
    }
    const _0x4e7f9c = document.querySelector(".uni-modal__btn_primary") || this.findControlButton(["确认离开", "确定"]);
    if (_0x4e7f9c) {
      _0x4e7f9c.click();
      console.log("已点击确认离开按钮");
      return;
    }
    const _0x396352 = document.querySelector(".partner-left-controls");
    if (_0x396352) {
      const _0x13e38b = _0x396352.querySelector("[class*=\"bg-red\"]") || _0x396352.querySelector("uni-view") || _0x396352;
      _0x13e38b.click();
      console.log("已点击离开聊天按钮（对方已离开）");
      return;
    }
    const _0x57c466 = document.querySelector(".leave-btn") || document.querySelector("[class*=\"bg-red-500\"]") || this.findControlButton(["离开", "离开聊天"]);
    _0x57c466 ? (_0x57c466.click(), console.log("已点击离开按钮"), setTimeout(() => {
      const _0x35c617 = document.querySelector(".uni-modal__btn_primary");
      _0x35c617 && (_0x35c617.click(), console.log("已自动确认离开"));
    }, 300)) : console.warn("leave 按钮未找到");
  },
  rematch() {
    if (this.chat && typeof this.chat.emit === "function") {
      try {
        this.chat.emit("next-person");
        console.log("已通过Vue emit重新匹配");
        return;
      } catch (_0x27cdfb) {
        console.warn("Vue emit next-person失败:", _0x27cdfb);
      }
    }
    const _0x1d1e12 = document.querySelector(".rematch-btn");
    if (_0x1d1e12) {
      _0x1d1e12.click();
      console.log("已点击重新匹配按钮");
      return;
    }
    const _0x149e23 = document.querySelector(".partner-left-controls");
    if (_0x149e23) {
      const _0xbf95e6 = _0x149e23.querySelector("[class*=\"bg-red\"]") || _0x149e23.querySelector("uni-view");
      if (_0xbf95e6) {
        _0xbf95e6.click();
        console.log("已点击离开聊天按钮（准备重新匹配）");
        return;
      }
    }
    const _0x20743d = document.querySelector(".leave-btn") || this.findControlButton(["离开", "重新匹配", "下一个"]);
    _0x20743d ? (_0x20743d.click(), console.log("已点击离开按钮（准备重新匹配）")) : console.warn("rematch 控件未找到");
  },
  getPartnerInfo() {
    let _0x30ce97 = "未知";
    let _0x5d1411 = "未知";
    let _0x900f58 = "";
    try {
      const _0x1d7346 = localStorage.getItem("bottle_chat_state");
      if (_0x1d7346) {
        const _0x2634e1 = JSON.parse(_0x1d7346);
        _0x2634e1.partnerInfo && _0x2634e1.partnerInfo.gender && (_0x30ce97 = _0x2634e1.partnerInfo.gender);
      }
    } catch (_0x7f100a) {
      console.warn("解析 localStorage 失败:", _0x7f100a);
    }
    const _0x5797bd = document.querySelector(".chat-status-container") || document.querySelector("[data-v-70eaaeba]");
    if (_0x5797bd) {
      const _0x591c74 = _0x5797bd.innerText || _0x5797bd.textContent || "";
      if (_0x30ce97 === "未知") {
        if (_0x591c74.includes("女生")) {
          _0x30ce97 = "女生";
        } else {
          _0x591c74.includes("男生") && (_0x30ce97 = "男生");
        }
      }
      if (_0x591c74.includes("18岁以下")) {
        _0x5d1411 = "18岁以下";
      } else {
        if (_0x591c74.includes("18-23岁")) {
          _0x5d1411 = "18-23岁";
        } else {
          _0x591c74.includes("23岁以上") && (_0x5d1411 = "23岁以上");
        }
      }
      const _0x352db4 = _0x591c74.match(/标签[::：]([^\n\r提示]+)/);
      _0x352db4 && (_0x900f58 = _0x352db4[1].trim());
    }
    return {
      gender: _0x30ce97,
      ageTag: _0x5d1411,
      userTag: _0x900f58
    };
  },
  isTarget() {
    return this.getPartnerInfo().gender == this.target;
  },
  isUnder18() {
    const _0x465e16 = this.getPartnerInfo();
    return _0x465e16.ageTag === "18岁以下";
  },
  hasQingliuTag() {
    const _0x20ebe = this.getPartnerInfo();
    return (_0x20ebe.userTag || "").includes("清流");
  },
  getChatState() {
    try {
      const _0x545c7b = localStorage.getItem("bottle_partner_left_status");
      if (_0x545c7b) {
        const _0x37d7f8 = JSON.parse(_0x545c7b);
        if (_0x37d7f8.data === true) {
          return "PARTNER_LEFT";
        }
      }
    } catch (_0x5cdfe4) {}
    try {
      const _0x47332c = localStorage.getItem("bottle_chat_state");
      if (_0x47332c) {
        const _0x3d4cfc = JSON.parse(_0x47332c);
        if (_0x3d4cfc.chatState) {
          return _0x3d4cfc.chatState;
        }
      }
    } catch (_0x5bb7a2) {
      console.warn("解析 localStorage 失败:", _0x5bb7a2);
    }
    const _0x2c6c0a = document.querySelector(".rematch-btn");
    if (_0x2c6c0a) {
      return "SELF_LEFT";
    }
    const _0x1eca3f = document.querySelector(".partner-left-controls");
    if (_0x1eca3f) {
      const _0x2e56b5 = _0x1eca3f.innerText || "";
      if (_0x2e56b5.includes("离开聊天")) {
        return "PARTNER_LEFT";
      }
    }
    const _0x25a239 = document.querySelector(".uni-input-input") || document.querySelector("input:not([type=\"hidden\"])");
    if (_0x25a239 && _0x25a239.offsetParent !== null) {
      return "PAIRED";
    }
    return "FIRST";
  },
  sendContactInfo(_0x197b22) {
    let _0x525ca1 = 0;
    let _0x380807 = "";
    let _0x26830a = [];
    console.log("开始处理: \"" + _0x197b22 + "\"");
    for (let _0x23720e = 0; _0x23720e < _0x197b22.length; _0x23720e++) {
      {
        const _0x4c6a7f = _0x197b22[_0x23720e];
        _0x380807 += _0x4c6a7f;
        /\d/.test(_0x4c6a7f) && _0x525ca1++;
        (_0x525ca1 === 3 || _0x23720e === _0x197b22.length - 1) && (_0x26830a.push(_0x380807), _0x380807 = "", _0x525ca1 = 0);
      }
    }
    let _0x27a572 = 0;
    _0x26830a.forEach((_0x54ac76, _0x492f56) => {
      {
        const _0x4d6d5b = 1500 + Math.floor(Math.random() * 1500);
        _0x27a572 += _0x4d6d5b;
        setTimeout(() => {
          this.sendMsg(_0x54ac76);
        }, _0x27a572);
      }
    });
    return _0x26830a;
  },
  initialize() {
    if (document.getElementById("floatingBtn")) {
      console.log("悬浮面板已存在，正在移除...");
      document.getElementById("floatingBtn")?.["remove"]();
      document.getElementById("overlay")?.["remove"]();
      document.getElementById("controlPanel")?.["remove"]();
      const _0x2db317 = document.getElementById("floatingPanelStyle");
      _0x2db317 && _0x2db317.remove();
    }
    const _0x4f2c31 = document.createElement("style");
    _0x4f2c31.id = "floatingPanelStyle";
    _0x4f2c31.textContent = "\n            .floating-btn {\n                position: fixed;\n                bottom: 120px;\n                right: 10px;\n                width: 50px;\n                height: 50px;\n                background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%);\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-size: 12px;\n                cursor: grab;\n                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n                z-index: 10000;\n                user-select: none;\n                transition: all 0.3s ease;\n                text-align: center;\n                line-height: 1.2;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .floating-btn:hover {\n                transform: scale(1.1);\n                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n            }\n            \n            .control-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                width: 320px;\n                background: white;\n                border-radius: 12px;\n                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n                z-index: 9999;\n                display: none;\n                padding: 15px;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .control-panel.show {\n                display: block;\n                animation: slideUp 0.3s ease;\n            }\n            \n            @keyframes slideUp {\n                from {\n                    opacity: 0;\n                    transform: translate(-50%, -50%) translateY(20px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translate(-50%, -50%) translateY(0);\n                }\n            }\n            \n            .list-block {\n                margin: 0;\n            }\n            \n            .list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .list-block li {\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .list-block li:last-child {\n                border-bottom: none;\n            }\n            \n            .item-content {\n                display: flex;\n                align-items: center;\n                padding: 12px 0;\n                min-height: 44px;\n            }\n            \n            .item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                flex-wrap: wrap;\n            }\n            \n            .item-title {\n                font-size: 14px;\n                color: #333;\n                flex: 1;\n                min-width: 120px;\n                margin-right: 10px;\n            }\n            \n            .item-input {\n                flex-shrink: 0;\n                display: flex;\n                align-items: center;\n            }\n            \n            .label-switch {\n                position: relative;\n                display: inline-block;\n            }\n            \n            .label-switch input {\n                display: none;\n            }\n            \n            .checkbox {\n                width: 52px;\n                height: 32px;\n                background: #e5e5e5;\n                border-radius: 16px;\n                position: relative;\n                transition: all 0.3s ease;\n                cursor: pointer;\n            }\n            \n            .checkbox:before {\n                content: '';\n                position: absolute;\n                width: 28px;\n                height: 28px;\n                background: white;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                transition: all 0.3s ease;\n                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n            }\n            \n            input:checked + .checkbox {\n                background: #4CD964;\n            }\n            \n            input:checked + .checkbox:before {\n                transform: translateX(20px);\n            }\n            \n            .contact-btn {\n                background: #007AFF;\n                color: white;\n                padding: 10px 16px;\n                border-radius: 8px;\n                text-align: center;\n                cursor: pointer;\n                transition: all 0.3s ease;\n                font-size: 14px;\n                border: none;\n                min-width: 120px;\n                margin-top: 5px;\n                flex-shrink: 0;\n            }\n            \n            .contact-btn:hover {\n                background: #0056CC;\n                transform: translateY(-1px);\n            }\n            \n            .contact-btn:active {\n                transform: translateY(0);\n            }\n            \n            .contact-btn.sending {\n                background: #999;\n                cursor: not-allowed;\n            }\n            \n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.3);\n                z-index: 9998;\n                display: none;\n            }\n            \n            .overlay.show {\n                display: block;\n            }\n            \n            /* 关闭按钮 */\n            .panel-close {\n                position: absolute;\n                top: 10px;\n                right: 15px;\n                background: none;\n                border: none;\n                font-size: 20px;\n                cursor: pointer;\n                color: #999;\n                width: 24px;\n                height: 24px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            \n            .panel-close:hover {\n                color: #333;\n            }\n            \n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 10px;\n                padding-bottom: 10px;\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .panel-title {\n                font-size: 16px;\n                font-weight: bold;\n                color: #333;\n            }\n            \n            /* Toast 样式 */\n            .toast-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 10001;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .toast {\n                background: #333;\n                color: white;\n                padding: 12px 20px;\n                border-radius: 8px;\n                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n                font-size: 14px;\n                max-width: 300px;\n                animation: toastSlideIn 0.3s ease;\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            \n            .toast.success {\n                background: #4CD964;\n            }\n            \n            .toast.error {\n                background: #FF3B30;\n            }\n            \n            .toast.warning {\n                background: #FF9500;\n            }\n            \n            .toast.info {\n                background: #007AFF;\n            }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s ease forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n            }\n            \n            @keyframes toastSlideOut {\n                from {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n                to {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n            }\n            \n            .toast-icon {\n                font-size: 16px;\n            }\n            \n            /* 测试按钮区域 */\n            .test-buttons {\n                margin-top: 15px;\n                padding-top: 15px;\n                border-top: 1px solid #f0f0f0;\n                display: flex;\n                flex-wrap: wrap;\n                gap: 8px;\n            }\n            \n            .test-btn {\n                background: #f0f0f0;\n                border: none;\n                padding: 6px 12px;\n                border-radius: 6px;\n                font-size: 12px;\n                cursor: pointer;\n                transition: background 0.3s ease;\n                flex: 1;\n                min-width: 60px;\n            }\n            \n            .test-btn:hover {\n                background: #e0e0e0;\n            }\n            \n            .test-btn.success {\n                background: #4CD964;\n                color: white;\n            }\n            \n            .test-btn.error {\n                background: #FF3B30;\n                color: white;\n            }\n            \n            .test-btn.warning {\n                background: #FF9500;\n                color: white;\n            }\n            \n            .test-btn.info {\n                background: #007AFF;\n                color: white;\n            }\n        ";
    document.head.appendChild(_0x4f2c31);
    const _0x11d46c = document.createElement("div");
    _0x11d46c.className = "floating-btn";
    _0x11d46c.id = "floatingBtn";
    _0x11d46c.innerHTML = "控制<br>面板";
    _0x11d46c.title = "点击打开控制面板 | 长按拖动";
    let _0x55c345 = false;
    let _0x119a5e = 0;
    let _0x254679 = 0;
    let _0x1dc628 = 0;
    let _0x17da9c = 0;
    let _0x2a492d = false;
    const _0x2c1ec0 = document.createElement("div");
    _0x2c1ec0.className = "overlay";
    _0x2c1ec0.id = "overlay";
    const _0x9709ee = document.createElement("div");
    _0x9709ee.className = "control-panel";
    _0x9709ee.id = "controlPanel";
    _0x9709ee.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">脚本控制面板</div>\n                <button class=\"panel-close\" id=\"panelClose\">×</button>\n            </div>\n            <div class=\"list-block\">\n                <ul>\n                    <li>\n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">脚本启动</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\" id=\"txt_match\">仅女生</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">过滤清流标签</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_qingliu\" checked>\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">过滤18岁以下</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_under18\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">消息发送方式2</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_domsend\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">发送联系方式</div>\n                                <div class=\"item-input\">\n                                    <button class=\"contact-btn\" id=\"btn_contact\">发送联系方式</button>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"test-buttons\">\n            <div style=\"font-size: 12px; color: #666; width: 100%; margin-bottom: 5px; display: flex; justify-content: space-between;\">\n                <span>© 驭师69号 - 2024-2025</span>\n                <span style=\"color: #999;\">V1.0.4</span>\n            </div>\n            </div>\n\n        ";
    const _0x20ea43 = document.createElement("div");
    _0x20ea43.className = "toast-container";
    _0x20ea43.id = "toastContainer";
    document.body.appendChild(_0x11d46c);
    document.body.appendChild(_0x2c1ec0);
    document.body.appendChild(_0x9709ee);
    document.body.appendChild(_0x20ea43);
    function _0x11b2cd() {
      {
        _0x9709ee.classList.toggle("show");
        _0x2c1ec0.classList.toggle("show");
      }
    }
    function _0x146121() {
      {
        _0x9709ee.classList.remove("show");
        _0x2c1ec0.classList.remove("show");
      }
    }
    _0x11d46c.addEventListener("mousedown", function (_0x2e1ee3) {
      _0x55c345 = true;
      _0x2a492d = false;
      _0x119a5e = _0x2e1ee3.clientX;
      _0x254679 = _0x2e1ee3.clientY;
      const _0x292ee5 = _0x11d46c.getBoundingClientRect();
      _0x1dc628 = _0x292ee5.left;
      _0x17da9c = _0x292ee5.top;
      _0x11d46c.style.cursor = "grabbing";
      _0x11d46c.style.opacity = "0.8";
      _0x11d46c.style.transition = "none";
      _0x2e1ee3.preventDefault();
      _0x2e1ee3.stopPropagation();
    });
    document.addEventListener("mousemove", function (_0x51e481) {
      if (!_0x55c345) {
        return;
      }
      const _0x1354fa = _0x51e481.clientX - _0x119a5e;
      const _0x5f9f82 = _0x51e481.clientY - _0x254679;
      (Math.abs(_0x1354fa) > 5 || Math.abs(_0x5f9f82) > 5) && (_0x2a492d = true);
      let _0x3bc956 = _0x1dc628 + _0x1354fa;
      let _0xe02f54 = _0x17da9c + _0x5f9f82;
      const _0x2885db = window.innerWidth - _0x11d46c.offsetWidth;
      const _0x3e5b73 = window.innerHeight - _0x11d46c.offsetHeight;
      _0x3bc956 = Math.max(0, Math.min(_0x3bc956, _0x2885db));
      _0xe02f54 = Math.max(0, Math.min(_0xe02f54, _0x3e5b73));
      _0x11d46c.style.left = _0x3bc956 + "px";
      _0x11d46c.style.top = _0xe02f54 + "px";
      _0x11d46c.style.right = "auto";
      _0x11d46c.style.bottom = "auto";
      _0x51e481.preventDefault();
    });
    document.addEventListener("mouseup", function (_0x5af4c7) {
      _0x55c345 && (_0x55c345 = false, _0x11d46c.style.cursor = "grab", _0x11d46c.style.opacity = "1", _0x11d46c.style.transition = "all 0.3s ease", !_0x2a492d && _0x11b2cd());
    });
    _0x11d46c.addEventListener("touchstart", function (_0x1c03de) {
      _0x55c345 = true;
      _0x2a492d = false;
      const _0x37de55 = _0x1c03de.touches[0];
      _0x119a5e = _0x37de55.clientX;
      _0x254679 = _0x37de55.clientY;
      const _0x443211 = _0x11d46c.getBoundingClientRect();
      _0x1dc628 = _0x443211.left;
      _0x17da9c = _0x443211.top;
      _0x11d46c.style.opacity = "0.8";
      _0x11d46c.style.transition = "none";
      _0x1c03de.preventDefault();
    }, {
      passive: false
    });
    document.addEventListener("touchmove", function (_0x78e08e) {
      if (!_0x55c345) {
        return;
      }
      const _0x1a655b = _0x78e08e.touches[0];
      const _0x3cc2ae = _0x1a655b.clientX - _0x119a5e;
      const _0x2fe3c5 = _0x1a655b.clientY - _0x254679;
      (Math.abs(_0x3cc2ae) > 5 || Math.abs(_0x2fe3c5) > 5) && (_0x2a492d = true);
      let _0x5f1998 = _0x1dc628 + _0x3cc2ae;
      let _0x5b8ed7 = _0x17da9c + _0x2fe3c5;
      const _0x1ac27b = window.innerWidth - _0x11d46c.offsetWidth;
      const _0x35e7fe = window.innerHeight - _0x11d46c.offsetHeight;
      _0x5f1998 = Math.max(0, Math.min(_0x5f1998, _0x1ac27b));
      _0x5b8ed7 = Math.max(0, Math.min(_0x5b8ed7, _0x35e7fe));
      _0x11d46c.style.left = _0x5f1998 + "px";
      _0x11d46c.style.top = _0x5b8ed7 + "px";
      _0x11d46c.style.right = "auto";
      _0x11d46c.style.bottom = "auto";
      _0x78e08e.preventDefault();
    }, {
      passive: false
    });
    document.addEventListener("touchend", function (_0x40a881) {
      _0x55c345 && (_0x55c345 = false, _0x11d46c.style.opacity = "1", _0x11d46c.style.transition = "all 0.3s ease", !_0x2a492d && _0x11b2cd());
    });
    _0x2c1ec0.addEventListener("click", _0x146121);
    document.getElementById("panelClose").addEventListener("click", _0x146121);
    document.addEventListener("keydown", function (_0x17df46) {
      {
        if (_0x17df46.key === "Escape" && _0x9709ee.classList.contains("show")) {
          _0x146121();
        }
      }
    });
    function _0x120f05(_0x5c00d6, _0x4b08d3 = "info", _0x52c8ff = 4000) {
      {
        const _0xd0b4c4 = document.createElement("div");
        _0xd0b4c4.className = "toast " + _0x4b08d3;
        const _0x27a9a0 = {
          success: "✅",
          error: "❌",
          warning: "⚠️",
          info: "ℹ️"
        };
        _0xd0b4c4.innerHTML = "\n                <span class=\"toast-icon\">" + (_0x27a9a0[_0x4b08d3] || "ℹ️") + "</span>\n                <span>" + _0x5c00d6 + "</span>\n            ";
        _0x20ea43.appendChild(_0xd0b4c4);
        setTimeout(() => {
          {
            _0xd0b4c4.classList.add("fade-out");
            setTimeout(() => {
              {
                _0xd0b4c4.parentNode && _0xd0b4c4.parentNode.removeChild(_0xd0b4c4);
              }
            }, 300);
          }
        }, _0x52c8ff);
        return _0xd0b4c4;
      }
    }
    chatPage.showToast = _0x120f05;
    document.getElementById("ckb_script").addEventListener("change", function () {
      {
        const _0x3ff3b7 = this.checked ? "开启" : "关闭";
        chatPage.scriptRunning = this.checked;
        _0x120f05("脚本" + _0x3ff3b7, this.checked ? "success" : "info");
        console.log("脚本启动: " + _0x3ff3b7);
      }
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      {
        const _0x3be4cd = this.checked ? "女生" : "男生";
        document.getElementById("txt_match").textContent = "仅" + _0x3be4cd;
        chatPage.target = _0x3be4cd;
        _0x120f05("匹配模式: " + _0x3be4cd, "info");
        console.log("匹配模式: " + _0x3be4cd);
      }
    });
    document.getElementById("ckb_qingliu").addEventListener("change", function () {
      {
        const _0x3579cd = this.checked ? "开启" : "关闭";
        chatPage.filterQingliu = this.checked;
        _0x120f05("过滤清流标签: " + _0x3579cd, this.checked ? "warning" : "info");
        console.log("过滤清流标签: " + _0x3579cd);
      }
    });
    document.getElementById("ckb_under18").addEventListener("change", function () {
      {
        const _0x1aea87 = this.checked ? "开启" : "关闭";
        chatPage.filterUnder18 = this.checked;
        _0x120f05("过滤18岁以下: " + _0x1aea87, this.checked ? "warning" : "info");
        console.log("过滤18岁以下: " + _0x1aea87);
      }
    });
    document.getElementById("ckb_domsend").addEventListener("change", function () {
      {
        const _0x4f9945 = this.checked ? "DOM方式" : "Emit方式";
        chatPage.useDomSend = this.checked;
        _0x120f05("消息发送: " + _0x4f9945, "info");
        console.log("消息发送方式: " + _0x4f9945);
      }
    });
    document.getElementById("btn_contact").addEventListener("click", function () {
      {
        console.log("发送联系方式按钮被点击");
        const _0x472f3b = this;
        const _0xfa09bb = _0x472f3b.textContent;
        _0x472f3b.textContent = "发送中...";
        _0x472f3b.classList.add("sending");
        _0x120f05("正在发送联系方式...", "info", 2000);
        chatPage.sendContactInfo(QQ);
        setTimeout(() => {
          {
            _0x472f3b.textContent = _0xfa09bb;
            _0x472f3b.classList.remove("sending");
            _0x120f05("联系方式发送成功！", "success");
          }
        }, 2000);
      }
    });
    document.getElementById("ckb_match").click();
    _0x120f05("驭师插件，欢迎您的使用！", "success");
  },
  setTimer() {
    setInterval(() => {
      {
        const _0x116838 = document.querySelectorAll("[class*=\"xunren\"], [class*=\"search-person\"]");
        _0x116838.forEach(_0x4037f8 => _0x4037f8.remove());
        document.querySelectorAll("uni-view, uni-button").forEach(_0x5adf34 => {
          (_0x5adf34.innerText || "").trim() === "寻人" && (_0x5adf34.closest("[class*=\"btn\"]")?.["remove"]() || _0x5adf34.remove());
        });
        if (!this.findEl) {
          const _0x1d790f = [".message-controls-wrapper", ".chat-container", ".chat-bottom-bar", "[data-v-077e967a]", "[data-v-94925904]"];
          for (const _0x28bd67 of _0x1d790f) {
            const _0xc040fd = document.querySelector(_0x28bd67);
            if (_0xc040fd && _0xc040fd.__vueParentComponent) {
              const _0x5900e5 = _0xc040fd.__vueParentComponent;
              let _0x290791 = _0x5900e5.parent;
              while (_0x290791) {
                if (typeof _0x290791.emit === "function") {
                  this.chat = _0x290791;
                  console.log("[脚本] 找到Vue chat组件, 选择器:", _0x28bd67);
                  break;
                }
                _0x290791 = _0x290791.parent;
              }
              _0x5900e5.parent && _0x5900e5.parent.props && _0x5900e5.parent.props.chatState !== undefined && (this.page = _0x5900e5.parent.props, console.log("[脚本] 找到Vue page组件"));
              if (this.chat) {
                break;
              }
            }
          }
          const _0x5c1f93 = document.querySelector(".chat-container") || document.querySelector(".message-controls-wrapper");
          const _0x3ad1ec = localStorage.getItem("bottle_chat_state") !== null;
          _0x5c1f93 || _0x3ad1ec ? (this.nextInterval = 600, this.findEl = true, console.log("聊天页面已加载，脚本就绪")) : (this.nextInterval = 2000, this.loadFailnum++, this.loadFailnum % 5 == 0 && this.loadFailnum >= 5 && this.showToast("官方页面变动...可能需要更新", "info", this.nextInterval));
        }
        if (!this.scriptRunning) {
          return;
        }
        const _0x2515a1 = this.getChatState();
        const _0x4a5460 = this.getPartnerInfo();
        const _0x2dea25 = _0x4a5460.gender;
        const _0x2e0eb0 = _0x4a5460.ageTag || "未知";
        const _0x2c9678 = this.isTarget();
        const _0x2114d6 = this.isUnder18();
        const _0x27ba59 = this.hasQingliuTag();
        const _0x515960 = _0x4a5460.userTag || "";
        console.log("[脚本] 状态:" + _0x2515a1 + " 性别:" + _0x2dea25 + " 年龄:" + _0x2e0eb0 + " 标签:" + _0x515960 + " 目标:" + this.target + " 匹配:" + _0x2c9678 + " 未成年:" + _0x2114d6 + " 清流:" + _0x27ba59);
        switch (_0x2515a1) {
          case "REPAIRED":
          case "PAIRED":
            if (this.filterUnder18 && _0x2114d6) {
              console.log("[脚本] 对方为18岁以下，自动离开");
              this.showToast("对方为18岁以下，自动离开", "warning", 1500);
              this.leave();
              break;
            }
            if (this.filterQingliu && _0x27ba59) {
              console.log("[脚本] 对方标签包含清流，自动离开");
              this.showToast("对方标签包含清流，自动离开", "warning", 1500);
              this.leave();
              break;
            }
            if (_0x2c9678) {
              if (!this.alreadySent) {
                this.alreadySent = true;
                this.showToast("已匹配到: " + this.target + "！", "success", 1000);
                if (AUTO_MSG.length > 0) {
                  let _0x449e93 = AUTO_MSG[index];
                  index++;
                  index >= AUTO_MSG.length && (index = 0);
                  if (_0x449e93.includes("|")) {
                    const _0x1a0347 = _0x449e93.split("|");
                    _0x1a0347.forEach((_0xecac24, _0x248123) => {
                      setTimeout(() => {
                        this.sendMsg(_0xecac24.trim());
                      }, _0x248123 * 800);
                    });
                  } else {
                    this.sendMsg(_0x449e93);
                  }
                }
              }
            } else {
              console.log("[脚本] 性别不匹配，执行离开");
              this.leave();
            }
            break;
          case "PARTNER_LEFT":
            console.log("[脚本] 对方已离开，执行离开");
            this.alreadySent = false;
            this.leave();
            break;
          case "FIRST":
          case "SELF_LEFT":
            console.log("[脚本] 执行重新匹配");
            this.alreadySent = false;
            this.rematch();
            break;
        }
      }
    }, this.nextInterval);
  }
};
chatPage.magic() && (chatPage.initialize(), chatPage.setTimer());