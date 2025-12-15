//Mon Dec 15 2025 09:53:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let QQ = "";
let index = 0;
let AUTO_MSG = [];
let currentAutoIndex = 0;
let filterQingliu = true;
let filterUnder18 = false;
let filterProvinceEnabled = false;
let selectedProvinces = [];
let filterNoRegion = false;
const ALL_PROVINCES = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "香港", "澳门", "台湾"];
let customAgeEnabled = false;
let customAgeValue = "2";
let waitReplyEnabled = false;
let waitReplyTimeout = 30;
let waitReplyTimer = null;
let initialPartnerMsgCount = 0;
let aiEnabled = false;
let aiApiKey = "";
let aiApiEndpoint = "https://api.siliconflow.cn/v1/chat/completions";
let aiModel = "Qwen/Qwen2.5-7B-Instruct";
let aiSystemPrompt = "你是一个友好的聊天助手，用简洁自然的语言回复，不要带句号";
let aiChatHistory = [];
let aiIsActive = false;
let aiMonitorTimer = null;
let aiLastMsgCount = 0;
let aiWaitingReply = false;
let aiSessionId = 0;
function loadAIConfig() {
  try {
    const _0x1d5175 = localStorage.getItem("ssby_ai_enabled");
    const _0x5da5e6 = localStorage.getItem("ssby_ai_apikey");
    const _0x52139b = localStorage.getItem("ssby_ai_model");
    const _0x1ad5f8 = localStorage.getItem("ssby_ai_prompt");
    const _0x348361 = localStorage.getItem("ssby_ai_endpoint");
    aiEnabled = _0x1d5175 === "true";
    aiApiKey = _0x5da5e6 || "";
    aiModel = _0x52139b || "Qwen/Qwen2.5-7B-Instruct";
    aiSystemPrompt = _0x1ad5f8 || "你是一个友好的聊天助手，用简洁自然的语言回复，不要带句号";
    aiApiEndpoint = _0x348361 || "https://api.siliconflow.cn/v1/chat/completions";
  } catch (_0x4527ef) {
    console.error("[AI托管] 加载配置失败:", _0x4527ef);
  }
}
function saveAIConfig() {
  try {
    localStorage.setItem("ssby_ai_enabled", String(aiEnabled));
    localStorage.setItem("ssby_ai_apikey", aiApiKey);
    localStorage.setItem("ssby_ai_model", aiModel);
    localStorage.setItem("ssby_ai_prompt", aiSystemPrompt);
    localStorage.setItem("ssby_ai_endpoint", aiApiEndpoint);
  } catch (_0x3944fc) {
    console.error("[AI托管] 保存配置失败:", _0x3944fc);
  }
}
loadAIConfig();
function resetAIChat() {
  aiChatHistory = [];
  aiLastMsgCount = 0;
  aiWaitingReply = false;
  aiSessionId++;
  console.log("[AI托管] 对话历史已重置, sessionId:", aiSessionId);
}
function startAIChat() {
  if (!aiEnabled || !aiApiKey) {
    console.log("[AI托管] 未启用或未配置API Key");
    return false;
  }
  aiIsActive = true;
  aiLastMsgCount = document.querySelectorAll(".message.left").length;
  if (aiMonitorTimer) {
    clearInterval(aiMonitorTimer);
  }
  aiMonitorTimer = setInterval(checkAINewMessage, 500);
  console.log("[AI托管] 已启动");
  typeof window.showToast === "function" && window.showToast("🤖 AI托管已启动，监听中...", "success", 2000);
  return true;
}
function stopAIChat() {
  aiIsActive = false;
  aiMonitorTimer && (clearInterval(aiMonitorTimer), aiMonitorTimer = null);
  console.log("[AI托管] 已停止");
}
function checkAINewMessage() {
  if (!aiIsActive || aiWaitingReply) {
    return;
  }
  const _0x115320 = document.querySelectorAll(".message.left .message-text");
  if (_0x115320.length > aiLastMsgCount) {
    const _0x30762c = _0x115320[_0x115320.length - 1]?.["textContent"]?.["trim"]();
    aiLastMsgCount = _0x115320.length;
    _0x30762c && !_0x30762c.startsWith("对方信息") && !_0x30762c.includes("绿色聊天") && (console.log("[AI托管] 检测到新消息:", _0x30762c), typeof window.showToast === "function" && window.showToast("💬 检测到对方消息，正在调用AI...", "info", 2000), handleAIMessage(_0x30762c));
  }
}
async function handleAIMessage(_0x5e1630) {
  console.log("[AI托管] 收到消息:", _0x5e1630);
  const _0x3cc0f7 = aiSessionId;
  aiWaitingReply = true;
  const _0x461225 = {
    role: "user",
    content: _0x5e1630
  };
  aiChatHistory.push(_0x461225);
  while (aiChatHistory.length > 20) {
    aiChatHistory.shift();
  }
  try {
    const _0x39e0a1 = await callAIAPI();
    if (_0x3cc0f7 !== aiSessionId) {
      console.log("[AI托管] 会话已切换，丢弃回复");
      aiWaitingReply = false;
      return;
    }
    console.log("[AI托管] AI回复:", _0x39e0a1);
    const _0x387dfd = {
      role: "assistant",
      content: _0x39e0a1
    };
    aiChatHistory.push(_0x387dfd);
    const _0x8b8f89 = Math.floor(Math.random() * 500) + 500;
    typeof window.showToast === "function" && window.showToast("✅ AI回复中...", "success", 1000);
    setTimeout(() => {
      if (_0x3cc0f7 !== aiSessionId) {
        console.log("[AI托管] 会话已切换，取消发送");
        return;
      }
      aiIsActive && typeof window.sendChatMessage === "function" && (window.sendChatMessage(_0x39e0a1), console.log("[AI托管] 已发送消息"), typeof window.showToast === "function" && window.showToast("📤 已发送", "info", 1000));
      aiWaitingReply = false;
    }, _0x8b8f89);
  } catch (_0x2d1f29) {
    console.error("[AI托管] 调用失败:", _0x2d1f29);
    typeof window.showToast === "function" && window.showToast("❌ AI调用失败", "error", 2000);
    aiWaitingReply = false;
  }
}
async function callAIAPI() {
  const _0x30471d = {
    role: "system",
    content: aiSystemPrompt
  };
  const _0x523af2 = [_0x30471d, ...aiChatHistory];
  const _0xce9b70 = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + aiApiKey
  };
  const _0x3821f5 = {
    model: aiModel,
    messages: _0x523af2,
    max_tokens: 100,
    temperature: 0.8,
    stream: false
  };
  const _0x5b97ec = await fetch(aiApiEndpoint, {
    method: "POST",
    headers: _0xce9b70,
    body: JSON.stringify(_0x3821f5)
  });
  if (!_0x5b97ec.ok) {
    throw new Error("API错误: " + _0x5b97ec.status);
  }
  const _0x449514 = await _0x5b97ec.json();
  return _0x449514.choices[0].message.content.trim();
}
function loadWaitReplyConfig() {
  try {
    {
      const _0x9bd384 = localStorage.getItem("ssby_wait_reply_enabled");
      const _0x58d32a = localStorage.getItem("ssby_wait_reply_timeout");
      waitReplyEnabled = _0x9bd384 === "true";
      waitReplyTimeout = _0x58d32a ? parseInt(_0x58d32a) : 30;
      if (waitReplyTimeout < 10) {
        waitReplyTimeout = 10;
      }
      if (waitReplyTimeout > 120) {
        waitReplyTimeout = 120;
      }
    }
  } catch (_0x1ae22c) {
    console.error("[等待回复] 加载配置失败:", _0x1ae22c);
  }
}
function saveWaitReplyConfig() {
  try {
    localStorage.setItem("ssby_wait_reply_enabled", String(waitReplyEnabled));
    localStorage.setItem("ssby_wait_reply_timeout", String(waitReplyTimeout));
  } catch (_0x1007c1) {
    console.error("[等待回复] 保存配置失败:", _0x1007c1);
  }
}
loadWaitReplyConfig();
let waitReplyCheckInterval = null;
function startWaitReplyTimer() {
  if (!waitReplyEnabled) {
    return;
  }
  initialPartnerMsgCount = document.querySelectorAll(".message.left").length;
  cancelWaitReplyTimer();
  console.log("[等待回复] 开始计时，超时时间:", waitReplyTimeout + "秒");
  waitReplyCheckInterval = setInterval(function () {
    const _0x4d6f47 = document.querySelectorAll(".message.left").length;
    if (_0x4d6f47 > initialPartnerMsgCount) {
      console.log("[等待回复] 检测到对方回复，取消超时");
      cancelWaitReplyTimer();
      aiEnabled && aiApiKey && !aiIsActive && (console.log("[等待回复] 对方已回复，启动AI托管"), startAIChat());
    }
  }, 500);
  waitReplyTimer = setTimeout(function () {
    const _0x4e4157 = document.querySelectorAll(".message.left").length;
    _0x4e4157 <= initialPartnerMsgCount ? (console.log("[等待回复] 超时未回复，自动离开"), showToast("对方" + waitReplyTimeout + "秒未回复，自动重新匹配", "warning", 2000), cancelWaitReplyTimer(), endCurrentChat(), reconnectOrNewChat()) : cancelWaitReplyTimer();
  }, waitReplyTimeout * 1000);
}
function cancelWaitReplyTimer() {
  waitReplyTimer && (clearTimeout(waitReplyTimer), waitReplyTimer = null);
  waitReplyCheckInterval && (clearInterval(waitReplyCheckInterval), waitReplyCheckInterval = null);
}
function loadCustomAgeConfig() {
  try {
    const _0x18050f = localStorage.getItem("ssby_custom_age_enabled");
    const _0x44aa09 = localStorage.getItem("ssby_custom_age_value");
    customAgeEnabled = _0x18050f === "true";
    customAgeValue = _0x44aa09 === "3" ? "3" : "2";
  } catch (_0x4c9516) {
    console.error("[自定义年龄] 加载配置失败:", _0x4c9516);
  }
}
function saveCustomAgeConfig() {
  try {
    localStorage.setItem("ssby_custom_age_enabled", String(customAgeEnabled));
    localStorage.setItem("ssby_custom_age_value", customAgeValue);
  } catch (_0x4cacd0) {
    console.error("[自定义年龄] 保存配置失败:", _0x4cacd0);
  }
}
loadCustomAgeConfig();
let ageResetBlocked = false;
function removeTeenagerTag() {
  const _0x696484 = document.querySelector("#btnTabChange1 img[src*=\"cancel\"]");
  if (_0x696484) {
    _0x696484.click();
    console.log("[自定义年龄] 已移除青少年标签");
    return true;
  }
  return false;
}
setInterval(function () {
  if (!customAgeEnabled) {
    return;
  }
  const _0x11eb41 = document.querySelector("#btnTabChange1 span");
  _0x11eb41 && _0x11eb41.textContent.includes("青少年") && removeTeenagerTag();
  const _0x15ab80 = document.querySelectorAll(".van-dialog");
  _0x15ab80.forEach(function (_0x488a8a) {
    const _0x5d3fd1 = _0x488a8a.textContent || "";
    if (_0x5d3fd1.includes("年龄被重置") || _0x5d3fd1.includes("已被系统重置")) {
      {
        _0x488a8a.parentNode && _0x488a8a.parentNode.removeChild(_0x488a8a);
        document.querySelectorAll(".van-overlay").forEach(function (_0x5e2468) {
          if (_0x5e2468.parentNode) {
            _0x5e2468.parentNode.removeChild(_0x5e2468);
          }
        });
        !ageResetBlocked && (ageResetBlocked = true, console.log("[自定义年龄] 已拦截年龄重置弹窗"), setTimeout(function () {
          ageResetBlocked = false;
        }, 3000));
      }
    }
  });
}, 100);
let blacklistEnabled = true;
let blacklist = [];
function loadBlacklist() {
  try {
    const _0x446d42 = localStorage.getItem("ssby_blacklist");
    blacklist = _0x446d42 ? JSON.parse(_0x446d42) : [];
  } catch (_0x44208b) {
    console.error("[黑名单] 加载失败:", _0x44208b);
    blacklist = [];
  }
  return blacklist;
}
function saveBlacklist() {
  try {
    localStorage.setItem("ssby_blacklist", JSON.stringify(blacklist));
  } catch (_0x22f11a) {
    console.error("[黑名单] 保存失败:", _0x22f11a);
  }
}
function addToBlacklist(_0x11d18e, _0x247170 = "", _0x39cdb0 = "", _0x164773 = "") {
  if (!_0x11d18e) {
    return false;
  }
  const _0x4372d0 = blacklist.find(_0x355a4d => _0x355a4d.id === _0x11d18e);
  if (_0x4372d0) {
    return false;
  }
  blacklist.push({
    id: _0x11d18e,
    remark: _0x247170,
    gender: _0x39cdb0,
    age: _0x164773,
    addTime: Date.now()
  });
  saveBlacklist();
  return true;
}
function removeFromBlacklist(_0x2da139) {
  const _0x5266e2 = blacklist.findIndex(_0x34fe5f => _0x34fe5f.id === _0x2da139);
  if (_0x5266e2 > -1) {
    blacklist.splice(_0x5266e2, 1);
    saveBlacklist();
    return true;
  }
  return false;
}
function clearBlacklist() {
  blacklist = [];
  saveBlacklist();
}
function updateBlacklistRemark(_0x491ceb, _0x489417) {
  const _0xd630f4 = blacklist.find(_0x236cc0 => _0x236cc0.id === _0x491ceb);
  if (_0xd630f4) {
    _0xd630f4.remark = _0x489417;
    saveBlacklist();
    return true;
  }
  return false;
}
function isInBlacklist(_0x2c0bc0) {
  return blacklist.find(_0x2501cc => _0x2501cc.id === _0x2c0bc0);
}
function exportBlacklist() {
  const _0xbf241b = JSON.stringify(blacklist, null, 2);
  const _0x41d7f6 = {
    type: "application/json"
  };
  const _0x49ccf2 = new Blob([_0xbf241b], _0x41d7f6);
  const _0x53df4b = URL.createObjectURL(_0x49ccf2);
  const _0x4ae123 = document.createElement("a");
  _0x4ae123.href = _0x53df4b;
  _0x4ae123.download = "ssby_blacklist_" + new Date().toISOString().slice(0, 10) + ".json";
  _0x4ae123.click();
  URL.revokeObjectURL(_0x53df4b);
}
function importBlacklist(_0x5787ce) {
  return new Promise((_0x8e0d0c, _0x926a60) => {
    const _0x2415ee = new FileReader();
    _0x2415ee.onload = _0x2afb37 => {
      try {
        const _0x1c7547 = JSON.parse(_0x2afb37.target.result);
        if (Array.isArray(_0x1c7547)) {
          let _0x38a72e = 0;
          _0x1c7547.forEach(_0x4dab87 => {
            _0x4dab87.id && !blacklist.find(_0x2d2e3a => _0x2d2e3a.id === _0x4dab87.id) && (blacklist.push({
              id: _0x4dab87.id,
              remark: _0x4dab87.remark || "",
              gender: _0x4dab87.gender || "",
              age: _0x4dab87.age || "",
              addTime: _0x4dab87.addTime || Date.now()
            }), _0x38a72e++);
          });
          saveBlacklist();
          _0x8e0d0c(_0x38a72e);
        } else {
          _0x926a60(new Error("无效的黑名单格式"));
        }
      } catch (_0x37ef88) {
        _0x926a60(_0x37ef88);
      }
    };
    _0x2415ee.onerror = () => _0x926a60(new Error("读取文件失败"));
    _0x2415ee.readAsText(_0x5787ce);
  });
}
loadBlacklist();
setData = function (_0x4ac977, _0x139eff, ..._0x2ae804) {
  QQ = _0x4ac977;
  index = _0x139eff;
  AUTO_MSG = _0x2ae804;
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
document.addEventListener("click", function (_0x339783) {
  let _0x192605 = _0x339783.target;
  while (_0x192605 && _0x192605 !== document.body) {
    const _0x2a2e12 = _0x192605.getAttribute("onclick") || "";
    if (_0x2a2e12.includes("popupVIPCardWallet") || _0x2a2e12.includes("VIPCardWallet")) {
      _0x339783.stopPropagation();
      _0x339783.stopImmediatePropagation();
      _0x339783.preventDefault();
      console.log("[脚本] 已阻止网站VIP卡包按钮点击");
      return false;
    }
    _0x192605 = _0x192605.parentElement;
  }
}, true);
setInterval(function () {
  const _0x26c155 = document.querySelector("#popupVIPCardWallet");
  if (!_0x26c155) {
    return;
  }
  const _0x3bce89 = _0x26c155.classList.contains("modal-in");
  if (_0x3bce89 && !vipCardAllowed) {
    _0x26c155.style.display = "none";
    _0x26c155.style.opacity = "0";
    _0x26c155.style.visibility = "hidden";
    _0x26c155.classList.remove("modal-in");
    _0x26c155.classList.add("modal-out");
    const _0x1ddfe9 = document.querySelector(".popup-overlay.modal-overlay-visible");
    _0x1ddfe9 && (_0x1ddfe9.classList.remove("modal-overlay-visible"), _0x1ddfe9.style.display = "none");
  } else {
    if (!_0x3bce89) {
      _0x26c155.style.display = "";
      _0x26c155.style.opacity = "";
      _0x26c155.style.visibility = "";
      vipCardAllowed = false;
    }
  }
}, 100);
MainFunc = () => {
  function _0x153982() {
    function _0x5975c7() {
      {
        const _0x544b18 = document.querySelector(".toasted-container");
        if (_0x544b18) {
          const _0x4c8ec2 = _0x544b18.querySelectorAll(".toasted");
          _0x4c8ec2.forEach(_0x4499f5 => {
            const _0xec4ecc = _0x4499f5.innerText || _0x4499f5.textContent || "";
            _0xec4ecc.includes("VIP") && _0xec4ecc.includes("激活") && (_0x4499f5.remove(), console.log("[脚本] 已移除VIP激活提示"));
          });
        }
      }
    }
    const _0x380307 = new MutationObserver(_0x5f063d => {
      for (const _0x26e29f of _0x5f063d) {
        for (const _0x429137 of _0x26e29f.addedNodes) {
          if (_0x429137.nodeType === 1 && _0x429137.classList?.["contains"]("toasted")) {
            const _0x316cfd = _0x429137.innerText || _0x429137.textContent || "";
            _0x316cfd.includes("VIP") && _0x316cfd.includes("激活") && (_0x429137.remove(), console.log("[脚本] 已拦截VIP激活提示"));
          }
        }
      }
    });
    const _0x1dcbf = setInterval(() => {
      const _0x1febeb = document.querySelector(".toasted-container");
      if (_0x1febeb) {
        const _0x4ac33b = {
          childList: true,
          subtree: true
        };
        _0x380307.observe(_0x1febeb, _0x4ac33b);
        clearInterval(_0x1dcbf);
        console.log("[脚本] 已开始监听VIP激活提示");
      }
    }, 500);
    setInterval(_0x5975c7, 300);
    function _0x2f2459() {
      {
        let _0x1d999b = "";
        let _0x1ba212 = "";
        let _0x4eb25c = "";
        const _0x1bcf9f = document.querySelector("#partnerInfoText");
        if (_0x1bcf9f) {
          const _0x31229b = _0x1bcf9f.innerText || _0x1bcf9f.textContent || "";
          if (_0x31229b.includes("18岁以下")) {
            _0x1d999b = "18岁以下";
          } else {
            if (_0x31229b.includes("18-23岁")) {
              _0x1d999b = "18-23岁";
            } else {
              _0x31229b.includes("23岁以上") && (_0x1d999b = "23岁以上");
            }
          }
          for (const _0x11d050 of ALL_PROVINCES) {
            if (_0x31229b.includes(_0x11d050)) {
              _0x4eb25c = _0x11d050;
              break;
            }
          }
        }
        const _0x383848 = document.querySelector("#partnerLabelContainer");
        _0x383848 && (_0x1ba212 = _0x383848.innerText || _0x383848.textContent || "");
        const _0xc94347 = {
          ageTag: _0x1d999b,
          userTag: _0x1ba212,
          region: _0x4eb25c
        };
        return _0xc94347;
      }
    }
    function _0xb8a6a3() {
      return _0x2f2459().ageTag === "18岁以下";
    }
    function _0x568351() {
      return (_0x2f2459().userTag || "").includes("清流");
    }
    function _0x129fb2() {
      if (!filterProvinceEnabled || selectedProvinces.length === 0) {
        const _0x2200cd = {
          shouldFilter: false,
          reason: ""
        };
        return _0x2200cd;
      }
      const _0x1e37d8 = _0x2f2459().region;
      if (!_0x1e37d8) {
        if (filterNoRegion) {
          const _0x5b3b6b = {
            shouldFilter: true,
            reason: "对方未显示地区"
          };
          return _0x5b3b6b;
        }
        const _0xf0cef7 = {
          shouldFilter: false,
          reason: ""
        };
        return _0xf0cef7;
      }
      if (!selectedProvinces.includes(_0x1e37d8)) {
        const _0x15eadd = {
          shouldFilter: true,
          reason: "对方地区(" + _0x1e37d8 + ")不在筛选范围"
        };
        return _0x15eadd;
      }
      const _0x204207 = {
        shouldFilter: false,
        reason: ""
      };
      return _0x204207;
    }
    function _0x1cba7d(_0x3aebd9, _0x59d3ae = "ok") {
      vue.toasted.show(_0x3aebd9, {
        action: {
          text: _0x59d3ae,
          onClick: (_0xc6e749, _0x179ad9) => {
            _0x179ad9.goAway(0);
          }
        }
      });
    }
    function _0x5b55eb(_0x3e5e7c) {
      chatPage.msgInput = _0x3e5e7c;
      chatPage.msgSend();
    }
    window.sendChatMessage = _0x5b55eb;
    function _0x1903f6() {
      chatPage.sockets.emit("syscmd", {
        msg: "end",
        countReceive: false,
        chatId: chatPage.chatId,
        countTalked: false
      });
      chatPage.chatState = "SELF_LEFT";
    }
    function _0x5799b2() {
      if (!customAgeEnabled) {
        return;
      }
      localStorage.setItem("ageNew", customAgeValue);
      typeof store !== "undefined" && store.set && store.set("ageNew", customAgeValue);
      const _0xb2f97e = customAgeValue === "2" ? "18-23岁" : "23岁以上";
      console.log("[自定义年龄] 已重置年龄为:", _0xb2f97e);
    }
    function _0x4adfac() {
      _0x5799b2();
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
    let _0x27b56b = true;
    chatPage.scriptIsRun = false;
    chatPage.MatchWho = "女生";
    setInterval(function () {
      try {
        document.querySelectorAll("a[href=\"./lost-found\"]").forEach(_0x4da9be => _0x4da9be.remove());
        document.querySelectorAll("a.button.button-link.button-nav.pull-right").forEach(_0x744bce => _0x744bce.remove());
        document.querySelectorAll("header a, .bar-nav a").forEach(_0xe6a0de => {
          (_0xe6a0de.innerText || "").trim() === "寻人" && _0xe6a0de.remove();
        });
        document.querySelectorAll(".advert").forEach(_0x38a457 => _0x38a457.remove());
        document.querySelectorAll(".message-text").forEach(_0x2f546d => {
          const _0x459be3 = _0x2f546d.innerText || "";
          (_0x459be3.includes("叔叔不约App") || _0x459be3.includes("点击获取")) && _0x2f546d.remove();
        });
        document.querySelectorAll(".sys-msg-chat-end > div > div").forEach(_0xfc82a => {
          const _0x499ba0 = _0xfc82a.innerText || "";
          _0x499ba0.includes("分区") && _0xfc82a.remove();
        });
        document.querySelectorAll(".leave-footer").forEach(_0x5b8376 => _0x5b8376.remove());
      } catch (_0x15385c) {}
      if (!chatPage.scriptIsRun) {
        return;
      }
      switch (chatPage.chatState) {
        case "REPAIRED":
        case "PAIRED":
          {
            let _0x4d7c2d = chatPage.partner.strGender;
            if (blacklistEnabled && chatPage.partner.idEncrypted) {
              const _0x2f451a = isInBlacklist(chatPage.partner.idEncrypted);
              if (_0x2f451a) {
                console.log("[脚本] 对方在黑名单中，自动离开:", _0x2f451a.remark);
                _0x2368e4("🚫 已自动跳过黑名单用户：" + _0x2f451a.remark, "warning", 2000);
                _0x1903f6();
                _0x4adfac();
                _0x27b56b = true;
                break;
              }
            }
            if (filterUnder18 && _0xb8a6a3()) {
              {
                console.log("[脚本] 对方为18岁以下，自动离开");
                _0x2368e4("对方为18岁以下，自动离开", "warning", 1500);
                _0x1903f6();
                _0x4adfac();
                _0x27b56b = true;
                break;
              }
            }
            if (filterQingliu && _0x568351()) {
              console.log("[脚本] 对方标签包含清流，自动离开");
              _0x2368e4("对方标签包含清流，自动离开", "warning", 1500);
              _0x1903f6();
              _0x4adfac();
              _0x27b56b = true;
              break;
            }
            if (_0x4d7c2d == chatPage.MatchWho) {
              const _0x1e9efc = _0x129fb2();
              if (_0x1e9efc.shouldFilter) {
                console.log("[脚本] " + _0x1e9efc.reason + "，自动离开");
                _0x2368e4(_0x1e9efc.reason + "，自动离开", "warning", 1500);
                _0x1903f6();
                _0x4adfac();
                _0x27b56b = true;
                break;
              }
            }
            if (_0x4d7c2d == chatPage.MatchWho) {
              if (_0x27b56b) {
                try {
                  let _0x291f50 = AUTO_MSG.length;
                  if (_0x291f50 > 1) {
                    {
                      const _0x38f12d = Math.floor(Math.random() * _0x291f50);
                      let _0x131adc = AUTO_MSG[_0x38f12d];
                      let _0x451c77 = _0x131adc.split("|").map(_0x576398 => _0x576398.trim());
                      currentAutoIndex = 0;
                      _0x1db173(_0x451c77);
                    }
                  } else {
                    let _0x246565 = AUTO_MSG[index];
                    let _0xe2de5e = _0x246565.split("|").map(_0x256604 => _0x256604.trim());
                    currentAutoIndex = 0;
                    _0x1db173(_0xe2de5e);
                  }
                } catch {}
                _0x2368e4("已匹配到" + chatPage.MatchWho + "并发送信息！", "success", 800);
                startWaitReplyTimer();
                aiEnabled && aiApiKey && !aiIsActive && (resetAIChat(), startAIChat());
                _0x27b56b = false;
              }
              break;
            }
            _0x1903f6();
            _0x4adfac();
            _0x27b56b = true;
            break;
          }
        case "SELF_LEFT":
        case "PARTNER_LEFT":
          cancelWaitReplyTimer();
          stopAIChat();
          resetAIChat();
          _0x4adfac();
          _0x27b56b = true;
          break;
      }
    }, 450);
    function _0x1db173(_0x4c69d2) {
      if (currentAutoIndex < _0x4c69d2.length) {
        {
          _0x5b55eb(_0x4c69d2[currentAutoIndex]);
          currentAutoIndex++;
          setTimeout(() => {
            _0x1db173(_0x4c69d2);
          }, 2000);
        }
      }
    }
    function _0x1c6fca() {
      try {
        const _0x49bc5e = QQ.trim();
        if (/^\d{5,12}$/.test(_0x49bc5e)) {
          let _0x291e04 = _0x49bc5e.length;
          _0x291e04 > 6 && _0x291e04 <= 10 ? (setTimeout(() => _0x5b55eb(_0x49bc5e.substr(0, 3)), 1000), setTimeout(() => _0x5b55eb(_0x49bc5e.substr(3, 3)), 2000), _0x291e04 == 10 ? (setTimeout(() => _0x5b55eb(_0x49bc5e.substr(6, 3)), 3000), setTimeout(() => _0x5b55eb(_0x49bc5e.substr(9)), 3500)) : setTimeout(() => _0x5b55eb(_0x49bc5e.substr(6)), 3000)) : _0x5b55eb(_0x49bc5e);
        } else {
          _0x5b55eb(_0x49bc5e);
        }
      } catch (_0x2e017c) {
        console.error("发送QQ号码失败：", _0x2e017c);
      }
    }
    if (document.getElementById("floatingBtn")) {
      document.getElementById("floatingBtn")?.["remove"]();
      document.getElementById("overlay")?.["remove"]();
      document.getElementById("controlPanel")?.["remove"]();
      document.getElementById("toastContainer")?.["remove"]();
      const _0x46da0a = document.getElementById("floatingPanelStyle");
      if (_0x46da0a) {
        _0x46da0a.remove();
      }
    }
    const _0x2faa0d = document.createElement("style");
    _0x2faa0d.id = "floatingPanelStyle";
    _0x2faa0d.textContent = "\n            /* 悬浮按钮 */\n            .floating-btn {\n                position: fixed;\n                bottom: 15%;\n                right: 20px;\n                width: 56px;\n                height: 56px;\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                border-radius: 50%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-size: 13px;\n                cursor: pointer;\n                box-shadow: 0 8px 20px rgba(118, 75, 162, 0.4);\n                z-index: 10000;\n                user-select: none;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                text-align: center;\n                line-height: 1.2;\n                font-weight: 600;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n                border: 2px solid rgba(255, 255, 255, 0.2);\n            }\n            \n            .floating-btn:hover {\n                transform: translateY(-2px) scale(1.05);\n                box-shadow: 0 12px 25px rgba(118, 75, 162, 0.5);\n            }\n            \n            .floating-btn:active {\n                transform: translateY(1px) scale(0.95);\n            }\n            \n            /* 控制面板 */\n            .control-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                width: 280px;\n                background: rgba(255, 255, 255, 0.98);\n                backdrop-filter: blur(20px);\n                border-radius: 20px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n                z-index: 9999;\n                display: none;\n                padding: 16px;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n                opacity: 0;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                border: 1px solid rgba(0, 0, 0, 0.05);\n            }\n            \n            .control-panel.show {\n                display: block;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            /* 面板头部 */\n            .panel-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 12px;\n                border-bottom: 1px solid rgba(0,0,0,0.05);\n                padding-bottom: 12px;\n            }\n            \n            .panel-title {\n                font-size: 17px;\n                font-weight: 700;\n                color: #1a1a1a;\n                letter-spacing: -0.5px;\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                -webkit-background-clip: text;\n                -webkit-text-fill-color: transparent;\n            }\n            \n            .panel-close {\n                width: 28px;\n                height: 28px;\n                border-radius: 50%;\n                background: #f5f5f7;\n                border: none;\n                color: #888;\n                font-size: 18px;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s;\n            }\n            \n            .panel-close:hover {\n                background: #eee;\n                color: #333;\n                transform: rotate(90deg);\n            }\n            \n            /* 列表项 - 增加cp-前缀防止冲突 */\n            .cp-list-block {\n                max-height: 50vh;\n                overflow-y: auto;\n            }\n            \n            .cp-list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .cp-item-content {\n                padding: 10px 0;\n                border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n                display: block; /* 确保是块级元素 */\n            }\n            \n            .cp-item-content:last-child {\n                border-bottom: none;\n            }\n            \n            .cp-item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                width: 100%;\n                position: relative; /* 防止绝对定位元素跑偏 */\n            }\n            \n            .cp-item-title {\n                font-size: 14px;\n                font-weight: 500;\n                color: #333;\n                display: flex;\n                align-items: center;\n                gap: 6px;\n                flex: 1; /* 占据剩余空间 */\n                margin-right: 12px; /* 与右侧开关保持距离 */\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n            \n            .cp-item-input {\n                flex-shrink: 0; /* 防止被压缩 */\n            }\n            \n            /* 开关样式优化 */\n            .cp-label-switch {\n                position: relative;\n                display: inline-block;\n                width: 46px;\n                height: 26px;\n                vertical-align: middle;\n            }\n            \n            .cp-label-switch input {\n                display: none;\n            }\n            \n            .cp-checkbox {\n                width: 100%;\n                height: 100%;\n                background: #e9e9eb;\n                border-radius: 30px;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                position: relative;\n                cursor: pointer;\n                display: block;\n            }\n            \n            .cp-checkbox:before {\n                content: '';\n                position: absolute;\n                width: 22px;\n                height: 22px;\n                background: white;\n                border-radius: 50%;\n                top: 2px;\n                left: 2px;\n                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            }\n            \n            input:checked + .cp-checkbox {\n                background: #34c759;\n            }\n            \n            input:checked + .cp-checkbox:before {\n                transform: translateX(20px);\n            }\n            \n            /* 自定义年龄单选按钮样式 */\n            .cp-age-options {\n                background: #f8f9fa;\n                border-radius: 10px;\n                margin: 4px 0;\n                padding: 8px 0 !important;\n            }\n            \n            .cp-radio-label {\n                display: flex;\n                align-items: center;\n                gap: 6px;\n                cursor: pointer;\n                font-size: 13px;\n                color: #333;\n                transition: all 0.2s;\n            }\n            \n            .cp-radio-label input[type=\"radio\"] {\n                appearance: none;\n                -webkit-appearance: none;\n                width: 18px;\n                height: 18px;\n                border: 2px solid #d1d1d6;\n                border-radius: 50%;\n                background: white;\n                cursor: pointer;\n                transition: all 0.2s;\n                position: relative;\n            }\n            \n            .cp-radio-label input[type=\"radio\"]:checked {\n                border-color: #34c759;\n                background: #34c759;\n            }\n            \n            .cp-radio-label input[type=\"radio\"]:checked::after {\n                content: '';\n                position: absolute;\n                width: 6px;\n                height: 6px;\n                background: white;\n                border-radius: 50%;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n            }\n            \n            .cp-radio-label:hover input[type=\"radio\"] {\n                border-color: #34c759;\n            }\n            \n            .cp-radio-text {\n                font-weight: 500;\n            }\n            \n            /* 超时时间输入框样式 */\n            .cp-timeout-label {\n                font-size: 14px;\n                color: #666;\n            }\n            \n            .cp-timeout-input {\n                width: 60px;\n                padding: 6px 8px;\n                border: 1px solid #ddd;\n                border-radius: 6px;\n                font-size: 14px;\n                text-align: center;\n                background: #f8f8f8;\n                transition: all 0.2s;\n            }\n            \n            .cp-timeout-input:focus {\n                outline: none;\n                border-color: #007AFF;\n                background: #fff;\n            }\n            \n            .cp-wait-reply-options {\n                padding: 8px 0 !important;\n            }\n            \n            /* 选中状态高亮 */\n            .cp-radio-label input[type=\"radio\"]:checked + .cp-radio-text {\n                color: #34c759;\n                font-weight: 600;\n            }\n            \n            .cp-radio-label.active {\n                background: rgba(52, 199, 89, 0.1);\n                padding: 4px 10px;\n                border-radius: 6px;\n            }\n            \n            /* 按钮组 */\n            .btn-group {\n                display: grid;\n                grid-template-columns: 1fr 1fr;\n                gap: 8px;\n                margin-top: 12px;\n            }\n            \n            .contact-btn {\n                background: linear-gradient(135deg, #007AFF 0%, #0051D4 100%);\n                color: white;\n                border: none;\n                padding: 10px 8px;\n                border-radius: 10px;\n                font-size: 13px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: all 0.2s;\n                width: 100%;\n                box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);\n            }\n            \n            .contact-btn:hover {\n                transform: translateY(-2px);\n                box-shadow: 0 6px 16px rgba(0, 122, 255, 0.3);\n            }\n            \n            .contact-btn:active {\n                transform: translateY(0);\n            }\n            \n            #btn_vip_card {\n                background: linear-gradient(135deg, #FF9500 0%, #FF5E3A 100%);\n                box-shadow: 0 4px 12px rgba(255, 94, 58, 0.2);\n            }\n            \n            #btn_vip_card:hover {\n                box-shadow: 0 6px 16px rgba(255, 94, 58, 0.3);\n            }\n            \n            /* 底部版权 */\n            .panel-footer {\n                margin-top: 12px;\n                padding-top: 10px;\n                border-top: 1px solid rgba(0, 0, 0, 0.04);\n                font-size: 11px;\n                color: #999;\n                display: flex;\n                justify-content: space-between;\n                font-weight: 500;\n            }\n            \n            /* 遮罩层 */\n            .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.4);\n                backdrop-filter: blur(4px);\n                z-index: 9998;\n                display: none;\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n            \n            .overlay.show {\n                display: block;\n                opacity: 1;\n            }\n            \n            /* Toast 样式 */\n            .toast-container {\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                z-index: 10001;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .toast {\n                background: rgba(0, 0, 0, 0.8);\n                backdrop-filter: blur(10px);\n                color: white;\n                padding: 10px 14px;\n                border-radius: 12px;\n                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n                font-size: 13px;\n                max-width: 220px;\n                word-break: break-all;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n                display: flex;\n                align-items: center;\n                gap: 12px;\n                font-weight: 500;\n            }\n            \n            .toast.success { border-left: 4px solid #34c759; }\n            .toast.error { border-left: 4px solid #ff3b30; }\n            .toast.warning { border-left: 4px solid #ff9500; }\n            .toast.info { border-left: 4px solid #007aff; }\n            \n            .toast.fade-out {\n                animation: toastSlideOut 0.3s forwards;\n            }\n            \n            @keyframes toastSlideIn {\n                from { opacity: 0; transform: translateX(100px); }\n                to { opacity: 1; transform: translateX(0); }\n            }\n            \n            @keyframes toastSlideOut {\n                from { opacity: 1; transform: translateX(0); }\n                to { opacity: 0; transform: translateX(100px); }\n            }\n            \n            .toast-icon { font-size: 18px; }\n            \n            /* 黑名单弹窗样式 */\n            .blacklist-modal {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                width: 290px;\n                max-height: 70vh;\n                background: rgba(255, 255, 255, 0.98);\n                backdrop-filter: blur(20px);\n                border-radius: 16px;\n                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n                z-index: 10002;\n                display: none;\n                flex-direction: column;\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n                opacity: 0;\n                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            }\n            \n            .blacklist-modal.show {\n                display: flex;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            .bl-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 14px 16px;\n                border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n            }\n            \n            .bl-title {\n                font-size: 16px;\n                font-weight: 700;\n                color: #1a1a1a;\n            }\n            \n            .bl-close {\n                width: 26px;\n                height: 26px;\n                border-radius: 50%;\n                background: #f5f5f7;\n                border: none;\n                color: #888;\n                font-size: 16px;\n                cursor: pointer;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s;\n            }\n            \n            .bl-close:hover {\n                background: #eee;\n                color: #333;\n            }\n            \n            .bl-list {\n                flex: 1;\n                overflow-y: auto;\n                padding: 8px 14px;\n                max-height: 280px;\n            }\n            \n            .bl-empty {\n                text-align: center;\n                color: #999;\n                padding: 30px 16px;\n                font-size: 13px;\n            }\n            \n            .bl-item {\n                background: #f8f8fa;\n                border-radius: 10px;\n                padding: 10px 12px;\n                margin-bottom: 8px;\n                position: relative;\n            }\n            \n            .bl-item-header {\n                display: flex;\n                justify-content: space-between;\n                align-items: flex-start;\n                margin-bottom: 6px;\n            }\n            \n            .bl-item-remark {\n                font-size: 14px;\n                font-weight: 600;\n                color: #333;\n                flex: 1;\n                word-break: break-all;\n            }\n            \n            .bl-item-actions {\n                display: flex;\n                gap: 6px;\n                flex-shrink: 0;\n            }\n            \n            .bl-item-btn {\n                width: 24px;\n                height: 28px;\n                border-radius: 8px;\n                border: none;\n                cursor: pointer;\n                font-size: 14px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s;\n            }\n            \n            .bl-item-btn.edit {\n                background: #e3f2fd;\n                color: #1976d2;\n            }\n            \n            .bl-item-btn.delete {\n                background: #ffebee;\n                color: #d32f2f;\n            }\n            \n            .bl-item-btn:hover {\n                transform: scale(1.1);\n            }\n            \n            .bl-item-info {\n                font-size: 11px;\n                color: #888;\n                display: flex;\n                gap: 10px;\n            }\n            \n            .bl-footer {\n                padding: 12px 14px;\n                border-top: 1px solid rgba(0, 0, 0, 0.06);\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n            }\n            \n            .bl-count {\n                font-size: 12px;\n                color: #666;\n                text-align: center;\n            }\n            \n            .bl-actions {\n                display: flex;\n                gap: 8px;\n            }\n            \n            .bl-btn {\n                flex: 1;\n                padding: 8px;\n                border-radius: 8px;\n                border: none;\n                font-size: 12px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: all 0.2s;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                gap: 4px;\n            }\n            \n            .bl-btn.export {\n                background: #e8f5e9;\n                color: #2e7d32;\n            }\n            \n            .bl-btn.import {\n                background: #e3f2fd;\n                color: #1565c0;\n            }\n            \n            .bl-btn.clear {\n                background: #ffebee;\n                color: #c62828;\n            }\n            \n            .bl-btn:hover {\n                transform: translateY(-1px);\n                filter: brightness(0.95);\n            }\n            \n            /* 拉黑确认弹窗 */\n            .blacklist-confirm {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                width: 260px;\n                background: white;\n                border-radius: 14px;\n                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n                z-index: 10003;\n                display: none;\n                opacity: 0;\n                transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n                font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n            }\n            \n            .blacklist-confirm.show {\n                display: block;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            .bc-header {\n                padding: 16px 16px 10px;\n                text-align: center;\n            }\n            \n            .bc-title {\n                font-size: 15px;\n                font-weight: 700;\n                color: #1a1a1a;\n                margin-bottom: 6px;\n            }\n            \n            .bc-info {\n                font-size: 12px;\n                color: #666;\n            }\n            \n            .bc-body {\n                padding: 0 16px 14px;\n            }\n            \n            .bc-label {\n                font-size: 12px;\n                color: #888;\n                margin-bottom: 6px;\n            }\n            \n            .bc-input {\n                width: 100%;\n                padding: 10px;\n                border: 1px solid #e0e0e0;\n                border-radius: 8px;\n                font-size: 13px;\n                box-sizing: border-box;\n                transition: border-color 0.2s;\n            }\n            \n            .bc-input:focus {\n                outline: none;\n                border-color: #007aff;\n            }\n            \n            .bc-footer {\n                display: flex;\n                border-top: 1px solid #eee;\n            }\n            \n            .bc-btn {\n                flex: 1;\n                padding: 12px;\n                border: none;\n                background: none;\n                font-size: 14px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: background 0.2s;\n            }\n            \n            .bc-btn:first-child {\n                border-right: 1px solid #eee;\n                color: #666;\n            }\n            \n            .bc-btn:last-child {\n                color: #ff3b30;\n            }\n            \n            .bc-btn:hover {\n                background: #f5f5f5;\n            }\n            \n            /* 优化后的控制面板 */\n            .control-panel {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.95);\n                background: #fff;\n                border-radius: 16px;\n                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);\n                z-index: 10001;\n                width: 320px;\n                max-height: 85vh;\n                overflow-y: auto;\n                display: none;\n                opacity: 0;\n                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n            }\n            \n            .control-panel.show {\n                display: block;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            /* 面板头部 */\n            .panel-header {\n                padding: 16px 20px;\n                background: linear-gradient(135deg, #f8fafc, #f1f5f9);\n                border-bottom: 1px solid #e2e8f0;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                position: sticky;\n                top: 0;\n                z-index: 10;\n            }\n            \n            .panel-title {\n                font-size: 16px;\n                font-weight: 700;\n                color: #1e293b;\n                display: flex;\n                align-items: center;\n                gap: 6px;\n            }\n            \n            .panel-title::before {\n                content: \"🛠️\";\n                font-size: 18px;\n            }\n            \n            .panel-close {\n                background: rgba(0, 0, 0, 0.05);\n                border: none;\n                width: 28px;\n                height: 28px;\n                border-radius: 50%;\n                font-size: 18px;\n                line-height: 28px;\n                text-align: center;\n                cursor: pointer;\n                color: #64748b;\n                transition: all 0.2s;\n            }\n            \n            .panel-close:hover {\n                background: #fee2e2;\n                color: #ef4444;\n            }\n            \n            /* 列表块 */\n            .cp-list-block {\n                padding: 10px 0;\n            }\n            \n            .cp-list-block ul {\n                list-style: none;\n                padding: 0;\n                margin: 0;\n            }\n            \n            .cp-list-block li {\n                border-bottom: 1px solid #f1f5f9;\n            }\n            \n            .cp-list-block li:last-child {\n                border-bottom: none;\n            }\n            \n            /* 列表项 */\n            .cp-item-content {\n                padding: 12px 20px;\n                transition: background 0.2s;\n            }\n            \n            .cp-item-content:hover {\n                background: #f8fafc;\n            }\n            \n            .cp-item-inner {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n            \n            .cp-item-title {\n                font-size: 14px;\n                color: #334155;\n                font-weight: 500;\n                display: flex;\n                align-items: center;\n                gap: 8px;\n            }\n            \n            /* 开关样式优化 */\n            .cp-label-switch {\n                position: relative;\n                display: inline-block;\n                width: 44px;\n                height: 24px;\n            }\n            \n            .cp-label-switch input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n            \n            .cp-checkbox {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #cbd5e1;\n                transition: .3s;\n                border-radius: 24px;\n            }\n            \n            .cp-checkbox:before {\n                position: absolute;\n                content: \"\";\n                height: 20px;\n                width: 20px;\n                left: 2px;\n                bottom: 2px;\n                background-color: white;\n                transition: .3s cubic-bezier(0.34, 1.56, 0.64, 1);\n                border-radius: 50%;\n                box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n            }\n            \n            input:checked + .cp-checkbox {\n                background-color: #2563eb;\n            }\n            \n            input:checked + .cp-checkbox:before {\n                transform: translateX(20px);\n            }\n            \n            /* Tab 分栏样式 */\n            .cp-tabs {\n                display: flex;\n                border-bottom: 1px solid #e2e8f0;\n                background: #f8fafc;\n            }\n            \n            .cp-tab-item {\n                flex: 1;\n                text-align: center;\n                padding: 12px 0;\n                font-size: 14px;\n                font-weight: 600;\n                color: #64748b;\n                cursor: pointer;\n                position: relative;\n                transition: all 0.3s;\n            }\n            \n            .cp-tab-item.active {\n                color: #2563eb;\n                background: #fff;\n            }\n            \n            .cp-tab-item.active::after {\n                content: '';\n                position: absolute;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                height: 2px;\n                background: #2563eb;\n            }\n            \n            .cp-tab-content {\n                display: none;\n                padding-top: 5px;\n            }\n            \n            .cp-tab-content.active {\n                display: block;\n                animation: fadeIn 0.2s ease-out;\n            }\n            \n            @keyframes fadeIn {\n                from { opacity: 0; transform: translateY(2px); }\n                to { opacity: 1; transform: translateY(0); }\n            }\n            \n            /* AI、等待回复、省份选项区域 */\n            .cp-wait-reply-options, .cp-ai-options, .cp-province-options {\n                background: #f8fafc;\n                margin: 0 10px 10px;\n                border-radius: 8px;\n                border: 1px solid #e2e8f0;\n                padding: 10px 15px !important;\n            }\n            \n            /* 输入框样式 */\n            .cp-timeout-input {\n                width: 60px;\n                padding: 4px 8px;\n                border: 1px solid #cbd5e1;\n                border-radius: 6px;\n                text-align: center;\n                font-size: 13px;\n                color: #334155;\n            }\n            \n            .cp-timeout-input:focus {\n                outline: none;\n                border-color: #2563eb;\n                box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);\n            }\n            \n            .cp-timeout-label {\n                font-size: 13px;\n                color: #64748b;\n            }\n            \n            /* 设置按钮 */\n            #btn_ai_settings {\n                width: 100%;\n                padding: 8px 0;\n                background: #fff;\n                color: #2563eb;\n                border: 1px solid #2563eb;\n                border-radius: 8px;\n                font-size: 13px;\n                font-weight: 500;\n                cursor: pointer;\n                transition: all 0.2s;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                gap: 6px;\n            }\n            \n            #btn_ai_settings:hover {\n                background: #eff6ff;\n                transform: translateY(-1px);\n            }\n            \n            /* 黑名单遮罩 */\n            .bl-overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background: rgba(0, 0, 0, 0.5);\n                z-index: 10001;\n                display: none;\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n            \n            .bl-overlay.show {\n                display: block;\n                opacity: 1;\n            }\n            \n            /* AI设置/省份选择弹窗 */\n            .ai-settings-modal {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%) scale(0.9);\n                background: #fff;\n                border-radius: 16px;\n                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);\n                z-index: 10002;\n                width: 340px;\n                max-height: 80vh;\n                overflow: hidden;\n                display: none;\n                opacity: 0;\n                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n            }\n            \n            .ai-settings-modal.show {\n                display: block;\n                opacity: 1;\n                transform: translate(-50%, -50%) scale(1);\n            }\n            \n            .ai-header {\n                padding: 16px 20px;\n                background: linear-gradient(135deg, #3b82f6, #2563eb);\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n            \n            .ai-title {\n                font-size: 16px;\n                font-weight: 700;\n                color: #fff;\n            }\n            \n            .ai-close {\n                background: rgba(255, 255, 255, 0.2);\n                border: none;\n                width: 28px;\n                height: 28px;\n                border-radius: 50%;\n                font-size: 18px;\n                line-height: 28px;\n                text-align: center;\n                cursor: pointer;\n                color: #fff;\n                transition: all 0.2s;\n            }\n            \n            .ai-close:hover {\n                background: rgba(255, 255, 255, 0.3);\n            }\n            \n            .ai-body {\n                padding: 20px;\n                max-height: 50vh;\n                overflow-y: auto;\n            }\n            \n            .ai-form-group {\n                margin-bottom: 16px;\n            }\n            \n            .ai-label {\n                display: block;\n                font-size: 13px;\n                font-weight: 600;\n                color: #374151;\n                margin-bottom: 6px;\n            }\n            \n            .ai-input, .ai-textarea {\n                width: 100%;\n                padding: 10px 12px;\n                border: 1px solid #e5e7eb;\n                border-radius: 8px;\n                font-size: 14px;\n                transition: border-color 0.2s;\n                box-sizing: border-box;\n            }\n            \n            .ai-input:focus, .ai-textarea:focus {\n                outline: none;\n                border-color: #3b82f6;\n            }\n            \n            .ai-textarea {\n                min-height: 100px;\n                resize: vertical;\n            }\n            \n            .ai-hint {\n                font-size: 11px;\n                color: #9ca3af;\n                margin-top: 4px;\n            }\n            \n            .ai-footer {\n                padding: 16px 20px;\n                background: #f9fafb;\n                display: flex;\n                gap: 10px;\n                border-top: 1px solid #e5e7eb;\n            }\n            \n            .ai-btn {\n                flex: 1;\n                padding: 10px 16px;\n                border: none;\n                border-radius: 8px;\n                font-size: 14px;\n                font-weight: 600;\n                cursor: pointer;\n                transition: all 0.2s;\n            }\n            \n            .ai-btn.cancel {\n                background: #f3f4f6;\n                color: #6b7280;\n            }\n            \n            .ai-btn.cancel:hover {\n                background: #e5e7eb;\n            }\n            \n            .ai-btn.save {\n                background: linear-gradient(135deg, #3b82f6, #2563eb);\n                color: #fff;\n            }\n            \n            .ai-btn.save:hover {\n                transform: translateY(-1px);\n                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);\n            }\n            \n            /* 隐藏的文件输入 */\n            #blacklistFileInput {\n                display: none;\n            }\n        ";
    document.head.appendChild(_0x2faa0d);
    const _0x46fe05 = document.createElement("div");
    _0x46fe05.className = "floating-btn";
    _0x46fe05.id = "floatingBtn";
    _0x46fe05.innerHTML = "控制<br>面板";
    _0x46fe05.title = "点击打开控制面板 | 长按拖动";
    let _0x4e25b8 = false;
    let _0x134312 = 0;
    let _0x1c456c = 0;
    let _0x33f751 = 0;
    let _0xd77646 = 0;
    let _0x4462d6 = false;
    const _0x5521ca = document.createElement("div");
    _0x5521ca.className = "overlay";
    _0x5521ca.id = "overlay";
    const _0x5ee0cf = document.createElement("div");
    _0x5ee0cf.className = "control-panel";
    _0x5ee0cf.id = "controlPanel";
    _0x5ee0cf.innerHTML = "\n            <div class=\"panel-header\">\n                <div class=\"panel-title\">脚本控制面板</div>\n                <button class=\"panel-close\" id=\"panelClose\">×</button>\n            </div>\n            \n            <div class=\"cp-list-block\">\n                <!-- Tab 导航 -->\n                <div class=\"cp-tabs\">\n                    <div class=\"cp-tab-item active\" data-tab=\"basic\">基础设置</div>\n                    <div class=\"cp-tab-item\" data-tab=\"advanced\">高级功能</div>\n                </div>\n\n                <ul>\n                    <li>\n                        <!-- 基础设置 Tab -->\n                        <div class=\"cp-tab-content active\" id=\"tab_basic\">\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">⚡ 脚本启动</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_script\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\" id=\"txt_match\">🚺 仅女生</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_match\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">🏷️ 过滤清流</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_qingliu\" checked>\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">🔞 过滤未成年</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_under18\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">🚫 启用黑名单</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_blacklist\" checked>\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- 高级功能 Tab -->\n                        <div class=\"cp-tab-content\" id=\"tab_advanced\">\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">🤖 AI托管</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_ai\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"cp-item-content cp-ai-options\" id=\"ai_options\" style=\"display:none;\">\n                                <div class=\"cp-item-inner\" style=\"justify-content:center;\">\n                                    <button id=\"btn_ai_settings\" style=\"padding:8px 16px; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:#fff; border:none; border-radius:8px; font-size:13px; cursor:pointer;\">⚙️ 配置AI参数</button>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">⏱️ 等待回复</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_wait_reply\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"cp-item-content cp-wait-reply-options\" id=\"wait_reply_options\" style=\"display:none;\">\n                                <div class=\"cp-item-inner\" style=\"justify-content:center; gap:8px;\">\n                                    <span class=\"cp-timeout-label\">超时时间:</span>\n                                    <input type=\"number\" id=\"input_wait_timeout\" class=\"cp-timeout-input\" value=\"30\" min=\"10\" max=\"120\">\n                                    <span class=\"cp-timeout-label\">秒</span>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">📍 省份筛选</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_province\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"cp-item-content cp-province-options\" id=\"province_options\" style=\"display:none;\">\n                                <div style=\"padding:5px 0;\">\n                                    <div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;\">\n                                        <span style=\"font-size:12px; color:#64748b;\">已选: <span id=\"province_count\">0</span> 个省份</span>\n                                        <div style=\"display:flex; gap:6px;\">\n                                            <button id=\"btn_select_all_province\" style=\"padding:4px 8px; font-size:11px; background:#eff6ff; color:#2563eb; border:1px solid #2563eb; border-radius:4px; cursor:pointer;\">全选</button>\n                                            <button id=\"btn_clear_province\" style=\"padding:4px 8px; font-size:11px; background:#fef2f2; color:#ef4444; border:1px solid #ef4444; border-radius:4px; cursor:pointer;\">清空</button>\n                                        </div>\n                                    </div>\n                                    <button id=\"btn_province_selector\" style=\"width:100%; padding:8px; background:#fff; border:1px solid #e2e8f0; border-radius:8px; font-size:13px; cursor:pointer; color:#334155;\">点击选择省份 ▼</button>\n                                    <div style=\"margin-top:10px; display:flex; align-items:center; justify-content:space-between;\">\n                                        <span style=\"font-size:12px; color:#64748b;\">过滤不显示地区</span>\n                                        <label class=\"cp-label-switch\" style=\"transform:scale(0.85);\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_no_region\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"cp-item-content\">\n                                <div class=\"cp-item-inner\">\n                                    <div class=\"cp-item-title\">🎂 自定义年龄</div>\n                                    <div class=\"cp-item-input\">\n                                        <label class=\"cp-label-switch\">\n                                            <input tabindex=\"-1\" type=\"checkbox\" id=\"ckb_custom_age\">\n                                            <div class=\"cp-checkbox\"></div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"cp-item-content cp-age-options\" id=\"custom_age_options\" style=\"display:none;\">\n                                <div class=\"cp-item-inner\" style=\"justify-content:center; gap:24px;\">\n                                    <label class=\"cp-radio-label\">\n                                        <input type=\"radio\" name=\"custom_age\" value=\"2\" checked>\n                                        <span class=\"cp-radio-text\">18-23岁</span>\n                                    </label>\n                                    <label class=\"cp-radio-label\">\n                                        <input type=\"radio\" name=\"custom_age\" value=\"3\">\n                                        <span class=\"cp-radio-text\">23岁以上</span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            \n            <div class=\"btn-group\">\n                <button class=\"contact-btn\" id=\"btn_contact\">📲 发送联系方式</button>\n                <button class=\"contact-btn\" id=\"btn_vip_card\">💳 VIP卡包</button>\n            </div>\n            \n            <div class=\"btn-group\">\n                <button class=\"contact-btn\" id=\"btn_blacklist_add\" style=\"background: linear-gradient(135deg, #ff3b30 0%, #ff6b6b 100%); box-shadow: 0 4px 12px rgba(255, 59, 48, 0.2);\">🔒 拉黑对方</button>\n                <button class=\"contact-btn\" id=\"btn_blacklist_manage\" style=\"background: linear-gradient(135deg, #5856d6 0%, #af52de 100%); box-shadow: 0 4px 12px rgba(88, 86, 214, 0.2);\">📋 管理黑名单</button>\n            </div>\n            \n            <div class=\"panel-footer\">\n                <span>© 驭师69号</span>\n                <span>V1.0.6</span>\n            </div>\n        ";
    const _0x47a351 = document.createElement("div");
    _0x47a351.className = "toast-container";
    _0x47a351.id = "toastContainer";
    const _0x55f651 = document.createElement("div");
    _0x55f651.className = "bl-overlay";
    _0x55f651.id = "blOverlay";
    const _0x2843a6 = document.createElement("div");
    _0x2843a6.className = "blacklist-modal";
    _0x2843a6.id = "blacklistModal";
    _0x2843a6.innerHTML = "\n        <div class=\"bl-header\">\n            <div class=\"bl-title\">📋 黑名单管理</div>\n            <button class=\"bl-close\" id=\"blClose\">×</button>\n        </div>\n        <div class=\"bl-list\" id=\"blList\"></div>\n        <div class=\"bl-footer\">\n            <div class=\"bl-count\" id=\"blCount\">共 0 人</div>\n            <div class=\"bl-actions\">\n                <button class=\"bl-btn export\" id=\"blExport\">📤 导出</button>\n                <button class=\"bl-btn import\" id=\"blImport\">📥 导入</button>\n                <button class=\"bl-btn clear\" id=\"blClear\">🗑️ 清空</button>\n            </div>\n        </div>\n    ";
    const _0x18f6c2 = document.createElement("div");
    _0x18f6c2.className = "blacklist-confirm";
    _0x18f6c2.id = "blacklistConfirm";
    _0x18f6c2.innerHTML = "\n        <div class=\"bc-header\">\n            <div class=\"bc-title\">🚫 添加到黑名单</div>\n            <div class=\"bc-info\" id=\"bcInfo\">对方: 未知</div>\n        </div>\n        <div class=\"bc-body\">\n            <div class=\"bc-label\">备注原因（可选）:</div>\n            <input type=\"text\" class=\"bc-input\" id=\"bcRemark\" placeholder=\"如：广告党、骚扰者...\">\n        </div>\n        <div class=\"bc-footer\">\n            <button class=\"bc-btn\" id=\"bcCancel\">取消</button>\n            <button class=\"bc-btn\" id=\"bcConfirm\">确认拉黑</button>\n        </div>\n    ";
    const _0x45c833 = document.createElement("div");
    _0x45c833.className = "ai-settings-modal";
    _0x45c833.id = "aiSettingsModal";
    _0x45c833.innerHTML = "\n        <div class=\"ai-header\">\n            <div class=\"ai-title\">🤖 AI设置</div>\n            <button class=\"ai-close\" id=\"aiClose\">×</button>\n        </div>\n        <div class=\"ai-body\">\n            <div class=\"ai-field\">\n                <label class=\"ai-label\">API地址</label>\n                <input type=\"text\" class=\"ai-input\" id=\"aiEndpointInput\" placeholder=\"https://api.siliconflow.cn/v1/chat/completions\">\n                <div class=\"ai-hint\">兼容OpenAI格式的API地址</div>\n            </div>\n            <div class=\"ai-field\">\n                <label class=\"ai-label\">API Key</label>\n                <input type=\"password\" class=\"ai-input\" id=\"aiKeyInput\" placeholder=\"sk-xxx...\">\n                <div class=\"ai-hint\">API密钥，将安全存储在本地</div>\n            </div>\n            <div class=\"ai-field\">\n                <label class=\"ai-label\">模型名称</label>\n                <input type=\"text\" class=\"ai-input\" id=\"aiModelInput\" placeholder=\"如: Qwen/Qwen2.5-7B-Instruct\">\n                <div class=\"ai-hint\">API支持的模型名称</div>\n            </div>\n            <div class=\"ai-field\">\n                <label class=\"ai-label\">系统提示词</label>\n                <textarea class=\"ai-textarea\" id=\"aiPromptInput\" placeholder=\"设定AI的角色和行为规则...\"></textarea>\n                <div class=\"ai-hint\">设定AI的人设、回复风格和行为准则</div>\n            </div>\n        </div>\n        <div class=\"ai-footer\">\n            <button class=\"ai-btn cancel\" id=\"aiCancel\">取消</button>\n            <button class=\"ai-btn save\" id=\"aiSave\">保存设置</button>\n        </div>\n    ";
    const _0x1e9859 = document.createElement("div");
    _0x1e9859.className = "ai-settings-modal";
    _0x1e9859.id = "provinceModal";
    _0x1e9859.innerHTML = "\n        <div class=\"ai-header\" style=\"background:linear-gradient(135deg, #10b981, #059669);\">\n            <div class=\"ai-title\">📍 选择省份</div>\n            <button class=\"ai-close\" id=\"provinceClose\">×</button>\n        </div>\n        <div class=\"ai-body\" style=\"padding:15px;\">\n            <div id=\"provinceGrid\" style=\"display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;\"></div>\n        </div>\n        <div class=\"ai-footer\">\n            <button class=\"ai-btn cancel\" id=\"provinceCancel\">取消</button>\n            <button class=\"ai-btn save\" id=\"provinceSave\" style=\"background:linear-gradient(135deg, #10b981, #059669);\">确定选择</button>\n        </div>\n    ";
    const _0xba7c81 = document.createElement("input");
    _0xba7c81.type = "file";
    _0xba7c81.id = "blacklistFileInput";
    _0xba7c81.accept = ".json";
    document.body.appendChild(_0x46fe05);
    document.body.appendChild(_0x5521ca);
    document.body.appendChild(_0x5ee0cf);
    document.body.appendChild(_0x47a351);
    document.body.appendChild(_0x55f651);
    document.body.appendChild(_0x2843a6);
    document.body.appendChild(_0x18f6c2);
    document.body.appendChild(_0x45c833);
    document.body.appendChild(_0x1e9859);
    document.body.appendChild(_0xba7c81);
    function _0x2fe43a() {
      _0x5ee0cf.classList.toggle("show");
      _0x5521ca.classList.toggle("show");
    }
    function _0x97fc61() {
      {
        _0x5ee0cf.classList.remove("show");
        _0x5521ca.classList.remove("show");
      }
    }
    _0x46fe05.addEventListener("mousedown", function (_0x3180f4) {
      _0x4e25b8 = true;
      _0x4462d6 = false;
      _0x134312 = _0x3180f4.clientX;
      _0x1c456c = _0x3180f4.clientY;
      const _0x289a46 = _0x46fe05.getBoundingClientRect();
      _0x33f751 = _0x289a46.left;
      _0xd77646 = _0x289a46.top;
      _0x46fe05.style.cursor = "grabbing";
      _0x46fe05.style.opacity = "0.8";
      _0x46fe05.style.transition = "none";
      _0x3180f4.preventDefault();
      _0x3180f4.stopPropagation();
    });
    document.addEventListener("mousemove", function (_0x185655) {
      if (!_0x4e25b8) {
        return;
      }
      const _0x12dd50 = _0x185655.clientX - _0x134312;
      const _0x3778c5 = _0x185655.clientY - _0x1c456c;
      if (Math.abs(_0x12dd50) > 5 || Math.abs(_0x3778c5) > 5) {
        _0x4462d6 = true;
      }
      let _0x2ec6fd = _0x33f751 + _0x12dd50;
      let _0x39c48f = _0xd77646 + _0x3778c5;
      const _0x48dc4f = window.innerWidth - _0x46fe05.offsetWidth;
      const _0x2ee03e = window.innerHeight - _0x46fe05.offsetHeight;
      _0x2ec6fd = Math.max(0, Math.min(_0x2ec6fd, _0x48dc4f));
      _0x39c48f = Math.max(0, Math.min(_0x39c48f, _0x2ee03e));
      _0x46fe05.style.left = _0x2ec6fd + "px";
      _0x46fe05.style.top = _0x39c48f + "px";
      _0x46fe05.style.right = "auto";
      _0x46fe05.style.bottom = "auto";
      _0x185655.preventDefault();
    });
    document.addEventListener("mouseup", function (_0x3ef069) {
      if (_0x4e25b8) {
        _0x4e25b8 = false;
        _0x46fe05.style.cursor = "grab";
        _0x46fe05.style.opacity = "1";
        _0x46fe05.style.transition = "all 0.3s ease";
        if (!_0x4462d6) {
          _0x2fe43a();
        }
      }
    });
    const _0x229dda = {
      passive: false
    };
    _0x46fe05.addEventListener("touchstart", function (_0x3c3fb0) {
      _0x4e25b8 = true;
      _0x4462d6 = false;
      const _0x3dd3df = _0x3c3fb0.touches[0];
      _0x134312 = _0x3dd3df.clientX;
      _0x1c456c = _0x3dd3df.clientY;
      const _0x4aa2dc = _0x46fe05.getBoundingClientRect();
      _0x33f751 = _0x4aa2dc.left;
      _0xd77646 = _0x4aa2dc.top;
      _0x46fe05.style.opacity = "0.8";
      _0x46fe05.style.transition = "none";
      _0x3c3fb0.preventDefault();
    }, _0x229dda);
    const _0x2bf79a = {
      passive: false
    };
    document.addEventListener("touchmove", function (_0x500c3a) {
      if (!_0x4e25b8) {
        return;
      }
      const _0x2a6754 = _0x500c3a.touches[0];
      const _0x3c5ef3 = _0x2a6754.clientX - _0x134312;
      const _0x44cdef = _0x2a6754.clientY - _0x1c456c;
      if (Math.abs(_0x3c5ef3) > 5 || Math.abs(_0x44cdef) > 5) {
        _0x4462d6 = true;
      }
      let _0x4f9161 = _0x33f751 + _0x3c5ef3;
      let _0x2bcf6c = _0xd77646 + _0x44cdef;
      const _0x599815 = window.innerWidth - _0x46fe05.offsetWidth;
      const _0x5852d6 = window.innerHeight - _0x46fe05.offsetHeight;
      _0x4f9161 = Math.max(0, Math.min(_0x4f9161, _0x599815));
      _0x2bcf6c = Math.max(0, Math.min(_0x2bcf6c, _0x5852d6));
      _0x46fe05.style.left = _0x4f9161 + "px";
      _0x46fe05.style.top = _0x2bcf6c + "px";
      _0x46fe05.style.right = "auto";
      _0x46fe05.style.bottom = "auto";
      _0x500c3a.preventDefault();
    }, _0x2bf79a);
    document.addEventListener("touchend", function (_0x45d68c) {
      if (_0x4e25b8) {
        _0x4e25b8 = false;
        _0x46fe05.style.opacity = "1";
        _0x46fe05.style.transition = "all 0.3s ease";
        if (!_0x4462d6) {
          _0x2fe43a();
        }
      }
    });
    document.querySelectorAll(".cp-tab-item").forEach(_0x141c4f => {
      _0x141c4f.addEventListener("click", function () {
        document.querySelectorAll(".cp-tab-item").forEach(_0x21c023 => _0x21c023.classList.remove("active"));
        document.querySelectorAll(".cp-tab-content").forEach(_0x5e5101 => _0x5e5101.classList.remove("active"));
        this.classList.add("active");
        const _0x46ace9 = "tab_" + this.dataset.tab;
        document.getElementById(_0x46ace9).classList.add("active");
      });
    });
    _0x5521ca.addEventListener("click", _0x97fc61);
    document.getElementById("panelClose").addEventListener("click", _0x97fc61);
    document.addEventListener("keydown", function (_0x37cba1) {
      {
        _0x37cba1.key === "Escape" && _0x5ee0cf.classList.contains("show") && _0x97fc61();
      }
    });
    function _0x2368e4(_0x343b0c, _0x542c20 = "info", _0x5ea786 = 4000) {
      const _0x25ba5b = document.createElement("div");
      _0x25ba5b.className = "toast " + _0x542c20;
      const _0x30847e = {
        success: "✅",
        error: "❌",
        warning: "⚠️",
        info: "ℹ️"
      };
      _0x25ba5b.innerHTML = "\n        <span class=\"toast-icon\">" + (_0x30847e[_0x542c20] || "ℹ️") + "</span>\n        <span>" + _0x343b0c + "</span>\n      ";
      _0x47a351.appendChild(_0x25ba5b);
      setTimeout(() => {
        _0x25ba5b.classList.add("fade-out");
        setTimeout(() => {
          _0x25ba5b.parentNode && _0x25ba5b.parentNode.removeChild(_0x25ba5b);
        }, 300);
      }, _0x5ea786);
      return _0x25ba5b;
    }
    window.showToast = _0x2368e4;
    document.getElementById("ckb_script").addEventListener("change", function () {
      const _0x3b0c38 = this.checked ? "开启" : "关闭";
      chatPage.scriptIsRun = this.checked;
      _0x2368e4("脚本" + _0x3b0c38, this.checked ? "success" : "info");
      console.log("脚本启动: " + _0x3b0c38);
    });
    document.getElementById("ckb_wait_reply").addEventListener("change", function () {
      const _0x34273c = this.checked ? "开启" : "关闭";
      waitReplyEnabled = this.checked;
      document.getElementById("wait_reply_options").style.display = this.checked ? "block" : "none";
      saveWaitReplyConfig();
      _0x2368e4("等待回复: " + _0x34273c, this.checked ? "success" : "info");
      console.log("等待回复: " + _0x34273c);
    });
    document.getElementById("input_wait_timeout").addEventListener("change", function () {
      let _0x3ae2bc = parseInt(this.value);
      if (isNaN(_0x3ae2bc) || _0x3ae2bc < 10) {
        _0x3ae2bc = 10;
      }
      if (_0x3ae2bc > 120) {
        _0x3ae2bc = 120;
      }
      this.value = _0x3ae2bc;
      waitReplyTimeout = _0x3ae2bc;
      saveWaitReplyConfig();
      _0x2368e4("超时时间: " + _0x3ae2bc + "秒", "info");
      console.log("等待回复超时时间: " + _0x3ae2bc + "秒");
    });
    document.getElementById("ckb_ai").addEventListener("change", function () {
      const _0x5341de = this.checked ? "开启" : "关闭";
      aiEnabled = this.checked;
      document.getElementById("ai_options").style.display = this.checked ? "block" : "none";
      !this.checked && stopAIChat();
      saveAIConfig();
      _0x2368e4("AI托管: " + _0x5341de, this.checked ? "success" : "info");
      console.log("AI托管: " + _0x5341de);
    });
    document.getElementById("btn_ai_settings").addEventListener("click", function () {
      document.getElementById("aiEndpointInput").value = aiApiEndpoint;
      document.getElementById("aiKeyInput").value = aiApiKey;
      document.getElementById("aiModelInput").value = aiModel;
      document.getElementById("aiPromptInput").value = aiSystemPrompt;
      _0x55f651.classList.add("show");
      _0x45c833.classList.add("show");
    });
    document.getElementById("aiClose").addEventListener("click", function () {
      _0x55f651.classList.remove("show");
      _0x45c833.classList.remove("show");
    });
    document.getElementById("aiCancel").addEventListener("click", function () {
      _0x55f651.classList.remove("show");
      _0x45c833.classList.remove("show");
    });
    document.getElementById("aiSave").addEventListener("click", function () {
      const _0x37bc10 = document.getElementById("aiEndpointInput").value.trim();
      const _0x1676bd = document.getElementById("aiKeyInput").value.trim();
      const _0x4e0ec9 = document.getElementById("aiModelInput").value.trim();
      const _0x18570f = document.getElementById("aiPromptInput").value.trim();
      if (!_0x37bc10) {
        _0x2368e4("请输入API地址", "warning");
        return;
      }
      if (!_0x1676bd) {
        _0x2368e4("请输入API Key", "warning");
        return;
      }
      if (!_0x4e0ec9) {
        _0x2368e4("请输入模型名称", "warning");
        return;
      }
      if (!_0x18570f) {
        _0x2368e4("请输入系统提示词", "warning");
        return;
      }
      aiApiEndpoint = _0x37bc10;
      aiApiKey = _0x1676bd;
      aiModel = _0x4e0ec9;
      aiSystemPrompt = _0x18570f;
      saveAIConfig();
      _0x55f651.classList.remove("show");
      _0x45c833.classList.remove("show");
      _0x2368e4("AI设置已保存", "success");
      console.log("[AI设置] API:", aiApiEndpoint, "模型:", aiModel);
    });
    document.getElementById("ckb_match").addEventListener("change", function () {
      const _0x199be5 = this.checked ? "女生" : "男生";
      const _0x37a0ec = this.checked ? "🚺 " : "🚹 ";
      document.getElementById("txt_match").textContent = _0x37a0ec + "仅" + _0x199be5;
      chatPage.MatchWho = _0x199be5;
      localStorage.setItem("ssby_match_gender", _0x199be5);
      _0x2368e4("匹配模式: " + _0x199be5, "info");
      console.log("匹配模式: " + _0x199be5);
    });
    document.getElementById("ckb_qingliu").addEventListener("change", function () {
      const _0x2a65ff = this.checked ? "开启" : "关闭";
      filterQingliu = this.checked;
      _0x2368e4("过滤清流标签: " + _0x2a65ff, this.checked ? "warning" : "info");
      console.log("过滤清流标签: " + _0x2a65ff);
    });
    document.getElementById("ckb_under18").addEventListener("change", function () {
      const _0x5566c3 = this.checked ? "开启" : "关闭";
      filterUnder18 = this.checked;
      _0x2368e4("过滤18岁以下: " + _0x5566c3, this.checked ? "warning" : "info");
      console.log("过滤18岁以下: " + _0x5566c3);
    });
    let _0x33ac18 = [];
    function _0x2fe178() {
      document.getElementById("province_count").textContent = selectedProvinces.length;
    }
    function _0x14a719() {
      const _0x260c27 = document.getElementById("provinceGrid");
      _0x260c27.innerHTML = ALL_PROVINCES.map(_0x786d93 => "\n        <label style=\"display:flex; align-items:center; padding:6px 8px; background:" + (_0x33ac18.includes(_0x786d93) ? "#dcfce7" : "#f8fafc") + "; border:1px solid " + (_0x33ac18.includes(_0x786d93) ? "#22c55e" : "#e2e8f0") + "; border-radius:6px; cursor:pointer; font-size:12px; transition:all 0.2s;\">\n          <input type=\"checkbox\" value=\"" + _0x786d93 + "\" " + (_0x33ac18.includes(_0x786d93) ? "checked" : "") + " style=\"margin-right:4px; accent-color:#22c55e;\">\n          " + _0x786d93 + "\n        </label>\n      ").join("");
      _0x260c27.querySelectorAll("input[type=\"checkbox\"]").forEach(_0x228560 => {
        _0x228560.addEventListener("change", function () {
          const _0x1971ea = this.value;
          this.checked ? !_0x33ac18.includes(_0x1971ea) && _0x33ac18.push(_0x1971ea) : _0x33ac18 = _0x33ac18.filter(_0x17c04e => _0x17c04e !== _0x1971ea);
          _0x14a719();
        });
      });
    }
    function _0x38dda3() {
      try {
        localStorage.setItem("ssby_province_enabled", String(filterProvinceEnabled));
        localStorage.setItem("ssby_provinces", JSON.stringify(selectedProvinces));
        localStorage.setItem("ssby_filter_no_region", String(filterNoRegion));
      } catch (_0x1bd551) {
        console.error("[省份筛选] 保存配置失败:", _0x1bd551);
      }
    }
    function _0x25d406() {
      try {
        const _0x3ca05f = localStorage.getItem("ssby_province_enabled");
        const _0x45468b = localStorage.getItem("ssby_provinces");
        const _0x4ee212 = localStorage.getItem("ssby_filter_no_region");
        filterProvinceEnabled = _0x3ca05f === "true";
        selectedProvinces = _0x45468b ? JSON.parse(_0x45468b) : [];
        filterNoRegion = _0x4ee212 === "true";
      } catch (_0x2ffbdb) {
        console.error("[省份筛选] 加载配置失败:", _0x2ffbdb);
      }
    }
    _0x25d406();
    document.getElementById("ckb_province").addEventListener("change", function () {
      const _0x433016 = this.checked ? "开启" : "关闭";
      filterProvinceEnabled = this.checked;
      document.getElementById("province_options").style.display = this.checked ? "block" : "none";
      _0x38dda3();
      if (this.checked && selectedProvinces.length === 0) {
        _0x2368e4("请至少选择一个省份", "warning", 3000);
      } else {
        _0x2368e4("省份筛选: " + _0x433016, this.checked ? "success" : "info");
      }
      console.log("省份筛选: " + _0x433016);
    });
    document.getElementById("ckb_no_region").addEventListener("change", function () {
      filterNoRegion = this.checked;
      _0x38dda3();
      _0x2368e4(this.checked ? "将过滤不显示地区的人" : "不过滤不显示地区的人", "info");
    });
    document.getElementById("btn_province_selector").addEventListener("click", function () {
      _0x33ac18 = [...selectedProvinces];
      _0x14a719();
      _0x55f651.classList.add("show");
      _0x1e9859.classList.add("show");
    });
    document.getElementById("btn_select_all_province").addEventListener("click", function () {
      _0x33ac18 = [...ALL_PROVINCES];
      selectedProvinces = [...ALL_PROVINCES];
      _0x2fe178();
      _0x38dda3();
      _0x2368e4("已选择全部省份", "success");
    });
    document.getElementById("btn_clear_province").addEventListener("click", function () {
      _0x33ac18 = [];
      selectedProvinces = [];
      _0x2fe178();
      _0x38dda3();
      _0x2368e4("已清空选择", "info");
    });
    document.getElementById("provinceClose").addEventListener("click", function () {
      _0x55f651.classList.remove("show");
      _0x1e9859.classList.remove("show");
    });
    document.getElementById("provinceCancel").addEventListener("click", function () {
      _0x55f651.classList.remove("show");
      _0x1e9859.classList.remove("show");
    });
    document.getElementById("provinceSave").addEventListener("click", function () {
      selectedProvinces = [..._0x33ac18];
      _0x2fe178();
      _0x38dda3();
      _0x55f651.classList.remove("show");
      _0x1e9859.classList.remove("show");
      _0x2368e4("已选择 " + selectedProvinces.length + " 个省份", "success");
    });
    document.getElementById("ckb_custom_age").addEventListener("change", function () {
      const _0x45b066 = this.checked ? "开启" : "关闭";
      customAgeEnabled = this.checked;
      document.getElementById("custom_age_options").style.display = this.checked ? "block" : "none";
      saveCustomAgeConfig();
      _0x2368e4("自定义年龄: " + _0x45b066, this.checked ? "success" : "info");
      console.log("自定义年龄: " + _0x45b066);
    });
    function _0x1150f9() {
      document.querySelectorAll("input[name=\"custom_age\"]").forEach(function (_0x164646) {
        const _0x537d3d = _0x164646.parentElement;
        _0x164646.checked ? _0x537d3d.classList.add("active") : _0x537d3d.classList.remove("active");
      });
    }
    document.querySelectorAll("input[name=\"custom_age\"]").forEach(function (_0x4973d5) {
      _0x4973d5.addEventListener("change", function () {
        customAgeValue = this.value;
        saveCustomAgeConfig();
        _0x1150f9();
        const _0x578f86 = this.value === "2" ? "18-23岁" : "23岁以上";
        _0x2368e4("年龄设置为: " + _0x578f86, "info");
        console.log("自定义年龄设置为: " + _0x578f86);
      });
    });
    _0x1150f9();
    document.getElementById("btn_contact").addEventListener("click", function () {
      const _0xdd094a = this;
      const _0x42a4b1 = _0xdd094a.textContent;
      _0xdd094a.textContent = "发送中...";
      _0xdd094a.classList.add("sending");
      _0x2368e4("正在发送联系方式...", "info", 2000);
      _0x1c6fca();
      setTimeout(() => {
        _0xdd094a.textContent = _0x42a4b1;
        _0xdd094a.classList.remove("sending");
        _0x2368e4("联系方式发送成功！", "success");
      }, 2000);
    });
    document.getElementById("btn_vip_card").addEventListener("click", function () {
      openVIPCardWallet();
      _0x2368e4("正在打开VIP卡包...", "info", 1500);
    });
    document.getElementById("ckb_blacklist").addEventListener("change", function () {
      const _0xf242f9 = this.checked ? "开启" : "关闭";
      blacklistEnabled = this.checked;
      _0x2368e4("黑名单功能: " + _0xf242f9, this.checked ? "warning" : "info");
      console.log("黑名单功能: " + _0xf242f9);
    });
    function _0x46a062() {
      try {
        const _0x143159 = localStorage.getItem("partner");
        return _0x143159 ? JSON.parse(_0x143159) : null;
      } catch (_0x37e95a) {
        return null;
      }
    }
    function _0x58b307(_0x37cf55) {
      const _0x418b11 = {
        "1": "18岁以下",
        "2": "18-22岁",
        "3": "23岁以上"
      };
      return _0x418b11[String(_0x37cf55)] || "";
    }
    function _0x291007(_0xd6023e) {
      const _0x352e51 = new Date(_0xd6023e);
      const _0x2b5492 = {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      return _0x352e51.toLocaleDateString("zh-CN", _0x2b5492);
    }
    function _0xb528b9() {
      const _0x223e9 = document.getElementById("blList");
      const _0x2cabbe = document.getElementById("blCount");
      blacklist.length === 0 ? _0x223e9.innerHTML = "<div class=\"bl-empty\">🎉 黑名单为空</div>" : _0x223e9.innerHTML = blacklist.map((_0x53e511, _0xbc17c9) => "\n          <div class=\"bl-item\" data-id=\"" + _0x53e511.id + "\">\n            <div class=\"bl-item-header\">\n              <div class=\"bl-item-remark\">" + (_0x53e511.remark || "未备注") + "</div>\n              <div class=\"bl-item-actions\">\n                <button class=\"bl-item-btn edit\" data-index=\"" + _0xbc17c9 + "\" title=\"编辑\">✏️</button>\n                <button class=\"bl-item-btn delete\" data-index=\"" + _0xbc17c9 + "\" title=\"删除\">🗑️</button>\n              </div>\n            </div>\n            <div class=\"bl-item-info\">\n              <span>" + (_0x53e511.gender || "未知") + " " + _0x58b307(_0x53e511.age) + "</span>\n              <span>" + _0x291007(_0x53e511.addTime) + "</span>\n            </div>\n          </div>\n        ").join("");
      _0x2cabbe.textContent = "共 " + blacklist.length + " 人";
    }
    function _0x172959() {
      _0xb528b9();
      _0x55f651.classList.add("show");
      _0x2843a6.classList.add("show");
    }
    function _0xb3067b() {
      _0x55f651.classList.remove("show");
      _0x2843a6.classList.remove("show");
    }
    function _0x4ed3f3() {
      const _0x267a05 = _0x46a062();
      if (!_0x267a05) {
        _0x2368e4("当前没有聊天对象", "warning");
        return;
      }
      if (!_0x267a05.idEncrypted) {
        _0x2368e4("无法获取对方信息", "error");
        return;
      }
      if (isInBlacklist(_0x267a05.idEncrypted)) {
        _0x2368e4("对方已在黑名单中", "warning");
        return;
      }
      document.getElementById("bcInfo").textContent = "对方: " + (_0x267a05.strGender || "未知") + " " + _0x58b307(_0x267a05.strAge);
      document.getElementById("bcRemark").value = "";
      _0x55f651.classList.add("show");
      _0x18f6c2.classList.add("show");
    }
    function _0x3f3165() {
      _0x18f6c2.classList.remove("show");
      _0x55f651.classList.remove("show");
    }
    function _0x470064() {
      const _0x18b960 = _0x46a062();
      if (!_0x18b960 || !_0x18b960.idEncrypted) {
        _0x2368e4("无法获取对方信息", "error");
        _0x3f3165();
        return;
      }
      const _0x41e592 = document.getElementById("bcRemark").value.trim();
      const _0x551298 = addToBlacklist(_0x18b960.idEncrypted, _0x41e592 || "未备注", _0x18b960.strGender || "", _0x18b960.strAge || "");
      if (_0x551298) {
        _0x2368e4("已将对方加入黑名单", "success");
        _0x3f3165();
        const _0x59f211 = document.querySelector("a.tab-link[href=\"#view-leave\"]");
        if (_0x59f211) {
          _0x59f211.click();
        }
      } else {
        _0x2368e4("对方已在黑名单中", "warning");
      }
    }
    document.getElementById("btn_blacklist_manage").addEventListener("click", function () {
      _0x172959();
    });
    document.getElementById("btn_blacklist_add").addEventListener("click", function () {
      _0x4ed3f3();
    });
    document.getElementById("blClose").addEventListener("click", _0xb3067b);
    _0x55f651.addEventListener("click", function () {
      _0xb3067b();
      _0x3f3165();
    });
    document.getElementById("blList").addEventListener("click", function (_0x344295) {
      const _0x5a8d11 = _0x344295.target.closest(".bl-item-btn");
      if (!_0x5a8d11) {
        return;
      }
      const _0x1cf903 = parseInt(_0x5a8d11.dataset.index);
      const _0x133485 = blacklist[_0x1cf903];
      if (!_0x133485) {
        return;
      }
      if (_0x5a8d11.classList.contains("edit")) {
        const _0x3e4e84 = prompt("修改备注:", _0x133485.remark);
        _0x3e4e84 !== null && (updateBlacklistRemark(_0x133485.id, _0x3e4e84.trim() || "未备注"), _0xb528b9(), _0x2368e4("备注已更新", "success"));
      } else {
        _0x5a8d11.classList.contains("delete") && confirm("确定要将此人从黑名单移除吗？") && (removeFromBlacklist(_0x133485.id), _0xb528b9(), _0x2368e4("已从黑名单移除", "success"));
      }
    });
    document.getElementById("blExport").addEventListener("click", function () {
      if (blacklist.length === 0) {
        _0x2368e4("黑名单为空，无法导出", "warning");
        return;
      }
      exportBlacklist();
      _0x2368e4("黑名单已导出", "success");
    });
    document.getElementById("blImport").addEventListener("click", function () {
      _0xba7c81.click();
    });
    _0xba7c81.addEventListener("change", function (_0x1a2c53) {
      const _0x3434bd = _0x1a2c53.target.files[0];
      if (!_0x3434bd) {
        return;
      }
      importBlacklist(_0x3434bd).then(_0x577b9a => {
        _0xb528b9();
        _0x2368e4("成功导入 " + _0x577b9a + " 人", "success");
      }).catch(_0x56f5fc => {
        _0x2368e4("导入失败: " + _0x56f5fc.message, "error");
      });
      _0xba7c81.value = "";
    });
    document.getElementById("blClear").addEventListener("click", function () {
      if (blacklist.length === 0) {
        _0x2368e4("黑名单已为空", "info");
        return;
      }
      confirm("确定要清空全部 " + blacklist.length + " 人吗？此操作不可恢复！") && (clearBlacklist(), _0xb528b9(), _0x2368e4("黑名单已清空", "success"));
    });
    document.getElementById("bcCancel").addEventListener("click", _0x3f3165);
    document.getElementById("bcConfirm").addEventListener("click", _0x470064);
    let _0x1801bf = null;
    let _0x3b0af4 = false;
    function _0x2d5f23() {
      if (!chatPage.scriptIsRun) {
        return false;
      }
      if (!blacklistEnabled || _0x3b0af4) {
        return false;
      }
      const _0x3ab3d7 = _0x46a062();
      if (!_0x3ab3d7 || !_0x3ab3d7.idEncrypted) {
        return false;
      }
      const _0x13d8ba = _0x3ab3d7.extra ? _0x3ab3d7.extra.chatId : null;
      const _0x4feb9b = _0x13d8ba + "_" + _0x3ab3d7.idEncrypted;
      if (_0x1801bf === _0x4feb9b) {
        return false;
      }
      const _0x17a37e = isInBlacklist(_0x3ab3d7.idEncrypted);
      if (_0x17a37e) {
        _0x1801bf = _0x4feb9b;
        _0x3b0af4 = true;
        console.log("[黑名单] 检测到黑名单用户:", _0x17a37e.remark);
        _0x2368e4("🚫 已自动跳过黑名单用户：" + _0x17a37e.remark, "warning", 3000);
        setTimeout(() => {
          const _0x51f20c = document.querySelector("a.tab-link[href=\"#view-leave\"]");
          _0x51f20c && _0x51f20c.click();
          setTimeout(() => {
            _0x3b0af4 = false;
            _0x1801bf = null;
          }, 2000);
        }, 100);
        return true;
      }
      _0x1801bf = _0x4feb9b;
      return false;
    }
    window.checkBlacklist = _0x2d5f23;
    window.isInBlacklist = isInBlacklist;
    window.getCurrentPartner = _0x46a062;
    setInterval(_0x2d5f23, 500);
    setTimeout(_0x2d5f23, 100);
    const _0x59e991 = localStorage.getItem("ssby_match_gender");
    _0x59e991 === "男生" ? (chatPage.MatchWho = "男生", document.getElementById("txt_match").textContent = "🚹 仅男生") : (document.getElementById("ckb_match").checked = true, chatPage.MatchWho = "女生", document.getElementById("txt_match").textContent = "🚺 仅女生");
    waitReplyEnabled && (document.getElementById("ckb_wait_reply").checked = true, document.getElementById("wait_reply_options").style.display = "block");
    document.getElementById("input_wait_timeout").value = waitReplyTimeout;
    customAgeEnabled && (document.getElementById("ckb_custom_age").checked = true, document.getElementById("custom_age_options").style.display = "block");
    const _0x25257e = document.querySelector("input[name=\"custom_age\"][value=\"" + customAgeValue + "\"]");
    _0x25257e && (_0x25257e.checked = true);
    aiEnabled && (document.getElementById("ckb_ai").checked = true, document.getElementById("ai_options").style.display = "block");
    filterProvinceEnabled && (document.getElementById("ckb_province").checked = true, document.getElementById("province_options").style.display = "block");
    filterNoRegion && (document.getElementById("ckb_no_region").checked = true);
    _0x2fe178();
    _0x2368e4("驭师插件，欢迎您的使用！", "success");
  }
  try {
    initialized && console.log("已初始化！");
  } catch {
    initialized = true;
    _0x153982();
  }
};
MainFunc();