//Mon Dec 15 2025 09:55:43 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x76e;
let QQ = "";
_0x76e = 6;
let index = 0;
var _0x6fd;
let AUTO_MSG = [];
_0x6fd = 7;
var _0xag9ge = 13;
let currentAutoIndex = 0;
_0xag9ge = 9;
let filterQingliu = true;
var _0x8728dg = 2;
let filterUnder18 = false;
_0x8728dg = 7;
var _0xff_0xb81 = 8;
let filterProvinceEnabled = false;
_0xff_0xb81 = 1;
var _0x_0x927 = 14;
let selectedProvinces = [];
_0x_0x927 = 6;
let filterNoRegion = false;
var _0x687b;
const ALL_PROVINCES = ["\u5317\u4EAC", "\u5929\u6D25", "\u5317\u6CB3".split("").reverse().join(""), "\u897F\u5C71".split("").reverse().join(""), "\u53E4\u8499\u5185".split("").reverse().join(""), "\u5B81\u8FBD".split("").reverse().join(""), "\u6797\u5409".split("").reverse().join(""), "\u9ED1\u9F99\u6C5F", "\u4E0A\u6D77", "\u6C5F\u82CF", "\u6D59\u6C5F", "\u5B89\u5FBD", "\u798F\u5EFA", "\u897F\u6C5F".split("").reverse().join(""), "\u4E1C\u5C71".split("").reverse().join(""), "\u6CB3\u5357", "\u5317\u6E56".split("").reverse().join(""), "\u5357\u6E56".split("").reverse().join(""), "\u5E7F\u4E1C", "\u5E7F\u897F", "\u6D77\u5357", "\u5E86\u91CD".split("").reverse().join(""), "\u56DB\u5DDD", "\u8D35\u5DDE", "\u5357\u4E91".split("").reverse().join(""), "\u897F\u85CF", "\u897F\u9655".split("").reverse().join(""), "\u7518\u8083", "\u9752\u6D77", "\u590F\u5B81".split("").reverse().join(""), "\u7586\u65B0".split("").reverse().join(""), "\u9999\u6E2F", "\u95E8\u6FB3".split("").reverse().join(""), "\u53F0\u6E7E"];
_0x687b = 8;
var _0x7cbe;
let customAgeEnabled = false;
_0x7cbe = 10;
let customAgeValue = "\u0032";
var _0x2b57d;
let waitReplyEnabled = false;
_0x2b57d = "bfbjbb".split("").reverse().join("");
let waitReplyTimeout = 30;
let waitReplyTimer = null;
var _0x65b87c;
let initialPartnerMsgCount = 0;
_0x65b87c = "efnaoa".split("").reverse().join("");
var _0xed87d = 13;
let aiEnabled = false;
_0xed87d = 1;
var _0xa2160g = 13;
let aiApiKey = '';
_0xa2160g = 12;
let aiApiEndpoint = "snoitelpmoc/tahc/1v/nc.wolfnocilis.ipa//:sptth".split("").reverse().join("");
let aiModel = "tcurtsnI-B7-5.2newQ/newQ".split("").reverse().join("");
let aiSystemPrompt = "\u4F60\u662F\u4E00\u4E2A\u53CB\u597D\u7684\u804A\u5929\u52A9\u624B\uFF0C\u7528\u7B80\u6D01\u81EA\u7136\u7684\u8BED\u8A00\u56DE\u590D\uFF0C\u4E0D\u8981\u5E26\u53E5\u53F7";
var _0x2_0x6d9 = 16;
let aiChatHistory = [];
_0x2_0x6d9 = 9;
var _0x3dc = 12;
let aiIsActive = false;
_0x3dc = 1;
var _0x121f = 9;
let aiMonitorTimer = null;
_0x121f = 10;
var _0x9c7g7b = 6;
let aiLastMsgCount = 0;
_0x9c7g7b = 11;
let aiWaitingReply = false;
let aiSessionId = 0;
function loadAIConfig() {
  try {
    const _0x0bdg0f = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0061\u0069\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0064");
    var _0xe152e;
    const _0xebe4bc = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("yekipa_ia_ybss".split("").reverse().join(""));
    _0xe152e = 9;
    const _0x121b = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("ledom_ia_ybss".split("").reverse().join(""));
    const _0x836d0g = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("tpmorp_ia_ybss".split("").reverse().join(""));
    const _0xc7284b = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("tniopdne_ia_ybss".split("").reverse().join(""));
    aiEnabled = _0x0bdg0f === "\u0074\u0072\u0075\u0065";
    aiApiKey = _0xebe4bc || '';
    aiModel = _0x121b || "\u0051\u0077\u0065\u006E\u002F\u0051\u0077\u0065\u006E\u0032\u002E\u0035\u002D\u0037\u0042\u002D\u0049\u006E\u0073\u0074\u0072\u0075\u0063\u0074";
    aiSystemPrompt = _0x836d0g || "\u4F60\u662F\u4E00\u4E2A\u53CB\u597D\u7684\u804A\u5929\u52A9\u624B\uFF0C\u7528\u7B80\u6D01\u81EA\u7136\u7684\u8BED\u8A00\u56DE\u590D\uFF0C\u4E0D\u8981\u5E26\u53E5\u53F7";
    aiApiEndpoint = _0xc7284b || "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0061\u0070\u0069\u002E\u0073\u0069\u006C\u0069\u0063\u006F\u006E\u0066\u006C\u006F\u0077\u002E\u0063\u006E\u002F\u0076\u0031\u002F\u0063\u0068\u0061\u0074\u002F\u0063\u006F\u006D\u0070\u006C\u0065\u0074\u0069\u006F\u006E\u0073";
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25\u003A", e);
  }
}
function saveAIConfig() {
  try {
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("delbane_ia_ybss".split("").reverse().join(""), String(aiEnabled));
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0061\u0069\u005F\u0061\u0070\u0069\u006B\u0065\u0079", aiApiKey);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("ledom_ia_ybss".split("").reverse().join(""), aiModel);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0061\u0069\u005F\u0070\u0072\u006F\u006D\u0070\u0074", aiSystemPrompt);
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0061\u0069\u005F\u0065\u006E\u0064\u0070\u006F\u0069\u006E\u0074", aiApiEndpoint);
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25\u003A", e);
  }
}
loadAIConfig();
function resetAIChat() {
  aiChatHistory = [];
  aiLastMsgCount = 0;
  aiWaitingReply = false;
  aiSessionId++;
  console['\u006C\u006F\u0067']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u5BF9\u8BDD\u5386\u53F2\u5DF2\u91CD\u7F6E\u002C\u0020\u0073\u0065\u0073\u0073\u0069\u006F\u006E\u0049\u0064\u003A", aiSessionId);
}
function startAIChat() {
  if (!aiEnabled || !aiApiKey) {
    console['\u006C\u006F\u0067']("yeK IPA\u7F6E\u914D\u672A\u6216\u7528\u542F\u672A ]\u7BA1\u6258IA[".split("").reverse().join(""));
    return false;
  }
  aiIsActive = true;
  aiLastMsgCount = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("tfel.egassem.".split("").reverse().join(""))['\u006C\u0065\u006E\u0067\u0074\u0068'];
  if (aiMonitorTimer) clearInterval(aiMonitorTimer);
  aiMonitorTimer = setInterval(checkAINewMessage, 500);
  console['\u006C\u006F\u0067']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u5DF2\u542F\u52A8");
  if (typeof window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074'] === "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E") {
    window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074']("\uD83E\uDD16\u0020\u0041\u0049\u6258\u7BA1\u5DF2\u542F\u52A8\uFF0C\u76D1\u542C\u4E2D\u002E\u002E\u002E", "\u0073\u0075\u0063\u0063\u0065\u0073\u0073", 2000);
  }
  return true;
}
function stopAIChat() {
  aiIsActive = false;
  if (aiMonitorTimer) {
    clearInterval(aiMonitorTimer);
    aiMonitorTimer = null;
  }
  console['\u006C\u006F\u0067']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u5DF2\u505C\u6B62");
}
function checkAINewMessage() {
  if (!aiIsActive || aiWaitingReply) return;
  const _0xf2a2c = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("txet-egassem. tfel.egassem.".split("").reverse().join(""));
  if (_0xf2a2c['\u006C\u0065\u006E\u0067\u0074\u0068'] > aiLastMsgCount) {
    const _0x287ecb = _0xf2a2c[_0xf2a2c['\u006C\u0065\u006E\u0067\u0074\u0068'] - 1]?.textContent?.trim();
    aiLastMsgCount = _0xf2a2c['\u006C\u0065\u006E\u0067\u0074\u0068'];
    if (_0x287ecb && !_0x287ecb['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068']("\u5BF9\u65B9\u4FE1\u606F") && !_0x287ecb['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u7EFF\u8272\u804A\u5929")) {
      console['\u006C\u006F\u0067'](":\u606F\u6D88\u65B0\u5230\u6D4B\u68C0 ]\u7BA1\u6258IA[".split("").reverse().join(""), _0x287ecb);
      if (typeof window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074'] === "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E") {
        window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074']("...IA\u7528\u8C03\u5728\u6B63\uFF0C\u606F\u6D88\u65B9\u5BF9\u5230\u6D4B\u68C0 \uDCAC\uD83D".split("").reverse().join(""), "\u0069\u006E\u0066\u006F", 2000);
      }
      handleAIMessage(_0x287ecb);
    }
  }
}
async function handleAIMessage(content) {
  console['\u006C\u006F\u0067']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u6536\u5230\u6D88\u606F\u003A", content);
  const _0x9b27c = aiSessionId;
  aiWaitingReply = true;
  aiChatHistory['\u0070\u0075\u0073\u0068']({
    "role": 'user',
    '\u0063\u006F\u006E\u0074\u0065\u006E\u0074': content
  });
  while (aiChatHistory['\u006C\u0065\u006E\u0067\u0074\u0068'] > 20) {
    aiChatHistory['\u0073\u0068\u0069\u0066\u0074']();
  }
  try {
    var _0xbbde0a = 4;
    const _0xe9a38c = await callAIAPI();
    _0xbbde0a = 8;
    if (_0x9b27c !== aiSessionId) {
      console['\u006C\u006F\u0067']("\u005B\u0041\u0049\u6258\u7BA1\u005D\u0020\u4F1A\u8BDD\u5DF2\u5207\u6362\uFF0C\u4E22\u5F03\u56DE\u590D");
      aiWaitingReply = false;
      return;
    }
    console['\u006C\u006F\u0067'](":\u590D\u56DEIA ]\u7BA1\u6258IA[".split("").reverse().join(""), _0xe9a38c);
    aiChatHistory['\u0070\u0075\u0073\u0068']({
      '\u0072\u006F\u006C\u0065': 'assistant',
      "content": _0xe9a38c
    });
    const _0x7c4b = Math['\u0066\u006C\u006F\u006F\u0072'](Math['\u0072\u0061\u006E\u0064\u006F\u006D']() * 500) + 500;
    if (typeof window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074'] === "noitcnuf".split("").reverse().join("")) {
      window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074']("\u2705\u0020\u0041\u0049\u56DE\u590D\u4E2D\u002E\u002E\u002E", "\u0073\u0075\u0063\u0063\u0065\u0073\u0073", 1000);
    }
    setTimeout(() => {
      if (_0x9b27c !== aiSessionId) {
        console['\u006C\u006F\u0067']("\u9001\u53D1\u6D88\u53D6\uFF0C\u6362\u5207\u5DF2\u8BDD\u4F1A ]\u7BA1\u6258IA[".split("").reverse().join(""));
        return;
      }
      if (aiIsActive && typeof window['\u0073\u0065\u006E\u0064\u0043\u0068\u0061\u0074\u004D\u0065\u0073\u0073\u0061\u0067\u0065'] === "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E") {
        window['\u0073\u0065\u006E\u0064\u0043\u0068\u0061\u0074\u004D\u0065\u0073\u0073\u0061\u0067\u0065'](_0xe9a38c);
        console['\u006C\u006F\u0067']("\u606F\u6D88\u9001\u53D1\u5DF2 ]\u7BA1\u6258IA[".split("").reverse().join(""));
        if (typeof window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074'] === "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E") {
          window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074']("\u9001\u53D1\u5DF2 \uDCE4\uD83D".split("").reverse().join(""), "\u0069\u006E\u0066\u006F", 1000);
        }
      }
      aiWaitingReply = false;
    }, _0x7c4b);
  } catch (error) {
    console['\u0065\u0072\u0072\u006F\u0072'](":\u8D25\u5931\u7528\u8C03 ]\u7BA1\u6258IA[".split("").reverse().join(""), error);
    if (typeof window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074'] === "\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E") {
      window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074']("\u8D25\u5931\u7528\u8C03IA \u274C".split("").reverse().join(""), "\u0065\u0072\u0072\u006F\u0072", 2000);
    }
    aiWaitingReply = false;
  }
}
async function callAIAPI() {
  var _0x2agb = 11;
  const _0xg45fae = [{
    '\u0072\u006F\u006C\u0065': "\u0073\u0079\u0073\u0074\u0065\u006D",
    '\u0063\u006F\u006E\u0074\u0065\u006E\u0074': aiSystemPrompt
  }, ...aiChatHistory];
  _0x2agb = 16;
  var _0x18e1be = 9;
  const _0x66597a = await fetch(aiApiEndpoint, {
    "method": 'POST',
    "headers": {
      "\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065": 'application/json',
      "\u0041\u0075\u0074\u0068\u006F\u0072\u0069\u007A\u0061\u0074\u0069\u006F\u006E": `Bearer ${aiApiKey}`
    },
    "body": JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
      "model": aiModel,
      "messages": _0xg45fae,
      "max_tokens": 100,
      "temperature": 0.8,
      "stream": false
    })
  });
  _0x18e1be = 3;
  if (!_0x66597a['\u006F\u006B']) {
    throw new Error(`API错误: ${_0x66597a['\u0073\u0074\u0061\u0074\u0075\u0073']}`);
  }
  var _0x27g3bb = 13;
  const _0xde75e = await _0x66597a['\u006A\u0073\u006F\u006E']();
  _0x27g3bb = 3;
  return _0xde75e['\u0063\u0068\u006F\u0069\u0063\u0065\u0073'][0]['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']['\u0063\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']();
}
function loadWaitReplyConfig() {
  try {
    var _0x2f44f;
    const _0x792e3d = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("delbane_ylper_tiaw_ybss".split("").reverse().join(""));
    _0x2f44f = 3;
    const _0x7e_0x010 = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("tuoemit_ylper_tiaw_ybss".split("").reverse().join(""));
    waitReplyEnabled = _0x792e3d === "eurt".split("").reverse().join("");
    waitReplyTimeout = _0x7e_0x010 ? parseInt(_0x7e_0x010) : 30;
    if (waitReplyTimeout < 10) waitReplyTimeout = 10;
    if (waitReplyTimeout > 120) waitReplyTimeout = 120;
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u7B49\u5F85\u56DE\u590D\u005D\u0020\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25\u003A", e);
  }
}
function saveWaitReplyConfig() {
  try {
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0077\u0061\u0069\u0074\u005F\u0072\u0065\u0070\u006C\u0079\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0064", String(waitReplyEnabled));
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0077\u0061\u0069\u0074\u005F\u0072\u0065\u0070\u006C\u0079\u005F\u0074\u0069\u006D\u0065\u006F\u0075\u0074", String(waitReplyTimeout));
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u7B49\u5F85\u56DE\u590D\u005D\u0020\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25\u003A", e);
  }
}
loadWaitReplyConfig();
let waitReplyCheckInterval = null;
function startWaitReplyTimer() {
  if (!waitReplyEnabled) return;
  initialPartnerMsgCount = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u002E\u006C\u0065\u0066\u0074")['\u006C\u0065\u006E\u0067\u0074\u0068'];
  cancelWaitReplyTimer();
  console['\u006C\u006F\u0067']("\u005B\u7B49\u5F85\u56DE\u590D\u005D\u0020\u5F00\u59CB\u8BA1\u65F6\uFF0C\u8D85\u65F6\u65F6\u95F4\u003A", waitReplyTimeout + "\u79D2");
  waitReplyCheckInterval = setInterval(function () {
    const _0x7375e = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u002E\u006C\u0065\u0066\u0074")['\u006C\u0065\u006E\u0067\u0074\u0068'];
    if (_0x7375e > initialPartnerMsgCount) {
      console['\u006C\u006F\u0067']("\u005B\u7B49\u5F85\u56DE\u590D\u005D\u0020\u68C0\u6D4B\u5230\u5BF9\u65B9\u56DE\u590D\uFF0C\u53D6\u6D88\u8D85\u65F6");
      cancelWaitReplyTimer();
      if (aiEnabled && aiApiKey && !aiIsActive) {
        console['\u006C\u006F\u0067']("\u005B\u7B49\u5F85\u56DE\u590D\u005D\u0020\u5BF9\u65B9\u5DF2\u56DE\u590D\uFF0C\u542F\u52A8\u0041\u0049\u6258\u7BA1");
        startAIChat();
      }
    }
  }, 500);
  waitReplyTimer = setTimeout(function () {
    const _0x1ba8d = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u002E\u006C\u0065\u0066\u0074")['\u006C\u0065\u006E\u0067\u0074\u0068'];
    if (_0x1ba8d <= initialPartnerMsgCount) {
      console['\u006C\u006F\u0067']("\u005B\u7B49\u5F85\u56DE\u590D\u005D\u0020\u8D85\u65F6\u672A\u56DE\u590D\uFF0C\u81EA\u52A8\u79BB\u5F00");
      showToast("\u5BF9\u65B9" + waitReplyTimeout + "\u914D\u5339\u65B0\u91CD\u52A8\u81EA\uFF0C\u590D\u56DE\u672A\u79D2".split("").reverse().join(""), "gninraw".split("").reverse().join(""), 2000);
      cancelWaitReplyTimer();
      endCurrentChat();
      reconnectOrNewChat();
    } else {
      cancelWaitReplyTimer();
    }
  }, waitReplyTimeout * 1000);
}
function cancelWaitReplyTimer() {
  if (waitReplyTimer) {
    clearTimeout(waitReplyTimer);
    waitReplyTimer = null;
  }
  if (waitReplyCheckInterval) {
    clearInterval(waitReplyCheckInterval);
    waitReplyCheckInterval = null;
  }
}
function loadCustomAgeConfig() {
  try {
    const _0x1ca66a = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0064");
    const _0x9b_0xd55 = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("eulav_ega_motsuc_ybss".split("").reverse().join(""));
    customAgeEnabled = _0x1ca66a === "eurt".split("").reverse().join("");
    customAgeValue = _0x9b_0xd55 === "\u0033" ? "\u0033" : "\u0032";
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u81EA\u5B9A\u4E49\u5E74\u9F84\u005D\u0020\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25\u003A", e);
  }
}
function saveCustomAgeConfig() {
  try {
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0064", String(customAgeEnabled));
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("eulav_ega_motsuc_ybss".split("").reverse().join(""), customAgeValue);
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u81EA\u5B9A\u4E49\u5E74\u9F84\u005D\u0020\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25\u003A", e);
  }
}
loadCustomAgeConfig();
let ageResetBlocked = false;
function removeTeenagerTag() {
  const _0xe4f6d = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0023\u0062\u0074\u006E\u0054\u0061\u0062\u0043\u0068\u0061\u006E\u0067\u0065\u0031\u0020\u0069\u006D\u0067\u005B\u0073\u0072\u0063\u002A\u003D\u0022\u0063\u0061\u006E\u0063\u0065\u006C\u0022\u005D");
  if (_0xe4f6d) {
    _0xe4f6d['\u0063\u006C\u0069\u0063\u006B']();
    console['\u006C\u006F\u0067']("\u7B7E\u6807\u5E74\u5C11\u9752\u9664\u79FB\u5DF2 ]\u9F84\u5E74\u4E49\u5B9A\u81EA[".split("").reverse().join(""));
    return true;
  }
  return false;
}
setInterval(function () {
  if (!customAgeEnabled) return;
  var _0x8a38cd = 0;
  const _0x378fa = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("naps 1egnahCbaTntb#".split("").reverse().join(""));
  _0x8a38cd = 6;
  if (_0x378fa && _0x378fa['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u5E74\u5C11\u9752".split("").reverse().join(""))) {
    removeTeenagerTag();
  }
  const _0xa77ed = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0076\u0061\u006E\u002D\u0064\u0069\u0061\u006C\u006F\u0067");
  _0xa77ed['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](function (dialog) {
    const _0x6_0x9dg = dialog['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] || '';
    if (_0x6_0x9dg['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u5E74\u9F84\u88AB\u91CD\u7F6E") || _0x6_0x9dg['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u7F6E\u91CD\u7EDF\u7CFB\u88AB\u5DF2".split("").reverse().join(""))) {
      if (dialog['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']) {
        dialog['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0072\u0065\u006D\u006F\u0076\u0065\u0043\u0068\u0069\u006C\u0064'](dialog);
      }
      document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("yalrevo-nav.".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](function (overlay) {
        if (overlay['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']) {
          overlay['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0072\u0065\u006D\u006F\u0076\u0065\u0043\u0068\u0069\u006C\u0064'](overlay);
        }
      });
      if (!ageResetBlocked) {
        ageResetBlocked = true;
        console['\u006C\u006F\u0067']("\u005B\u81EA\u5B9A\u4E49\u5E74\u9F84\u005D\u0020\u5DF2\u62E6\u622A\u5E74\u9F84\u91CD\u7F6E\u5F39\u7A97");
        setTimeout(function () {
          ageResetBlocked = false;
        }, 3000);
      }
    }
  });
}, 100);
var _0xdc312e = 5;
let blacklistEnabled = true;
_0xdc312e = "bnaici".split("").reverse().join("");
let blacklist = [];
function loadBlacklist() {
  try {
    const _0x75bb8d = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0062\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074");
    blacklist = _0x75bb8d ? JSON['\u0070\u0061\u0072\u0073\u0065'](_0x75bb8d) : [];
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072'](":\u8D25\u5931\u8F7D\u52A0 ]\u5355\u540D\u9ED1[".split("").reverse().join(""), e);
    blacklist = [];
  }
  return blacklist;
}
function saveBlacklist() {
  try {
    localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0062\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074", JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](blacklist));
  } catch (e) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u9ED1\u540D\u5355\u005D\u0020\u4FDD\u5B58\u5931\u8D25\u003A", e);
  }
}
function addToBlacklist(idEncrypted, remark = '', gender = '', age = '') {
  if (!idEncrypted) return false;
  const _0xfg_0x5ab = blacklist['\u0066\u0069\u006E\u0064'](item => item['\u0069\u0064'] === idEncrypted);
  if (_0xfg_0x5ab) return false;
  blacklist['\u0070\u0075\u0073\u0068']({
    "id": idEncrypted,
    '\u0072\u0065\u006D\u0061\u0072\u006B': remark,
    "gender": gender,
    '\u0061\u0067\u0065': age,
    '\u0061\u0064\u0064\u0054\u0069\u006D\u0065': Date['\u006E\u006F\u0077']()
  });
  saveBlacklist();
  return true;
}
function removeFromBlacklist(idEncrypted) {
  var _0xg77da;
  const _0xbe_0xd8e = blacklist['\u0066\u0069\u006E\u0064\u0049\u006E\u0064\u0065\u0078'](item => item['\u0069\u0064'] === idEncrypted);
  _0xg77da = 10;
  if (_0xbe_0xd8e > -1) {
    blacklist['\u0073\u0070\u006C\u0069\u0063\u0065'](_0xbe_0xd8e, 1);
    saveBlacklist();
    return true;
  }
  return false;
}
function clearBlacklist() {
  blacklist = [];
  saveBlacklist();
}
function updateBlacklistRemark(idEncrypted, newRemark) {
  var _0xacg = 10;
  const _0xaa3d4a = blacklist['\u0066\u0069\u006E\u0064'](item => item['\u0069\u0064'] === idEncrypted);
  _0xacg = 3;
  if (_0xaa3d4a) {
    _0xaa3d4a['\u0072\u0065\u006D\u0061\u0072\u006B'] = newRemark;
    saveBlacklist();
    return true;
  }
  return false;
}
function isInBlacklist(idEncrypted) {
  return blacklist['\u0066\u0069\u006E\u0064'](item => item['\u0069\u0064'] === idEncrypted);
}
function exportBlacklist() {
  const _0x143bd = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](blacklist, null, 2);
  var _0x4a_0x1d8 = 16;
  const _0xf5d2bf = new Blob([_0x143bd], {
    '\u0074\u0079\u0070\u0065': "\u0061\u0070\u0070\u006C\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002F\u006A\u0073\u006F\u006E"
  });
  _0x4a_0x1d8 = 9;
  const _0x17e = URL['\u0063\u0072\u0065\u0061\u0074\u0065\u004F\u0062\u006A\u0065\u0063\u0074\u0055\u0052\u004C'](_0xf5d2bf);
  var _0x85dbaa = 11;
  const a = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0061");
  _0x85dbaa = 10;
  a['\u0068\u0072\u0065\u0066'] = _0x17e;
  a['\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064'] = `ssby_blacklist_${new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0073\u006C\u0069\u0063\u0065'](0, 10)}.json`;
  a['\u0063\u006C\u0069\u0063\u006B']();
  URL['\u0072\u0065\u0076\u006F\u006B\u0065\u004F\u0062\u006A\u0065\u0063\u0074\u0055\u0052\u004C'](_0x17e);
}
function importBlacklist(file) {
  return new Promise((resolve, reject) => {
    const _0x7b35fb = new FileReader();
    _0x7b35fb['\u006F\u006E\u006C\u006F\u0061\u0064'] = e => {
      try {
        var _0xc674a;
        const _0xbb_0xc9d = JSON['\u0070\u0061\u0072\u0073\u0065'](e['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0072\u0065\u0073\u0075\u006C\u0074']);
        _0xc674a = 17;
        if (Array['\u0069\u0073\u0041\u0072\u0072\u0061\u0079'](_0xbb_0xc9d)) {
          var _0xf183f = 12;
          let _0x37ef = 0;
          _0xf183f = 5;
          _0xbb_0xc9d['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item => {
            if (item['\u0069\u0064'] && !blacklist['\u0066\u0069\u006E\u0064'](b => b['\u0069\u0064'] === item['\u0069\u0064'])) {
              blacklist['\u0070\u0075\u0073\u0068']({
                '\u0069\u0064': item['\u0069\u0064'],
                '\u0072\u0065\u006D\u0061\u0072\u006B': item['\u0072\u0065\u006D\u0061\u0072\u006B'] || '',
                '\u0067\u0065\u006E\u0064\u0065\u0072': item['\u0067\u0065\u006E\u0064\u0065\u0072'] || '',
                '\u0061\u0067\u0065': item['\u0061\u0067\u0065'] || '',
                '\u0061\u0064\u0064\u0054\u0069\u006D\u0065': item['\u0061\u0064\u0064\u0054\u0069\u006D\u0065'] || Date['\u006E\u006F\u0077']()
              });
              _0x37ef++;
            }
          });
          saveBlacklist();
          resolve(_0x37ef);
        } else {
          reject(new Error("\u5F0F\u683C\u5355\u540D\u9ED1\u7684\u6548\u65E0".split("").reverse().join("")));
        }
      } catch (e) {
        reject(e);
      }
    };
    _0x7b35fb['\u006F\u006E\u0065\u0072\u0072\u006F\u0072'] = () => reject(new Error("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25"));
    _0x7b35fb['\u0072\u0065\u0061\u0064\u0041\u0073\u0054\u0065\u0078\u0074'](file);
  });
}
loadBlacklist();
setData = function (qqNumber, messageIndex, ...autoMessages) {
  QQ = qqNumber;
  index = messageIndex;
  AUTO_MSG = autoMessages;
};
setData("\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039", 0, "\u4F60\u597D\u007C\u0068\u0065\u006C\u006C\u006F", "\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60\u007C\u006E\u0069\u0063\u0065\u0020\u0074\u006F\u0020\u006D\u0065\u0065\u0074\u0020\u0079\u006F\u0075");
let vipCardAllowed = false;
function openVIPCardWallet() {
  vipCardAllowed = true;
  console['\u006C\u006F\u0067']("\u5305\u5361PIV\u5F00\u6253\u94AE\u6309\u677F\u9762\u8FC7\u901A ]\u672C\u811A[".split("").reverse().join(""));
  if (window['\u0070\u006F\u0070\u0075\u0070\u0056\u0049\u0050\u0043\u0061\u0072\u0064\u0057\u0061\u006C\u006C\u0065\u0074'] && window['\u0070\u006F\u0070\u0075\u0070\u0056\u0049\u0050\u0043\u0061\u0072\u0064\u0057\u0061\u006C\u006C\u0065\u0074']['\u0066\u0065\u0074\u0063\u0068\u0043\u0061\u0072\u0064\u0073']) {
    window['\u0070\u006F\u0070\u0075\u0070\u0056\u0049\u0050\u0043\u0061\u0072\u0064\u0057\u0061\u006C\u006C\u0065\u0074']['\u0066\u0065\u0074\u0063\u0068\u0043\u0061\u0072\u0064\u0073']();
  }
  if (typeof $ !== "denifednu".split("").reverse().join("") && $['\u0070\u006F\u0070\u0075\u0070']) {
    $['\u0070\u006F\u0070\u0075\u0070']("\u0023\u0070\u006F\u0070\u0075\u0070\u0056\u0049\u0050\u0043\u0061\u0072\u0064\u0057\u0061\u006C\u006C\u0065\u0074");
  }
  setTimeout(() => {
    vipCardAllowed = false;
  }, 5000);
}
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function (e) {
  let _0x458gb = e['\u0074\u0061\u0072\u0067\u0065\u0074'];
  while (_0x458gb && _0x458gb !== document['\u0062\u006F\u0064\u0079']) {
    const _0x5c_0x76b = _0x458gb['\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065']("kcilcno".split("").reverse().join("")) || '';
    if (_0x5c_0x76b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("tellaWdraCPIVpupop".split("").reverse().join("")) || _0x5c_0x76b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0056\u0049\u0050\u0043\u0061\u0072\u0064\u0057\u0061\u006C\u006C\u0065\u0074")) {
      e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
      e['\u0073\u0074\u006F\u0070\u0049\u006D\u006D\u0065\u0064\u0069\u0061\u0074\u0065\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
      e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
      console['\u006C\u006F\u0067']("\u005B\u811A\u672C\u005D\u0020\u5DF2\u963B\u6B62\u7F51\u7AD9\u0056\u0049\u0050\u5361\u5305\u6309\u94AE\u70B9\u51FB");
      return false;
    }
    _0x458gb = _0x458gb['\u0070\u0061\u0072\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074'];
  }
}, true);
setInterval(function () {
  var _0x214a = 13;
  const _0xac7b6f = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0023\u0070\u006F\u0070\u0075\u0070\u0056\u0049\u0050\u0043\u0061\u0072\u0064\u0057\u0061\u006C\u006C\u0065\u0074");
  _0x214a = "hneqab".split("").reverse().join("");
  if (!_0xac7b6f) return;
  const _0xc759cc = _0xac7b6f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("ni-ladom".split("").reverse().join(""));
  if (_0xc759cc && !vipCardAllowed) {
    _0xac7b6f['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    _0xac7b6f['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = "\u0030";
    _0xac7b6f['\u0073\u0074\u0079\u006C\u0065']['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079'] = "neddih".split("").reverse().join("");
    _0xac7b6f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u006D\u006F\u0064\u0061\u006C\u002D\u0069\u006E");
    _0xac7b6f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u006D\u006F\u0064\u0061\u006C\u002D\u006F\u0075\u0074");
    var _0x6cf;
    const _0x6e1ga = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0070\u006F\u0070\u0075\u0070\u002D\u006F\u0076\u0065\u0072\u006C\u0061\u0079\u002E\u006D\u006F\u0064\u0061\u006C\u002D\u006F\u0076\u0065\u0072\u006C\u0061\u0079\u002D\u0076\u0069\u0073\u0069\u0062\u006C\u0065");
    _0x6cf = "jmecmi".split("").reverse().join("");
    if (_0x6e1ga) {
      _0x6e1ga['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u006D\u006F\u0064\u0061\u006C\u002D\u006F\u0076\u0065\u0072\u006C\u0061\u0079\u002D\u0076\u0069\u0073\u0069\u0062\u006C\u0065");
      _0x6e1ga['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u006E\u006F\u006E\u0065";
    }
  } else if (!_0xc759cc) {
    _0xac7b6f['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = '';
    _0xac7b6f['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = '';
    _0xac7b6f['\u0073\u0074\u0079\u006C\u0065']['\u0076\u0069\u0073\u0069\u0062\u0069\u006C\u0069\u0074\u0079'] = '';
    vipCardAllowed = false;
  }
}, 100);
MainFunc = () => {
  function _0x70458f(_0xcda9aa, _0x85e7ee, _0x61189a, _0xcdf52d) {
    function _0x18b() {
      var _0x28641b;
      const _0xf976bf = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0074\u006F\u0061\u0073\u0074\u0065\u0064\u002D\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072");
      _0x28641b = 0;
      if (_0xf976bf) {
        const _0xd3752b = _0xf976bf['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0074\u006F\u0061\u0073\u0074\u0065\u0064");
        _0xd3752b['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](toast => {
          const _0x9a09d = toast['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || toast['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] || '';
          if (_0x9a09d['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("PIV".split("").reverse().join("")) && _0x9a09d['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u6D3B\u6FC0".split("").reverse().join(""))) {
            toast['\u0072\u0065\u006D\u006F\u0076\u0065']();
            console['\u006C\u006F\u0067']("\u005B\u811A\u672C\u005D\u0020\u5DF2\u79FB\u9664\u0056\u0049\u0050\u6FC0\u6D3B\u63D0\u793A");
          }
        });
      }
    }
    var _0x3_0x655 = 11;
    const _0x49e6de = new MutationObserver(mutations => {
      for (const _0x9b8f7e of mutations) {
        for (const _0xfeb0d of _0x9b8f7e['\u0061\u0064\u0064\u0065\u0064\u004E\u006F\u0064\u0065\u0073']) {
          if (_0xfeb0d['\u006E\u006F\u0064\u0065\u0054\u0079\u0070\u0065'] === 1 && _0xfeb0d['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']?.contains("detsaot".split("").reverse().join(""))) {
            const text = _0xfeb0d['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || _0xfeb0d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] || '';
            if (text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("PIV".split("").reverse().join("")) && text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u6FC0\u6D3B")) {
              _0xfeb0d['\u0072\u0065\u006D\u006F\u0076\u0065']();
              console['\u006C\u006F\u0067']("\u793A\u63D0\u6D3B\u6FC0PIV\u622A\u62E6\u5DF2 ]\u672C\u811A[".split("").reverse().join(""));
            }
          }
        }
      }
    });
    _0x3_0x655 = 7;
    const _0xe86adc = setInterval(() => {
      const _0xc47geb = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0074\u006F\u0061\u0073\u0074\u0065\u0064\u002D\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072");
      if (_0xc47geb) {
        _0x49e6de['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](_0xc47geb, {
          '\u0063\u0068\u0069\u006C\u0064\u004C\u0069\u0073\u0074': true,
          '\u0073\u0075\u0062\u0074\u0072\u0065\u0065': true
        });
        clearInterval(_0xe86adc);
        console['\u006C\u006F\u0067']("\u005B\u811A\u672C\u005D\u0020\u5DF2\u5F00\u59CB\u76D1\u542C\u0056\u0049\u0050\u6FC0\u6D3B\u63D0\u793A");
      }
    }, 500);
    setInterval(_0x18b, 300);
    function _0x2a6ee(_0x8_0x447, _0x6c6c, _0xe_0x4db) {
      var _0xd8b = 10;
      _0x8_0x447 = "";
      _0xd8b = 4;
      var _0x31a = 13;
      _0x6c6c = "";
      _0x31a = 15;
      _0xe_0x4db = "";
      var _0x64b01b;
      const _0xe22bf = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("txeTofnIrentrap#".split("").reverse().join(""));
      _0x64b01b = "jnnoij".split("").reverse().join("");
      if (_0xe22bf) {
        const _0x33fbfc = _0xe22bf['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || _0xe22bf['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] || "";
        if (_0x33fbfc['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u4E0B\u4EE5\u5C8181".split("").reverse().join(""))) {
          _0x8_0x447 = "\u0031\u0038\u5C81\u4EE5\u4E0B";
        } else if (_0x33fbfc['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0031\u0038\u002D\u0032\u0033\u5C81")) {
          _0x8_0x447 = "\u0031\u0038\u002D\u0032\u0033\u5C81";
        } else if (_0x33fbfc['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u4E0A\u4EE5\u5C8132".split("").reverse().join(""))) {
          _0x8_0x447 = "\u0032\u0033\u5C81\u4EE5\u4E0A";
        }
        for (const _0xf46f1d of ALL_PROVINCES) {
          if (_0x33fbfc['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xf46f1d)) {
            _0xe_0x4db = _0xf46f1d;
            break;
          }
        }
      }
      var _0x4fd8e = 7;
      const _0x95def = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("reniatnoClebaLrentrap#".split("").reverse().join(""));
      _0x4fd8e = 8;
      if (_0x95def) {
        _0x6c6c = _0x95def['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || _0x95def['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] || "";
      }
      return {
        '\u0061\u0067\u0065\u0054\u0061\u0067': _0x8_0x447,
        '\u0075\u0073\u0065\u0072\u0054\u0061\u0067': _0x6c6c,
        '\u0072\u0065\u0067\u0069\u006F\u006E': _0xe_0x4db
      };
    }
    function _0x12b2b() {
      return _0x2a6ee()['\u0061\u0067\u0065\u0054\u0061\u0067'] === "\u0031\u0038\u5C81\u4EE5\u4E0B";
    }
    function _0x6g48eg() {
      return (_0x2a6ee()['\u0075\u0073\u0065\u0072\u0054\u0061\u0067'] || "")['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u6E05\u6D41");
    }
    function _0xb_0xe3d() {
      if (!filterProvinceEnabled || selectedProvinces['\u006C\u0065\u006E\u0067\u0074\u0068'] === 0) {
        return {
          '\u0073\u0068\u006F\u0075\u006C\u0064\u0046\u0069\u006C\u0074\u0065\u0072': false,
          '\u0072\u0065\u0061\u0073\u006F\u006E': ''
        };
      }
      const _0xe0dfdf = _0x2a6ee()['\u0072\u0065\u0067\u0069\u006F\u006E'];
      if (!_0xe0dfdf) {
        if (filterNoRegion) {
          return {
            '\u0073\u0068\u006F\u0075\u006C\u0064\u0046\u0069\u006C\u0074\u0065\u0072': true,
            '\u0072\u0065\u0061\u0073\u006F\u006E': "\u5BF9\u65B9\u672A\u663E\u793A\u5730\u533A"
          };
        }
        return {
          '\u0073\u0068\u006F\u0075\u006C\u0064\u0046\u0069\u006C\u0074\u0065\u0072': false,
          "reason": ''
        };
      }
      if (!selectedProvinces['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xe0dfdf)) {
        return {
          "shouldFilter": true,
          '\u0072\u0065\u0061\u0073\u006F\u006E': `对方地区(${_0xe0dfdf})不在筛选范围`
        };
      }
      return {
        '\u0073\u0068\u006F\u0075\u006C\u0064\u0046\u0069\u006C\u0074\u0065\u0072': false,
        '\u0072\u0065\u0061\u0073\u006F\u006E': ''
      };
    }
    function _0xd9857f(message, buttonText = "ko".split("").reverse().join("")) {
      vue['\u0074\u006F\u0061\u0073\u0074\u0065\u0064']['\u0073\u0068\u006F\u0077'](message, {
        '\u0061\u0063\u0074\u0069\u006F\u006E': {
          '\u0074\u0065\u0078\u0074': buttonText,
          '\u006F\u006E\u0043\u006C\u0069\u0063\u006B': (toast, cb) => {
            cb['\u0067\u006F\u0041\u0077\u0061\u0079'](0);
          }
        }
      });
    }
    function _0x4086b(message) {
      chatPage['\u006D\u0073\u0067\u0049\u006E\u0070\u0075\u0074'] = message;
      chatPage['\u006D\u0073\u0067\u0053\u0065\u006E\u0064']();
    }
    window['\u0073\u0065\u006E\u0064\u0043\u0068\u0061\u0074\u004D\u0065\u0073\u0073\u0061\u0067\u0065'] = _0x4086b;
    function _0xce07a() {
      chatPage['\u0073\u006F\u0063\u006B\u0065\u0074\u0073']['\u0065\u006D\u0069\u0074']("dmcsys".split("").reverse().join(""), {
        '\u006D\u0073\u0067': "end",
        "countReceive": false,
        "chatId": chatPage['\u0063\u0068\u0061\u0074\u0049\u0064'],
        "countTalked": false
      });
      chatPage['\u0063\u0068\u0061\u0074\u0053\u0074\u0061\u0074\u0065'] = "\u0053\u0045\u004C\u0046\u005F\u004C\u0045\u0046\u0054";
    }
    function _0x11gg() {
      if (!customAgeEnabled) return;
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0061\u0067\u0065\u004E\u0065\u0077", customAgeValue);
      if (typeof store !== "denifednu".split("").reverse().join("") && store['\u0073\u0065\u0074']) {
        store['\u0073\u0065\u0074']("\u0061\u0067\u0065\u004E\u0065\u0077", customAgeValue);
      }
      var _0xa075cc = 7;
      const _0xe6aa = customAgeValue === "\u0032" ? "\u0031\u0038\u002D\u0032\u0033\u5C81" : "\u0032\u0033\u5C81\u4EE5\u4E0A";
      _0xa075cc = 4;
      console['\u006C\u006F\u0067']("\u005B\u81EA\u5B9A\u4E49\u5E74\u9F84\u005D\u0020\u5DF2\u91CD\u7F6E\u5E74\u9F84\u4E3A\u003A", _0xe6aa);
    }
    function _0x2d2bab() {
      _0x11gg();
      chatPage['\u0073\u006F\u0063\u006B\u0065\u0074\u0073']['\u0065\u006D\u0069\u0074']("dmcsys".split("").reverse().join(""), {
        '\u006D\u0073\u0067': "new",
        "gender": chatPage['\u0067\u0065\u006E\u0064\u0065\u0072'],
        '\u0076\u0069\u0070\u0043\u006F\u0064\u0065': chatPage['\u0076\u0069\u0070\u0043\u006F\u0064\u0065'],
        '\u0061\u0067\u0065': store['\u0067\u0065\u0074']("\u0061\u0067\u0065\u004E\u0065\u0077"),
        "ageWant": store['\u0067\u0065\u0074']("\u0061\u0067\u0065\u0057\u0061\u006E\u0074"),
        '\u0073\u0065\u0063\u0072\u0065\u0074\u0043\u006F\u0064\u0065': chatPage['\u0073\u0065\u0063\u0072\u0065\u0074\u0043\u006F\u0064\u0065'],
        "province": chatPage['\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065'],
        "provinceWant": store['\u0067\u0065\u0074']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0057\u0061\u006E\u0074"),
        '\u0073\u0061\u0076\u0065\u0064\u0049\u0064': chatPage['\u0075\u0073\u0072\u0049\u0064'],
        '\u0069\u0073\u0053\u0068\u006F\u0077\u004C\u006F\u0063\u0061\u0074\u0069\u006F\u006E': false,
        "fp": chatPage['\u0066\u0069\u006E\u0067\u0065\u0072\u0050\u0072\u0069\u006E\u0074\u0073'],
        "phoneNumber": store['\u0067\u0065\u0074'](chatPage['\u0043\u006F\u006E\u0066\u0069\u0067']['\u0053\u0054\u004F\u0052\u0045\u005F\u0050\u0048\u004F\u004E\u0045\u005F\u004E\u0055\u004D\u0042\u0045\u0052']),
        '\u0075\u0073\u0065\u0072\u0050\u0077\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064': store['\u0067\u0065\u0074'](chatPage['\u0043\u006F\u006E\u0066\u0069\u0067']['\u0053\u0054\u004F\u0052\u0045\u005F\u0050\u0041\u0053\u0053\u0057\u004F\u0052\u0044\u005F\u0045\u004E\u0043\u0052\u0059\u0050\u0054\u0045\u0044'])
      });
    }
    let _0xc2_0x221 = true;
    chatPage['\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u0073\u0052\u0075\u006E'] = false;
    chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F'] = "\u5973\u751F";
    setInterval(function () {
      try {
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("]\"dnuof-tsol/.\"=ferh[a".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](btn => btn['\u0072\u0065\u006D\u006F\u0076\u0065']());
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0061\u002E\u0062\u0075\u0074\u0074\u006F\u006E\u002E\u0062\u0075\u0074\u0074\u006F\u006E\u002D\u006C\u0069\u006E\u006B\u002E\u0062\u0075\u0074\u0074\u006F\u006E\u002D\u006E\u0061\u0076\u002E\u0070\u0075\u006C\u006C\u002D\u0072\u0069\u0067\u0068\u0074")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](btn => btn['\u0072\u0065\u006D\u006F\u0076\u0065']());
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("a van-rab. ,a redaeh".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](el => {
          if ((el['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || '')['\u0074\u0072\u0069\u006D']() === "\u5BFB\u4EBA") {
            el['\u0072\u0065\u006D\u006F\u0076\u0065']();
          }
        });
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("trevda.".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](ad => ad['\u0072\u0065\u006D\u006F\u0076\u0065']());
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u002D\u0074\u0065\u0078\u0074")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](el => {
          const text = el['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || '';
          if (text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("ppA\u7EA6\u4E0D\u53D4\u53D4".split("").reverse().join("")) || text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u70B9\u51FB\u83B7\u53D6")) {
            el['\u0072\u0065\u006D\u006F\u0076\u0065']();
          }
        });
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0073\u0079\u0073\u002D\u006D\u0073\u0067\u002D\u0063\u0068\u0061\u0074\u002D\u0065\u006E\u0064\u0020\u003E\u0020\u0064\u0069\u0076\u0020\u003E\u0020\u0064\u0069\u0076")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](el => {
          const text = el['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074'] || '';
          if (text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u5206\u533A")) {
            el['\u0072\u0065\u006D\u006F\u0076\u0065']();
          }
        });
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("retoof-evael.".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](el => el['\u0072\u0065\u006D\u006F\u0076\u0065']());
      } catch (e) {}
      if (!chatPage['\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u0073\u0052\u0075\u006E']) {
        return;
      }
      switch (chatPage['\u0063\u0068\u0061\u0074\u0053\u0074\u0061\u0074\u0065']) {
        case "DERIAPER".split("").reverse().join(""):
        case "DERIAP".split("").reverse().join(""):
          {
            let _0x3a498c = chatPage['\u0070\u0061\u0072\u0074\u006E\u0065\u0072']['\u0073\u0074\u0072\u0047\u0065\u006E\u0064\u0065\u0072'];
            if (blacklistEnabled && chatPage['\u0070\u0061\u0072\u0074\u006E\u0065\u0072']['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064']) {
              var _0xcfebae = 8;
              const _0x285bea = isInBlacklist(chatPage['\u0070\u0061\u0072\u0074\u006E\u0065\u0072']['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064']);
              _0xcfebae = 6;
              if (_0x285bea) {
                console['\u006C\u006F\u0067']("\u005B\u811A\u672C\u005D\u0020\u5BF9\u65B9\u5728\u9ED1\u540D\u5355\u4E2D\uFF0C\u81EA\u52A8\u79BB\u5F00\u003A", _0x285bea['\u0072\u0065\u006D\u0061\u0072\u006B']);
                _0xea3f1b(`🚫 已自动跳过黑名单用户：${_0x285bea['\u0072\u0065\u006D\u0061\u0072\u006B']}`, "\u0077\u0061\u0072\u006E\u0069\u006E\u0067", 2000);
                _0xce07a();
                _0x2d2bab();
                _0xc2_0x221 = true;
                break;
              }
            }
            if (filterUnder18 && _0x12b2b()) {
              console['\u006C\u006F\u0067']("\u5F00\u79BB\u52A8\u81EA\uFF0C\u4E0B\u4EE5\u5C8181\u4E3A\u65B9\u5BF9 ]\u672C\u811A[".split("").reverse().join(""));
              _0xea3f1b("\u5BF9\u65B9\u4E3A\u0031\u0038\u5C81\u4EE5\u4E0B\uFF0C\u81EA\u52A8\u79BB\u5F00", "\u0077\u0061\u0072\u006E\u0069\u006E\u0067", 1500);
              _0xce07a();
              _0x2d2bab();
              _0xc2_0x221 = true;
              break;
            }
            if (filterQingliu && _0x6g48eg()) {
              console['\u006C\u006F\u0067']("\u5F00\u79BB\u52A8\u81EA\uFF0C\u6D41\u6E05\u542B\u5305\u7B7E\u6807\u65B9\u5BF9 ]\u672C\u811A[".split("").reverse().join(""));
              _0xea3f1b("\u5F00\u79BB\u52A8\u81EA\uFF0C\u6D41\u6E05\u542B\u5305\u7B7E\u6807\u65B9\u5BF9".split("").reverse().join(""), "\u0077\u0061\u0072\u006E\u0069\u006E\u0067", 1500);
              _0xce07a();
              _0x2d2bab();
              _0xc2_0x221 = true;
              break;
            }
            if (_0x3a498c == chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F']) {
              const _0xd87fc = _0xb_0xe3d();
              if (_0xd87fc['\u0073\u0068\u006F\u0075\u006C\u0064\u0046\u0069\u006C\u0074\u0065\u0072']) {
                console['\u006C\u006F\u0067'](" ]\u672C\u811A[".split("").reverse().join("") + _0xd87fc['\u0072\u0065\u0061\u0073\u006F\u006E'] + "\uFF0C\u81EA\u52A8\u79BB\u5F00");
                _0xea3f1b(_0xd87fc['\u0072\u0065\u0061\u0073\u006F\u006E'] + "\uFF0C\u81EA\u52A8\u79BB\u5F00", "\u0077\u0061\u0072\u006E\u0069\u006E\u0067", 1500);
                _0xce07a();
                _0x2d2bab();
                _0xc2_0x221 = true;
                break;
              }
            }
            if (_0x3a498c == chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F']) {
              if (_0xc2_0x221) {
                try {
                  let _0x0d43a = AUTO_MSG['\u006C\u0065\u006E\u0067\u0074\u0068'];
                  if (_0x0d43a > 1) {
                    const _0x9_0xcd4 = Math['\u0066\u006C\u006F\u006F\u0072'](Math['\u0072\u0061\u006E\u0064\u006F\u006D']() * _0x0d43a);
                    let selectedMessage = AUTO_MSG[_0x9_0xcd4];
                    var _0xb142b = 12;
                    let messages = selectedMessage['\u0073\u0070\u006C\u0069\u0074']("\u007C")['\u006D\u0061\u0070'](msg => msg['\u0074\u0072\u0069\u006D']());
                    _0xb142b = 3;
                    currentAutoIndex = 0;
                    _0x61f(messages);
                  } else {
                    let selectedMessage = AUTO_MSG[index];
                    let messages = selectedMessage['\u0073\u0070\u006C\u0069\u0074']("\u007C")['\u006D\u0061\u0070'](msg => msg['\u0074\u0072\u0069\u006D']());
                    currentAutoIndex = 0;
                    _0x61f(messages);
                  }
                } catch {}
                _0xea3f1b("\u5230\u914D\u5339\u5DF2".split("").reverse().join("") + chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F'] + "\u5E76\u53D1\u9001\u4FE1\u606F\uFF01", "\u0073\u0075\u0063\u0063\u0065\u0073\u0073", 800);
                startWaitReplyTimer();
                if (aiEnabled && aiApiKey && !aiIsActive) {
                  resetAIChat();
                  startAIChat();
                }
                _0xc2_0x221 = false;
              }
              break;
            }
            _0xce07a();
            _0x2d2bab();
            _0xc2_0x221 = true;
            break;
          }
        case "\u0053\u0045\u004C\u0046\u005F\u004C\u0045\u0046\u0054":
        case "\u0050\u0041\u0052\u0054\u004E\u0045\u0052\u005F\u004C\u0045\u0046\u0054":
          cancelWaitReplyTimer();
          stopAIChat();
          resetAIChat();
          _0x2d2bab();
          _0xc2_0x221 = true;
          break;
      }
    }, 450);
    function _0x61f(messages) {
      if (currentAutoIndex < messages['\u006C\u0065\u006E\u0067\u0074\u0068']) {
        _0x4086b(messages[currentAutoIndex]);
        currentAutoIndex++;
        setTimeout(() => {
          _0x61f(messages);
        }, 2000);
      }
    }
    function _0x2e315g() {
      try {
        const _0xe9d98e = QQ['\u0074\u0072\u0069\u006D']();
        if (new RegExp("$}21,5{d\\^".split("").reverse().join(""), "")['\u0074\u0065\u0073\u0074'](_0xe9d98e)) {
          var _0x2929ff = 2;
          let _0x6f773g = _0xe9d98e['\u006C\u0065\u006E\u0067\u0074\u0068'];
          _0x2929ff = 14;
          if (_0x6f773g > 6 && _0x6f773g <= 10) {
            setTimeout(() => _0x4086b(_0xe9d98e['\u0073\u0075\u0062\u0073\u0074\u0072'](0, 3)), 1000);
            setTimeout(() => _0x4086b(_0xe9d98e['\u0073\u0075\u0062\u0073\u0074\u0072'](3, 3)), 2000);
            if (_0x6f773g == 10) {
              setTimeout(() => _0x4086b(_0xe9d98e['\u0073\u0075\u0062\u0073\u0074\u0072'](6, 3)), 3000);
              setTimeout(() => _0x4086b(_0xe9d98e['\u0073\u0075\u0062\u0073\u0074\u0072'](9)), 3500);
            } else {
              setTimeout(() => _0x4086b(_0xe9d98e['\u0073\u0075\u0062\u0073\u0074\u0072'](6)), 3000);
            }
          } else {
            _0x4086b(_0xe9d98e);
          }
        } else {
          _0x4086b(_0xe9d98e);
        }
      } catch (error) {
        console['\u0065\u0072\u0072\u006F\u0072']("\u53D1\u9001\u0051\u0051\u53F7\u7801\u5931\u8D25\uFF1A", error);
      }
    }
    if (document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u006C\u006F\u0061\u0074\u0069\u006E\u0067\u0042\u0074\u006E")) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u006C\u006F\u0061\u0074\u0069\u006E\u0067\u0042\u0074\u006E")?.remove();
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u006F\u0076\u0065\u0072\u006C\u0061\u0079")?.remove();
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006F\u006E\u0074\u0072\u006F\u006C\u0050\u0061\u006E\u0065\u006C")?.remove();
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u006F\u0061\u0073\u0074\u0043\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072")?.remove();
      var _0x4gfa = 11;
      const _0xfbead = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0066\u006C\u006F\u0061\u0074\u0069\u006E\u0067\u0050\u0061\u006E\u0065\u006C\u0053\u0074\u0079\u006C\u0065");
      _0x4gfa = 17;
      if (_0xfbead) _0xfbead['\u0072\u0065\u006D\u006F\u0076\u0065']();
    }
    var _0x8b_0x4e7 = 9;
    const _0xegc = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("elyts".split("").reverse().join(""));
    _0x8b_0x4e7 = 8;
    _0xegc['\u0069\u0064'] = "\u0066\u006C\u006F\u0061\u0074\u0069\u006E\u0067\u0050\u0061\u006E\u0065\u006C\u0053\u0074\u0079\u006C\u0065";
    _0xegc['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `
            /* 悬浮按钮 */
            .floating-btn {
                position: fixed;
                bottom: 15%;
                right: 20px;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 13px;
                cursor: pointer;
                box-shadow: 0 8px 20px rgba(118, 75, 162, 0.4);
                z-index: 10000;
                user-select: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-align: center;
                line-height: 1.2;
                font-weight: 600;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                border: 2px solid rgba(255, 255, 255, 0.2);
            }
            
            .floating-btn:hover {
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 12px 25px rgba(118, 75, 162, 0.5);
            }
            
            .floating-btn:active {
                transform: translateY(1px) scale(0.95);
            }
            
            /* 控制面板 */
            .control-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9);
                width: 280px;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                z-index: 9999;
                display: none;
                padding: 16px;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid rgba(0, 0, 0, 0.05);
            }
            
            .control-panel.show {
                display: block;
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            
            /* 面板头部 */
            .panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
                border-bottom: 1px solid rgba(0,0,0,0.05);
                padding-bottom: 12px;
            }
            
            .panel-title {
                font-size: 17px;
                font-weight: 700;
                color: #1a1a1a;
                letter-spacing: -0.5px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .panel-close {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: #f5f5f7;
                border: none;
                color: #888;
                font-size: 18px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }
            
            .panel-close:hover {
                background: #eee;
                color: #333;
                transform: rotate(90deg);
            }
            
            /* 列表项 - 增加cp-前缀防止冲突 */
            .cp-list-block {
                max-height: 50vh;
                overflow-y: auto;
            }
            
            .cp-list-block ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .cp-item-content {
                padding: 10px 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.04);
                display: block; /* 确保是块级元素 */
            }
            
            .cp-item-content:last-child {
                border-bottom: none;
            }
            
            .cp-item-inner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                position: relative; /* 防止绝对定位元素跑偏 */
            }
            
            .cp-item-title {
                font-size: 14px;
                font-weight: 500;
                color: #333;
                display: flex;
                align-items: center;
                gap: 6px;
                flex: 1; /* 占据剩余空间 */
                margin-right: 12px; /* 与右侧开关保持距离 */
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .cp-item-input {
                flex-shrink: 0; /* 防止被压缩 */
            }
            
            /* 开关样式优化 */
            .cp-label-switch {
                position: relative;
                display: inline-block;
                width: 46px;
                height: 26px;
                vertical-align: middle;
            }
            
            .cp-label-switch input {
                display: none;
            }
            
            .cp-checkbox {
                width: 100%;
                height: 100%;
                background: #e9e9eb;
                border-radius: 30px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                cursor: pointer;
                display: block;
            }
            
            .cp-checkbox:before {
                content: '';
                position: absolute;
                width: 22px;
                height: 22px;
                background: white;
                border-radius: 50%;
                top: 2px;
                left: 2px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            input:checked + .cp-checkbox {
                background: #34c759;
            }
            
            input:checked + .cp-checkbox:before {
                transform: translateX(20px);
            }
            
            /* 自定义年龄单选按钮样式 */
            .cp-age-options {
                background: #f8f9fa;
                border-radius: 10px;
                margin: 4px 0;
                padding: 8px 0 !important;
            }
            
            .cp-radio-label {
                display: flex;
                align-items: center;
                gap: 6px;
                cursor: pointer;
                font-size: 13px;
                color: #333;
                transition: all 0.2s;
            }
            
            .cp-radio-label input[type="radio"] {
                appearance: none;
                -webkit-appearance: none;
                width: 18px;
                height: 18px;
                border: 2px solid #d1d1d6;
                border-radius: 50%;
                background: white;
                cursor: pointer;
                transition: all 0.2s;
                position: relative;
            }
            
            .cp-radio-label input[type="radio"]:checked {
                border-color: #34c759;
                background: #34c759;
            }
            
            .cp-radio-label input[type="radio"]:checked::after {
                content: '';
                position: absolute;
                width: 6px;
                height: 6px;
                background: white;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            .cp-radio-label:hover input[type="radio"] {
                border-color: #34c759;
            }
            
            .cp-radio-text {
                font-weight: 500;
            }
            
            /* 超时时间输入框样式 */
            .cp-timeout-label {
                font-size: 14px;
                color: #666;
            }
            
            .cp-timeout-input {
                width: 60px;
                padding: 6px 8px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
                text-align: center;
                background: #f8f8f8;
                transition: all 0.2s;
            }
            
            .cp-timeout-input:focus {
                outline: none;
                border-color: #007AFF;
                background: #fff;
            }
            
            .cp-wait-reply-options {
                padding: 8px 0 !important;
            }
            
            /* 选中状态高亮 */
            .cp-radio-label input[type="radio"]:checked + .cp-radio-text {
                color: #34c759;
                font-weight: 600;
            }
            
            .cp-radio-label.active {
                background: rgba(52, 199, 89, 0.1);
                padding: 4px 10px;
                border-radius: 6px;
            }
            
            /* 按钮组 */
            .btn-group {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                margin-top: 12px;
            }
            
            .contact-btn {
                background: linear-gradient(135deg, #007AFF 0%, #0051D4 100%);
                color: white;
                border: none;
                padding: 10px 8px;
                border-radius: 10px;
                font-size: 13px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
                width: 100%;
                box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);
            }
            
            .contact-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(0, 122, 255, 0.3);
            }
            
            .contact-btn:active {
                transform: translateY(0);
            }
            
            #btn_vip_card {
                background: linear-gradient(135deg, #FF9500 0%, #FF5E3A 100%);
                box-shadow: 0 4px 12px rgba(255, 94, 58, 0.2);
            }
            
            #btn_vip_card:hover {
                box-shadow: 0 6px 16px rgba(255, 94, 58, 0.3);
            }
            
            /* 底部版权 */
            .panel-footer {
                margin-top: 12px;
                padding-top: 10px;
                border-top: 1px solid rgba(0, 0, 0, 0.04);
                font-size: 11px;
                color: #999;
                display: flex;
                justify-content: space-between;
                font-weight: 500;
            }
            
            /* 遮罩层 */
            .overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.4);
                backdrop-filter: blur(4px);
                z-index: 9998;
                display: none;
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            .overlay.show {
                display: block;
                opacity: 1;
            }
            
            /* Toast 样式 */
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10001;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .toast {
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(10px);
                color: white;
                padding: 10px 14px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                font-size: 13px;
                max-width: 220px;
                word-break: break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                animation: toastSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                gap: 12px;
                font-weight: 500;
            }
            
            .toast.success { border-left: 4px solid #34c759; }
            .toast.error { border-left: 4px solid #ff3b30; }
            .toast.warning { border-left: 4px solid #ff9500; }
            .toast.info { border-left: 4px solid #007aff; }
            
            .toast.fade-out {
                animation: toastSlideOut 0.3s forwards;
            }
            
            @keyframes toastSlideIn {
                from { opacity: 0; transform: translateX(100px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes toastSlideOut {
                from { opacity: 1; transform: translateX(0); }
                to { opacity: 0; transform: translateX(100px); }
            }
            
            .toast-icon { font-size: 18px; }
            
            /* 黑名单弹窗样式 */
            .blacklist-modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9);
                width: 290px;
                max-height: 70vh;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(20px);
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
                z-index: 10002;
                display: none;
                flex-direction: column;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .blacklist-modal.show {
                display: flex;
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            
            .bl-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 14px 16px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            }
            
            .bl-title {
                font-size: 16px;
                font-weight: 700;
                color: #1a1a1a;
            }
            
            .bl-close {
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background: #f5f5f7;
                border: none;
                color: #888;
                font-size: 16px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }
            
            .bl-close:hover {
                background: #eee;
                color: #333;
            }
            
            .bl-list {
                flex: 1;
                overflow-y: auto;
                padding: 8px 14px;
                max-height: 280px;
            }
            
            .bl-empty {
                text-align: center;
                color: #999;
                padding: 30px 16px;
                font-size: 13px;
            }
            
            .bl-item {
                background: #f8f8fa;
                border-radius: 10px;
                padding: 10px 12px;
                margin-bottom: 8px;
                position: relative;
            }
            
            .bl-item-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 6px;
            }
            
            .bl-item-remark {
                font-size: 14px;
                font-weight: 600;
                color: #333;
                flex: 1;
                word-break: break-all;
            }
            
            .bl-item-actions {
                display: flex;
                gap: 6px;
                flex-shrink: 0;
            }
            
            .bl-item-btn {
                width: 24px;
                height: 28px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }
            
            .bl-item-btn.edit {
                background: #e3f2fd;
                color: #1976d2;
            }
            
            .bl-item-btn.delete {
                background: #ffebee;
                color: #d32f2f;
            }
            
            .bl-item-btn:hover {
                transform: scale(1.1);
            }
            
            .bl-item-info {
                font-size: 11px;
                color: #888;
                display: flex;
                gap: 10px;
            }
            
            .bl-footer {
                padding: 12px 14px;
                border-top: 1px solid rgba(0, 0, 0, 0.06);
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .bl-count {
                font-size: 12px;
                color: #666;
                text-align: center;
            }
            
            .bl-actions {
                display: flex;
                gap: 8px;
            }
            
            .bl-btn {
                flex: 1;
                padding: 8px;
                border-radius: 8px;
                border: none;
                font-size: 12px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;
            }
            
            .bl-btn.export {
                background: #e8f5e9;
                color: #2e7d32;
            }
            
            .bl-btn.import {
                background: #e3f2fd;
                color: #1565c0;
            }
            
            .bl-btn.clear {
                background: #ffebee;
                color: #c62828;
            }
            
            .bl-btn:hover {
                transform: translateY(-1px);
                filter: brightness(0.95);
            }
            
            /* 拉黑确认弹窗 */
            .blacklist-confirm {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9);
                width: 260px;
                background: white;
                border-radius: 14px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
                z-index: 10003;
                display: none;
                opacity: 0;
                transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            
            .blacklist-confirm.show {
                display: block;
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            
            .bc-header {
                padding: 16px 16px 10px;
                text-align: center;
            }
            
            .bc-title {
                font-size: 15px;
                font-weight: 700;
                color: #1a1a1a;
                margin-bottom: 6px;
            }
            
            .bc-info {
                font-size: 12px;
                color: #666;
            }
            
            .bc-body {
                padding: 0 16px 14px;
            }
            
            .bc-label {
                font-size: 12px;
                color: #888;
                margin-bottom: 6px;
            }
            
            .bc-input {
                width: 100%;
                padding: 10px;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                font-size: 13px;
                box-sizing: border-box;
                transition: border-color 0.2s;
            }
            
            .bc-input:focus {
                outline: none;
                border-color: #007aff;
            }
            
            .bc-footer {
                display: flex;
                border-top: 1px solid #eee;
            }
            
            .bc-btn {
                flex: 1;
                padding: 12px;
                border: none;
                background: none;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.2s;
            }
            
            .bc-btn:first-child {
                border-right: 1px solid #eee;
                color: #666;
            }
            
            .bc-btn:last-child {
                color: #ff3b30;
            }
            
            .bc-btn:hover {
                background: #f5f5f5;
            }
            
            /* 优化后的控制面板 */
            .control-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.95);
                background: #fff;
                border-radius: 16px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
                z-index: 10001;
                width: 320px;
                max-height: 85vh;
                overflow-y: auto;
                display: none;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            
            .control-panel.show {
                display: block;
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            
            /* 面板头部 */
            .panel-header {
                padding: 16px 20px;
                background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                border-bottom: 1px solid #e2e8f0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: sticky;
                top: 0;
                z-index: 10;
            }
            
            .panel-title {
                font-size: 16px;
                font-weight: 700;
                color: #1e293b;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .panel-title::before {
                content: "🛠️";
                font-size: 18px;
            }
            
            .panel-close {
                background: rgba(0, 0, 0, 0.05);
                border: none;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                font-size: 18px;
                line-height: 28px;
                text-align: center;
                cursor: pointer;
                color: #64748b;
                transition: all 0.2s;
            }
            
            .panel-close:hover {
                background: #fee2e2;
                color: #ef4444;
            }
            
            /* 列表块 */
            .cp-list-block {
                padding: 10px 0;
            }
            
            .cp-list-block ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .cp-list-block li {
                border-bottom: 1px solid #f1f5f9;
            }
            
            .cp-list-block li:last-child {
                border-bottom: none;
            }
            
            /* 列表项 */
            .cp-item-content {
                padding: 12px 20px;
                transition: background 0.2s;
            }
            
            .cp-item-content:hover {
                background: #f8fafc;
            }
            
            .cp-item-inner {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .cp-item-title {
                font-size: 14px;
                color: #334155;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            /* 开关样式优化 */
            .cp-label-switch {
                position: relative;
                display: inline-block;
                width: 44px;
                height: 24px;
            }
            
            .cp-label-switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            
            .cp-checkbox {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #cbd5e1;
                transition: .3s;
                border-radius: 24px;
            }
            
            .cp-checkbox:before {
                position: absolute;
                content: "";
                height: 20px;
                width: 20px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                transition: .3s cubic-bezier(0.34, 1.56, 0.64, 1);
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            input:checked + .cp-checkbox {
                background-color: #2563eb;
            }
            
            input:checked + .cp-checkbox:before {
                transform: translateX(20px);
            }
            
            /* Tab 分栏样式 */
            .cp-tabs {
                display: flex;
                border-bottom: 1px solid #e2e8f0;
                background: #f8fafc;
            }
            
            .cp-tab-item {
                flex: 1;
                text-align: center;
                padding: 12px 0;
                font-size: 14px;
                font-weight: 600;
                color: #64748b;
                cursor: pointer;
                position: relative;
                transition: all 0.3s;
            }
            
            .cp-tab-item.active {
                color: #2563eb;
                background: #fff;
            }
            
            .cp-tab-item.active::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: #2563eb;
            }
            
            .cp-tab-content {
                display: none;
                padding-top: 5px;
            }
            
            .cp-tab-content.active {
                display: block;
                animation: fadeIn 0.2s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(2px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* AI、等待回复、省份选项区域 */
            .cp-wait-reply-options, .cp-ai-options, .cp-province-options {
                background: #f8fafc;
                margin: 0 10px 10px;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
                padding: 10px 15px !important;
            }
            
            /* 输入框样式 */
            .cp-timeout-input {
                width: 60px;
                padding: 4px 8px;
                border: 1px solid #cbd5e1;
                border-radius: 6px;
                text-align: center;
                font-size: 13px;
                color: #334155;
            }
            
            .cp-timeout-input:focus {
                outline: none;
                border-color: #2563eb;
                box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
            }
            
            .cp-timeout-label {
                font-size: 13px;
                color: #64748b;
            }
            
            /* 设置按钮 */
            #btn_ai_settings {
                width: 100%;
                padding: 8px 0;
                background: #fff;
                color: #2563eb;
                border: 1px solid #2563eb;
                border-radius: 8px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
            }
            
            #btn_ai_settings:hover {
                background: #eff6ff;
                transform: translateY(-1px);
            }
            
            /* 黑名单遮罩 */
            .bl-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 10001;
                display: none;
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            .bl-overlay.show {
                display: block;
                opacity: 1;
            }
            
            /* AI设置/省份选择弹窗 */
            .ai-settings-modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9);
                background: #fff;
                border-radius: 16px;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
                z-index: 10002;
                width: 340px;
                max-height: 80vh;
                overflow: hidden;
                display: none;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            
            .ai-settings-modal.show {
                display: block;
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            
            .ai-header {
                padding: 16px 20px;
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .ai-title {
                font-size: 16px;
                font-weight: 700;
                color: #fff;
            }
            
            .ai-close {
                background: rgba(255, 255, 255, 0.2);
                border: none;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                font-size: 18px;
                line-height: 28px;
                text-align: center;
                cursor: pointer;
                color: #fff;
                transition: all 0.2s;
            }
            
            .ai-close:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            
            .ai-body {
                padding: 20px;
                max-height: 50vh;
                overflow-y: auto;
            }
            
            .ai-form-group {
                margin-bottom: 16px;
            }
            
            .ai-label {
                display: block;
                font-size: 13px;
                font-weight: 600;
                color: #374151;
                margin-bottom: 6px;
            }
            
            .ai-input, .ai-textarea {
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                font-size: 14px;
                transition: border-color 0.2s;
                box-sizing: border-box;
            }
            
            .ai-input:focus, .ai-textarea:focus {
                outline: none;
                border-color: #3b82f6;
            }
            
            .ai-textarea {
                min-height: 100px;
                resize: vertical;
            }
            
            .ai-hint {
                font-size: 11px;
                color: #9ca3af;
                margin-top: 4px;
            }
            
            .ai-footer {
                padding: 16px 20px;
                background: #f9fafb;
                display: flex;
                gap: 10px;
                border-top: 1px solid #e5e7eb;
            }
            
            .ai-btn {
                flex: 1;
                padding: 10px 16px;
                border: none;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }
            
            .ai-btn.cancel {
                background: #f3f4f6;
                color: #6b7280;
            }
            
            .ai-btn.cancel:hover {
                background: #e5e7eb;
            }
            
            .ai-btn.save {
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                color: #fff;
            }
            
            .ai-btn.save:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
            }
            
            /* 隐藏的文件输入 */
            #blacklistFileInput {
                display: none;
            }
        `;
    document['\u0068\u0065\u0061\u0064']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xegc);
    var _0x2bef4a = 7;
    const _0x10_0xf61 = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
    _0x2bef4a = 7;
    _0x10_0xf61['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "ntb-gnitaolf".split("").reverse().join("");
    _0x10_0xf61['\u0069\u0064'] = "\u0066\u006C\u006F\u0061\u0074\u0069\u006E\u0067\u0042\u0074\u006E";
    _0x10_0xf61['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = "\u63A7\u5236\u003C\u0062\u0072\u003E\u9762\u677F";
    _0x10_0xf61['\u0074\u0069\u0074\u006C\u0065'] = "\u52A8\u62D6\u6309\u957F | \u677F\u9762\u5236\u63A7\u5F00\u6253\u51FB\u70B9".split("").reverse().join("");
    var _0xda61af;
    let _0x4f656d = false;
    _0xda61af = 7;
    _0xcda9aa = 0;
    var _0xd5ab;
    _0x85e7ee = 0;
    _0xd5ab = 5;
    var _0xe7g4ac = 12;
    _0x61189a = 0;
    _0xe7g4ac = 9;
    _0xcdf52d = 0;
    let _0x0e9cf = false;
    const _0xga3g = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");
    _0xga3g['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "yalrevo".split("").reverse().join("");
    _0xga3g['\u0069\u0064'] = "\u006F\u0076\u0065\u0072\u006C\u0061\u0079";
    const _0xbdc59a = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");
    _0xbdc59a['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u0063\u006F\u006E\u0074\u0072\u006F\u006C\u002D\u0070\u0061\u006E\u0065\u006C";
    _0xbdc59a['\u0069\u0064'] = "lenaPlortnoc".split("").reverse().join("");
    _0xbdc59a['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
            <div class="panel-header">
                <div class="panel-title">脚本控制面板</div>
                <button class="panel-close" id="panelClose">×</button>
            </div>
            
            <div class="cp-list-block">
                <!-- Tab 导航 -->
                <div class="cp-tabs">
                    <div class="cp-tab-item active" data-tab="basic">基础设置</div>
                    <div class="cp-tab-item" data-tab="advanced">高级功能</div>
                </div>

                <ul>
                    <li>
                        <!-- 基础设置 Tab -->
                        <div class="cp-tab-content active" id="tab_basic">
                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">⚡ 脚本启动</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_script">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title" id="txt_match">🚺 仅女生</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_match">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">🏷️ 过滤清流</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_qingliu" checked>
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">🔞 过滤未成年</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_under18">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">🚫 启用黑名单</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_blacklist" checked>
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 高级功能 Tab -->
                        <div class="cp-tab-content" id="tab_advanced">
                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">🤖 AI托管</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_ai">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-item-content cp-ai-options" id="ai_options" style="display:none;">
                                <div class="cp-item-inner" style="justify-content:center;">
                                    <button id="btn_ai_settings" style="padding:8px 16px; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); color:#fff; border:none; border-radius:8px; font-size:13px; cursor:pointer;">⚙️ 配置AI参数</button>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">⏱️ 等待回复</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_wait_reply">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-item-content cp-wait-reply-options" id="wait_reply_options" style="display:none;">
                                <div class="cp-item-inner" style="justify-content:center; gap:8px;">
                                    <span class="cp-timeout-label">超时时间:</span>
                                    <input type="number" id="input_wait_timeout" class="cp-timeout-input" value="30" min="10" max="120">
                                    <span class="cp-timeout-label">秒</span>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">📍 省份筛选</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_province">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-item-content cp-province-options" id="province_options" style="display:none;">
                                <div style="padding:5px 0;">
                                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                        <span style="font-size:12px; color:#64748b;">已选: <span id="province_count">0</span> 个省份</span>
                                        <div style="display:flex; gap:6px;">
                                            <button id="btn_select_all_province" style="padding:4px 8px; font-size:11px; background:#eff6ff; color:#2563eb; border:1px solid #2563eb; border-radius:4px; cursor:pointer;">全选</button>
                                            <button id="btn_clear_province" style="padding:4px 8px; font-size:11px; background:#fef2f2; color:#ef4444; border:1px solid #ef4444; border-radius:4px; cursor:pointer;">清空</button>
                                        </div>
                                    </div>
                                    <button id="btn_province_selector" style="width:100%; padding:8px; background:#fff; border:1px solid #e2e8f0; border-radius:8px; font-size:13px; cursor:pointer; color:#334155;">点击选择省份 ▼</button>
                                    <div style="margin-top:10px; display:flex; align-items:center; justify-content:space-between;">
                                        <span style="font-size:12px; color:#64748b;">过滤不显示地区</span>
                                        <label class="cp-label-switch" style="transform:scale(0.85);">
                                            <input tabindex="-1" type="checkbox" id="ckb_no_region">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="cp-item-content">
                                <div class="cp-item-inner">
                                    <div class="cp-item-title">🎂 自定义年龄</div>
                                    <div class="cp-item-input">
                                        <label class="cp-label-switch">
                                            <input tabindex="-1" type="checkbox" id="ckb_custom_age">
                                            <div class="cp-checkbox"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="cp-item-content cp-age-options" id="custom_age_options" style="display:none;">
                                <div class="cp-item-inner" style="justify-content:center; gap:24px;">
                                    <label class="cp-radio-label">
                                        <input type="radio" name="custom_age" value="2" checked>
                                        <span class="cp-radio-text">18-23岁</span>
                                    </label>
                                    <label class="cp-radio-label">
                                        <input type="radio" name="custom_age" value="3">
                                        <span class="cp-radio-text">23岁以上</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="btn-group">
                <button class="contact-btn" id="btn_contact">📲 发送联系方式</button>
                <button class="contact-btn" id="btn_vip_card">💳 VIP卡包</button>
            </div>
            
            <div class="btn-group">
                <button class="contact-btn" id="btn_blacklist_add" style="background: linear-gradient(135deg, #ff3b30 0%, #ff6b6b 100%); box-shadow: 0 4px 12px rgba(255, 59, 48, 0.2);">🔒 拉黑对方</button>
                <button class="contact-btn" id="btn_blacklist_manage" style="background: linear-gradient(135deg, #5856d6 0%, #af52de 100%); box-shadow: 0 4px 12px rgba(88, 86, 214, 0.2);">📋 管理黑名单</button>
            </div>
            
            <div class="panel-footer">
                <span>© 驭师69号</span>
                <span>V1.0.6</span>
            </div>
        `;
    const _0x46c54a = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");
    _0x46c54a['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "reniatnoc-tsaot".split("").reverse().join("");
    _0x46c54a['\u0069\u0064'] = "\u0074\u006F\u0061\u0073\u0074\u0043\u006F\u006E\u0074\u0061\u0069\u006E\u0065\u0072";
    var _0x80c7e = 6;
    const _0x6a_0x46g = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
    _0x80c7e = 2;
    _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "yalrevo-lb".split("").reverse().join("");
    _0x6a_0x46g['\u0069\u0064'] = "yalrevOlb".split("").reverse().join("");
    var _0xcbd = 3;
    const _0x3d_0xf84 = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
    _0xcbd = 7;
    _0x3d_0xf84['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u0062\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074\u002D\u006D\u006F\u0064\u0061\u006C";
    _0x3d_0xf84['\u0069\u0064'] = "ladoMtsilkcalb".split("").reverse().join("");
    _0x3d_0xf84['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
        <div class="bl-header">
            <div class="bl-title">📋 黑名单管理</div>
            <button class="bl-close" id="blClose">×</button>
        </div>
        <div class="bl-list" id="blList"></div>
        <div class="bl-footer">
            <div class="bl-count" id="blCount">共 0 人</div>
            <div class="bl-actions">
                <button class="bl-btn export" id="blExport">📤 导出</button>
                <button class="bl-btn import" id="blImport">📥 导入</button>
                <button class="bl-btn clear" id="blClear">🗑️ 清空</button>
            </div>
        </div>
    `;
    const _0x86dbg = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
    _0x86dbg['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "mrifnoc-tsilkcalb".split("").reverse().join("");
    _0x86dbg['\u0069\u0064'] = "\u0062\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074\u0043\u006F\u006E\u0066\u0069\u0072\u006D";
    _0x86dbg['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
        <div class="bc-header">
            <div class="bc-title">🚫 添加到黑名单</div>
            <div class="bc-info" id="bcInfo">对方: 未知</div>
        </div>
        <div class="bc-body">
            <div class="bc-label">备注原因（可选）:</div>
            <input type="text" class="bc-input" id="bcRemark" placeholder="如：广告党、骚扰者...">
        </div>
        <div class="bc-footer">
            <button class="bc-btn" id="bcCancel">取消</button>
            <button class="bc-btn" id="bcConfirm">确认拉黑</button>
        </div>
    `;
    var _0xg6f3b = 7;
    const _0x1d223b = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
    _0xg6f3b = 12;
    _0x1d223b['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u0061\u0069\u002D\u0073\u0065\u0074\u0074\u0069\u006E\u0067\u0073\u002D\u006D\u006F\u0064\u0061\u006C";
    _0x1d223b['\u0069\u0064'] = "ladoMsgnitteSia".split("").reverse().join("");
    _0x1d223b['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
        <div class="ai-header">
            <div class="ai-title">🤖 AI设置</div>
            <button class="ai-close" id="aiClose">×</button>
        </div>
        <div class="ai-body">
            <div class="ai-field">
                <label class="ai-label">API地址</label>
                <input type="text" class="ai-input" id="aiEndpointInput" placeholder="https://api.siliconflow.cn/v1/chat/completions">
                <div class="ai-hint">兼容OpenAI格式的API地址</div>
            </div>
            <div class="ai-field">
                <label class="ai-label">API Key</label>
                <input type="password" class="ai-input" id="aiKeyInput" placeholder="sk-xxx...">
                <div class="ai-hint">API密钥，将安全存储在本地</div>
            </div>
            <div class="ai-field">
                <label class="ai-label">模型名称</label>
                <input type="text" class="ai-input" id="aiModelInput" placeholder="如: Qwen/Qwen2.5-7B-Instruct">
                <div class="ai-hint">API支持的模型名称</div>
            </div>
            <div class="ai-field">
                <label class="ai-label">系统提示词</label>
                <textarea class="ai-textarea" id="aiPromptInput" placeholder="设定AI的角色和行为规则..."></textarea>
                <div class="ai-hint">设定AI的人设、回复风格和行为准则</div>
            </div>
        </div>
        <div class="ai-footer">
            <button class="ai-btn cancel" id="aiCancel">取消</button>
            <button class="ai-btn save" id="aiSave">保存设置</button>
        </div>
    `;
    var _0xf1ea = 8;
    const _0x8230af = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
    _0xf1ea = 3;
    _0x8230af['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u0061\u0069\u002D\u0073\u0065\u0074\u0074\u0069\u006E\u0067\u0073\u002D\u006D\u006F\u0064\u0061\u006C";
    _0x8230af['\u0069\u0064'] = "\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u004D\u006F\u0064\u0061\u006C";
    _0x8230af['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
        <div class="ai-header" style="background:linear-gradient(135deg, #10b981, #059669);">
            <div class="ai-title">📍 选择省份</div>
            <button class="ai-close" id="provinceClose">×</button>
        </div>
        <div class="ai-body" style="padding:15px;">
            <div id="provinceGrid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;"></div>
        </div>
        <div class="ai-footer">
            <button class="ai-btn cancel" id="provinceCancel">取消</button>
            <button class="ai-btn save" id="provinceSave" style="background:linear-gradient(135deg, #10b981, #059669);">确定选择</button>
        </div>
    `;
    var _0xa3857b = 4;
    const _0xd8e5af = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0069\u006E\u0070\u0075\u0074");
    _0xa3857b = 5;
    _0xd8e5af['\u0074\u0079\u0070\u0065'] = "elif".split("").reverse().join("");
    _0xd8e5af['\u0069\u0064'] = "tupnIeliFtsilkcalb".split("").reverse().join("");
    _0xd8e5af['\u0061\u0063\u0063\u0065\u0070\u0074'] = "nosj.".split("").reverse().join("");
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x10_0xf61);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xga3g);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xbdc59a);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x46c54a);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x6a_0x46g);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x3d_0xf84);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x86dbg);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x1d223b);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x8230af);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xd8e5af);
    function _0xag7aa() {
      _0xbdc59a['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0073\u0068\u006F\u0077");
      _0xga3g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("wohs".split("").reverse().join(""));
    }
    function _0x5226f() {
      _0xbdc59a['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
      _0xga3g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
    }
    _0x10_0xf61['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodesuom".split("").reverse().join(""), function (e) {
      _0x4f656d = true;
      _0x0e9cf = false;
      _0xcda9aa = e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058'];
      _0x85e7ee = e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059'];
      const _0x7fc = _0x10_0xf61['\u0067\u0065\u0074\u0042\u006F\u0075\u006E\u0064\u0069\u006E\u0067\u0043\u006C\u0069\u0065\u006E\u0074\u0052\u0065\u0063\u0074']();
      _0x61189a = _0x7fc['\u006C\u0065\u0066\u0074'];
      _0xcdf52d = _0x7fc['\u0074\u006F\u0070'];
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0063\u0075\u0072\u0073\u006F\u0072'] = "\u0067\u0072\u0061\u0062\u0062\u0069\u006E\u0067";
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = "8.0".split("").reverse().join("");
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E'] = "\u006E\u006F\u006E\u0065";
      e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
      e['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();
    });
    document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("evomesuom".split("").reverse().join(""), function (e) {
      if (!_0x4f656d) return;
      const _0x8f1dc = e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058'] - _0xcda9aa;
      var _0xb8bfc;
      const _0xcfe = e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059'] - _0x85e7ee;
      _0xb8bfc = "fkcffc".split("").reverse().join("");
      if (Math['\u0061\u0062\u0073'](_0x8f1dc) > 5 || Math['\u0061\u0062\u0073'](_0xcfe) > 5) _0x0e9cf = true;
      let _0x1ea3c = _0x61189a + _0x8f1dc;
      let _0x4e7a = _0xcdf52d + _0xcfe;
      const _0x5b_0xc88 = window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'] - _0x10_0xf61['\u006F\u0066\u0066\u0073\u0065\u0074\u0057\u0069\u0064\u0074\u0068'];
      var _0x4b869e = 0;
      const _0xd761b = window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074'] - _0x10_0xf61['\u006F\u0066\u0066\u0073\u0065\u0074\u0048\u0065\u0069\u0067\u0068\u0074'];
      _0x4b869e = 9;
      _0x1ea3c = Math['\u006D\u0061\u0078'](0, Math['\u006D\u0069\u006E'](_0x1ea3c, _0x5b_0xc88));
      _0x4e7a = Math['\u006D\u0061\u0078'](0, Math['\u006D\u0069\u006E'](_0x4e7a, _0xd761b));
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'] = _0x1ea3c + "xp".split("").reverse().join("");
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070'] = _0x4e7a + "\u0070\u0078";
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0072\u0069\u0067\u0068\u0074'] = "\u0061\u0075\u0074\u006F";
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0062\u006F\u0074\u0074\u006F\u006D'] = "\u0061\u0075\u0074\u006F";
      e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    });
    document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("puesuom".split("").reverse().join(""), function (e) {
      if (_0x4f656d) {
        _0x4f656d = false;
        _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0063\u0075\u0072\u0073\u006F\u0072'] = "\u0067\u0072\u0061\u0062";
        _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = "\u0031";
        _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E'] = "\u0061\u006C\u006C\u0020\u0030\u002E\u0033\u0073\u0020\u0065\u0061\u0073\u0065";
        if (!_0x0e9cf) _0xag7aa();
      }
    });
    _0x10_0xf61['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("tratshcuot".split("").reverse().join(""), function (e) {
      _0x4f656d = true;
      _0x0e9cf = false;
      const _0x4f_0x125 = e['\u0074\u006F\u0075\u0063\u0068\u0065\u0073'][0];
      _0xcda9aa = _0x4f_0x125['\u0063\u006C\u0069\u0065\u006E\u0074\u0058'];
      _0x85e7ee = _0x4f_0x125['\u0063\u006C\u0069\u0065\u006E\u0074\u0059'];
      var _0xbb25a = 9;
      const _0x52b6f = _0x10_0xf61['\u0067\u0065\u0074\u0042\u006F\u0075\u006E\u0064\u0069\u006E\u0067\u0043\u006C\u0069\u0065\u006E\u0074\u0052\u0065\u0063\u0074']();
      _0xbb25a = 11;
      _0x61189a = _0x52b6f['\u006C\u0065\u0066\u0074'];
      _0xcdf52d = _0x52b6f['\u0074\u006F\u0070'];
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = "8.0".split("").reverse().join("");
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E'] = "enon".split("").reverse().join("");
      e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    }, {
      "passive": false
    });
    document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("evomhcuot".split("").reverse().join(""), function (e) {
      if (!_0x4f656d) return;
      const _0x29f4a = e['\u0074\u006F\u0075\u0063\u0068\u0065\u0073'][0];
      var _0xcb97g = 6;
      const _0xb1ag9c = _0x29f4a['\u0063\u006C\u0069\u0065\u006E\u0074\u0058'] - _0xcda9aa;
      _0xcb97g = 8;
      const _0x64d82d = _0x29f4a['\u0063\u006C\u0069\u0065\u006E\u0074\u0059'] - _0x85e7ee;
      if (Math['\u0061\u0062\u0073'](_0xb1ag9c) > 5 || Math['\u0061\u0062\u0073'](_0x64d82d) > 5) _0x0e9cf = true;
      var _0x014g4a;
      let _0xg6721e = _0x61189a + _0xb1ag9c;
      _0x014g4a = 9;
      let _0x3fc4g = _0xcdf52d + _0x64d82d;
      const _0xdf_0x212 = window['\u0069\u006E\u006E\u0065\u0072\u0057\u0069\u0064\u0074\u0068'] - _0x10_0xf61['\u006F\u0066\u0066\u0073\u0065\u0074\u0057\u0069\u0064\u0074\u0068'];
      const _0xfadc1b = window['\u0069\u006E\u006E\u0065\u0072\u0048\u0065\u0069\u0067\u0068\u0074'] - _0x10_0xf61['\u006F\u0066\u0066\u0073\u0065\u0074\u0048\u0065\u0069\u0067\u0068\u0074'];
      _0xg6721e = Math['\u006D\u0061\u0078'](0, Math['\u006D\u0069\u006E'](_0xg6721e, _0xdf_0x212));
      _0x3fc4g = Math['\u006D\u0061\u0078'](0, Math['\u006D\u0069\u006E'](_0x3fc4g, _0xfadc1b));
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'] = _0xg6721e + "\u0070\u0078";
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070'] = _0x3fc4g + "\u0070\u0078";
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0072\u0069\u0067\u0068\u0074'] = "\u0061\u0075\u0074\u006F";
      _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0062\u006F\u0074\u0074\u006F\u006D'] = "\u0061\u0075\u0074\u006F";
      e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
    }, {
      '\u0070\u0061\u0073\u0073\u0069\u0076\u0065': false
    });
    document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("dnehcuot".split("").reverse().join(""), function (e) {
      if (_0x4f656d) {
        _0x4f656d = false;
        _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079'] = "\u0031";
        _0x10_0xf61['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E'] = "esae s3.0 lla".split("").reverse().join("");
        if (!_0x0e9cf) _0xag7aa();
      }
    });
    document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0063\u0070\u002D\u0074\u0061\u0062\u002D\u0069\u0074\u0065\u006D")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](tab => {
      tab['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0063\u0070\u002D\u0074\u0061\u0062\u002D\u0069\u0074\u0065\u006D")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](t => t['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("evitca".split("").reverse().join("")));
        document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("tnetnoc-bat-pc.".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](c => c['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("evitca".split("").reverse().join("")));
        this['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");
        const _0x5gbec = "_bat".split("").reverse().join("") + this['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0074\u0061\u0062'];
        document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x5gbec)['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");
      });
    });
    _0xga3g['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", _0x5226f);
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0061\u006E\u0065\u006C\u0043\u006C\u006F\u0073\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", _0x5226f);
    document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E", function (e) {
      if (e['\u006B\u0065\u0079'] === "epacsE".split("").reverse().join("") && _0xbdc59a['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0073\u0068\u006F\u0077")) {
        _0x5226f();
      }
    });
    function _0xea3f1b(message, toastType = "\u0069\u006E\u0066\u006F", duration = 4000) {
      const _0xa52ef = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));
      _0xa52ef['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u0074\u006F\u0061\u0073\u0074\u0020" + toastType;
      const _0xa6924a = {
        '\u0073\u0075\u0063\u0063\u0065\u0073\u0073': "\u2705",
        '\u0065\u0072\u0072\u006F\u0072': "\u274C",
        '\u0077\u0061\u0072\u006E\u0069\u006E\u0067': "⚠️",
        '\u0069\u006E\u0066\u006F': "ℹ️"
      };
      _0xa52ef['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
        <span class="toast-icon">${_0xa6924a[toastType] || "\uFE0F\u2139".split("").reverse().join("")}</span>
        <span>${message}</span>
      `;
      _0x46c54a['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xa52ef);
      setTimeout(() => {
        _0xa52ef['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0066\u0061\u0064\u0065\u002D\u006F\u0075\u0074");
        setTimeout(() => {
          _0xa52ef['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065'] && _0xa52ef['\u0070\u0061\u0072\u0065\u006E\u0074\u004E\u006F\u0064\u0065']['\u0072\u0065\u006D\u006F\u0076\u0065\u0043\u0068\u0069\u006C\u0064'](_0xa52ef);
        }, 300);
      }, duration);
      return _0xa52ef;
    }
    window['\u0073\u0068\u006F\u0077\u0054\u006F\u0061\u0073\u0074'] = _0xea3f1b;
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0073\u0063\u0072\u0069\u0070\u0074")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""), function () {
      var _0x81efbe = 10;
      const _0xc14g = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5F00\u542F" : "\u5173\u95ED";
      _0x81efbe = 11;
      chatPage['\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u0073\u0052\u0075\u006E'] = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      _0xea3f1b("\u811A\u672C" + _0xc14g, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0073\u0075\u0063\u0063\u0065\u0073\u0073" : "\u0069\u006E\u0066\u006F");
      console['\u006C\u006F\u0067']("\u811A\u672C\u542F\u52A8\u003A\u0020" + _0xc14g);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0077\u0061\u0069\u0074\u005F\u0072\u0065\u0070\u006C\u0079")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""), function () {
      const _0x7be1d = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5F00\u542F" : "\u95ED\u5173".split("").reverse().join("");
      waitReplyEnabled = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("snoitpo_ylper_tiaw".split("").reverse().join(""))['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "kcolb".split("").reverse().join("") : "\u006E\u006F\u006E\u0065";
      saveWaitReplyConfig();
      _0xea3f1b("\u7B49\u5F85\u56DE\u590D\u003A\u0020" + _0x7be1d, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0073\u0075\u0063\u0063\u0065\u0073\u0073" : "\u0069\u006E\u0066\u006F");
      console['\u006C\u006F\u0067']("\u7B49\u5F85\u56DE\u590D\u003A\u0020" + _0x7be1d);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0069\u006E\u0070\u0075\u0074\u005F\u0077\u0061\u0069\u0074\u005F\u0074\u0069\u006D\u0065\u006F\u0075\u0074")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""), function () {
      let _0xg1bf = parseInt(this['\u0076\u0061\u006C\u0075\u0065']);
      if (isNaN(_0xg1bf) || _0xg1bf < 10) _0xg1bf = 10;
      if (_0xg1bf > 120) _0xg1bf = 120;
      this['\u0076\u0061\u006C\u0075\u0065'] = _0xg1bf;
      waitReplyTimeout = _0xg1bf;
      saveWaitReplyConfig();
      _0xea3f1b("\u8D85\u65F6\u65F6\u95F4\u003A\u0020" + _0xg1bf + "\u79D2", "\u0069\u006E\u0066\u006F");
      console['\u006C\u006F\u0067']("\u7B49\u5F85\u56DE\u590D\u8D85\u65F6\u65F6\u95F4\u003A\u0020" + _0xg1bf + "\u79D2");
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ia_bkc".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      const _0xgac9a = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5F00\u542F" : "\u5173\u95ED";
      aiEnabled = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("snoitpo_ia".split("").reverse().join(""))['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "kcolb".split("").reverse().join("") : "\u006E\u006F\u006E\u0065";
      if (!this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064']) {
        stopAIChat();
      }
      saveAIConfig();
      _0xea3f1b("\u0041\u0049\u6258\u7BA1\u003A\u0020" + _0xgac9a, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0073\u0075\u0063\u0063\u0065\u0073\u0073" : "\u0069\u006E\u0066\u006F");
      console['\u006C\u006F\u0067'](" :\u7BA1\u6258IA".split("").reverse().join("") + _0xgac9a);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("sgnittes_ia_ntb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tupnItniopdnEia".split("").reverse().join(""))['\u0076\u0061\u006C\u0075\u0065'] = aiApiEndpoint;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0069\u004B\u0065\u0079\u0049\u006E\u0070\u0075\u0074")['\u0076\u0061\u006C\u0075\u0065'] = aiApiKey;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tupnIledoMia".split("").reverse().join(""))['\u0076\u0061\u006C\u0075\u0065'] = aiModel;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0069\u0050\u0072\u006F\u006D\u0070\u0074\u0049\u006E\u0070\u0075\u0074")['\u0076\u0061\u006C\u0075\u0065'] = aiSystemPrompt;
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0068\u006F\u0077");
      _0x1d223b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("wohs".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("esolCia".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
      _0x1d223b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("lecnaCia".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      _0x1d223b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0069\u0053\u0061\u0076\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      var _0xc337b;
      const _0x0a159b = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tupnItniopdnEia".split("").reverse().join(""))['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
      _0xc337b = 6;
      const _0x696a1b = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0069\u004B\u0065\u0079\u0049\u006E\u0070\u0075\u0074")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
      const _0x12_0x1d4 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tupnIledoMia".split("").reverse().join(""))['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
      var _0xcc_0xa3b = 9;
      const _0xba8fe = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0069\u0050\u0072\u006F\u006D\u0070\u0074\u0049\u006E\u0070\u0075\u0074")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
      _0xcc_0xa3b = 12;
      if (!_0x0a159b) {
        _0xea3f1b("\u8BF7\u8F93\u5165\u0041\u0050\u0049\u5730\u5740", "\u0077\u0061\u0072\u006E\u0069\u006E\u0067");
        return;
      }
      if (!_0x696a1b) {
        _0xea3f1b("yeK IPA\u5165\u8F93\u8BF7".split("").reverse().join(""), "gninraw".split("").reverse().join(""));
        return;
      }
      if (!_0x12_0x1d4) {
        _0xea3f1b("\u79F0\u540D\u578B\u6A21\u5165\u8F93\u8BF7".split("").reverse().join(""), "\u0077\u0061\u0072\u006E\u0069\u006E\u0067");
        return;
      }
      if (!_0xba8fe) {
        _0xea3f1b("\u8BF7\u8F93\u5165\u7CFB\u7EDF\u63D0\u793A\u8BCD", "gninraw".split("").reverse().join(""));
        return;
      }
      aiApiEndpoint = _0x0a159b;
      aiApiKey = _0x696a1b;
      aiModel = _0x12_0x1d4;
      aiSystemPrompt = _0xba8fe;
      saveAIConfig();
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      _0x1d223b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
      _0xea3f1b("\u0041\u0049\u8BBE\u7F6E\u5DF2\u4FDD\u5B58", "sseccus".split("").reverse().join(""));
      console['\u006C\u006F\u0067']("\u005B\u0041\u0049\u8BBE\u7F6E\u005D\u0020\u0041\u0050\u0049\u003A", aiApiEndpoint, "\u6A21\u578B\u003A", aiModel);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u006D\u0061\u0074\u0063\u0068")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      const _0xba_0xe39 = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5973\u751F" : "\u7537\u751F";
      const _0xdfc1a = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\uD83D\uDEBA\u0020" : "\uD83D\uDEB9\u0020";
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0078\u0074\u005F\u006D\u0061\u0074\u0063\u0068")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0xdfc1a + "\u4EC5" + _0xba_0xe39;
      chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F'] = _0xba_0xe39;
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("redneg_hctam_ybss".split("").reverse().join(""), _0xba_0xe39);
      _0xea3f1b(" :\u5F0F\u6A21\u914D\u5339".split("").reverse().join("") + _0xba_0xe39, "ofni".split("").reverse().join(""));
      console['\u006C\u006F\u0067']("\u5339\u914D\u6A21\u5F0F\u003A\u0020" + _0xba_0xe39);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("uilgniq_bkc".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      var _0xc4g1gg;
      const _0xcd7b2a = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u542F\u5F00".split("").reverse().join("") : "\u5173\u95ED";
      _0xc4g1gg = 3;
      filterQingliu = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      _0xea3f1b(" :\u7B7E\u6807\u6D41\u6E05\u6EE4\u8FC7".split("").reverse().join("") + _0xcd7b2a, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0077\u0061\u0072\u006E\u0069\u006E\u0067" : "\u0069\u006E\u0066\u006F");
      console['\u006C\u006F\u0067']("\u8FC7\u6EE4\u6E05\u6D41\u6807\u7B7E\u003A\u0020" + _0xcd7b2a);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("81rednu_bkc".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      var _0x12b5f;
      const _0xec8gca = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5F00\u542F" : "\u95ED\u5173".split("").reverse().join("");
      _0x12b5f = 4;
      filterUnder18 = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      _0xea3f1b("\u8FC7\u6EE4\u0031\u0038\u5C81\u4EE5\u4E0B\u003A\u0020" + _0xec8gca, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0077\u0061\u0072\u006E\u0069\u006E\u0067" : "ofni".split("").reverse().join(""));
      console['\u006C\u006F\u0067'](" :\u4E0B\u4EE5\u5C8181\u6EE4\u8FC7".split("").reverse().join("") + _0xec8gca);
    });
    let _0x18ab6c = [];
    function _0x21c7d() {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u005F\u0063\u006F\u0075\u006E\u0074")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = selectedProvinces['\u006C\u0065\u006E\u0067\u0074\u0068'];
    }
    function _0xf4bae() {
      const _0x13_0xcf2 = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0047\u0072\u0069\u0064");
      _0x13_0xcf2['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = ALL_PROVINCES['\u006D\u0061\u0070'](p => `
        <label style="display:flex; align-items:center; padding:6px 8px; background:${_0x18ab6c['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](p) ? "\u0023\u0064\u0063\u0066\u0063\u0065\u0037" : "\u0023\u0066\u0038\u0066\u0061\u0066\u0063"}; border:1px solid ${_0x18ab6c['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](p) ? "e55c22#".split("").reverse().join("") : "\u0023\u0065\u0032\u0065\u0038\u0066\u0030"}; border-radius:6px; cursor:pointer; font-size:12px; transition:all 0.2s;">
          <input type="checkbox" value="${p}" ${_0x18ab6c['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](p) ? "\u0063\u0068\u0065\u0063\u006B\u0065\u0064" : ''} style="margin-right:4px; accent-color:#22c55e;">
          ${p}
        </label>
      `)['\u006A\u006F\u0069\u006E']('');
      _0x13_0xcf2['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("]\"xobkcehc\"=epyt[tupni".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](cb => {
        cb['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
          const _0x47add = this['\u0076\u0061\u006C\u0075\u0065'];
          if (this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064']) {
            if (!_0x18ab6c['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x47add)) {
              _0x18ab6c['\u0070\u0075\u0073\u0068'](_0x47add);
            }
          } else {
            _0x18ab6c = _0x18ab6c['\u0066\u0069\u006C\u0074\u0065\u0072'](p => p !== _0x47add);
          }
          _0xf4bae();
        });
      });
    }
    function _0x8d5b() {
      try {
        localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0064", String(filterProvinceEnabled));
        localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0073", JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](selectedProvinces));
        localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0066\u0069\u006C\u0074\u0065\u0072\u005F\u006E\u006F\u005F\u0072\u0065\u0067\u0069\u006F\u006E", String(filterNoRegion));
      } catch (e) {
        console['\u0065\u0072\u0072\u006F\u0072'](":\u8D25\u5931\u7F6E\u914D\u5B58\u4FDD ]\u9009\u7B5B\u4EFD\u7701[".split("").reverse().join(""), e);
      }
    }
    function _0x5c593b() {
      try {
        const _0x5ae0ef = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u005F\u0065\u006E\u0061\u0062\u006C\u0065\u0064");
        const _0x21bae = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0073");
        var _0x90d;
        const _0x45ddba = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0073\u0062\u0079\u005F\u0066\u0069\u006C\u0074\u0065\u0072\u005F\u006E\u006F\u005F\u0072\u0065\u0067\u0069\u006F\u006E");
        _0x90d = "ljjjnj".split("").reverse().join("");
        filterProvinceEnabled = _0x5ae0ef === "eurt".split("").reverse().join("");
        selectedProvinces = _0x21bae ? JSON['\u0070\u0061\u0072\u0073\u0065'](_0x21bae) : [];
        filterNoRegion = _0x45ddba === "\u0074\u0072\u0075\u0065";
      } catch (e) {
        console['\u0065\u0072\u0072\u006F\u0072']("\u005B\u7701\u4EFD\u7B5B\u9009\u005D\u0020\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25\u003A", e);
      }
    }
    _0x5c593b();
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      const _0xb47b = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5F00\u542F" : "\u95ED\u5173".split("").reverse().join("");
      filterProvinceEnabled = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("snoitpo_ecnivorp".split("").reverse().join(""))['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0062\u006C\u006F\u0063\u006B" : "enon".split("").reverse().join("");
      _0x8d5b();
      if (this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] && selectedProvinces['\u006C\u0065\u006E\u0067\u0074\u0068'] === 0) {
        _0xea3f1b("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u7701\u4EFD", "\u0077\u0061\u0072\u006E\u0069\u006E\u0067", 3000);
      } else {
        _0xea3f1b(" :\u9009\u7B5B\u4EFD\u7701".split("").reverse().join("") + _0xb47b, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "sseccus".split("").reverse().join("") : "\u0069\u006E\u0066\u006F");
      }
      console['\u006C\u006F\u0067']("\u7701\u4EFD\u7B5B\u9009\u003A\u0020" + _0xb47b);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u006E\u006F\u005F\u0072\u0065\u0067\u0069\u006F\u006E")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      filterNoRegion = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      _0x8d5b();
      _0xea3f1b(this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5C06\u8FC7\u6EE4\u4E0D\u663E\u793A\u5730\u533A\u7684\u4EBA" : "\u4EBA\u7684\u533A\u5730\u793A\u663E\u4E0D\u6EE4\u8FC7\u4E0D".split("").reverse().join(""), "ofni".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("rotceles_ecnivorp_ntb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x18ab6c = [...selectedProvinces];
      _0xf4bae();
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0068\u006F\u0077");
      _0x8230af['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0068\u006F\u0077");
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u005F\u0073\u0065\u006C\u0065\u0063\u0074\u005F\u0061\u006C\u006C\u005F\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      _0x18ab6c = [...ALL_PROVINCES];
      selectedProvinces = [...ALL_PROVINCES];
      _0x21c7d();
      _0x8d5b();
      _0xea3f1b("\u5DF2\u9009\u62E9\u5168\u90E8\u7701\u4EFD", "sseccus".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ecnivorp_raelc_ntb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x18ab6c = [];
      selectedProvinces = [];
      _0x21c7d();
      _0x8d5b();
      _0xea3f1b("\u62E9\u9009\u7A7A\u6E05\u5DF2".split("").reverse().join(""), "\u0069\u006E\u0066\u006F");
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0043\u006C\u006F\u0073\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      _0x8230af['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0043\u0061\u006E\u0063\u0065\u006C")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      _0x8230af['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u0053\u0061\u0076\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      selectedProvinces = [..._0x18ab6c];
      _0x21c7d();
      _0x8d5b();
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      _0x8230af['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
      _0xea3f1b(`已选择 ${selectedProvinces['\u006C\u0065\u006E\u0067\u0074\u0068']} 个省份`, "sseccus".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""), function () {
      const _0x72193c = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u5F00\u542F" : "\u5173\u95ED";
      customAgeEnabled = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("snoitpo_ega_motsuc".split("").reverse().join(""))['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0062\u006C\u006F\u0063\u006B" : "enon".split("").reverse().join("");
      saveCustomAgeConfig();
      _0xea3f1b(" :\u9F84\u5E74\u4E49\u5B9A\u81EA".split("").reverse().join("") + _0x72193c, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0073\u0075\u0063\u0063\u0065\u0073\u0073" : "ofni".split("").reverse().join(""));
      console['\u006C\u006F\u0067'](" :\u9F84\u5E74\u4E49\u5B9A\u81EA".split("").reverse().join("") + _0x72193c);
    });
    function _0xc23g5f() {
      document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("]\"ega_motsuc\"=eman[tupni".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](function (radio) {
        const _0x64becd = radio['\u0070\u0061\u0072\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074'];
        if (radio['\u0063\u0068\u0065\u0063\u006B\u0065\u0064']) {
          _0x64becd['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");
        } else {
          _0x64becd['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");
        }
      });
    }
    document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0069\u006E\u0070\u0075\u0074\u005B\u006E\u0061\u006D\u0065\u003D\u0022\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065\u0022\u005D")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](function (radio) {
      radio['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""), function () {
        customAgeValue = this['\u0076\u0061\u006C\u0075\u0065'];
        saveCustomAgeConfig();
        _0xc23g5f();
        const _0xf2a2f = this['\u0076\u0061\u006C\u0075\u0065'] === "\u0032" ? "\u5C8132-81".split("").reverse().join("") : "\u0032\u0033\u5C81\u4EE5\u4E0A";
        _0xea3f1b("\u5E74\u9F84\u8BBE\u7F6E\u4E3A\u003A\u0020" + _0xf2a2f, "\u0069\u006E\u0066\u006F");
        console['\u006C\u006F\u0067']("\u81EA\u5B9A\u4E49\u5E74\u9F84\u8BBE\u7F6E\u4E3A\u003A\u0020" + _0xf2a2f);
      });
    });
    _0xc23g5f();
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u005F\u0063\u006F\u006E\u0074\u0061\u0063\u0074")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      var _0x9367b = 6;
      const _0x91242d = this;
      _0x9367b = 16;
      const _0xdff1a = _0x91242d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'];
      _0x91242d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = "\u53D1\u9001\u4E2D\u002E\u002E\u002E";
      _0x91242d['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0065\u006E\u0064\u0069\u006E\u0067");
      _0xea3f1b("\u6B63\u5728\u53D1\u9001\u8054\u7CFB\u65B9\u5F0F\u002E\u002E\u002E", "ofni".split("").reverse().join(""), 2000);
      _0x2e315g();
      setTimeout(() => {
        _0x91242d['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0xdff1a;
        _0x91242d['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0065\u006E\u0064\u0069\u006E\u0067");
        _0xea3f1b("\uFF01\u529F\u6210\u9001\u53D1\u5F0F\u65B9\u7CFB\u8054".split("").reverse().join(""), "\u0073\u0075\u0063\u0063\u0065\u0073\u0073");
      }, 2000);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u005F\u0076\u0069\u0070\u005F\u0063\u0061\u0072\u0064")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      openVIPCardWallet();
      _0xea3f1b("\u6B63\u5728\u6253\u5F00\u0056\u0049\u0050\u5361\u5305\u002E\u002E\u002E", "ofni".split("").reverse().join(""), 1500);
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0062\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function () {
      const _0x4573d = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u542F\u5F00".split("").reverse().join("") : "\u5173\u95ED";
      blacklistEnabled = this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];
      _0xea3f1b("\u9ED1\u540D\u5355\u529F\u80FD\u003A\u0020" + _0x4573d, this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] ? "\u0077\u0061\u0072\u006E\u0069\u006E\u0067" : "ofni".split("").reverse().join(""));
      console['\u006C\u006F\u0067']("\u9ED1\u540D\u5355\u529F\u80FD\u003A\u0020" + _0x4573d);
    });
    function _0xb2_0x3c1() {
      try {
        const _0x8fb83a = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0070\u0061\u0072\u0074\u006E\u0065\u0072");
        return _0x8fb83a ? JSON['\u0070\u0061\u0072\u0073\u0065'](_0x8fb83a) : null;
      } catch (e) {
        return null;
      }
    }
    function _0x7eaf(ageCode) {
      const _0xea7e = {
        "\u0031": "\u0031\u0038\u5C81\u4EE5\u4E0B",
        "\u0032": "\u0031\u0038\u002D\u0032\u0032\u5C81",
        "\u0033": "\u0032\u0033\u5C81\u4EE5\u4E0A"
      };
      return _0xea7e[String(ageCode)] || '';
    }
    function _0x3b_0x9ag(timestamp) {
      const _0xe57ad = new Date(timestamp);
      return _0xe57ad['\u0074\u006F\u004C\u006F\u0063\u0061\u006C\u0065\u0044\u0061\u0074\u0065\u0053\u0074\u0072\u0069\u006E\u0067']("\u007A\u0068\u002D\u0043\u004E", {
        '\u006D\u006F\u006E\u0074\u0068': "\u0032\u002D\u0064\u0069\u0067\u0069\u0074",
        '\u0064\u0061\u0079': "\u0032\u002D\u0064\u0069\u0067\u0069\u0074",
        "hour": '2-digit',
        "minute": "\u0032\u002D\u0064\u0069\u0067\u0069\u0074"
      });
    }
    function _0xf_0x347() {
      const _0x14_0x4dc = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u006C\u004C\u0069\u0073\u0074");
      const _0x39d7ee = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u006C\u0043\u006F\u0075\u006E\u0074");
      if (blacklist['\u006C\u0065\u006E\u0067\u0074\u0068'] === 0) {
        _0x14_0x4dc['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = ">vid/<\u7A7A\u4E3A\u5355\u540D\u9ED1 \uDF89\uD83C>\"ytpme-lb\"=ssalc vid<".split("").reverse().join("");
      } else {
        _0x14_0x4dc['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = blacklist['\u006D\u0061\u0070']((item, index) => `
          <div class="bl-item" data-id="${item['\u0069\u0064']}">
            <div class="bl-item-header">
              <div class="bl-item-remark">${item['\u0072\u0065\u006D\u0061\u0072\u006B'] || "\u672A\u5907\u6CE8"}</div>
              <div class="bl-item-actions">
                <button class="bl-item-btn edit" data-index="${index}" title="编辑">✏️</button>
                <button class="bl-item-btn delete" data-index="${index}" title="删除">🗑️</button>
              </div>
            </div>
            <div class="bl-item-info">
              <span>${item['\u0067\u0065\u006E\u0064\u0065\u0072'] || "\u77E5\u672A".split("").reverse().join("")} ${_0x7eaf(item['\u0061\u0067\u0065'])}</span>
              <span>${_0x3b_0x9ag(item['\u0061\u0064\u0064\u0054\u0069\u006D\u0065'])}</span>
            </div>
          </div>
        `)['\u006A\u006F\u0069\u006E']('');
      }
      _0x39d7ee['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `共 ${blacklist['\u006C\u0065\u006E\u0067\u0074\u0068']} 人`;
    }
    function _0x5_0xf5a() {
      _0xf_0x347();
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0068\u006F\u0077");
      _0x3d_0xf84['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("wohs".split("").reverse().join(""));
    }
    function _0xfb61c() {
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0073\u0068\u006F\u0077");
      _0x3d_0xf84['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
    }
    function _0x73c() {
      var _0x42f5aa = 8;
      const _0x20_0x5b9 = _0xb2_0x3c1();
      _0x42f5aa = 3;
      if (!_0x20_0x5b9) {
        _0xea3f1b("\u5F53\u524D\u6CA1\u6709\u804A\u5929\u5BF9\u8C61", "\u0077\u0061\u0072\u006E\u0069\u006E\u0067");
        return;
      }
      if (!_0x20_0x5b9['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064']) {
        _0xea3f1b("\u65E0\u6CD5\u83B7\u53D6\u5BF9\u65B9\u4FE1\u606F", "\u0065\u0072\u0072\u006F\u0072");
        return;
      }
      if (isInBlacklist(_0x20_0x5b9['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064'])) {
        _0xea3f1b("\u5BF9\u65B9\u5DF2\u5728\u9ED1\u540D\u5355\u4E2D", "gninraw".split("").reverse().join(""));
        return;
      }
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0063\u0049\u006E\u0066\u006F")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `对方: ${_0x20_0x5b9['\u0073\u0074\u0072\u0047\u0065\u006E\u0064\u0065\u0072'] || "\u77E5\u672A".split("").reverse().join("")} ${_0x7eaf(_0x20_0x5b9['\u0073\u0074\u0072\u0041\u0067\u0065'])}`;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("krameRcb".split("").reverse().join(""))['\u0076\u0061\u006C\u0075\u0065'] = '';
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("wohs".split("").reverse().join(""));
      _0x86dbg['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0068\u006F\u0077");
    }
    function _0xa8cacd() {
      _0x86dbg['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
      _0x6a_0x46g['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("wohs".split("").reverse().join(""));
    }
    function _0xa33b6c() {
      var _0x5cf3a = 10;
      const _0x21_0xgcg = _0xb2_0x3c1();
      _0x5cf3a = 1;
      if (!_0x21_0xgcg || !_0x21_0xgcg['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064']) {
        _0xea3f1b("\u65E0\u6CD5\u83B7\u53D6\u5BF9\u65B9\u4FE1\u606F", "\u0065\u0072\u0072\u006F\u0072");
        _0xa8cacd();
        return;
      }
      const _0x7ea5d = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0063\u0052\u0065\u006D\u0061\u0072\u006B")['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();
      const _0x263d8a = addToBlacklist(_0x21_0xgcg['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064'], _0x7ea5d || "\u672A\u5907\u6CE8", _0x21_0xgcg['\u0073\u0074\u0072\u0047\u0065\u006E\u0064\u0065\u0072'] || '', _0x21_0xgcg['\u0073\u0074\u0072\u0041\u0067\u0065'] || '');
      if (_0x263d8a) {
        _0xea3f1b("\u5DF2\u5C06\u5BF9\u65B9\u52A0\u5165\u9ED1\u540D\u5355", "sseccus".split("").reverse().join(""));
        _0xa8cacd();
        const _0x6d68aa = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("]\"evael-weiv#\"=ferh[knil-bat.a".split("").reverse().join(""));
        if (_0x6d68aa) _0x6d68aa['\u0063\u006C\u0069\u0063\u006B']();
      } else {
        _0xea3f1b("\u5BF9\u65B9\u5DF2\u5728\u9ED1\u540D\u5355\u4E2D", "\u0077\u0061\u0072\u006E\u0069\u006E\u0067");
      }
    }
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("eganam_tsilkcalb_ntb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x5_0xf5a();
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("dda_tsilkcalb_ntb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0x73c();
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("esolClb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", _0xfb61c);
    _0x6a_0x46g['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      _0xfb61c();
      _0xa8cacd();
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tsiLlb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function (e) {
      const _0x8374fb = e['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0063\u006C\u006F\u0073\u0065\u0073\u0074']("\u002E\u0062\u006C\u002D\u0069\u0074\u0065\u006D\u002D\u0062\u0074\u006E");
      if (!_0x8374fb) return;
      const _0x15_0xb53 = parseInt(_0x8374fb['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0069\u006E\u0064\u0065\u0078']);
      const _0x51d34f = blacklist[_0x15_0xb53];
      if (!_0x51d34f) return;
      if (_0x8374fb['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0065\u0064\u0069\u0074")) {
        const _0x3c62d = prompt("\u4FEE\u6539\u5907\u6CE8\u003A", _0x51d34f['\u0072\u0065\u006D\u0061\u0072\u006B']);
        if (_0x3c62d !== null) {
          updateBlacklistRemark(_0x51d34f['\u0069\u0064'], _0x3c62d['\u0074\u0072\u0069\u006D']() || "\u672A\u5907\u6CE8");
          _0xf_0x347();
          _0xea3f1b("\u5907\u6CE8\u5DF2\u66F4\u65B0", "\u0073\u0075\u0063\u0063\u0065\u0073\u0073");
        }
      } else if (_0x8374fb['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("eteled".split("").reverse().join(""))) {
        if (confirm("\uFF1F\u5417\u9664\u79FB\u5355\u540D\u9ED1\u4ECE\u4EBA\u6B64\u5C06\u8981\u5B9A\u786E".split("").reverse().join(""))) {
          removeFromBlacklist(_0x51d34f['\u0069\u0064']);
          _0xf_0x347();
          _0xea3f1b("\u9664\u79FB\u5355\u540D\u9ED1\u4ECE\u5DF2".split("").reverse().join(""), "\u0073\u0075\u0063\u0063\u0065\u0073\u0073");
        }
      }
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u006C\u0045\u0078\u0070\u006F\u0072\u0074")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      if (blacklist['\u006C\u0065\u006E\u0067\u0074\u0068'] === 0) {
        _0xea3f1b("\u51FA\u5BFC\u6CD5\u65E0\uFF0C\u7A7A\u4E3A\u5355\u540D\u9ED1".split("").reverse().join(""), "\u0077\u0061\u0072\u006E\u0069\u006E\u0067");
        return;
      }
      exportBlacklist();
      _0xea3f1b("\u9ED1\u540D\u5355\u5DF2\u5BFC\u51FA", "sseccus".split("").reverse().join(""));
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tropmIlb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", function () {
      _0xd8e5af['\u0063\u006C\u0069\u0063\u006B']();
    });
    _0xd8e5af['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", function (e) {
      const _0x584d = e['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0066\u0069\u006C\u0065\u0073'][0];
      if (!_0x584d) return;
      importBlacklist(_0x584d)['\u0074\u0068\u0065\u006E'](count => {
        _0xf_0x347();
        _0xea3f1b(`成功导入 ${count} 人`, "\u0073\u0075\u0063\u0063\u0065\u0073\u0073");
      })['\u0063\u0061\u0074\u0063\u0068'](err => {
        _0xea3f1b("\u5BFC\u5165\u5931\u8D25\u003A\u0020" + err['\u006D\u0065\u0073\u0073\u0061\u0067\u0065'], "\u0065\u0072\u0072\u006F\u0072");
      });
      _0xd8e5af['\u0076\u0061\u006C\u0075\u0065'] = '';
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("raelClb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), function () {
      if (blacklist['\u006C\u0065\u006E\u0067\u0074\u0068'] === 0) {
        _0xea3f1b("\u9ED1\u540D\u5355\u5DF2\u4E3A\u7A7A", "ofni".split("").reverse().join(""));
        return;
      }
      if (confirm(`确定要清空全部 ${blacklist['\u006C\u0065\u006E\u0067\u0074\u0068']} 人吗？此操作不可恢复！`)) {
        clearBlacklist();
        _0xf_0x347();
        _0xea3f1b("\u7A7A\u6E05\u5DF2\u5355\u540D\u9ED1".split("").reverse().join(""), "\u0073\u0075\u0063\u0063\u0065\u0073\u0073");
      }
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("lecnaCcb".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B", _0xa8cacd);
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0063\u0043\u006F\u006E\u0066\u0069\u0072\u006D")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""), _0xa33b6c);
    var _0x28957e = 7;
    let _0x18g7de = null;
    _0x28957e = 0;
    var _0x81b = 5;
    let _0x18baa = null;
    _0x81b = 6;
    var _0x26g;
    let _0xaf7cf = false;
    _0x26g = 5;
    function _0x4df86e() {
      if (!chatPage['\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u0073\u0052\u0075\u006E']) return false;
      if (!blacklistEnabled || _0xaf7cf) return false;
      const _0x36a = _0xb2_0x3c1();
      if (!_0x36a || !_0x36a['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064']) return false;
      var _0x428ac;
      const _0x8bacee = _0x36a['\u0065\u0078\u0074\u0072\u0061'] ? _0x36a['\u0065\u0078\u0074\u0072\u0061']['\u0063\u0068\u0061\u0074\u0049\u0064'] : null;
      _0x428ac = 4;
      var _0x31c5fe = 8;
      const _0x4949ba = _0x8bacee + "\u005F" + _0x36a['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064'];
      _0x31c5fe = 12;
      if (_0x18g7de === _0x4949ba) return false;
      const _0x1420ed = isInBlacklist(_0x36a['\u0069\u0064\u0045\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064']);
      if (_0x1420ed) {
        _0x18g7de = _0x4949ba;
        _0xaf7cf = true;
        console['\u006C\u006F\u0067'](":\u6237\u7528\u5355\u540D\u9ED1\u5230\u6D4B\u68C0 ]\u5355\u540D\u9ED1[".split("").reverse().join(""), _0x1420ed['\u0072\u0065\u006D\u0061\u0072\u006B']);
        _0xea3f1b(`🚫 已自动跳过黑名单用户：${_0x1420ed['\u0072\u0065\u006D\u0061\u0072\u006B']}`, "\u0077\u0061\u0072\u006E\u0069\u006E\u0067", 3000);
        setTimeout(() => {
          var _0x7c6af = 5;
          const _0x1d15f = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("]\"evael-weiv#\"=ferh[knil-bat.a".split("").reverse().join(""));
          _0x7c6af = 7;
          if (_0x1d15f) {
            _0x1d15f['\u0063\u006C\u0069\u0063\u006B']();
          }
          setTimeout(() => {
            _0xaf7cf = false;
            _0x18g7de = null;
          }, 2000);
        }, 100);
        return true;
      }
      _0x18g7de = _0x4949ba;
      return false;
    }
    window['\u0063\u0068\u0065\u0063\u006B\u0042\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074'] = _0x4df86e;
    window['\u0069\u0073\u0049\u006E\u0042\u006C\u0061\u0063\u006B\u006C\u0069\u0073\u0074'] = isInBlacklist;
    window['\u0067\u0065\u0074\u0043\u0075\u0072\u0072\u0065\u006E\u0074\u0050\u0061\u0072\u0074\u006E\u0065\u0072'] = _0xb2_0x3c1;
    setInterval(_0x4df86e, 500);
    setTimeout(_0x4df86e, 100);
    const _0xd71g = localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("redneg_hctam_ybss".split("").reverse().join(""));
    if (_0xd71g === "\u7537\u751F") {
      chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F'] = "\u7537\u751F";
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("hctam_txt".split("").reverse().join(""))['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = "\u751F\u7537\u4EC5 \uDEB9\uD83D".split("").reverse().join("");
    } else {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("hctam_bkc".split("").reverse().join(""))['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
      chatPage['\u004D\u0061\u0074\u0063\u0068\u0057\u0068\u006F'] = "\u5973\u751F";
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("hctam_txt".split("").reverse().join(""))['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = "\uD83D\uDEBA\u0020\u4EC5\u5973\u751F";
    }
    if (waitReplyEnabled) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0077\u0061\u0069\u0074\u005F\u0072\u0065\u0070\u006C\u0079")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0077\u0061\u0069\u0074\u005F\u0072\u0065\u0070\u006C\u0079\u005F\u006F\u0070\u0074\u0069\u006F\u006E\u0073")['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "kcolb".split("").reverse().join("");
    }
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0069\u006E\u0070\u0075\u0074\u005F\u0077\u0061\u0069\u0074\u005F\u0074\u0069\u006D\u0065\u006F\u0075\u0074")['\u0076\u0061\u006C\u0075\u0065'] = waitReplyTimeout;
    if (customAgeEnabled) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065\u005F\u006F\u0070\u0074\u0069\u006F\u006E\u0073")['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    }
    var _0x7b_0x4ef = 1;
    const _0x32f = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0069\u006E\u0070\u0075\u0074\u005B\u006E\u0061\u006D\u0065\u003D\u0022\u0063\u0075\u0073\u0074\u006F\u006D\u005F\u0061\u0067\u0065\u0022\u005D\u005B\u0076\u0061\u006C\u0075\u0065\u003D\u0022" + customAgeValue + "]\"".split("").reverse().join(""));
    _0x7b_0x4ef = 4;
    if (_0x32f) {
      _0x32f['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
    }
    if (aiEnabled) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u0061\u0069")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0069\u005F\u006F\u0070\u0074\u0069\u006F\u006E\u0073")['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    }
    if (filterProvinceEnabled) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ecnivorp_bkc".split("").reverse().join(""))['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0072\u006F\u0076\u0069\u006E\u0063\u0065\u005F\u006F\u0070\u0074\u0069\u006F\u006E\u0073")['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = "\u0062\u006C\u006F\u0063\u006B";
    }
    if (filterNoRegion) {
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0063\u006B\u0062\u005F\u006E\u006F\u005F\u0072\u0065\u0067\u0069\u006F\u006E")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = true;
    }
    _0x21c7d();
    _0xea3f1b("\u9A6D\u5E08\u63D2\u4EF6\uFF0C\u6B22\u8FCE\u60A8\u7684\u4F7F\u7528\uFF01", "sseccus".split("").reverse().join(""));
  }
  try {
    initialized && console['\u006C\u006F\u0067']("\uFF01\u5316\u59CB\u521D\u5DF2".split("").reverse().join(""));
  } catch {
    initialized = true;
    _0x70458f();
  }
};
MainFunc();