//Wed Jan 28 2026 00:54:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
setData = function (_0x246278, _0xc33105, ..._0x116eeb) {
  QQ = _0x246278;
  index = _0xc33105;
  AUTO_MSG = _0x116eeb;
};
setData("123456789", 0, "hello");
try {
  ma == undefined;
} catch (_0x2d8542) {
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
  sendMsg(_0x3b5c6a) {
    this.chat.emit("typing");
    const _0x3837ba = "tmp_" + Date.now() + Math.floor(1000 * Math.random());
    messageAdded = {
      id: _0x3837ba,
      content: _0x3b5c6a,
      time: new Date().toLocaleTimeString(),
      type: "text",
      user: "self",
      status: "sending",
      isRead: false,
      isDelivered: false,
      tmpId: _0x3837ba
    };
    this.chat.emit("message-added", messageAdded);
    this.chat.emit("send", {
      content: _0x3b5c6a,
      tmpId: _0x3837ba
    });
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
    const _0x28f147 = this.page.partnerInfo;
    if (!_0x28f147) {
      {
        return null;
      }
    }
    return {
      gender: _0x28f147.gender || "鏈煡",
      age: _0x28f147.age == 1 ? "18岁以下" : _0x28f147.age == 2 ? "18-23宀 " : "23宀佷互涓 ",
      province: _0x28f147.province || "鏈煡",
      isShowVipLabel: _0x28f147.isShowVipLabel || false,
      partnerIdEncrypted: _0x28f147.partnerIdEncrypted || null
    };
  },
  isTarget() {
    const _0x149306 = this.getPartnerInfo();
    if (!_0x149306 || !_0x149306.partnerIdEncrypted) {
      {
        return false;
      }
    }
    return _0x149306.gender == this.target && !this.isInBlacklist(_0x149306.partnerIdEncrypted);
  },
  getChatState() {
    const _0x539fde = localStorage.bottle_partner_left_status;
    const _0x2e7ba8 = _0x539fde && JSON.parse(_0x539fde).data;
    if (_0x2e7ba8) {
      return "PARTNER_LEFT";
    }
    return this.page.chatState;
  },
  removeAds() {
    try {
      const _0x1a6a0f = document.querySelectorAll(".vip-simple-banner.bg-transparent");
      _0x1a6a0f.forEach(_0x452b68 => {
        _0x452b68.classList.contains("px-3") && _0x452b68.classList.contains("py-1-5") && _0x452b68.remove();
      });
      const _0x52c3d6 = document.querySelectorAll(".pt-2.flex.justify-center.my-5");
      _0x52c3d6.forEach(_0x6912c9 => {
        _0x6912c9.remove();
      });
    } catch (_0x10a1e3) {}
  },
  initAdRemoval() {
    this.removeAds();
    if (typeof MutationObserver !== "undefined") {
      {
        const _0x533ca7 = new MutationObserver(() => {
          this.removeAds();
        });
        _0x533ca7.observe(document.body, {
          childList: true,
          subtree: true
        });
        this.adObserver = _0x533ca7;
      }
    }
  },
  formatUserId(_0x2531b4, maxLength = 20) {
    if (!_0x2531b4) {
      return "鏈煡";
    }
    if (_0x2531b4.length <= maxLength) {
      return _0x2531b4;
    }
    const _0x5c5cff = _0x2531b4.substring(0, 8);
    const _0x5b7c27 = _0x2531b4.substring(_0x2531b4.length - 8);
    return _0x5c5cff + "..." + _0x5b7c27;
  },
  showConfirm(_0x1e453b) {
    return new Promise(_0xe8c104 => {
      const {
        title = "纭",
        message = "",
        info = null,
        confirmText = "纭",
        cancelText = "鍙栨秷",
        confirmType = "danger",
        remarkInput = false,
        remarkPlaceholder = "备注（可选）",
        remarkDefault = ""
      } = _0x1e453b;
      const _0x55821a = document.createElement("div");
      _0x55821a.className = "confirm-overlay";
      _0x55821a.id = "confirmOverlay";
      let _0x10da6a = "";
      if (info) {
        const _0x181352 = [];
        if (info.gender) {
          _0x181352.push({
            label: "鎬у埆",
            value: info.gender
          });
        }
        if (info.age) {
          _0x181352.push({
            label: "骞撮緞",
            value: info.age
          });
        }
        if (info.province) {
          _0x181352.push({
            label: "鍦板尯",
            value: info.province
          });
        }
        if (info.userId || info.partnerIdEncrypted) {
          {
            const _0x20b7f7 = info.partnerIdEncrypted || info.userId;
            _0x181352.push({
              label: "用户ID",
              value: this.formatUserId(_0x20b7f7),
              isVip: info.isShowVipLabel
            });
          }
        }
        _0x181352.length > 0 && (_0x10da6a = "<div class=\"confirm-info\">" + _0x181352.map(_0x1feedc => "\n                            <div class=\"confirm-info-item\">\n                                <span class=\"confirm-info-label\">" + _0x1feedc.label + "</span>\n                                <span class=\"confirm-info-value\">\n                                    " + _0x1feedc.value + "\n                                    " + (_0x1feedc.isVip ? "<span class=\"confirm-info-vip\">VIP</span>" : "") + "\n                                </span>\n                            </div>\n                        ").join("") + "</div>");
      }
      const remarkSection = remarkInput ? "\n                <div class=\"confirm-remark\">\n                    <label class=\"confirm-remark-label\">备注</label>\n                    <input class=\"confirm-remark-input\" id=\"confirmRemarkInput\" placeholder=\"" + remarkPlaceholder + "\" value=\"" + (remarkDefault || "") + "\">\n                </div>\n            " : "";
      const _0x18a142 = document.createElement("div");
      _0x18a142.className = "confirm-dialog";
      _0x18a142.innerHTML = "\n                <div class=\"confirm-header\">\n                    <div class=\"confirm-title\">" + title + "</div>\n                </div>\n                <div class=\"confirm-body\">\n                    " + (message ? "<div class=\"confirm-message\">" + message + "</div>" : "") + "\n                    " + _0x10da6a + "\n                    " + remarkSection + "\n                </div>\n                <div class=\"confirm-footer\">\n                    <button class=\"confirm-btn confirm-btn-cancel\" id=\"confirmCancel\">" + cancelText + "</button>\n                    <button class=\"confirm-btn confirm-btn-" + confirmType + "\" id=\"confirmOk\">" + confirmText + "</button>\n                </div>\n            ";
      _0x55821a.appendChild(_0x18a142);
      document.body.appendChild(_0x55821a);
      setTimeout(() => {
        {
          _0x55821a.classList.add("show");
        }
      }, 10);
      const _0xe1ee82 = () => {
        {
          _0x55821a.classList.remove("show");
          setTimeout(() => {
            {
              document.body.removeChild(_0x55821a);
            }
          }, 300);
          const remarkValue = remarkInput ? (document.getElementById("confirmRemarkInput")?.["value"] || "").trim() : "";
          _0xe8c104({
            confirmed: true,
            remark: remarkValue
          });
        }
      };
      const _0xaba383 = () => {
        _0x55821a.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(_0x55821a);
        }, 300);
        _0xe8c104({
          confirmed: false,
          remark: ""
        });
      };
      document.getElementById("confirmOk").addEventListener("click", _0xe1ee82);
      document.getElementById("confirmCancel").addEventListener("click", _0xaba383);
      _0x55821a.addEventListener("click", _0x4d9d9b => {
        _0x4d9d9b.target === _0x55821a && _0xaba383();
      });
      const _0x89f583 = _0x3cd4e9 => {
        _0x3cd4e9.key === "Escape" && (_0xaba383(), document.removeEventListener("keydown", _0x89f583));
      };
      document.addEventListener("keydown", _0x89f583);
    });
  },
  sendContactInfo(_0x320e2b) {
    let _0xcdb81c = 0;
    let _0x21e0e0 = "";
    let _0x497dcb = [];
    console.log("开始处理: \"" + _0x320e2b + "\"");
    for (let _0x4062be = 0; _0x4062be < _0x320e2b.length; _0x4062be++) {
      const _0x30a6d7 = _0x320e2b[_0x4062be];
      _0x21e0e0 += _0x30a6d7;
      if (/\d/.test(_0x30a6d7)) {
        _0xcdb81c++;
      }
      if (_0xcdb81c === 3 || _0x4062be === _0x320e2b.length - 1) {
        {
          _0x497dcb.push(_0x21e0e0);
          _0x21e0e0 = "";
          _0xcdb81c = 0;
        }
      }
    }
    _0x497dcb.forEach((_0x14b3dc, _0x14ef15) => {
      {
        setTimeout(() => {
          this.sendMsg(_0x14b3dc);
        }, (_0x14ef15 + 1) * 800);
      }
    });
    return _0x497dcb;
  },
  blacklistData: [],
  normalizeBlacklistItem(_0x3d6cdd) {
    if (!_0x3d6cdd) {
      return null;
    }
    const _0x135afe = _0x3d6cdd.partnerIdEncrypted || _0x3d6cdd.userId;
    if (!_0x135afe) {
      return null;
    }
    return {
      partnerIdEncrypted: _0x135afe,
      gender: _0x3d6cdd.gender || "鏈煡",
      age: _0x3d6cdd.age || "鏈煡",
      province: _0x3d6cdd.province || "鏈煡",
      isShowVipLabel: !!_0x3d6cdd.isShowVipLabel,
      remark: _0x3d6cdd.remark || "",
      createTime: _0x3d6cdd.createTime || new Date().toISOString()
    };
  },
  getBlacklist() {
    try {
      {
        const _0xdfdbbf = localStorage.getItem("blacklistData");
        if (_0xdfdbbf) {
          const _0x31590b = JSON.parse(_0xdfdbbf);
          this.blacklistData = Array.isArray(_0x31590b) ? _0x31590b : [];
          return this.blacklistData;
        }
      }
    } catch (_0x37d28f) {
      console.error("读取黑名单失败:", _0x37d28f);
    }
    return this.blacklistData || [];
  },
  saveBlacklist(_0x351e42) {
    try {
      this.blacklistData = _0x351e42;
      localStorage.setItem("blacklistData", JSON.stringify(_0x351e42));
      return true;
    } catch (_0x55334d) {
      console.error("保存黑名单失败:", _0x55334d);
      return false;
    }
  },
  isInBlacklist(_0x12c9b9) {
    if (!_0x12c9b9) {
      return false;
    }
    const _0x3aa40a = this.getBlacklist();
    return _0x3aa40a.some(_0x4b64d0 => (_0x4b64d0.partnerIdEncrypted || _0x4b64d0.userId) === _0x12c9b9);
  },
  exportBlacklist() {
    try {
      const _0x46fa56 = this.getBlacklist();
      const _0x5eb0e2 = JSON.stringify(_0x46fa56, null, 2);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(_0x5eb0e2).then(() => {
          this.showToast("榛戝悕鍗曞凡澶嶅埗鍒板壀鍒囨澘", "success");
        }).catch(_0x4d8776 => {
          {
            console.error("复制到剪切板失败:", _0x4d8776);
            this.showToast("复制到剪切板失败", "error");
          }
        });
      } else {
        {
          const _0x1da303 = document.createElement("textarea");
          _0x1da303.value = _0x5eb0e2;
          _0x1da303.style.position = "fixed";
          _0x1da303.style.opacity = "0";
          document.body.appendChild(_0x1da303);
          _0x1da303.select();
          try {
            document.execCommand("copy");
            this.showToast("黑名单已复制到剪切板", "success");
          } catch (_0x3a3a24) {
            console.error("复制到剪切板失败:", _0x3a3a24);
            this.showToast("复制到剪切板失败", "error");
          }
          document.body.removeChild(_0x1da303);
        }
      }
      return true;
    } catch (_0x3cf464) {
      {
        console.error("导出黑名单失败:", _0x3cf464);
        this.showToast("导出失败", "error");
        return false;
      }
    }
  },
  showImportDialog() {
    let _0x1e0fd6 = document.getElementById("importDialog");
    if (_0x1e0fd6) {
      document.getElementById("importOverlay").classList.add("show");
      _0x1e0fd6.classList.add("show");
      const _0x497f14 = document.getElementById("importTextarea");
      _0x497f14 && setTimeout(() => _0x497f14.focus(), 100);
      return;
    }
    const _0xb0ad41 = document.createElement("div");
    _0xb0ad41.className = "confirm-overlay";
    _0xb0ad41.id = "importOverlay";
    const _0x2ae2e0 = document.createElement("div");
    _0x2ae2e0.className = "confirm-dialog import-dialog";
    _0x2ae2e0.id = "importDialog";
    _0x2ae2e0.innerHTML = "\n            <div class=\"confirm-header\">\n                <div class=\"confirm-title\">瀵煎叆榛戝悕鍗 </div>\n            </div>\n            <div class=\"confirm-body\">\n                <div class=\"confirm-message\">请粘贴黑名单JSON鏁版嵁锛 </div>\n                <textarea class=\"import-textarea\" id=\"importTextarea\" placeholder=\"在此粘贴黑名单JSON数据...\"></textarea>\n            </div>\n            <div class=\"confirm-footer\">\n                <button class=\"confirm-btn confirm-btn-cancel\" id=\"importCancel\">鍙栨秷</button>\n                <button class=\"confirm-btn confirm-btn-primary\" id=\"importOk\">瀵煎叆</button>\n            </div>\n        ";
    _0xb0ad41.appendChild(_0x2ae2e0);
    document.body.appendChild(_0xb0ad41);
    setTimeout(() => {
      {
        _0xb0ad41.classList.add("show");
        _0x2ae2e0.classList.add("show");
        const _0xb417b1 = document.getElementById("importTextarea");
        _0xb417b1 && _0xb417b1.focus();
      }
    }, 10);
    const _0x61702b = () => {
      const _0x415b16 = document.getElementById("importTextarea");
      const _0x38ed4b = _0x415b16 ? _0x415b16.value.trim() : "";
      if (!_0x38ed4b) {
        {
          this.showToast("请输入黑名单数据", "error");
          return;
        }
      }
      try {
        {
          const _0x3537b2 = JSON.parse(_0x38ed4b);
          if (!Array.isArray(_0x3537b2)) {
            {
              this.showToast("数据格式错误：必须是鏁扮粍鏍煎紡", "error");
              return;
            }
          }
          const normalized = _0x3537b2.map(_0x4f6c43 => this.normalizeBlacklistItem(_0x4f6c43)).filter(Boolean);
          if (normalized.length === 0) {
            this.showToast("没有有效的黑名单数据", "error");
            return;
          }
          const _0x42140c = this.getBlacklist();
          const _0x424f13 = new Set(_0x42140c.map(_0x22b3e5 => _0x22b3e5.partnerIdEncrypted || _0x22b3e5.userId));
          const _0x5eb50c = normalized.filter(_0x2aaf54 => !_0x424f13.has(_0x2aaf54.partnerIdEncrypted));
          const _0x527b2d = [..._0x42140c, ..._0x5eb50c];
          this.saveBlacklist(_0x527b2d);
          this.refreshBlacklistList();
          _0xb0ad41.classList.remove("show");
          _0x2ae2e0.classList.remove("show");
          setTimeout(() => {
            document.body.removeChild(_0xb0ad41);
          }, 300);
          _0x5eb50c.length > 0 ? this.showToast("鎴愬姛瀵煎叆 " + _0x5eb50c.length + " 鏉￠粦鍚嶅崟", "success") : this.showToast("没有新的黑名单数据（鍙兘宸插瓨鍦級", "info");
        }
      } catch (_0x291338) {
        this.showToast("数据解析失败：" + _0x291338.message, "error");
      }
    };
    const _0x42cf3f = () => {
      _0xb0ad41.classList.remove("show");
      _0x2ae2e0.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(_0xb0ad41);
      }, 300);
    };
    document.getElementById("importOk").addEventListener("click", _0x61702b);
    document.getElementById("importCancel").addEventListener("click", _0x42cf3f);
    _0xb0ad41.addEventListener("click", _0x4bb1d5 => {
      _0x4bb1d5.target === _0xb0ad41 && _0x42cf3f();
    });
    const _0x59137d = document.getElementById("importTextarea");
    _0x59137d && _0x59137d.addEventListener("keydown", _0x5075d1 => {
      _0x5075d1.key === "Enter" && (_0x5075d1.ctrlKey || _0x5075d1.metaKey) && (_0x5075d1.preventDefault(), _0x61702b());
    });
  },
  importBlacklistFromClipboard() {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(_0x31976a => {
        {
          try {
            {
              const _0x5666bc = JSON.parse(_0x31976a);
              if (!Array.isArray(_0x5666bc)) {
                this.showToast("剪切板格式错误：必须鏄暟缁勬牸寮 ", "error");
                return;
              }
              const normalized = _0x5666bc.map(_0x32d2d9 => this.normalizeBlacklistItem(_0x32d2d9)).filter(Boolean);
              if (normalized.length === 0) {
                this.showToast("剪切板中没有有效的黑名单数据", "error");
                return;
              }
              const _0x3b7c60 = this.getBlacklist();
              const _0x486cf2 = new Set(_0x3b7c60.map(_0x5f0bfb => _0x5f0bfb.partnerIdEncrypted || _0x5f0bfb.userId));
              const _0x236d3c = normalized.filter(_0x50016e => !_0x486cf2.has(_0x50016e.partnerIdEncrypted));
              const _0x3d8b6e = [..._0x3b7c60, ..._0x236d3c];
              this.saveBlacklist(_0x3d8b6e);
              this.refreshBlacklistList();
              this.showToast("鎴愬姛瀵煎叆 " + _0x236d3c.length + " 鏉￠粦鍚嶅崟", "success");
            }
          } catch (_0x9f3b96) {
            {
              this.showToast("鍓垏鏉胯В鏋愬け璐ワ細" + _0x9f3b96.message, "error");
            }
          }
        }
      }).catch(_0x3c7df8 => {
        console.error("读取剪切板失败:", _0x3c7df8);
        this.showToast("读取剪切板失败", "error");
      });
    } else {
      {
        const _0x515ac4 = document.createElement("textarea");
        _0x515ac4.style.position = "fixed";
        _0x515ac4.style.opacity = "0";
        document.body.appendChild(_0x515ac4);
        _0x515ac4.focus();
        try {
          if (document.execCommand("paste")) {
            const _0x25e509 = _0x515ac4.value;
            try {
              const _0x344e6f = JSON.parse(_0x25e509);
              if (!Array.isArray(_0x344e6f)) {
                this.showToast("剪切板格式错误：必须鏄暟缁勬牸寮 ", "error");
                return;
              }
              const normalized = _0x344e6f.map(_0x7ea2c6 => this.normalizeBlacklistItem(_0x7ea2c6)).filter(Boolean);
              if (normalized.length === 0) {
                this.showToast("剪切板中没有有效的黑名单数据", "error");
                return;
              }
              const _0x35ab50 = this.getBlacklist();
              const _0xffc323 = new Set(_0x35ab50.map(_0x4e29e6 => _0x4e29e6.partnerIdEncrypted || _0x4e29e6.userId));
              const _0x236aa5 = normalized.filter(_0xa1975d => !_0xffc323.has(_0xa1975d.partnerIdEncrypted));
              const _0x422433 = [..._0x35ab50, ..._0x236aa5];
              this.saveBlacklist(_0x422433);
              this.refreshBlacklistList();
              this.showToast("成功导入 " + _0x236aa5.length + " 条黑名单", "success");
            } catch (_0x10302a) {
              this.showToast("鍓垏鏉胯В鏋愬け璐ワ細" + _0x10302a.message, "error");
            }
          } else {
            this.showToast("读取剪切板失败", "error");
          }
        } catch (_0x40622e) {
          console.error("读取剪切板失败:", _0x40622e);
          this.showToast("读取剪切板失败", "error");
        }
        document.body.removeChild(_0x515ac4);
      }
    }
  },
  importBlacklistFromFile(_0x26b860) {
    return new Promise((_0xd6c228, _0x2e324d) => {
      if (!_0x26b860) {
        {
          _0x2e324d(new Error("文件不能为空"));
          return;
        }
      }
      const _0x4e96c7 = new FileReader();
      _0x4e96c7.onload = _0x3b1b91 => {
        try {
          const _0x12dd66 = _0x3b1b91.target.result;
          const _0x2e2e93 = JSON.parse(_0x12dd66);
          if (!Array.isArray(_0x2e2e93)) {
            {
              _0x2e324d(new Error("文件格式错误：必须是鏁扮粍鏍煎紡"));
              return;
            }
          }
          const normalized = _0x2e2e93.map(_0x18b6f6 => this.normalizeBlacklistItem(_0x18b6f6)).filter(Boolean);
          if (normalized.length === 0) {
            _0x2e324d(new Error("文件中没有有效的黑名鍗曟暟鎹 "));
            return;
          }
          const _0x10f52b = this.getBlacklist();
          const _0x4d8d08 = new Set(_0x10f52b.map(_0x201546 => _0x201546.partnerIdEncrypted || _0x201546.userId));
          const _0x3fe34b = normalized.filter(_0x3d4bf6 => !_0x4d8d08.has(_0x3d4bf6.partnerIdEncrypted));
          const _0x42006e = [..._0x10f52b, ..._0x3fe34b];
          this.saveBlacklist(_0x42006e);
          this.showToast("成功导入 " + _0x3fe34b.length + " 条黑名单", "success");
          _0xd6c228(_0x42006e);
        } catch (_0x3a1b9c) {
          {
            _0x2e324d(new Error("鏂囦欢瑙ｆ瀽澶辫触锛 " + _0x3a1b9c.message));
          }
        }
      };
      _0x4e96c7.onerror = () => {
        _0x2e324d(new Error("文件读取失败"));
      };
      _0x4e96c7.readAsText(_0x26b860);
    });
  },
  importBlacklist(_0x42dcf1) {
    try {
      {
        let _0x128e49;
        if (typeof _0x42dcf1 === "string") {
          _0x128e49 = JSON.parse(_0x42dcf1);
        } else {
          if (Array.isArray(_0x42dcf1)) {
            _0x128e49 = _0x42dcf1;
          } else {
            throw new Error("数据格式错误：必须是鏁扮粍鎴朖SON瀛楃涓 ");
          }
        }
        if (!Array.isArray(_0x128e49)) {
          {
            throw new Error("数据格式错误：必须是数组格式");
          }
        }
        const _0x27703f = _0x128e49.map(_0x4c1339 => this.normalizeBlacklistItem(_0x4c1339)).filter(Boolean);
        if (_0x27703f.length === 0) {
          throw new Error("没有有效的黑名单数据");
        }
        const _0x44e028 = this.getBlacklist();
        const _0x5afc4d = new Set(_0x44e028.map(_0xf236c0 => _0xf236c0.partnerIdEncrypted || _0xf236c0.userId));
        const _0x4888e4 = _0x27703f.filter(_0x57449c => !_0x5afc4d.has(_0x57449c.partnerIdEncrypted));
        const _0x15f4a0 = [..._0x44e028, ..._0x4888e4];
        this.saveBlacklist(_0x15f4a0);
        this.showToast("成功导入 " + _0x4888e4.length + " 条黑名单", "success");
        document.getElementById("blacklistPanel") && this.refreshBlacklistList();
        return _0x15f4a0;
      }
    } catch (_0x49e975) {
      console.error("导入黑名单失败:", _0x49e975);
      this.showToast("导入失败：" + _0x49e975.message, "error");
      throw _0x49e975;
    }
  },
  addToBlacklist(_0x317c3a, remark = "") {
    const _0x3ee36b = this.getBlacklist();
    const _0x1dd9ea = _0x317c3a.partnerIdEncrypted || _0x317c3a.userId;
    if (_0x3ee36b.some(_0xc469e3 => (_0xc469e3.partnerIdEncrypted || _0xc469e3.userId) === _0x1dd9ea)) {
      this.showToast("该用户已在黑名单中", "warning");
      return false;
    }
    const normalized = this.normalizeBlacklistItem({
      partnerIdEncrypted: _0x1dd9ea,
      gender: _0x317c3a.gender,
      age: _0x317c3a.age,
      province: _0x317c3a.province,
      isShowVipLabel: _0x317c3a.isShowVipLabel || false,
      remark: remark,
      createTime: new Date().toISOString()
    });
    if (!normalized) {
      return false;
    }
    _0x3ee36b.push(normalized);
    if (this.saveBlacklist(_0x3ee36b)) {
      this.showToast("已添加到黑名单", "success");
      return true;
    }
    return false;
  },
  removeFromBlacklist(_0x55bba3) {
    const _0x4a581d = this.getBlacklist();
    const _0x597f7c = _0x4a581d.filter(_0x4017bc => (_0x4017bc.partnerIdEncrypted || _0x4017bc.userId) !== _0x55bba3);
    if (this.saveBlacklist(_0x597f7c)) {
      this.showToast("已从黑名单移除", "success");
      return true;
    }
    return false;
  },
  updateBlacklistRemark(_0x54b238, remark) {
    const _0x14e9f7 = this.getBlacklist();
    const _0x174a2f = _0x14e9f7.find(_0x5936fe => (_0x5936fe.partnerIdEncrypted || _0x5936fe.userId) === _0x54b238);
    if (_0x174a2f) {
      _0x174a2f.remark = remark;
      if (this.saveBlacklist(_0x14e9f7)) {
        this.showToast("备注已更新", "success");
        return true;
      }
    }
    return false;
  },
  blockUser() {
    try {
      const _0x3c1e42 = this.getPartnerInfo();
      if (!_0x3c1e42 || !_0x3c1e42.partnerIdEncrypted) {
        this.showToast("无法获取对方信息", "error");
        console.error("无法获取对方信息");
        return;
      }
      this.showConfirm({
        title: "纭鎷夐粦",
        message: "确定要拉黑以下用户吗锛 ",
        info: _0x3c1e42,
        confirmText: "鎷夐粦",
        cancelText: "鍙栨秷",
        confirmType: "danger",
        remarkInput: true,
        remarkPlaceholder: "备注（可选）",
        remarkDefault: ""
      }).then(_0x51e475 => {
        _0x51e475.confirmed && (this.addToBlacklist(_0x3c1e42, _0x51e475.remark || ""), console.log("鎷夐粦鐢ㄦ埛:", _0x3c1e42));
      });
    } catch (_0xc26cc5) {
      console.error("鎷夐粦鐢ㄦ埛澶辫触:", _0xc26cc5);
      this.showToast("拉黑失败：" + _0xc26cc5.message, "error");
    }
  },
  showBlacklistPanel() {
    let _0x40cf76 = document.getElementById("blacklistPanel");
    if (_0x40cf76) {
      _0x40cf76.classList.add("show");
      document.getElementById("blacklistOverlay").classList.add("show");
      this.refreshBlacklistList();
      this.updateCurrentPartnerIdDisplay();
      return;
    }
    const _0x352d2c = document.createElement("div");
    _0x352d2c.className = "blacklist-overlay";
    _0x352d2c.id = "blacklistOverlay";
    _0x40cf76 = document.createElement("div");
    _0x40cf76.className = "blacklist-panel";
    _0x40cf76.id = "blacklistPanel";
    _0x40cf76.innerHTML = "\n            <div class=\"blacklist-header\">\n                <div class=\"blacklist-title\">黑名单管理</div>\n                <div class=\"blacklist-header-actions\">\n                    <div class=\"blacklist-count\" id=\"blacklistCount\">0 人</div>\n                    <button class=\"blacklist-close\" id=\"blacklistClose\">脳</button>\n                </div>\n            </div>\n            <div class=\"blacklist-body\">\n                <div class=\"blacklist-toolbar\">\n                    <div class=\"blacklist-current\">\n                        <div class=\"blacklist-current-label\">当前用户ID（自鍔ㄨ幏鍙栵級</div>\n                        <div class=\"blacklist-current-value\" id=\"blacklistCurrentId\">鏈幏鍙 </div>\n                    </div>\n                    <input type=\"text\" class=\"blacklist-input\" id=\"blacklistRemarkInput\" placeholder=\"备注（可选锛塡x22>\n                    <button class=\"blacklist-add-btn\" id=\"blacklistAddBtn\">添鍔犲綋鍓嶇敤鎴 </button>\n                </div>\n                <div class=\"blacklist-list\" id=\"blacklistList\">\n                    <!-- 榛戝悕鍗 列表将在这里动态生成 -->\n                </div>\n                <div class=\"blacklist-footer-actions\">\n                    <button class=\"blacklist-clear-btn\" id=\"blacklistClearBtn\">娓呯┖</button>\n                    <div class=\"blacklist-import-export-group\">\n                        <button class=\"blacklist-import-btn\" id=\"blacklistImportBtn\">导入</button>\n                        <button class=\"blacklist-export-btn\" id=\"blacklistExportBtn\">导出</button>\n                    </div>\n                </div>\n            </div>\n        ";
    document.body.appendChild(_0x352d2c);
    document.body.appendChild(_0x40cf76);
    _0x352d2c.addEventListener("click", () => this.closeBlacklistPanel());
    document.getElementById("blacklistClose").addEventListener("click", () => this.closeBlacklistPanel());
    document.getElementById("blacklistAddBtn").addEventListener("click", () => this.handleAddBlacklist());
    document.getElementById("blacklistExportBtn").addEventListener("click", () => this.exportBlacklist());
    document.getElementById("blacklistImportBtn").addEventListener("click", () => {
      this.showImportDialog();
    });
    document.getElementById("blacklistClearBtn").addEventListener("click", () => {
      this.showConfirm({
        title: "清空黑名单",
        message: "确定要清空所有黑名单璁板綍鍚楋紵姝ゆ搷浣滀笉鍙仮澶嶃€ ",
        confirmText: "娓呯┖",
        cancelText: "鍙栨秷",
        confirmType: "delete"
      }).then(_0x46950e => {
        _0x46950e.confirmed && (this.saveBlacklist([]), this.refreshBlacklistList(), this.showToast("宸叉竻绌洪粦鍚嶅崟", "success"));
      });
    });
    document.getElementById("blacklistRemarkInput").addEventListener("keypress", _0x213b3d => {
      {
        if (_0x213b3d.key === "Enter") {
          this.handleAddBlacklist();
        }
      }
    });
    setTimeout(() => {
      _0x40cf76.classList.add("show");
      _0x352d2c.classList.add("show");
    }, 10);
    this.refreshBlacklistList();
    this.updateCurrentPartnerIdDisplay();
  },
  closeBlacklistPanel() {
    const _0x5948e7 = document.getElementById("blacklistPanel");
    const _0x205e8c = document.getElementById("blacklistOverlay");
    _0x5948e7 && (_0x5948e7.classList.remove("show"), _0x205e8c.classList.remove("show"));
  },
  handleAddBlacklist() {
    const remarkInput = document.getElementById("blacklistRemarkInput");
    const remark = remarkInput.value.trim();
    const _0x19e726 = this.getPartnerInfo && this.getPartnerInfo();
    if (!_0x19e726 || !_0x19e726.partnerIdEncrypted) {
      {
        this.showToast("鏈幏鍙栧埌褰撳墠鐢ㄦ埛锛屾棤娉曟坊鍔 ", "warning");
        return;
      }
    }
    this.updateCurrentPartnerIdDisplay();
    const _0x2161c9 = _0x19e726.partnerIdEncrypted;
    const _0x27abf4 = this.getBlacklist();
    if (_0x27abf4.some(_0x1dac9f => (_0x1dac9f.partnerIdEncrypted || _0x1dac9f.userId) === _0x2161c9)) {
      {
        this.showToast("该用户已在黑名单中", "warning");
        return;
      }
    }
    this.addToBlacklist(_0x19e726, remark) && (remarkInput.value = "", this.refreshBlacklistList());
  },
  updateCurrentPartnerIdDisplay() {
    const _0x42437a = document.getElementById("blacklistCurrentId");
    if (!_0x42437a) {
      return;
    }
    const _0x35cc25 = this.getPartnerInfo && this.getPartnerInfo();
    if (_0x35cc25 && _0x35cc25.partnerIdEncrypted) {
      {
        _0x42437a.textContent = this.formatUserId(_0x35cc25.partnerIdEncrypted);
      }
    } else {
      _0x42437a.textContent = "未获取";
    }
  },
  refreshBlacklistList() {
    const _0x1942fa = document.getElementById("blacklistList");
    if (!_0x1942fa) {
      return;
    }
    const _0x2545a5 = this.getBlacklist();
    const _0x5b228e = document.getElementById("blacklistCount");
    _0x5b228e && (_0x5b228e.textContent = _0x2545a5.length + " 浜 ");
    if (_0x2545a5.length === 0) {
      _0x1942fa.innerHTML = "\n                <div class=\"blacklist-empty\">\n                    <div class=\"blacklist-empty-text\">黑名单为空</div>\n                </div>\n            ";
      return;
    }
    _0x1942fa.innerHTML = _0x2545a5.map((_0x2f2f00, _0x40775b) => {
      const _0x4b171e = new Date(_0x2f2f00.createTime);
      const _0x2ec130 = _0x4b171e.toLocaleDateString() + " " + _0x4b171e.toLocaleTimeString().slice(0, 5);
      const _0x170ef8 = _0x2f2f00.partnerIdEncrypted || _0x2f2f00.userId;
      const formattedUserId = this.formatUserId(_0x170ef8);
      const _0x25c285 = _0x2f2f00.isShowVipLabel ? "<span class=\"blacklist-vip-badge\">VIP</span>" : "";
      return "\n                <div class=\"blacklist-item\" data-user-id=\"" + _0x170ef8 + "\">\n                    <div class=\"blacklist-item-content\">\n                        <div class=\"blacklist-item-info\">\n                            <div class=\"blacklist-item-header\">\n                                <div class=\"blacklist-item-id\">" + formattedUserId + " " + _0x25c285 + "</div>\n                            </div>\n                            <div class=\"blacklist-item-details\">\n                                <span class=\"blacklist-item-detail\">" + (_0x2f2f00.gender || "鏈煡") + "</span>\n                                <span class=\"blacklist-item-detail\">" + (_0x2f2f00.age || "鏈煡") + "</span>\n                                <span class=\"blacklist-item-detail\">" + (_0x2f2f00.province || "鏈煡") + "</span>\n                            </div>\n                            <div class=\"blacklist-item-remark\" data-edit=\"false\">" + (_0x2f2f00.remark || "鏃犲娉 ") + "</div>\n                            <div class=\"blacklist-item-time\">" + _0x2ec130 + "</div>\n                        </div>\n                        <div class=\"blacklist-item-actions\">\n                            <button class=\"blacklist-edit-btn\" data-index=\"" + _0x40775b + "\">编辑</button>\n                            <button class=\"blacklist-delete-btn\" data-index=\"" + _0x40775b + "\">删除</button>\n                        </div>\n                    </div>\n                    <div class=\"blacklist-edit-form\" style=\"display: none;\">\n                        <input type=\"text\" class=\"blacklist-edit-input\" value=\"" + (_0x2f2f00.remark || "") + "\" placeholder=\"杈撳叆澶囨敞\">\n                        <div class=\"blacklist-edit-actions\">\n                            <button class=\"blacklist-save-btn\" data-index=\"" + _0x40775b + "\">保存</button>\n                            <button class=\"blacklist-cancel-btn\" data-index=\"" + _0x40775b + "\">鍙栨秷</button>\n                        </div>\n                    </div>\n                </div>\n            ";
    }).join("");
    _0x1942fa.querySelectorAll(".blacklist-edit-btn").forEach(_0x5adb9c => {
      _0x5adb9c.addEventListener("click", _0x3a3863 => {
        {
          const _0x19ac92 = parseInt(_0x3a3863.target.dataset.index);
          this.showEditForm(_0x19ac92);
        }
      });
    });
    _0x1942fa.querySelectorAll(".blacklist-delete-btn").forEach(_0x429870 => {
      _0x429870.addEventListener("click", _0x4e1ce0 => {
        const _0x115a3c = parseInt(_0x4e1ce0.target.dataset.index);
        this.handleDeleteBlacklist(_0x115a3c);
      });
    });
    _0x1942fa.querySelectorAll(".blacklist-save-btn").forEach(_0x4067bb => {
      {
        _0x4067bb.addEventListener("click", _0x30fb7b => {
          const _0xa670d2 = parseInt(_0x30fb7b.target.dataset.index);
          this.handleSaveEdit(_0xa670d2);
        });
      }
    });
    _0x1942fa.querySelectorAll(".blacklist-cancel-btn").forEach(_0x1c913a => {
      _0x1c913a.addEventListener("click", _0x2f2f89 => {
        const _0xd0d498 = parseInt(_0x2f2f89.target.dataset.index);
        this.hideEditForm(_0xd0d498);
      });
    });
    _0x1942fa.querySelectorAll(".blacklist-edit-input").forEach(_0x5d2dba => {
      _0x5d2dba.addEventListener("keypress", _0x15775b => {
        if (_0x15775b.key === "Enter") {
          {
            const _0x496bef = parseInt(_0x15775b.target.closest(".blacklist-item").querySelector(".blacklist-save-btn").dataset.index);
            this.handleSaveEdit(_0x496bef);
          }
        }
      });
    });
  },
  showEditForm(_0x30f9af) {
    const _0xb9cc29 = this.getBlacklist();
    const _0x77302d = _0xb9cc29[_0x30f9af];
    if (!_0x77302d) {
      return;
    }
    const _0x5e2b45 = _0x77302d.partnerIdEncrypted || _0x77302d.userId;
    const _0x32fcfb = document.querySelector(".blacklist-item[data-user-id=\"" + _0x5e2b45 + "\"]");
    if (!_0x32fcfb) {
      return;
    }
    const _0x52571c = _0x32fcfb.querySelector(".blacklist-item-content");
    const _0x13fc1d = _0x32fcfb.querySelector(".blacklist-edit-form");
    const _0x12255f = _0x13fc1d.querySelector(".blacklist-edit-input");
    _0x52571c.style.display = "none";
    _0x13fc1d.style.display = "block";
    const _0x2bbb3f = document.querySelector(".blacklist-footer-actions");
    _0x2bbb3f && _0x2bbb3f.classList.add("hide-on-edit");
    const _0x2716c6 = () => {
      {
        const _0x2f9cf4 = document.getElementById("blacklistList");
        if (!_0x2f9cf4) {
          return;
        }
        const _0x16cf91 = window.visualViewport ? window.visualViewport.height : window.innerHeight;
        const _0x22c93a = _0x12255f.getBoundingClientRect();
        const _0x2f4f0d = _0x2f9cf4.getBoundingClientRect();
        const _0x224324 = _0x22c93a.top - _0x2f4f0d.top + _0x2f9cf4.scrollTop;
        const _0x267d8b = _0x224324 + _0x22c93a.height;
        const _0x3e18b2 = _0x2f9cf4.scrollTop;
        const _0x4775a4 = _0x2f9cf4.scrollTop + _0x16cf91 - 30;
        if (_0x224324 < _0x3e18b2 || _0x267d8b > _0x4775a4) {
          const _0x3b59a9 = _0x224324 - _0x16cf91 / 3;
          _0x2f9cf4.scrollTo({
            top: Math.max(0, _0x3b59a9),
            behavior: "smooth"
          });
        }
      }
    };
    setTimeout(() => {
      _0x2716c6();
      _0x12255f.focus();
      _0x12255f.setSelectionRange ? _0x12255f.setSelectionRange(0, _0x12255f.value.length) : _0x12255f.select();
      if (window.visualViewport) {
        const _0x532ba0 = () => {
          setTimeout(_0x2716c6, 100);
        };
        window.visualViewport.addEventListener("resize", _0x532ba0);
        window.visualViewport.addEventListener("scroll", _0x532ba0);
        _0x12255f._viewportHandlers = _0x532ba0;
      } else {
        const _0x47fd5c = () => {
          setTimeout(_0x2716c6, 100);
        };
        window.addEventListener("resize", _0x47fd5c);
        _0x12255f._resizeHandler = _0x47fd5c;
      }
      const _0x533f24 = () => {
        window.visualViewport && _0x12255f._viewportHandlers && (window.visualViewport.removeEventListener("resize", _0x12255f._viewportHandlers), window.visualViewport.removeEventListener("scroll", _0x12255f._viewportHandlers), delete _0x12255f._viewportHandlers);
        _0x12255f._resizeHandler && (window.removeEventListener("resize", _0x12255f._resizeHandler), delete _0x12255f._resizeHandler);
        _0x12255f.removeEventListener("blur", _0x533f24);
      };
      _0x12255f.addEventListener("blur", _0x533f24);
    }, 100);
  },
  hideEditForm(_0x125805) {
    const _0x487972 = this.getBlacklist();
    const _0x2c5b46 = _0x487972[_0x125805];
    if (!_0x2c5b46) {
      return;
    }
    const _0x276683 = _0x2c5b46.partnerIdEncrypted || _0x2c5b46.userId;
    const _0x1faad0 = document.querySelector(".blacklist-item[data-user-id=\"" + _0x276683 + "\"]");
    if (!_0x1faad0) {
      return;
    }
    const _0x479571 = _0x1faad0.querySelector(".blacklist-item-content");
    const _0x48179b = _0x1faad0.querySelector(".blacklist-edit-form");
    const _0x52aa44 = _0x48179b.querySelector(".blacklist-edit-input");
    window.visualViewport && _0x52aa44._viewportHandlers && (window.visualViewport.removeEventListener("resize", _0x52aa44._viewportHandlers), window.visualViewport.removeEventListener("scroll", _0x52aa44._viewportHandlers), delete _0x52aa44._viewportHandlers);
    _0x52aa44._resizeHandler && (window.removeEventListener("resize", _0x52aa44._resizeHandler), delete _0x52aa44._resizeHandler);
    _0x52aa44.value = _0x2c5b46.remark || "";
    _0x52aa44.blur();
    _0x479571.style.display = "flex";
    _0x48179b.style.display = "none";
    const _0x13bd67 = document.querySelector(".blacklist-footer-actions");
    _0x13bd67 && _0x13bd67.classList.remove("hide-on-edit");
  },
  handleSaveEdit(_0x489eec) {
    const _0x51fb42 = this.getBlacklist();
    const _0x4d3863 = _0x51fb42[_0x489eec];
    if (!_0x4d3863) {
      return;
    }
    const _0x5c9d3f = _0x4d3863.partnerIdEncrypted || _0x4d3863.userId;
    const _0x133989 = document.querySelector(".blacklist-item[data-user-id=\"" + _0x5c9d3f + "\"]");
    if (!_0x133989) {
      return;
    }
    const _0x184036 = _0x133989.querySelector(".blacklist-edit-input");
    const newRemark = _0x184036.value.trim();
    this.updateBlacklistRemark(_0x5c9d3f, newRemark) && this.refreshBlacklistList();
  },
  handleDeleteBlacklist(_0x4a8c05) {
    const _0xf3c20e = this.getBlacklist();
    const _0x1c3b5f = _0xf3c20e[_0x4a8c05];
    if (!_0x1c3b5f) {
      return;
    }
    const _0xfcf0a9 = _0x1c3b5f.partnerIdEncrypted || _0x1c3b5f.userId;
    this.showConfirm({
      title: "确认删除",
      message: "确定要从黑名单中删除此用户吗？",
      info: _0x1c3b5f,
      confirmText: "鍒犻櫎",
      cancelText: "鍙栨秷",
      confirmType: "delete"
    }).then(_0x54f6ee => {
      _0x54f6ee.confirmed && this.removeFromBlacklist(_0xfcf0a9) && this.refreshBlacklistList();
    });
  },
  initialize() {
    if (document.getElementById("floatingBtn")) {
      console.log("鎮诞闈㈡澘宸插瓨鍦紝姝ｅ湪绉婚櫎...");
      document.getElementById("floatingBtn")?.["remove"]();
      document.getElementById("overlay")?.["remove"]();
      document.getElementById("controlPanel")?.["remove"]();
      const _0x554b04 = document.getElementById("floatingPanelStyle");
      if (_0x554b04) {
        _0x554b04.remove();
      }
    }
    const _0x5f38c0 = document.createElement("style");
    _0x5f38c0.id = "floatingPanelStyle";
    _0x5f38c0.textContent = "\n            * {\n                box-sizing: border-box;\n            }\n            \n            .floating-btn {\n                position: fixed;\n                bottom: 300px;\n                right: 30px;\n                width: 56px;\n                height: 56px;\n                background: #1f1f1f;\n                border: 1px solid #2a2a2a;\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: #e5e5e5;\n                font-size: 20px;\n                font-weight: 500;\n                cursor: grab;\n                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);\n                z-index: 10000;\n                user-select: none;\n                transition: box-shadow 0.3s ease, background 0.3s ease;\n                text-align: center;\n                line-height: 1.3;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;\n                backdrop-filter: blur(10px);\n            }\n            \n            .floating-btn:hover {\n                background: #2a2a2a;\n                border-color: #3a3a3a;\n                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);\n            }\n            \n            .floating-btn:active {\n                cursor: grabbing;\n                transform: scale(0.95);\n            }\n            \n            .floating-btn.dragging {\n                cursor: grabbing;\n                transition: none;\n                box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);\n            }\n            \n            .control-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                width: 360px;\n                max-width: 90vw;\n                max-height: 80vh;\n                background: #1a1a1a;\n                border: 1px solid #2a2a2a;\n                backdrop-filter: blur(20px);\n                border-radius: 16px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n                z-index: 9999;\n                display: none;\n                padding: 0;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;\n                overflow: hidden;\n            }\n            \n            .control-panel.show {\n                display: block;\n                animation: panelSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n            }\n            \n            @keyframes panelSlideUp {\n                from {\n                    opacity: 0;\n                    transform: translate(-50%, -50%) scale(0.9);\n                }\n                to {\n                    opacity: 1;\n                    transform: translate(-50%, -50%) scale(1);\n                }\n            }\n            \n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 24px 24px 20px;\n                background: #1f1f1f;\n                color: #e5e5e5;\n                position: relative;\n                border-bottom: 1px solid #2a2a2a;\n            }\n            \n            .panel-title {\n                font-size: 18px;\n                font-weight: 600;\n                letter-spacing: -0.3px;\n                color: #e5e5e5;\n                display: flex;\n                align-items: center;\n                gap: 10px;\n            }\n            \n            .panel-title-badge {\n                display: inline-block;\n                padding: 4px 12px;\n                background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n                color: white;\n                font-size: 12px;\n                font-weight: 700;\n                border-radius: 6px;\n                box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);\n                animation: pulse 2s ease-in-out infinite;\n            }\n            \n            @keyframes pulse {\n                0%, 100% {\n                    opacity: 1;\n                    transform: scale(1);\n                }\n                50% {\n                    opacity: 0.9;\n                    transform: scale(1.02);\n                }\n            }\n            \n            .panel-close {\n                background: #2a2a2a;\n                border: none;\n                width: 32px;\n                height: 32px;\n                border-radius: 8px;\n                font-size: 20px;\n                cursor: pointer;\n                color: #9ca3af;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s ease;\n                padding: 0;\n                line-height: 1;\n            }\n            \n            .panel-close:hover {\n                background: #3a3a3a;\n                color: #e5e5e5;\n                transform: rotate(90deg);\n            }\n            \n            .panel-body {\n                padding: 20px 24px 24px;\n                max-height: 70vh;\n                overflow-y: auto;\n                background: #1a1a1a;\n            }\n            \n            .panel-body::-webkit-scrollbar {\n                width: 6px;\n            }\n            \n            .panel-body::-webkit-scrollbar-track {\n                background: transparent;\n            }\n            \n            .panel-body::-webkit-scrollbar-thumb {\n                background: #3a3a3a;\n                border-radius: 3px;\n            }\n            \n            .panel-body::-webkit-scrollbar-thumb:hover {\n                background: #4a4a4a;\n            }\n            \n            .list-block {\n                margin: 0;\n            }\n            \n            .list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .list-block li {\n                margin-bottom: 12px;\n            }\n            \n            .list-block li:last-child {\n                margin-bottom: 0;\n            }\n            \n            .item-content {\n                display: flex;\n                align-items: center;\n                padding: 16px;\n                background: #1f1f1f;\n                border-radius: 12px;\n                transition: all 0.2s ease;\n                border: 1px solid #2a2a2a;\n            }\n            \n            .item-content:hover {\n                background: #252525;\n                border-color: #3a3a3a;\n            }\n            \n            .item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                gap: 16px;\n            }\n            \n            .item-title {\n                font-size: 15px;\n                color: #e5e5e5;\n                font-weight: 500;\n                flex: 1;\n                letter-spacing: -0.2px;\n            }\n            \n            .item-input {\n                flex-shrink: 0;\n                display: flex;\n                align-items: center;\n            }\n            \n            .label-switch {\n                position: relative;\n                display: inline-block;\n            }\n            \n            .label-switch input {\n                display: none;\n            }\n            \n            .checkbox {\n                width: 48px;\n                height: 28px;\n                background: #2a2a2a;\n                border-radius: 14px;\n                position: relative;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                cursor: pointer;\n            }\n            \n            .checkbox:before {\n                content: '';\n                position: absolute;\n                width: 24px;\n                height: 24px;\n                background: #4a4a4a;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n            }\n            \n            input:checked + .checkbox {\n                background: #3b82f6;\n            }\n            \n            input:checked + .checkbox:before {\n                background: #ffffff;\n                transform: translateX(20px);\n            }\n            \n            .action-btn {\n                background: #3b82f6;\n                color: white;\n                padding: 10px 20px;\n                border-radius: 10px;\n                text-align: center;\n                cursor: pointer;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                font-size: 14px;\n                font-weight: 500;\n                border: none;\n                width: 100%;\n                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n                letter-spacing: -0.2px;\n            }\n            \n            .action-btn:hover {\n                background: #2563eb;\n                transform: translateY(-2px);\n                box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n            }\n            \n            .action-btn:active {\n                transform: translateY(0);\n            }\n            \n            .action-btn.sending {\n                background: #4a4a4a;\n                cursor: not-allowed;\n                box-shadow: none;\n            }\n            \n            .action-btn.sending:hover {\n                transform: none;\n                background: #4a4a4a;\n            }\n            \n            .action-btn.danger {\n                background: #ef4444;\n                box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n            }\n            \n            .action-btn.danger:hover {\n                background: #dc2626;\n                box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);\n            }\n            \n            .action-btn.secondary {\n                background: #6b7280;\n                box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);\n            }\n            \n            .action-btn.secondary:hover {\n                background: #4b5563;\n                box-shadow: 0 6px 20px rgba(107, 114, 128, 0.4);\n            }\n            \n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.6);\n                backdrop-filter: blur(4px);\n                z-index: 9998;\n                display: none;\n                animation: fadeIn 0.3s ease;\n            }\n            \n            .overlay.show {\n                display: block;\n            }\n            \n            @keyframes fadeIn {\n                from {\n                    opacity: 0;\n                }\n                to {\n                    opacity: 1;\n                }\n            }\n            \n            /* Toast 样寮廫x20*/\n            .toast-container {\n                position: fixed;\n                top: 24px;\n                right: 24px;\n                z-index: 10005;\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n            }\n            \n            .toast {\n                background: #1f1f1f;\n                backdrop-filter: blur(20px);\n                color: #e5e5e5;\n                padding: 14px 20px;\n                border-radius: 12px;\n                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n                font-size: 14px;\n                max-width: 320px;\n                animation: toastSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                font-weight: 500;\n                border: 1px solid #2a2a2a;\n            }\n            \n            .toast.success {\n                background: #1f1f1f;\n                border-color: #10b981;\n            }\n            \n            .toast.error {\n                background: #1f1f1f;\n                border-color: #ef4444;\n            }\n            \n            .toast.warning {\n                background: #1f1f1f;\n                border-color: #f59e0b;\n            }\n            \n            .toast.info {\n                background: #1f1f1f;\n                border-color: #3b82f6;\n            }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s ease forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from {\n                    opacity: 0;\n                    transform: translateX(120px) scale(0.9);\n                }\n                to {\n                    opacity: 1;\n                    transform: translateX(0) scale(1);\n                }\n            }\n            \n            @keyframes toastSlideOut {\n                from {\n                    opacity: 1;\n                    transform: translateX(0) scale(1);\n                }\n                to {\n                    opacity: 0;\n                    transform: translateX(120px) scale(0.9);\n                }\n            }\n            \n            .toast-icon {\n                font-size: 18px;\n                flex-shrink: 0;\n            }\n            \n            .panel-footer {\n                padding: 16px 24px;\n                border-top: 1px solid #2a2a2a;\n                background: #1f1f1f;\n                text-align: center;\n            }\n            \n            .panel-footer-text {\n                font-size: 12px;\n                color: #6b7280;\n                letter-spacing: -0.1px;\n            }\n            \n            /* 自定义确认对话框样寮廫x20*/\n            .confirm-overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.7);\n                backdrop-filter: blur(4px);\n                z-index: 10004;\n                display: none;\n                align-items: center;\n                justify-content: center;\n                animation: fadeIn 0.3s ease;\n            }\n            \n            .confirm-overlay.show {\n                display: flex;\n            }\n            \n            .confirm-dialog {\n                background: #1a1a1a;\n                border: 1px solid #2a2a2a;\n                border-radius: 16px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n                width: 420px;\n                max-width: 90vw;\n                max-height: 80vh;\n                overflow: hidden;\n                animation: confirmSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;\n            }\n            \n            @keyframes confirmSlideIn {\n                from {\n                    opacity: 0;\n                    transform: scale(0.9) translateY(-20px);\n                }\n                to {\n                    opacity: 1;\n                    transform: scale(1) translateY(0);\n                }\n            }\n            \n            .confirm-header {\n                padding: 24px 24px 20px;\n                background: #1f1f1f;\n                border-bottom: 1px solid #2a2a2a;\n            }\n            \n            .confirm-title {\n                font-size: 18px;\n                font-weight: 600;\n                color: #e5e5e5;\n                letter-spacing: -0.3px;\n            }\n            \n            .confirm-body {\n                padding: 24px;\n                max-height: 60vh;\n                overflow-y: auto;\n            }\n            \n            .confirm-body::-webkit-scrollbar {\n                width: 6px;\n            }\n            \n            .confirm-body::-webkit-scrollbar-track {\n                background: transparent;\n            }\n            \n            .confirm-body::-webkit-scrollbar-thumb {\n                background: #3a3a3a;\n                border-radius: 3px;\n            }\n            \n            .confirm-body::-webkit-scrollbar-thumb:hover {\n                background: #4a4a4a;\n            }\n            \n            .confirm-message {\n                font-size: 15px;\n                color: #e5e5e5;\n                line-height: 1.6;\n                margin-bottom: 20px;\n                white-space: pre-line;\n            }\n            \n            .confirm-info {\n                background: #1f1f1f;\n                border: 1px solid #2a2a2a;\n                border-radius: 12px;\n                padding: 16px;\n                margin-bottom: 20px;\n            }\n            \n            .confirm-info-item {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 8px 0;\n                border-bottom: 1px solid #2a2a2a;\n            }\n            \n            .confirm-info-item:last-child {\n                border-bottom: none;\n            }\n            \n            .confirm-info-label {\n                font-size: 14px;\n                color: #9ca3af;\n            }\n            \n            .confirm-info-value {\n                font-size: 14px;\n                color: #e5e5e5;\n                font-weight: 500;\n                text-align: right;\n            }\n            \n            .confirm-info-vip {\n                display: inline-block;\n                padding: 2px 8px;\n                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n                color: white;\n                font-size: 11px;\n                font-weight: 600;\n                border-radius: 4px;\n                margin-left: 8px;\n            }\n            \n            .confirm-remark {\n                margin-top: 12px;\n                display: flex;\n                flex-direction: column;\n                gap: 6px;\n            }\n            \n            .confirm-remark-label {\n                font-size: 13px;\n                color: #9ca3af;\n            }\n            \n            .confirm-remark-input {\n                width: 100%;\n                padding: 10px 12px;\n                background: #1a1a1a;\n                border: 1px solid #2a2a2a;\n                border-radius: 10px;\n                color: #e5e5e5;\n                font-size: 14px;\n            }\n            \n            .confirm-remark-input:focus {\n                outline: none;\n                border-color: #3b82f6;\n                background: #252525;\n            }\n            \n            /* 导入对话框文本区域 */\n            .import-dialog {\n                width: 500px;\n                max-width: 95vw;\n            }\n            \n            .import-textarea {\n                width: 100%;\n                min-height: 200px;\n                max-height: 400px;\n                padding: 12px 16px;\n                background: #1a1a1a;\n                border: 1px solid #2a2a2a;\n                border-radius: 10px;\n                color: #e5e5e5;\n                font-size: 14px;\n                font-family: 'Consolas', 'Monaco', 'Courier New', monospace;\n                line-height: 1.6;\n                resize: vertical;\n                box-sizing: border-box;\n                -webkit-appearance: none;\n                appearance: none;\n            }\n            \n            .import-textarea:focus {\n                outline: none;\n                border-color: #3b82f6;\n                background: #252525;\n            }\n            \n            .import-textarea::placeholder {\n                color: #6b7280;\n            }\n            \n            .confirm-footer {\n                padding: 16px 24px 24px;\n                display: flex;\n                gap: 12px;\n                justify-content: flex-end;\n            }\n            \n            .confirm-btn {\n                padding: 10px 20px;\n                border: none;\n                border-radius: 12px;\n                font-size: 14px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                min-width: 96px;\n                letter-spacing: 0.2px;\n            }\n            \n            .confirm-btn-cancel {\n                background: #2a2a2a;\n                color: #9ca3af;\n            }\n            \n            .confirm-btn-cancel:hover {\n                background: #3a3a3a;\n                color: #e5e5e5;\n            }\n            \n            /* 主操作按钮：红色渐变，醒目 */\n            .confirm-btn-confirm,\n            .confirm-btn-danger,\n            .confirm-btn-delete {\n                background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);\n                color: white;\n                box-shadow: 0 8px 24px rgba(239, 68, 68, 0.35);\n                border: 1px solid rgba(255, 255, 255, 0.06);\n            }\n            \n            .confirm-btn-confirm:hover,\n            .confirm-btn-danger:hover,\n            .confirm-btn-delete:hover {\n                background: linear-gradient(135deg, #f87171 0%, #dc2626 100%);\n                transform: translateY(-1px);\n                box-shadow: 0 10px 28px rgba(239, 68, 68, 0.45);\n            }\n            \n            .confirm-btn-confirm:active,\n            .confirm-btn-danger:active,\n            .confirm-btn-delete:active {\n                transform: translateY(0);\n                box-shadow: 0 6px 18px rgba(239, 68, 68, 0.35);\n            }\n            \n            /* 瀵煎叆鎸夐挳锛氳摑鑹叉笎鍙 ，醒目 */\n            .confirm-btn-primary {\n                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);\n                color: white;\n                box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);\n                border: 1px solid rgba(255, 255, 255, 0.1);\n                font-weight: 700;\n            }\n            \n            .confirm-btn-primary:hover {\n                background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);\n                transform: translateY(-1px);\n                box-shadow: 0 12px 32px rgba(59, 130, 246, 0.5);\n            }\n            \n            .confirm-btn-primary:active {\n                transform: translateY(0);\n                box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);\n            }\n            \n            /* 榛戝悕鍗曠鐞嗛潰鏉 鏍峰紡 */\n            .blacklist-overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.7);\n                backdrop-filter: blur(4px);\n                z-index: 10002;\n                display: none;\n                animation: fadeIn 0.3s ease;\n            }\n            \n            .blacklist-overlay.show {\n                display: block;\n            }\n            \n            .blacklist-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.95);\n                width: 600px;\n                max-width: 90vw;\n                max-height: 80vh;\n                background: #1a1a1a;\n                border: 1px solid #2a2a2a;\n                border-radius: 16px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);\n                z-index: 10003;\n                display: none;\n                overflow: hidden;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;\n            }\n            \n            .blacklist-panel.show {\n                display: block;\n                animation: blacklistPanelSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n            }\n            \n            @keyframes blacklistPanelSlide {\n                from {\n                    opacity: 0;\n                    transform: translate(-50%, -50%) scale(0.9);\n                }\n                to {\n                    opacity: 1;\n                    transform: translate(-50%, -50%) scale(1);\n                }\n            }\n            \n            .blacklist-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 24px;\n                background: #1f1f1f;\n                border-bottom: 1px solid #2a2a2a;\n            }\n            \n            .blacklist-header-actions {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                flex-wrap: wrap;\n            }\n            \n            .blacklist-count {\n                padding: 6px 10px;\n                background: #2a2a2a;\n                color: #e5e5e5;\n                border-radius: 8px;\n                font-size: 13px;\n                border: 1px solid #3a3a3a;\n            }\n            \n            .blacklist-clear-btn {\n                padding: 6px 14px;\n                border: none;\n                border-radius: 8px;\n                font-size: 13px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.2s ease;\n                background: #ef4444;\n                color: white;\n                box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n            }\n            \n            .blacklist-clear-btn:hover {\n                background: #dc2626;\n                box-shadow: 0 6px 18px rgba(239, 68, 68, 0.4);\n                transform: translateY(-1px);\n            }\n            \n            .blacklist-title {\n                font-size: 20px;\n                font-weight: 600;\n                color: #e5e5e5;\n                letter-spacing: -0.3px;\n            }\n            \n            .blacklist-header-actions {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            \n            .blacklist-import-btn,\n            .blacklist-export-btn {\n                padding: 6px 14px;\n                border: none;\n                border-radius: 8px;\n                font-size: 13px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.2s ease;\n                background: #2a2a2a;\n                color: #e5e5e5;\n            }\n            \n            .blacklist-import-btn:hover {\n                background: #3b82f6;\n                color: white;\n            }\n            \n            .blacklist-export-btn:hover {\n                background: #10b981;\n                color: white;\n            }\n            \n            .blacklist-close {\n                background: #2a2a2a;\n                border: none;\n                width: 32px;\n                height: 32px;\n                border-radius: 8px;\n                font-size: 20px;\n                cursor: pointer;\n                color: #9ca3af;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s ease;\n                padding: 0;\n                line-height: 1;\n            }\n            \n            .blacklist-close:hover {\n                background: #3a3a3a;\n                color: #e5e5e5;\n                transform: rotate(90deg);\n            }\n            \n            .blacklist-body {\n                padding: 24px;\n                max-height: calc(80vh - 80px);\n                display: flex;\n                flex-direction: column;\n                overflow: hidden;\n            }\n            \n            .blacklist-list {\n                flex: 1;\n                overflow-y: auto;\n                min-height: 0;\n            }\n            \n            .blacklist-list::-webkit-scrollbar {\n                width: 6px;\n            }\n            \n            .blacklist-list::-webkit-scrollbar-track {\n                background: transparent;\n            }\n            \n            .blacklist-list::-webkit-scrollbar-thumb {\n                background: #3a3a3a;\n                border-radius: 3px;\n            }\n            \n            .blacklist-list::-webkit-scrollbar-thumb:hover {\n                background: #4a4a4a;\n            }\n            \n            .blacklist-toolbar {\n                display: flex;\n                gap: 12px;\n                margin-bottom: 20px;\n                flex-wrap: wrap;\n            }\n            \n            .blacklist-current {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                background: #1f1f1f;\n                border: 1px solid #2a2a2a;\n                border-radius: 10px;\n                padding: 10px 12px;\n                flex-shrink: 0;\n            }\n            \n            .blacklist-current-label {\n                font-size: 12px;\n                color: #9ca3af;\n                white-space: nowrap;\n            }\n            \n            .blacklist-current-value {\n                font-size: 13px;\n                color: #e5e5e5;\n                font-weight: 600;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                flex: 1;\n                min-width: 0;\n            }\n            \n            .blacklist-input {\n                flex: 1;\n                min-width: 150px;\n                padding: 10px 14px;\n                background: #1f1f1f;\n                border: 1px solid #2a2a2a;\n                border-radius: 10px;\n                color: #e5e5e5;\n                font-size: 14px;\n                transition: all 0.2s ease;\n                font-family: inherit;\n            }\n            \n            .blacklist-input:focus {\n                outline: none;\n                border-color: #3b82f6;\n                background: #252525;\n            }\n            \n            .blacklist-input::placeholder {\n                color: #6b7280;\n            }\n            \n            .blacklist-add-btn {\n                padding: 10px 20px;\n                background: #3b82f6;\n                color: white;\n                border: none;\n                border-radius: 10px;\n                font-size: 14px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.3s ease;\n                white-space: nowrap;\n            }\n            \n            .blacklist-add-btn:hover {\n                background: #2563eb;\n                transform: translateY(-1px);\n            }\n            \n            .blacklist-list {\n                display: flex;\n                flex-direction: column;\n                gap: 12px;\n            }\n            \n            .blacklist-empty {\n                text-align: center;\n                padding: 60px 20px;\n                color: #6b7280;\n            }\n            \n            .blacklist-empty-text {\n                font-size: 14px;\n            }\n            \n            .blacklist-item {\n                background: #1f1f1f;\n                border: 1px solid #2a2a2a;\n                border-radius: 12px;\n                padding: 16px;\n                transition: all 0.2s ease;\n            }\n            \n            .blacklist-item:hover {\n                background: #252525;\n                border-color: #3a3a3a;\n            }\n            \n            .blacklist-item-content {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                gap: 16px;\n            }\n            \n            .blacklist-item-info {\n                flex: 1;\n                min-width: 0;\n            }\n            \n            .blacklist-item-header {\n                display: flex;\n                align-items: center;\n                gap: 8px;\n                margin-bottom: 8px;\n            }\n            \n            .blacklist-item-id {\n                font-size: 15px;\n                font-weight: 600;\n                color: #e5e5e5;\n                word-break: break-all;\n                flex: 1;\n            }\n            \n            .blacklist-vip-badge {\n                display: inline-block;\n                padding: 2px 8px;\n                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n                color: white;\n                font-size: 11px;\n                font-weight: 600;\n                border-radius: 4px;\n                margin-left: 6px;\n                letter-spacing: 0.5px;\n                box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n            }\n            \n            .blacklist-item-details {\n                display: flex;\n                gap: 12px;\n                margin-bottom: 8px;\n                flex-wrap: wrap;\n            }\n            \n            .blacklist-item-detail {\n                font-size: 13px;\n                color: #9ca3af;\n                padding: 4px 8px;\n                background: #2a2a2a;\n                border-radius: 6px;\n            }\n            \n            .blacklist-item-remark {\n                font-size: 13px;\n                color: #9ca3af;\n                margin-bottom: 4px;\n            }\n            \n            .blacklist-item-time {\n                font-size: 12px;\n                color: #6b7280;\n            }\n            \n            .blacklist-item-actions {\n                display: flex;\n                gap: 8px;\n                flex-shrink: 0;\n            }\n            \n            .blacklist-edit-btn,\n            .blacklist-delete-btn {\n                padding: 6px 14px;\n                border: none;\n                border-radius: 8px;\n                font-size: 13px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.2s ease;\n            }\n            \n            .blacklist-edit-btn {\n                background: #3b82f6;\n                color: white;\n            }\n            \n            .blacklist-edit-btn:hover {\n                background: #2563eb;\n            }\n            \n            .blacklist-delete-btn {\n                background: #ef4444;\n                color: white;\n            }\n            \n            .blacklist-delete-btn:hover {\n                background: #dc2626;\n            }\n            \n            .blacklist-edit-form {\n                margin-top: 12px;\n                padding-top: 12px;\n                border-top: 1px solid #2a2a2a;\n                width: 100%;\n                box-sizing: border-box;\n            }\n            \n            .blacklist-edit-input {\n                width: 100%;\n                padding: 10px 14px;\n                background: #1a1a1a;\n                border: 1px solid #2a2a2a;\n                border-radius: 10px;\n                color: #e5e5e5;\n                font-size: 14px;\n                margin-bottom: 12px;\n                font-family: inherit;\n                box-sizing: border-box;\n                -webkit-appearance: none;\n                appearance: none;\n            }\n            \n            .blacklist-edit-input:focus {\n                outline: none;\n                border-color: #3b82f6;\n                background: #252525;\n            }\n            \n            .blacklist-edit-actions {\n                display: flex;\n                gap: 8px;\n                justify-content: flex-end;\n                width: 100%;\n            }\n            \n            .blacklist-save-btn,\n            .blacklist-cancel-btn {\n                padding: 6px 14px;\n                border: none;\n                border-radius: 8px;\n                font-size: 13px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.2s ease;\n            }\n            \n            .blacklist-save-btn {\n                background: #3b82f6;\n                color: white;\n            }\n            \n            .blacklist-save-btn:hover {\n                background: #2563eb;\n            }\n            \n            .blacklist-cancel-btn {\n                background: #2a2a2a;\n                color: #9ca3af;\n            }\n            \n            .blacklist-cancel-btn:hover {\n                background: #3a3a3a;\n                color: #e5e5e5;\n            }\n            \n            .blacklist-footer-actions {\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n                padding-top: 16px;\n                margin-top: 16px;\n                border-top: 1px solid #2a2a2a;\n                position: sticky;\n                bottom: 0;\n                background: #1a1a1a;\n                z-index: 1;\n                transition: opacity 0.2s ease, transform 0.2s ease;\n            }\n            \n            .blacklist-footer-actions.hide-on-edit {\n                display: none;\n            }\n            \n            .blacklist-footer-actions .blacklist-clear-btn {\n                width: 100%;\n                padding: 10px 16px;\n                font-size: 14px;\n                font-weight: 500;\n            }\n            \n            .blacklist-import-export-group {\n                display: flex;\n                gap: 10px;\n                width: 100%;\n            }\n            \n            .blacklist-footer-actions .blacklist-import-btn,\n            .blacklist-footer-actions .blacklist-export-btn {\n                flex: 1;\n                padding: 10px 16px;\n                font-size: 14px;\n                font-weight: 500;\n            }\n            \n            /* 移动端优化 */\n            @media (max-width: 768px) {\n                /* 鎮诞鎸夐挳 */\n                .floating-btn {\n                    width: 48px;\n                    height: 48px;\n                    bottom: 30px;\n                    right: 20px;\n                    font-size: 18px;\n                }\n                \n                /* 控制面板 */\n                .control-panel {\n                    width: calc(100vw - 40px);\n                    max-width: 400px;\n                    top: 50%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    right: auto;\n                    bottom: auto;\n                    margin: 0;\n                    border-radius: 12px;\n                }\n                \n                .panel-header {\n                    padding: 16px 16px 12px;\n                }\n                \n                .panel-title {\n                    font-size: 16px;\n                    flex-wrap: wrap;\n                    gap: 6px;\n                }\n                \n                .panel-title-badge {\n                    font-size: 10px;\n                    padding: 3px 8px;\n                }\n                \n                .panel-body {\n                    padding: 16px;\n                }\n                \n                .item-content {\n                    padding: 12px;\n                    margin-bottom: 8px;\n                }\n                \n                .item-title {\n                    font-size: 14px;\n                }\n                \n                .action-btn {\n                    padding: 8px 16px;\n                    font-size: 13px;\n                }\n                \n                .panel-footer {\n                    padding: 12px 16px;\n                }\n                \n                .panel-footer-text {\n                    font-size: 11px;\n                }\n                \n                /* Toast */\n                .toast-container {\n                    top: 16px;\n                    right: 16px;\n                    left: 16px;\n                    max-width: calc(100vw - 32px);\n                }\n                \n                .toast {\n                    padding: 12px 16px;\n                    font-size: 13px;\n                    max-width: 100%;\n                }\n                \n                /* 确认对话框 */\n                .confirm-dialog {\n                    width: calc(100vw - 40px);\n                    max-width: 400px;\n                    border-radius: 12px;\n                }\n                \n                .confirm-header {\n                    padding: 20px 20px 16px;\n                }\n                \n                .confirm-title {\n                    font-size: 16px;\n                }\n                \n                .confirm-body {\n                    padding: 20px;\n                }\n                \n                .confirm-message {\n                    font-size: 14px;\n                    margin-bottom: 16px;\n                }\n                \n                .confirm-info {\n                    padding: 12px;\n                    margin-bottom: 16px;\n                }\n                \n                .confirm-info-item {\n                    padding: 6px 0;\n                }\n                \n                .confirm-info-label,\n                .confirm-info-value {\n                    font-size: 13px;\n                }\n                \n                .confirm-footer {\n                    padding: 12px 20px 20px;\n                    flex-direction: column;\n                    gap: 8px;\n                }\n                \n                .confirm-btn {\n                    width: 100%;\n                    padding: 12px 20px;\n                    font-size: 14px;\n                }\n                \n                /* 导入对话框移动端优化 */\n                .import-dialog {\n                    width: calc(100vw - 40px);\n                    max-width: 500px;\n                }\n                \n                .import-textarea {\n                    min-height: 250px;\n                    max-height: 50vh;\n                    font-size: 16px; /* 移动端浣跨敤16px閬垮厤鑷姩缩放 */\n                    padding: 14px 16px;\n                }\n                \n                /* 榛戝悕鍗曢潰鏉縗x20*/\n                .blacklist-panel {\n                    width: calc(100vw - 40px);\n                    max-width: 500px;\n                    border-radius: 12px;\n                }\n                \n                .blacklist-header {\n                    padding: 20px 20px 16px;\n                }\n                \n                .blacklist-title {\n                    font-size: 18px;\n                }\n                \n                .blacklist-header-actions {\n                    gap: 6px;\n                }\n                \n                .blacklist-import-btn,\n                .blacklist-export-btn {\n                    padding: 5px 10px;\n                    font-size: 12px;\n                }\n                \n                .blacklist-close {\n                    width: 28px;\n                    height: 28px;\n                    font-size: 18px;\n                }\n                \n                .blacklist-body {\n                    padding: 20px;\n                }\n                \n                .blacklist-toolbar {\n                    flex-direction: column;\n                    gap: 10px;\n                    margin-bottom: 16px;\n                }\n                \n                .blacklist-input {\n                    width: 100%;\n                    padding: 10px 12px;\n                    font-size: 14px;\n                }\n                \n                .blacklist-add-btn {\n                    width: 100%;\n                    padding: 10px 16px;\n                    font-size: 14px;\n                }\n                \n                .blacklist-current {\n                    padding: 8px 10px;\n                    margin-bottom: 12px;\n                    gap: 8px;\n                }\n                \n                .blacklist-current-label {\n                    font-size: 11px;\n                }\n                \n                .blacklist-current-value {\n                    font-size: 12px;\n                }\n                \n                .blacklist-count {\n                    font-size: 12px;\n                    padding: 4px 8px;\n                }\n                \n                .blacklist-item {\n                    padding: 12px;\n                    margin-bottom: 10px;\n                    position: relative;\n                    overflow: visible;\n                }\n                \n                .blacklist-item-content {\n                    flex-direction: column;\n                    align-items: flex-start;\n                    gap: 12px;\n                    width: 100%;\n                }\n                \n                .blacklist-item-header {\n                    width: 100%;\n                    margin-bottom: 6px;\n                }\n                \n                .blacklist-item-id {\n                    font-size: 14px;\n                }\n                \n                .blacklist-item-details {\n                    gap: 8px;\n                    margin-bottom: 6px;\n                }\n                \n                .blacklist-item-detail {\n                    font-size: 12px;\n                    padding: 3px 6px;\n                }\n                \n                .blacklist-item-remark {\n                    font-size: 12px;\n                    margin-bottom: 4px;\n                }\n                \n                .blacklist-item-time {\n                    font-size: 11px;\n                }\n                \n                .blacklist-item-actions {\n                    width: 100%;\n                    justify-content: flex-end;\n                    gap: 6px;\n                }\n                \n                .blacklist-edit-btn,\n                .blacklist-delete-btn {\n                    padding: 6px 12px;\n                    font-size: 12px;\n                    flex: 1;\n                }\n                \n                .blacklist-edit-form {\n                    margin-top: 12px;\n                    padding-top: 12px;\n                    width: 100%;\n                    box-sizing: border-box;\n                }\n                \n                .blacklist-edit-input {\n                    padding: 12px 14px;\n                    font-size: 16px; /* 移动端使用16px避免自动缩放 */\n                    margin-bottom: 12px;\n                    width: 100%;\n                    box-sizing: border-box;\n                    -webkit-appearance: none;\n                    appearance: none;\n                }\n                \n                .blacklist-edit-actions {\n                    gap: 8px;\n                    width: 100%;\n                }\n                \n                .blacklist-save-btn,\n                .blacklist-cancel-btn {\n                    padding: 10px 16px;\n                    font-size: 14px;\n                    flex: 1;\n                    min-height: 44px; /* 移动绔渶灏忚Е鎽稿尯鍩焅x20*/\n                }\n                \n                .blacklist-footer-actions {\n                    gap: 8px;\n                    padding-top: 12px;\n                    margin-top: 12px;\n                }\n                \n                .blacklist-footer-actions .blacklist-clear-btn {\n                    width: 100%;\n                    padding: 10px 14px;\n                    font-size: 13px;\n                }\n                \n                .blacklist-import-export-group {\n                    width: 100%;\n                }\n                \n                .blacklist-footer-actions .blacklist-import-btn,\n                .blacklist-footer-actions .blacklist-export-btn {\n                    padding: 10px 14px;\n                    font-size: 13px;\n                }\n            }\n        ";
    document.head.appendChild(_0x5f38c0);
    const _0x5035ea = document.createElement("div");
    _0x5035ea.className = "floating-btn";
    _0x5035ea.id = "floatingBtn";
    _0x5035ea.innerHTML = "鈿欙笍";
    _0x5035ea.title = "控制面板";
    _0x5035ea.style.top = "608.388px";
    _0x5035ea.style.left = "288.8px";
    _0x5035ea.style.right = "auto";
    _0x5035ea.style.bottom = "auto";
    const _0xbf2e65 = document.createElement("div");
    _0xbf2e65.className = "overlay";
    _0xbf2e65.id = "overlay";
    const _0x12b39d = document.createElement("div");
    _0x12b39d.className = "control-panel";
    _0x12b39d.id = "controlPanel";
    _0x12b39d.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">\n                    <span>鎺у埗闈㈡澘</span>\n                    <span class=\"panel-title-badge\">鉁揬x20宸茶嚜鍔ㄥ幓闄ら儴鍒嗗箍鍛 </span>\n                </div>\n                <button class=\"panel-close\" id=\"panelClose\">脳</button>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"list-block\">\n                    <ul>\n                        <li>\n                            <div class=\"item-content\">\n                                <div class=\"item-inner\">\n                                    <div class=\"item-title\">鑴氭湰启动</div>\n                                    <div class=\"item-input\">\n                                        <label class=\"label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                            <div class=\"checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        \n                        <li>\n                            <div class=\"item-content\">\n                                <div class=\"item-inner\">\n                                    <div class=\"item-title\" id=\"txt_match\">仅女生</div>\n                                    <div class=\"item-input\">\n                                        <label class=\"label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                            <div class=\"checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        \n                        <li>\n                            <div class=\"item-content\">\n                                <div class=\"item-inner\">\n                                    <div class=\"item-title\">鍙 閫佽仈绯绘柟寮 </div>\n                                    <div class=\"item-input\">\n                                        <button class=\"action-btn\" id=\"btn_contact\">鍙戦€ </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        \n                        <li>\n                            <div class=\"item-content\">\n                                <div class=\"item-inner\">\n                                    <div class=\"item-title\">拉黑对方</div>\n                                    <div class=\"item-input\">\n                                        <button class=\"action-btn danger\" id=\"btn_block\">鎷夐粦</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                        \n                        <li>\n                            <div class=\"item-content\">\n                                <div class=\"item-inner\">\n                                    <div class=\"item-title\">管理黑名单</div>\n                                    <div class=\"item-input\">\n                                        <button class=\"action-btn secondary\" id=\"btn_blacklist\">绠＄悊</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"panel-footer\">\n                <div class=\"panel-footer-text\">听说 by 2025.10.13</div>\n            </div>\n        ";
    const _0x33c855 = document.createElement("div");
    _0x33c855.className = "toast-container";
    _0x33c855.id = "toastContainer";
    document.body.appendChild(_0x5035ea);
    document.body.appendChild(_0xbf2e65);
    document.body.appendChild(_0x12b39d);
    document.body.appendChild(_0x33c855);
    function _0x319044() {
      _0x12b39d.classList.toggle("show");
      _0xbf2e65.classList.toggle("show");
    }
    function _0x3e961c() {
      {
        _0x12b39d.classList.remove("show");
        _0xbf2e65.classList.remove("show");
      }
    }
    let _0x4948b4 = false;
    let _0x174d8d = 0;
    let _0x10d92d = 0;
    let _0x47b4cd = 0;
    let _0x168ba2 = 0;
    let _0x31f3e = false;
    const _0x355684 = 5;
    _0x5035ea.addEventListener("mousedown", function (_0xc6e87d) {
      {
        _0x4948b4 = true;
        _0x31f3e = false;
        _0x5035ea.classList.add("dragging");
        _0x174d8d = _0xc6e87d.clientX;
        _0x10d92d = _0xc6e87d.clientY;
        const _0x320bc3 = _0x5035ea.getBoundingClientRect();
        _0x47b4cd = _0xc6e87d.clientX - _0x320bc3.left;
        _0x168ba2 = _0xc6e87d.clientY - _0x320bc3.top;
        _0xc6e87d.preventDefault();
      }
    });
    document.addEventListener("mousemove", function (_0x232173) {
      {
        if (!_0x4948b4) {
          return;
        }
        const _0x23fa97 = Math.abs(_0x232173.clientX - _0x174d8d);
        const _0x4616e6 = Math.abs(_0x232173.clientY - _0x10d92d);
        const _0x469e90 = Math.sqrt(_0x23fa97 * _0x23fa97 + _0x4616e6 * _0x4616e6);
        if (_0x469e90 > _0x355684) {
          _0x31f3e = true;
          const _0x14c35f = _0x232173.clientX - _0x47b4cd;
          const _0xcc1acc = _0x232173.clientY - _0x168ba2;
          const maxX = window.innerWidth - _0x5035ea.offsetWidth;
          const maxY = window.innerHeight - _0x5035ea.offsetHeight;
          const _0x116229 = Math.max(0, Math.min(_0x14c35f, maxX));
          const _0x3924fd = Math.max(0, Math.min(_0xcc1acc, maxY));
          _0x5035ea.style.left = _0x116229 + "px";
          _0x5035ea.style.top = _0x3924fd + "px";
          _0x5035ea.style.right = "auto";
          _0x5035ea.style.bottom = "auto";
        }
        _0x232173.preventDefault();
      }
    });
    document.addEventListener("mouseup", function (_0x32cf39) {
      _0x4948b4 && (_0x4948b4 = false, _0x5035ea.classList.remove("dragging"), !_0x31f3e && _0x319044());
    });
    _0x5035ea.addEventListener("touchstart", function (_0x3d91f3) {
      _0x4948b4 = true;
      _0x31f3e = false;
      _0x5035ea.classList.add("dragging");
      const _0x2313a9 = _0x3d91f3.touches[0];
      _0x174d8d = _0x2313a9.clientX;
      _0x10d92d = _0x2313a9.clientY;
      const _0x1a2ddf = _0x5035ea.getBoundingClientRect();
      _0x47b4cd = _0x2313a9.clientX - _0x1a2ddf.left;
      _0x168ba2 = _0x2313a9.clientY - _0x1a2ddf.top;
      _0x3d91f3.preventDefault();
    }, {
      passive: false
    });
    document.addEventListener("touchmove", function (_0x47dd99) {
      if (!_0x4948b4) {
        return;
      }
      const _0x42198e = _0x47dd99.touches[0];
      const _0x51e0f9 = Math.abs(_0x42198e.clientX - _0x174d8d);
      const _0x534f0e = Math.abs(_0x42198e.clientY - _0x10d92d);
      const _0x59e8dd = Math.sqrt(_0x51e0f9 * _0x51e0f9 + _0x534f0e * _0x534f0e);
      if (_0x59e8dd > _0x355684) {
        _0x31f3e = true;
        const _0x71ad02 = _0x42198e.clientX - _0x47b4cd;
        const _0x2385c8 = _0x42198e.clientY - _0x168ba2;
        const maxX = window.innerWidth - _0x5035ea.offsetWidth;
        const maxY = window.innerHeight - _0x5035ea.offsetHeight;
        const _0x136b98 = Math.max(0, Math.min(_0x71ad02, maxX));
        const _0x583c6b = Math.max(0, Math.min(_0x2385c8, maxY));
        _0x5035ea.style.left = _0x136b98 + "px";
        _0x5035ea.style.top = _0x583c6b + "px";
        _0x5035ea.style.right = "auto";
        _0x5035ea.style.bottom = "auto";
        _0x47dd99.preventDefault();
      }
    }, {
      passive: false
    });
    document.addEventListener("touchend", function (_0x31a82e) {
      _0x4948b4 && (_0x4948b4 = false, _0x5035ea.classList.remove("dragging"), !_0x31f3e && _0x319044());
    });
    _0xbf2e65.addEventListener("click", _0x3e961c);
    document.getElementById("panelClose").addEventListener("click", _0x3e961c);
    document.addEventListener("keydown", function (_0x5a1da3) {
      if (_0x5a1da3.key === "Escape" && _0x12b39d.classList.contains("show")) {
        {
          _0x3e961c();
        }
      }
    });
    function _0xfac3e6(_0x477d68, _0x1e11aa = "info", _0x424393 = 4000) {
      {
        const _0x3a2cc4 = document.createElement("div");
        _0x3a2cc4.className = "toast " + _0x1e11aa;
        const _0x5884be = {
          success: "鉁 ",
          error: "鉂 ",
          warning: "鈿狅笍",
          info: "鈩癸笍"
        };
        _0x3a2cc4.innerHTML = "\n                <span class=\"toast-icon\">" + (_0x5884be[_0x1e11aa] || "鈩癸笍") + "</span>\n                <span>" + _0x477d68 + "</span>\n            ";
        _0x33c855.appendChild(_0x3a2cc4);
        setTimeout(() => {
          _0x3a2cc4.classList.add("fade-out");
          setTimeout(() => {
            {
              if (_0x3a2cc4.parentNode) {
                _0x3a2cc4.parentNode.removeChild(_0x3a2cc4);
              }
            }
          }, 300);
        }, _0x424393);
        return _0x3a2cc4;
      }
    }
    chatPage.showToast = _0xfac3e6;
    document.getElementById("ckb_script").addEventListener("change", function () {
      {
        const _0x249b60 = this.checked ? "寮€鍚 " : "鍏抽棴";
        chatPage.scriptRunning = this.checked;
        _0xfac3e6("鑴氭湰" + _0x249b60, this.checked ? "success" : "info");
        console.log("脚本启动: " + _0x249b60);
      }
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      const _0x41b9e2 = this.checked ? "濂崇敓" : "鐢风敓";
      document.getElementById("txt_match").textContent = "浠 " + _0x41b9e2;
      chatPage.target = _0x41b9e2;
      _0xfac3e6("匹配模式: " + _0x41b9e2, "info");
      console.log("匹配模式: " + _0x41b9e2);
    });
    document.getElementById("btn_contact").addEventListener("click", function () {
      console.log("发送联系方式按钮被点鍑 ");
      const _0x42ee74 = this;
      const _0x29b76b = _0x42ee74.textContent;
      _0x42ee74.textContent = "发送中...";
      _0x42ee74.classList.add("sending");
      _0xfac3e6("正在发送联系方式...", "info", 2000);
      chatPage.sendContactInfo(QQ);
      setTimeout(() => {
        _0x42ee74.textContent = _0x29b76b;
        _0x42ee74.classList.remove("sending");
        _0xfac3e6("联系方式发送成功！", "success");
      }, 2000);
    });
    document.getElementById("btn_block").addEventListener("click", function () {
      {
        console.log("拉黑对方按钮被点击");
        chatPage.blockUser();
      }
    });
    document.getElementById("btn_blacklist").addEventListener("click", function () {
      console.log("绠＄悊榛戝悕鍗曟寜閽鐐瑰嚮");
      chatPage.showBlacklistPanel();
    });
    document.getElementById("ckb_match").click();
    _0xfac3e6("听说内群专属，电报频道@bdsm368\r\n浠庡€掑崠鑰呭鑾峰彇鎻掍欢瀵 致无法使用我们概不负璐 ", "success");
    this.initAdRemoval();
  },
  setTimer() {
    setInterval(() => {
      this.removeAds();
      if (!this.findEl) {
        {
          const _0x251c53 = document.querySelectorAll("[data-v-d506a6c7]");
          _0x251c53.length == 14 && _0x251c53[13].remove();
          const _0x1f2e8f = document.querySelector(".message-controls-wrapper");
          if (_0x1f2e8f) {
            this.chat = _0x1f2e8f.__vueParentComponent.parent;
          }
          const _0x5d63ab = document.querySelector(".messages-container");
          if (_0x5d63ab) {
            this.page = _0x5d63ab.__vueParentComponent.parent.props;
          }
          if (this.chat && this.page) {
            this.nextInterval = 600;
            this.findEl = true;
          } else {
            this.nextInterval = 2000;
            this.loadFailnum++;
            if (this.loadFailnum % 5 == 0 && this.loadFailnum >= 5 && window.location.hash.includes("/chat")) {
              this.showToast("正在尝试加载, 云端鍙兘闇€瑕佹洿鏂 ...", "warning", this.nextInterval);
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
                if (!this.alreadySent) {
                  this.alreadySent = true;
                  this.showToast("已匹配到: " + this.target + "锛 ", "success", 1000);
                  if (AUTO_MSG.length > 0) {
                    {
                      let _0x29a219 = AUTO_MSG[index];
                      index++;
                      if (index >= AUTO_MSG.length) {
                        index = 0;
                      }
                      this.sendMsg(_0x29a219);
                    }
                  }
                }
                break;
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
    }, this.nextInterval);
  }
};
chatPage.magic() && (chatPage.initialize(), chatPage.setTimer());
setData2 = chatPage.importBlacklist;