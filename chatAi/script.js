const _0x274aef = _0x277e;
(function (_0x42f8a6, _0xe0529d) {
  const _0x14ab6f = _0x277e,
    _0x3ec5ec = _0x42f8a6();
  while (!![]) {
    try {
      const _0x4b282b =
        (-parseInt(_0x14ab6f(0x10b)) / 0x1) *
          (-parseInt(_0x14ab6f(0xf4)) / 0x2) +
        (parseInt(_0x14ab6f(0xf0)) / 0x3) * (parseInt(_0x14ab6f(0x10a)) / 0x4) +
        parseInt(_0x14ab6f(0x11c)) / 0x5 +
        -parseInt(_0x14ab6f(0xfa)) / 0x6 +
        (-parseInt(_0x14ab6f(0x10f)) / 0x7) *
          (parseInt(_0x14ab6f(0xf6)) / 0x8) +
        (-parseInt(_0x14ab6f(0x105)) / 0x9) *
          (-parseInt(_0x14ab6f(0xfc)) / 0xa) +
        -parseInt(_0x14ab6f(0xfe)) / 0xb;
      if (_0x4b282b === _0xe0529d) break;
      else _0x3ec5ec["push"](_0x3ec5ec["shift"]());
    } catch (_0x26626a) {
      _0x3ec5ec["push"](_0x3ec5ec["shift"]());
    }
  }
})(_0x5f00, 0xacf24);
function _0x277e(_0x398574, _0x353528) {
  const _0x5f0067 = _0x5f00();
  return (
    (_0x277e = function (_0x277e33, _0x49c744) {
      _0x277e33 = _0x277e33 - 0xed;
      let _0x26ee2c = _0x5f0067[_0x277e33];
      return _0x26ee2c;
    }),
    _0x277e(_0x398574, _0x353528)
  );
}
const baseUrl = "https://api.assemblyai.com/v2",
  headers = { Authorization: _0x274aef(0x102) };
function _0x5f00() {
  const _0x3060bf = [
    "completed",
    ".mp3",
    "audioFile",
    "innerText",
    "json",
    "addEventListener",
    "external_url",
    "4216055WaxeNg",
    "An\x20error\x20occurred\x20during\x20the\x20transcription\x20process.",
    "object",
    "text",
    "error",
    "/upload",
    "fileInput",
    "audioOption",
    "url",
    "846267FUQcMr",
    "Please\x20select\x20an\x20audio\x20file.",
    "append",
    "uploadButton",
    "30XtKUAP",
    "display",
    "8zkCMsN",
    "/transcript/",
    "block",
    "getElementById",
    "5865528LhFfQG",
    "style",
    "13230940DVkbmQ",
    "change",
    "4655948MZWwZJ",
    "endsWith",
    "stringify",
    "file",
    "03644d7cc7fe40c49f056e784bffa887",
    "value",
    "loader",
    "9pKQNps",
    "status",
    "Transcription\x20failed:\x20",
    "none",
    "length",
    "12ldvYEi",
    "15509kXUFhj",
    "POST",
    "files",
    "/transcript",
    "7951741PasJAc",
    "audioUrl",
    "Authorization",
    "urlInput",
    "application/json",
    "click",
  ];
  _0x5f00 = function () {
    return _0x3060bf;
  };
  return _0x5f00();
}
document[_0x274aef(0xf9)](_0x274aef(0xee))["addEventListener"](
  _0x274aef(0xfd),
  () => {
    const _0x2ea589 = _0x274aef,
      _0xd6251d = document[_0x2ea589(0xf9)]("audioOption")["value"];
    if (_0xd6251d === _0x2ea589(0x101))
      (document["getElementById"](_0x2ea589(0xed))[_0x2ea589(0xfb)][
        _0x2ea589(0xf5)
      ] = _0x2ea589(0xf8)),
        (document[_0x2ea589(0xf9)](_0x2ea589(0x112))["style"][_0x2ea589(0xf5)] =
          _0x2ea589(0x108));
    else
      _0xd6251d === _0x2ea589(0xef) &&
        ((document[_0x2ea589(0xf9)](_0x2ea589(0xed))["style"][_0x2ea589(0xf5)] =
          _0x2ea589(0x108)),
        (document[_0x2ea589(0xf9)]("urlInput")[_0x2ea589(0xfb)][
          _0x2ea589(0xf5)
        ] = _0x2ea589(0xf8)));
  }
),
  document[_0x274aef(0xf9)](_0x274aef(0xf3))[_0x274aef(0x11a)](
    _0x274aef(0x114),
    async () => {
      const _0x3dfa57 = _0x274aef,
        _0x4304e1 = document["getElementById"](_0x3dfa57(0xee))[
          _0x3dfa57(0x103)
        ];
      let _0x54a1ad;
      if (_0x4304e1 === _0x3dfa57(0x101)) {
        const _0x25c307 = document[_0x3dfa57(0xf9)](_0x3dfa57(0x117));
        if (_0x25c307[_0x3dfa57(0x10d)][_0x3dfa57(0x109)] === 0x0) {
          alert(_0x3dfa57(0xf1));
          return;
        }
        _0x54a1ad = _0x25c307[_0x3dfa57(0x10d)][0x0];
      } else {
        if (_0x4304e1 === "url") {
          const _0x1db696 = document[_0x3dfa57(0xf9)](_0x3dfa57(0x110))[
            "value"
          ];
          if (!_0x1db696[_0x3dfa57(0xff)](_0x3dfa57(0x116))) {
            alert(
              "Please\x20enter\x20a\x20valid\x20audio\x20URL\x20ending\x20with\x20.mp3."
            );
            return;
          }
          _0x54a1ad = _0x1db696;
        }
      }
      try {
        showLoader();
        const _0x17585e = await uploadAudio(_0x54a1ad),
          _0x5edbdb = await transcribeAudio(_0x17585e);
        await pollTranscription(_0x5edbdb), hideLoader();
      } catch (_0x56b99d) {
        console["error"](_0x56b99d), alert(_0x3dfa57(0x11d)), hideLoader();
      }
    }
  );
