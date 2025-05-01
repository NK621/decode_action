//Thu May 01 2025 06:25:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
function centerVerification() {
  const _0x3ccc6c = document.getElementById("verification");
  const _0x2cbbb6 = window.innerHeight;
  const _0x516992 = window.innerWidth;
  const _0x1e8ea8 = _0x3ccc6c.offsetHeight;
  const _0x1ec700 = _0x3ccc6c.offsetWidth;
  const _0x215a67 = (_0x2cbbb6 - _0x1e8ea8) / 2;
  const _0x265324 = (_0x516992 - _0x1ec700) / 2;
  _0x3ccc6c.style.position = "absolute";
  _0x3ccc6c.style.top = _0x215a67 + "px";
  _0x3ccc6c.style.left = _0x265324 + "px";
}
window.onload = centerVerification;
window.onresize = centerVerification;
const Base64 = {
  encode: _0xa16287 => {
    try {
      {
        return window.btoa(unescape(encodeURIComponent(_0xa16287)));
      }
    } catch (_0x489210) {
      {
        console.error("Encoding Error:", _0x489210);
        throw _0x489210;
      }
    }
  },
  decode: _0x100e82 => {
    try {
      return decodeURIComponent(escape(window.atob(_0x100e82)));
    } catch (_0x49982e) {
      console.error("Decoding Error:", _0x49982e);
      throw _0x49982e;
    }
  }
};
function getUUID() {
  const _0x59fef2 = localStorage.getItem("udid");
  if (_0x59fef2) {
    return _0x59fef2;
  } else {
    {
      const _0x15e930 = Math.floor(Math.random() * 1000000000000000);
      localStorage.setItem("udid", _0x15e930);
      return _0x15e930;
    }
  }
}
function GetGlobalParameter() {
  return {
    BSphpSeSsL: getUUID(),
    date: Math.floor(Date.now() / 1000),
    md5: "",
    mutualkey: G_BSPHP_KEY
  };
}
function obj2Url(_0x43a945, _0x58a447, _0x50fa4e) {
  if (_0x43a945 == null) {
    return "";
  }
  let _0x5cab64 = "";
  const _0x5acd22 = typeof _0x43a945;
  if (_0x5acd22 === "string" || _0x5acd22 === "number" || _0x5acd22 === "boolean") {
    _0x5cab64 += "&" + _0x58a447 + "=" + (_0x50fa4e == null || _0x50fa4e ? encodeURIComponent(_0x43a945) : _0x43a945);
  } else {
    for (const _0x2aaf70 in _0x43a945) {
      {
        const _0x5b2e0b = _0x58a447 == null ? _0x2aaf70 : _0x58a447 + (_0x43a945 instanceof Array ? "[" + _0x2aaf70 + "]" : "." + _0x2aaf70);
        _0x5cab64 += obj2Url(_0x43a945[_0x2aaf70], _0x5b2e0b, _0x50fa4e);
      }
    }
  }
  return _0x5cab64;
}
const G_BSPHP_URL = "https://www.rongyi.chat/AppEn.php?appid=12344321&m=c68a32bd1b362f1dd89db08e19a6e5d8";
const G_BSPHP_KEY = "0b84e7a5d6bcc869df0c4770e918122c";
async function bsphplogin(_0x3cf16d) {
  _0x3cf16d = obj2Url(_0x3cf16d);
  _0x3cf16d = "parameter=" + Base64.encode(_0x3cf16d);
  try {
    const _0x5521c0 = await fetch(G_BSPHP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x3cf16d
    });
    if (_0x5521c0.ok) {
      const _0x4e97fd = Base64.decode(await _0x5521c0.text());
      const _0x54462f = _0x4e97fd.split("|");
      console.log("服务器响应数据:", _0x54462f);
      if (_0x54462f[1] === "1081") {
        const _0x385e4b = _0x54462f[4];
        localStorage.setItem("card", document.getElementById("card").value);
        return {
          success: true,
          expiryDate: _0x385e4b,
          message: "到期日期: " + _0x385e4b
        };
      }
      return {
        success: false,
        message: "卡密无效或已过期"
      };
    }
    return {
      success: false,
      message: "网络请求失败"
    };
  } catch (_0x8bfc0f) {
    console.error("验证失败:", _0x8bfc0f);
    return {
      success: false,
      message: "请求错误"
    };
  }
}
document.getElementById("entry_btn").addEventListener("click", async function () {
  const _0x5833d7 = document.getElementById("card");
  const _0x3333cb = _0x5833d7.value;
  if (!_0x3333cb) {
    {
      _0x5833d7.value = "";
      _0x5833d7.placeholder = "请输入卡号";
      return;
    }
  }
  const _0x1a95b6 = GetGlobalParameter();
  _0x1a95b6.icid = _0x3333cb;
  _0x1a95b6.key = getUUID();
  _0x1a95b6.maxoror = getUUID();
  _0x1a95b6.api = "login.ic";
  const _0xdc4df9 = await bsphplogin(_0x1a95b6);
  if (_0xdc4df9.success) {
    document.getElementById("verification").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
    const _0x31c019 = document.getElementById("expiry_date");
    _0x31c019.textContent = _0xdc4df9.expiryDate;
  } else {
    {
      _0x5833d7.value = "";
      _0x5833d7.placeholder = _0xdc4df9.message;
    }
  }
});
(function (_0x24e7bc, _0x589c18, _0x5721b9) {
  _0x5721b9 = "al";
  try {
    _0x5721b9 += "ert";
    _0x589c18 = encode_version;
    if (!(typeof _0x589c18 !== "undefined" && _0x589c18 === "jsjiami.com.v5")) {
      _0x24e7bc[_0x5721b9]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x5ce8f5) {
    _0x24e7bc[_0x5721b9]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";