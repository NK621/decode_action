//Sun Nov 30 2025 17:24:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x142904, _0x178d57, ..._0x39c059) {
  QQ = _0x142904;
  index = _0x178d57;
  AUTO_MSG = _0x39c059;
};
try {
  ma == undefined;
} catch (_0x112d17) {
  ma = "zaomima";
}
const chatPage = {
  findControlButton(_0x3c75d8 = []) {
    const _0x2b720e = document.querySelector(".chat-bottom-bar") || document.querySelector("[data-v-94925904]");
    if (!_0x2b720e) {
      return null;
    }
    const _0x174044 = _0x2b720e.querySelectorAll("button, .partner-left-controls, .w-full, .chat-end-overlay span, .chat-end-overlay div");
    for (const _0x4a1b36 of _0x174044) {
      const _0x18fcbd = (_0x4a1b36.innerText || _0x4a1b36.textContent || "").trim();
      if (!_0x18fcbd) {
        continue;
      }
      if (_0x3c75d8.some(_0x3209ec => _0x18fcbd.includes(_0x3209ec))) {
        return _0x4a1b36;
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
  sendMsg(_0x36c342) {
    this.useDomSend ? this.sendMsgByDom(_0x36c342) : this.sendMsgByEmit(_0x36c342);
  },
  sendMsgByEmit(_0x35864c) {
    const _0x7181ac = this.findSendMessageComponent();
    if (_0x7181ac && typeof _0x7181ac.emit === "function") {
      _0x7181ac.emit("typing");
      const _0x1aa58b = "tmp_" + Date.now() + Math.floor(1000 * Math.random());
      const _0x18579f = {
        id: _0x1aa58b,
        content: _0x35864c,
        time: new Date().toLocaleTimeString(),
        type: "text",
        user: "self",
        status: "sending",
        isRead: false,
        isDelivered: false,
        tmpId: _0x1aa58b
      };
      _0x7181ac.emit("message-added", _0x18579f);
      _0x7181ac.emit("send", {
        content: _0x35864c,
        tmpId: _0x1aa58b
      });
      console.log("[脚本] 消息已发送(emit):", _0x35864c);
    } else {
      console.warn("[脚本] emit发送失败，尝试DOM方式");
      this.sendMsgByDom(_0x35864c);
    }
  },
  sendMsgByDom(_0x158d4e) {
    const _0x101966 = document.querySelector(".message-input textarea") || document.querySelector("textarea.uni-textarea-textarea");
    if (!_0x101966) {
      console.warn("[脚本] 未找到输入框");
      return;
    }
    _0x101966.value = _0x158d4e;
    _0x101966.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    _0x101966.dispatchEvent(new Event("compositionend", {
      bubbles: true
    }));
    setTimeout(() => {
      const _0x561eaf = document.querySelector(".send-btn");
      _0x561eaf && (_0x561eaf.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      })), console.log("[脚本] 消息已发送(DOM):", _0x158d4e));
    }, 100);
  },
  findSendMessageComponent() {
    const _0x18ab11 = document.querySelector(".chat-bottom-bar");
    if (!_0x18ab11) {
      return null;
    }
    const _0x5d59f6 = "custom-send-message";
    const _0x234e38 = _0x18ab11.querySelectorAll("*");
    for (const _0x349919 of _0x234e38) {
      if (_0x349919.__vueParentComponent) {
        let _0x33ae23 = _0x349919.__vueParentComponent;
        let _0xde80f2 = 0;
        while (_0x33ae23 && _0xde80f2 < 15) {
          const _0x49433b = _0x33ae23.type || {};
          const _0x65ed1d = _0x49433b.name || _0x49433b.__name || "";
          if (_0x65ed1d === _0x5d59f6 && typeof _0x33ae23.emit === "function") {
            return _0x33ae23;
          }
          _0x33ae23 = _0x33ae23.parent;
          _0xde80f2++;
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
      } catch (_0x493146) {
        console.warn("Vue emit leave失败:", _0x493146);
      }
    }
    const _0x31bc67 = document.querySelector(".uni-modal__btn_primary") || this.findControlButton(["确认离开", "确定"]);
    if (_0x31bc67) {
      _0x31bc67.click();
      console.log("已点击确认离开按钮");
      return;
    }
    const _0x31b9d0 = document.querySelector(".partner-left-controls");
    if (_0x31b9d0) {
      const _0x5d6066 = _0x31b9d0.querySelector("[class*=\"bg-red\"]") || _0x31b9d0.querySelector("uni-view") || _0x31b9d0;
      _0x5d6066.click();
      console.log("已点击离开聊天按钮（对方已离开）");
      return;
    }
    const _0x3b6df4 = document.querySelector(".leave-btn") || document.querySelector("[class*=\"bg-red-500\"]") || this.findControlButton(["离开", "离开聊天"]);
    _0x3b6df4 ? (_0x3b6df4.click(), console.log("已点击离开按钮"), setTimeout(() => {
      const _0x4daa04 = document.querySelector(".uni-modal__btn_primary");
      _0x4daa04 && (_0x4daa04.click(), console.log("已自动确认离开"));
    }, 300)) : console.warn("leave 按钮未找到");
  },
  rematch() {
    if (this.chat && typeof this.chat.emit === "function") {
      try {
        this.chat.emit("next-person");
        console.log("已通过Vue emit重新匹配");
        return;
      } catch (_0x199a3b) {
        console.warn("Vue emit next-person失败:", _0x199a3b);
      }
    }
    const _0x2a4ca9 = document.querySelector(".rematch-btn");
    if (_0x2a4ca9) {
      _0x2a4ca9.click();
      console.log("已点击重新匹配按钮");
      return;
    }
    const _0x5f06d2 = document.querySelector(".partner-left-controls");
    if (_0x5f06d2) {
      const _0xf5dbdc = _0x5f06d2.querySelector("[class*=\"bg-red\"]") || _0x5f06d2.querySelector("uni-view");
      if (_0xf5dbdc) {
        _0xf5dbdc.click();
        console.log("已点击离开聊天按钮（准备重新匹配）");
        return;
      }
    }
    const _0x1d956b = document.querySelector(".leave-btn") || this.findControlButton(["离开", "重新匹配", "下一个"]);
    _0x1d956b ? (_0x1d956b.click(), console.log("已点击离开按钮（准备重新匹配）")) : console.warn("rematch 控件未找到");
  },
  getPartnerInfo() {
    let _0x2381d0 = "未知";
    let _0x5b01ae = "未知";
    let _0x2535cb = "";
    try {
      const _0x36cbe8 = localStorage.getItem("bottle_chat_state");
      if (_0x36cbe8) {
        const _0x5dce75 = JSON.parse(_0x36cbe8);
        _0x5dce75.partnerInfo && _0x5dce75.partnerInfo.gender && (_0x2381d0 = _0x5dce75.partnerInfo.gender);
      }
    } catch (_0x335faa) {
      console.warn("解析 localStorage 失败:", _0x335faa);
    }
    const _0x567ccf = document.querySelector(".chat-status-container") || document.querySelector("[data-v-70eaaeba]");
    if (_0x567ccf) {
      const _0x3d6a7b = _0x567ccf.innerText || _0x567ccf.textContent || "";
      if (_0x2381d0 === "未知") {
        if (_0x3d6a7b.includes("女生")) {
          _0x2381d0 = "女生";
        } else {
          _0x3d6a7b.includes("男生") && (_0x2381d0 = "男生");
        }
      }
      if (_0x3d6a7b.includes("18岁以下")) {
        _0x5b01ae = "18岁以下";
      } else {
        if (_0x3d6a7b.includes("18-23岁")) {
          _0x5b01ae = "18-23岁";
        } else {
          _0x3d6a7b.includes("23岁以上") && (_0x5b01ae = "23岁以上");
        }
      }
      const _0x208c9c = _0x3d6a7b.match(/标签[::：]([^\n\r提示]+)/);
      _0x208c9c && (_0x2535cb = _0x208c9c[1].trim());
    }
    return {
      gender: _0x2381d0,
      ageTag: _0x5b01ae,
      userTag: _0x2535cb
    };
  },
  isTarget() {
    return this.getPartnerInfo().gender == this.target;
  },
  isUnder18() {
    const _0xdccb00 = this.getPartnerInfo();
    return _0xdccb00.ageTag === "18岁以下";
  },
  hasQingliuTag() {
    const _0x19d87c = this.getPartnerInfo();
    return (_0x19d87c.userTag || "").includes("清流");
  },
  getChatState() {
    try {
      const _0x32f3e9 = localStorage.getItem("bottle_partner_left_status");
      if (_0x32f3e9) {
        const _0x364ad1 = JSON.parse(_0x32f3e9);
        if (_0x364ad1.data === true) {
          return "PARTNER_LEFT";
        }
      }
    } catch (_0x19441a) {}
    try {
      const _0x1e63d4 = localStorage.getItem("bottle_chat_state");
      if (_0x1e63d4) {
        const _0x438d5f = JSON.parse(_0x1e63d4);
        if (_0x438d5f.chatState) {
          return _0x438d5f.chatState;
        }
      }
    } catch (_0x1cb5d4) {
      console.warn("解析 localStorage 失败:", _0x1cb5d4);
    }
    const _0x3076c3 = document.querySelector(".rematch-btn");
    if (_0x3076c3) {
      return "SELF_LEFT";
    }
    const _0xfe3cbc = document.querySelector(".partner-left-controls");
    if (_0xfe3cbc) {
      const _0x5a7ef8 = _0xfe3cbc.innerText || "";
      if (_0x5a7ef8.includes("离开聊天")) {
        return "PARTNER_LEFT";
      }
    }
    const _0x281fac = document.querySelector(".uni-input-input") || document.querySelector("input:not([type=\"hidden\"])");
    if (_0x281fac && _0x281fac.offsetParent !== null) {
      return "PAIRED";
    }
    return "FIRST";
  },
  sendContactInfo(_0x2bf89b) {
    let _0x33f88f = 0;
    let _0x2f8f1d = "";
    let _0x540215 = [];
    console.log("开始处理: \"" + _0x2bf89b + "\"");
    for (let _0x56640e = 0; _0x56640e < _0x2bf89b.length; _0x56640e++) {
      {
        const _0x3a928c = _0x2bf89b[_0x56640e];
        _0x2f8f1d += _0x3a928c;
        /\d/.test(_0x3a928c) && _0x33f88f++;
        (_0x33f88f === 3 || _0x56640e === _0x2bf89b.length - 1) && (_0x540215.push(_0x2f8f1d), _0x2f8f1d = "", _0x33f88f = 0);
      }
    }
    let _0x41b464 = 0;
    _0x540215.forEach((_0x2d161d, _0x225691) => {
      {
        const _0x5030a5 = 1500 + Math.floor(Math.random() * 1500);
        _0x41b464 += _0x5030a5;
        setTimeout(() => {
          this.sendMsg(_0x2d161d);
        }, _0x41b464);
      }
    });
    return _0x540215;
  },
  initialize() {
    if (document.getElementById("floatingBtn")) {
      console.log("悬浮面板已存在，正在移除...");
      document.getElementById("floatingBtn")?.["remove"]();
      document.getElementById("overlay")?.["remove"]();
      document.getElementById("controlPanel")?.["remove"]();
      const _0x1698da = document.getElementById("floatingPanelStyle");
      _0x1698da && _0x1698da.remove();
    }
    const _0x30ee8b = document.createElement("style");
    _0x30ee8b.id = "floatingPanelStyle";
    _0x30ee8b.textContent = "\n            .floating-btn {\n                position: fixed;\n                bottom: 120px;\n                right: 10px;\n                width: 50px;\n                height: 50px;\n                background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.4) 100%);\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-size: 12px;\n                cursor: grab;\n                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n                z-index: 10000;\n                user-select: none;\n                transition: all 0.3s ease;\n                text-align: center;\n                line-height: 1.2;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .floating-btn:hover {\n                transform: scale(1.1);\n                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);\n            }\n            \n            .control-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                width: 320px;\n                background: white;\n                border-radius: 12px;\n                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n                z-index: 9999;\n                display: none;\n                padding: 15px;\n                font-family: system-ui, -apple-system, sans-serif;\n            }\n            \n            .control-panel.show {\n                display: block;\n                animation: slideUp 0.3s ease;\n            }\n            \n            @keyframes slideUp {\n                from {\n                    opacity: 0;\n                    transform: translate(-50%, -50%) translateY(20px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translate(-50%, -50%) translateY(0);\n                }\n            }\n            \n            .list-block {\n                margin: 0;\n            }\n            \n            .list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .list-block li {\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .list-block li:last-child {\n                border-bottom: none;\n            }\n            \n            .item-content {\n                display: flex;\n                align-items: center;\n                padding: 12px 0;\n                min-height: 44px;\n            }\n            \n            .item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                flex-wrap: wrap;\n            }\n            \n            .item-title {\n                font-size: 14px;\n                color: #333;\n                flex: 1;\n                min-width: 120px;\n                margin-right: 10px;\n            }\n            \n            .item-input {\n                flex-shrink: 0;\n                display: flex;\n                align-items: center;\n            }\n            \n            .label-switch {\n                position: relative;\n                display: inline-block;\n            }\n            \n            .label-switch input {\n                display: none;\n            }\n            \n            .checkbox {\n                width: 52px;\n                height: 32px;\n                background: #e5e5e5;\n                border-radius: 16px;\n                position: relative;\n                transition: all 0.3s ease;\n                cursor: pointer;\n            }\n            \n            .checkbox:before {\n                content: '';\n                position: absolute;\n                width: 28px;\n                height: 28px;\n                background: white;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                transition: all 0.3s ease;\n                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n            }\n            \n            input:checked + .checkbox {\n                background: #4CD964;\n            }\n            \n            input:checked + .checkbox:before {\n                transform: translateX(20px);\n            }\n            \n            .contact-btn {\n                background: #007AFF;\n                color: white;\n                padding: 10px 16px;\n                border-radius: 8px;\n                text-align: center;\n                cursor: pointer;\n                transition: all 0.3s ease;\n                font-size: 14px;\n                border: none;\n                min-width: 120px;\n                margin-top: 5px;\n                flex-shrink: 0;\n            }\n            \n            .contact-btn:hover {\n                background: #0056CC;\n                transform: translateY(-1px);\n            }\n            \n            .contact-btn:active {\n                transform: translateY(0);\n            }\n            \n            .contact-btn.sending {\n                background: #999;\n                cursor: not-allowed;\n            }\n            \n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.3);\n                z-index: 9998;\n                display: none;\n            }\n            \n            .overlay.show {\n                display: block;\n            }\n            \n            /* 关闭按钮 */\n            .panel-close {\n                position: absolute;\n                top: 10px;\n                right: 15px;\n                background: none;\n                border: none;\n                font-size: 20px;\n                cursor: pointer;\n                color: #999;\n                width: 24px;\n                height: 24px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            \n            .panel-close:hover {\n                color: #333;\n            }\n            \n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 10px;\n                padding-bottom: 10px;\n                border-bottom: 1px solid #f0f0f0;\n            }\n            \n            .panel-title {\n                font-size: 16px;\n                font-weight: bold;\n                color: #333;\n            }\n            \n            /* Toast 样式 */\n            .toast-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 10001;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .toast {\n                background: #333;\n                color: white;\n                padding: 12px 20px;\n                border-radius: 8px;\n                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n                font-size: 14px;\n                max-width: 300px;\n                animation: toastSlideIn 0.3s ease;\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            \n            .toast.success {\n                background: #4CD964;\n            }\n            \n            .toast.error {\n                background: #FF3B30;\n            }\n            \n            .toast.warning {\n                background: #FF9500;\n            }\n            \n            .toast.info {\n                background: #007AFF;\n            }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s ease forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n            }\n            \n            @keyframes toastSlideOut {\n                from {\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n                to {\n                    opacity: 0;\n                    transform: translateX(100px);\n                }\n            }\n            \n            .toast-icon {\n                font-size: 16px;\n            }\n            \n            /* 测试按钮区域 */\n            .test-buttons {\n                margin-top: 15px;\n                padding-top: 15px;\n                border-top: 1px solid #f0f0f0;\n                display: flex;\n                flex-wrap: wrap;\n                gap: 8px;\n            }\n            \n            .test-btn {\n                background: #f0f0f0;\n                border: none;\n                padding: 6px 12px;\n                border-radius: 6px;\n                font-size: 12px;\n                cursor: pointer;\n                transition: background 0.3s ease;\n                flex: 1;\n                min-width: 60px;\n            }\n            \n            .test-btn:hover {\n                background: #e0e0e0;\n            }\n            \n            .test-btn.success {\n                background: #4CD964;\n                color: white;\n            }\n            \n            .test-btn.error {\n                background: #FF3B30;\n                color: white;\n            }\n            \n            .test-btn.warning {\n                background: #FF9500;\n                color: white;\n            }\n            \n            .test-btn.info {\n                background: #007AFF;\n                color: white;\n            }\n        ";
    document.head.appendChild(_0x30ee8b);
    const _0x36215c = document.createElement("div");
    _0x36215c.className = "floating-btn";
    _0x36215c.id = "floatingBtn";
    _0x36215c.innerHTML = "控制<br>面板";
    _0x36215c.title = "点击打开控制面板 | 长按拖动";
    let _0x561619 = false;
    let _0x38e328 = 0;
    let _0x49dbaf = 0;
    let _0x1d7fc7 = 0;
    let _0x342697 = 0;
    let _0x3c3f72 = false;
    const _0x4eb399 = document.createElement("div");
    _0x4eb399.className = "overlay";
    _0x4eb399.id = "overlay";
    const _0x5c31c0 = document.createElement("div");
    _0x5c31c0.className = "control-panel";
    _0x5c31c0.id = "controlPanel";
    _0x5c31c0.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">脚本控制面板</div>\n                <button class=\"panel-close\" id=\"panelClose\">×</button>\n            </div>\n            <div class=\"list-block\">\n                <ul>\n                    <li>\n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">脚本启动</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\" id=\"txt_match\">仅女生</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">过滤清流标签</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_qingliu\" checked>\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">过滤18岁以下</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_under18\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">消息发送方式2</div>\n                                <div class=\"item-input\">\n                                    <label class=\"label-switch\">\n                                        <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_domsend\">\n                                        <div class=\"checkbox\"></div>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"item-content\">\n                            <div class=\"item-inner\">\n                                <div class=\"item-title label\">发送联系方式</div>\n                                <div class=\"item-input\">\n                                    <button class=\"contact-btn\" id=\"btn_contact\">发送联系方式</button>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"test-buttons\">\n            <div style=\"font-size: 12px; color: #666; width: 100%; margin-bottom: 5px; display: flex; justify-content: space-between;\">\n                <span>© 驭师69号 - 2024-2025</span>\n                <span style=\"color: #999;\">V1.0.4</span>\n            </div>\n            </div>\n\n        ";
    const _0x20cb46 = document.createElement("div");
    _0x20cb46.className = "toast-container";
    _0x20cb46.id = "toastContainer";
    document.body.appendChild(_0x36215c);
    document.body.appendChild(_0x4eb399);
    document.body.appendChild(_0x5c31c0);
    document.body.appendChild(_0x20cb46);
    function _0x35b375() {
      {
        _0x5c31c0.classList.toggle("show");
        _0x4eb399.classList.toggle("show");
      }
    }
    function _0x177cfd() {
      {
        _0x5c31c0.classList.remove("show");
        _0x4eb399.classList.remove("show");
      }
    }
    _0x36215c.addEventListener("mousedown", function (_0x321c40) {
      _0x561619 = true;
      _0x3c3f72 = false;
      _0x38e328 = _0x321c40.clientX;
      _0x49dbaf = _0x321c40.clientY;
      const _0x5190d6 = _0x36215c.getBoundingClientRect();
      _0x1d7fc7 = _0x5190d6.left;
      _0x342697 = _0x5190d6.top;
      _0x36215c.style.cursor = "grabbing";
      _0x36215c.style.opacity = "0.8";
      _0x36215c.style.transition = "none";
      _0x321c40.preventDefault();
      _0x321c40.stopPropagation();
    });
    document.addEventListener("mousemove", function (_0x1eee9d) {
      if (!_0x561619) {
        return;
      }
      const _0x3210eb = _0x1eee9d.clientX - _0x38e328;
      const _0x4d4fb3 = _0x1eee9d.clientY - _0x49dbaf;
      (Math.abs(_0x3210eb) > 5 || Math.abs(_0x4d4fb3) > 5) && (_0x3c3f72 = true);
      let _0x37f727 = _0x1d7fc7 + _0x3210eb;
      let _0x32893b = _0x342697 + _0x4d4fb3;
      const _0x29169f = window.innerWidth - _0x36215c.offsetWidth;
      const _0x3e7f48 = window.innerHeight - _0x36215c.offsetHeight;
      _0x37f727 = Math.max(0, Math.min(_0x37f727, _0x29169f));
      _0x32893b = Math.max(0, Math.min(_0x32893b, _0x3e7f48));
      _0x36215c.style.left = _0x37f727 + "px";
      _0x36215c.style.top = _0x32893b + "px";
      _0x36215c.style.right = "auto";
      _0x36215c.style.bottom = "auto";
      _0x1eee9d.preventDefault();
    });
    document.addEventListener("mouseup", function (_0x2fef3c) {
      _0x561619 && (_0x561619 = false, _0x36215c.style.cursor = "grab", _0x36215c.style.opacity = "1", _0x36215c.style.transition = "all 0.3s ease", !_0x3c3f72 && _0x35b375());
    });
    _0x36215c.addEventListener("touchstart", function (_0x564a83) {
      _0x561619 = true;
      _0x3c3f72 = false;
      const _0x2cb0cf = _0x564a83.touches[0];
      _0x38e328 = _0x2cb0cf.clientX;
      _0x49dbaf = _0x2cb0cf.clientY;
      const _0x33affa = _0x36215c.getBoundingClientRect();
      _0x1d7fc7 = _0x33affa.left;
      _0x342697 = _0x33affa.top;
      _0x36215c.style.opacity = "0.8";
      _0x36215c.style.transition = "none";
      _0x564a83.preventDefault();
    }, {
      passive: false
    });
    document.addEventListener("touchmove", function (_0x6e038c) {
      if (!_0x561619) {
        return;
      }
      const _0x409e84 = _0x6e038c.touches[0];
      const _0x29544f = _0x409e84.clientX - _0x38e328;
      const _0x2e286b = _0x409e84.clientY - _0x49dbaf;
      (Math.abs(_0x29544f) > 5 || Math.abs(_0x2e286b) > 5) && (_0x3c3f72 = true);
      let _0x2347be = _0x1d7fc7 + _0x29544f;
      let _0x419dce = _0x342697 + _0x2e286b;
      const _0x17047c = window.innerWidth - _0x36215c.offsetWidth;
      const _0x123542 = window.innerHeight - _0x36215c.offsetHeight;
      _0x2347be = Math.max(0, Math.min(_0x2347be, _0x17047c));
      _0x419dce = Math.max(0, Math.min(_0x419dce, _0x123542));
      _0x36215c.style.left = _0x2347be + "px";
      _0x36215c.style.top = _0x419dce + "px";
      _0x36215c.style.right = "auto";
      _0x36215c.style.bottom = "auto";
      _0x6e038c.preventDefault();
    }, {
      passive: false
    });
    document.addEventListener("touchend", function (_0x2e428c) {
      _0x561619 && (_0x561619 = false, _0x36215c.style.opacity = "1", _0x36215c.style.transition = "all 0.3s ease", !_0x3c3f72 && _0x35b375());
    });
    _0x4eb399.addEventListener("click", _0x177cfd);
    document.getElementById("panelClose").addEventListener("click", _0x177cfd);
    document.addEventListener("keydown", function (_0x3a783f) {
      {
        if (_0x3a783f.key === "Escape" && _0x5c31c0.classList.contains("show")) {
          _0x177cfd();
        }
      }
    });
    function _0x2dc54f(_0x19a95f, _0x195b3c = "info", _0x403226 = 4000) {
      {
        const _0x2cd6fc = document.createElement("div");
        _0x2cd6fc.className = "toast " + _0x195b3c;
        const _0x3b8728 = {
          success: "✅",
          error: "❌",
          warning: "⚠️",
          info: "ℹ️"
        };
        _0x2cd6fc.innerHTML = "\n                <span class=\"toast-icon\">" + (_0x3b8728[_0x195b3c] || "ℹ️") + "</span>\n                <span>" + _0x19a95f + "</span>\n            ";
        _0x20cb46.appendChild(_0x2cd6fc);
        setTimeout(() => {
          {
            _0x2cd6fc.classList.add("fade-out");
            setTimeout(() => {
              {
                _0x2cd6fc.parentNode && _0x2cd6fc.parentNode.removeChild(_0x2cd6fc);
              }
            }, 300);
          }
        }, _0x403226);
        return _0x2cd6fc;
      }
    }
    chatPage.showToast = _0x2dc54f;
    document.getElementById("ckb_script").addEventListener("change", function () {
      {
        const _0x2ffefc = this.checked ? "开启" : "关闭";
        chatPage.scriptRunning = this.checked;
        _0x2dc54f("脚本" + _0x2ffefc, this.checked ? "success" : "info");
        console.log("脚本启动: " + _0x2ffefc);
      }
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      {
        const _0x4cfc6e = this.checked ? "女生" : "男生";
        document.getElementById("txt_match").textContent = "仅" + _0x4cfc6e;
        chatPage.target = _0x4cfc6e;
        _0x2dc54f("匹配模式: " + _0x4cfc6e, "info");
        console.log("匹配模式: " + _0x4cfc6e);
      }
    });
    document.getElementById("ckb_qingliu").addEventListener("change", function () {
      {
        const _0x11884b = this.checked ? "开启" : "关闭";
        chatPage.filterQingliu = this.checked;
        _0x2dc54f("过滤清流标签: " + _0x11884b, this.checked ? "warning" : "info");
        console.log("过滤清流标签: " + _0x11884b);
      }
    });
    document.getElementById("ckb_under18").addEventListener("change", function () {
      {
        const _0x5d512f = this.checked ? "开启" : "关闭";
        chatPage.filterUnder18 = this.checked;
        _0x2dc54f("过滤18岁以下: " + _0x5d512f, this.checked ? "warning" : "info");
        console.log("过滤18岁以下: " + _0x5d512f);
      }
    });
    document.getElementById("ckb_domsend").addEventListener("change", function () {
      {
        const _0x43f4f8 = this.checked ? "DOM方式" : "Emit方式";
        chatPage.useDomSend = this.checked;
        _0x2dc54f("消息发送: " + _0x43f4f8, "info");
        console.log("消息发送方式: " + _0x43f4f8);
      }
    });
    document.getElementById("btn_contact").addEventListener("click", function () {
      {
        console.log("发送联系方式按钮被点击");
        const _0x58426a = this;
        const _0x2d013a = _0x58426a.textContent;
        _0x58426a.textContent = "发送中...";
        _0x58426a.classList.add("sending");
        _0x2dc54f("正在发送联系方式...", "info", 2000);
        chatPage.sendContactInfo(QQ);
        setTimeout(() => {
          {
            _0x58426a.textContent = _0x2d013a;
            _0x58426a.classList.remove("sending");
            _0x2dc54f("联系方式发送成功！", "success");
          }
        }, 2000);
      }
    });
    document.getElementById("ckb_match").click();
    _0x2dc54f("驭师插件，欢迎您的使用！", "success");
  },
  setTimer() {
    setInterval(() => {
      {
        const _0x541880 = document.querySelectorAll("[class*=\"xunren\"], [class*=\"search-person\"]");
        _0x541880.forEach(_0xc33eca => _0xc33eca.remove());
        document.querySelectorAll("uni-view, uni-button").forEach(_0x11ca71 => {
          (_0x11ca71.innerText || "").trim() === "寻人" && (_0x11ca71.closest("[class*=\"btn\"]")?.["remove"]() || _0x11ca71.remove());
        });
        if (!this.findEl) {
          const _0x31b39a = [".message-controls-wrapper", ".chat-container", ".chat-bottom-bar", "[data-v-077e967a]", "[data-v-94925904]"];
          for (const _0x391f83 of _0x31b39a) {
            const _0x4a9794 = document.querySelector(_0x391f83);
            if (_0x4a9794 && _0x4a9794.__vueParentComponent) {
              const _0xb8f451 = _0x4a9794.__vueParentComponent;
              let _0x9f84a = _0xb8f451.parent;
              while (_0x9f84a) {
                if (typeof _0x9f84a.emit === "function") {
                  this.chat = _0x9f84a;
                  console.log("[脚本] 找到Vue chat组件, 选择器:", _0x391f83);
                  break;
                }
                _0x9f84a = _0x9f84a.parent;
              }
              _0xb8f451.parent && _0xb8f451.parent.props && _0xb8f451.parent.props.chatState !== undefined && (this.page = _0xb8f451.parent.props, console.log("[脚本] 找到Vue page组件"));
              if (this.chat) {
                break;
              }
            }
          }
          const _0x49f79c = document.querySelector(".chat-container") || document.querySelector(".message-controls-wrapper");
          const _0x4c7753 = localStorage.getItem("bottle_chat_state") !== null;
          _0x49f79c || _0x4c7753 ? (this.nextInterval = 600, this.findEl = true, console.log("聊天页面已加载，脚本就绪")) : (this.nextInterval = 2000, this.loadFailnum++, this.loadFailnum % 5 == 0 && this.loadFailnum >= 5 && this.showToast("官方页面变动...可能需要更新", "info", this.nextInterval));
        }
        if (!this.scriptRunning) {
          return;
        }
        const _0x4e3532 = this.getChatState();
        const _0x238aff = this.getPartnerInfo();
        const _0xdba76 = _0x238aff.gender;
        const _0x530748 = _0x238aff.ageTag || "未知";
        const _0x385ef4 = this.isTarget();
        const _0x20416d = this.isUnder18();
        const _0x5d673e = this.hasQingliuTag();
        const _0x46d9f8 = _0x238aff.userTag || "";
        console.log("[脚本] 状态:" + _0x4e3532 + " 性别:" + _0xdba76 + " 年龄:" + _0x530748 + " 标签:" + _0x46d9f8 + " 目标:" + this.target + " 匹配:" + _0x385ef4 + " 未成年:" + _0x20416d + " 清流:" + _0x5d673e);
        switch (_0x4e3532) {
          case "REPAIRED":
          case "PAIRED":
            if (this.filterUnder18 && _0x20416d) {
              console.log("[脚本] 对方为18岁以下，自动离开");
              this.showToast("对方为18岁以下，自动离开", "warning", 1500);
              this.leave();
              break;
            }
            if (this.filterQingliu && _0x5d673e) {
              console.log("[脚本] 对方标签包含清流，自动离开");
              this.showToast("对方标签包含清流，自动离开", "warning", 1500);
              this.leave();
              break;
            }
            if (_0x385ef4) {
              if (!this.alreadySent) {
                this.alreadySent = true;
                this.showToast("已匹配到: " + this.target + "！", "success", 1000);
                if (AUTO_MSG.length > 0) {
                  let _0x3fc0d4 = AUTO_MSG[index];
                  index++;
                  index >= AUTO_MSG.length && (index = 0);
                  if (_0x3fc0d4.includes("|")) {
                    const _0x278273 = _0x3fc0d4.split("|");
                    _0x278273.forEach((_0x54f74a, _0x330c91) => {
                      setTimeout(() => {
                        this.sendMsg(_0x54f74a.trim());
                      }, _0x330c91 * 800);
                    });
                  } else {
                    this.sendMsg(_0x3fc0d4);
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