const uploadAudio = async (_0x34944b) => {
    const _0x373646 = _0x274aef,
      _0x1c894a = new FormData();
    typeof _0x34944b === _0x373646(0x11e)
      ? _0x1c894a[_0x373646(0xf2)]("file", _0x34944b)
      : _0x1c894a[_0x373646(0xf2)](_0x373646(0x11b), _0x34944b);
    const _0x298bc4 = await fetch(baseUrl + _0x373646(0x121), {
        method: _0x373646(0x10c),
        headers: { Authorization: headers["Authorization"] },
        body: _0x1c894a,
      }),
      _0x5ed60b = await _0x298bc4[_0x373646(0x119)]();
    return _0x5ed60b["upload_url"];
  },
  transcribeAudio = async (_0x22a694) => {
    const _0x10607a = _0x274aef,
      _0x481a35 = await fetch(baseUrl + _0x10607a(0x10e), {
        method: _0x10607a(0x10c),
        headers: {
          "Content-Type": _0x10607a(0x113),
          Authorization: headers[_0x10607a(0x111)],
        },
        body: JSON[_0x10607a(0x100)]({ audio_url: _0x22a694 }),
      }),
      _0xd37b40 = await _0x481a35[_0x10607a(0x119)]();
    return _0xd37b40["id"];
  },
  pollTranscription = async (_0x58edb3) => {
    const _0xb4f938 = _0x274aef,
      _0x3d6097 = baseUrl + _0xb4f938(0xf7) + _0x58edb3;
    while (!![]) {
      const _0x1ad09b = await fetch(_0x3d6097, {
          headers: { Authorization: headers["Authorization"] },
        }),
        _0x8a5b1 = await _0x1ad09b[_0xb4f938(0x119)]();
      if (_0x8a5b1["status"] === _0xb4f938(0x115)) {
        (document["getElementById"]("resultText")[_0xb4f938(0x118)] =
          _0x8a5b1[_0xb4f938(0x11f)]),
          (document["getElementById"]("transcriptionResult")[_0xb4f938(0xfb)][
            "display"
          ] = "block");
        break;
      } else {
        if (_0x8a5b1[_0xb4f938(0x106)] === _0xb4f938(0x120))
          throw new Error(_0xb4f938(0x107) + _0x8a5b1["error"]);
        else await new Promise((_0x5d2546) => setTimeout(_0x5d2546, 0xbb8));
      }
    }
  };
function showLoader() {
  const _0x3b3668 = _0x274aef;
  document["getElementById"](_0x3b3668(0x104))[_0x3b3668(0xfb)][
    _0x3b3668(0xf5)
  ] = _0x3b3668(0xf8);
}
function hideLoader() {
  const _0x56b818 = _0x274aef;
  document[_0x56b818(0xf9)](_0x56b818(0x104))["style"]["display"] =
    _0x56b818(0x108);
}
