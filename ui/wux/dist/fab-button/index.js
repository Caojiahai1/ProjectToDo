"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames5 = _interopRequireDefault(require("../helpers/classNames"));

function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}

function ownKeys(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), a.push.apply(a, n)
  }
  return a
}

function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {};
    t % 2 ? ownKeys(a, !0).forEach(function(t) {
      _defineProperty(e, t, a[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(a).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
    })
  }
  return e
}

function _defineProperty(t, e, a) {
  return e in t ? Object.defineProperty(t, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = a, t
}
var defaultAction = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhBAQLCR5MtjrbAAAAjUlEQVRo3u3ZMRKAIAxEUbDirp4nXnctFFDHBtDQ/O1Nnk6aHUMgZCBKMkmmNAtgOmL9M+IQQGVM95zljy8DAAAAAAAAAAAAAACALsDZcppSx7Q+WdtUvA5xffUtrjeA8/qQ21S9gc15/3Nfzw0M5O0G2kM5BQAAAAAAAAAAAAAAQGk33q0qZ/p/Q/JFdmei9usomnwIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA0LTA0VDExOjA5OjMwKzA4OjAw1U4c3wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNC0wNFQxMTowOTozMCswODowMKQTpGMAAAAASUVORK5CYII=",
  setTransform = function(t, e, a, n) {
    var o = 0 < arguments.length && void 0 !== t ? t : 0,
      r = 1 < arguments.length && void 0 !== e ? e : 1,
      i = !(3 < arguments.length && void 0 !== n) || n,
      c = "transition-duration: ".concat(2 < arguments.length && void 0 !== a ? a : 300, "ms"),
      s = "transform: scale(".concat(r, ") translate3d(").concat(i ? o : 0, "px, ").concat(i ? 0 : o, "px, 0)");
    return "opacity: 1; ".concat(c, "; ").concat(s)
  };
(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: "wux-fab-button"
    },
    hoverClass: {
      type: String,
      value: "default"
    },
    theme: {
      type: String,
      value: "balanced"
    },
    position: {
      type: String,
      value: "bottomRight"
    },
    action: {
      type: String,
      value: defaultAction
    },
    actionRotate: {
      type: Boolean,
      value: !0
    },
    hideShadow: {
      type: Boolean,
      value: !1
    },
    backdrop: {
      type: Boolean,
      value: !1
    },
    buttons: {
      type: Array,
      value: [],
      observer: "forceUpdateButtonStyle"
    },
    direction: {
      type: String,
      value: "horizontal",
      observer: "forceUpdateButtonStyle"
    },
    spaceBetween: {
      type: Number,
      value: 10,
      observer: "forceUpdateButtonStyle"
    },
    duration: {
      type: Number,
      value: 300
    },
    scale: {
      type: Number,
      value: .9,
      observer: "forceUpdateButtonStyle"
    },
    reverse: {
      type: Boolean,
      value: !1,
      observer: "forceUpdateButtonStyle"
    },
    sAngle: {
      type: Number,
      value: 0,
      observer: "forceUpdateButtonStyle"
    },
    eAngle: {
      type: Number,
      value: 360,
      observer: "forceUpdateButtonStyle"
    },
    defaultVisible: {
      type: Boolean,
      value: !1
    },
    visible: {
      type: Boolean,
      value: !1,
      observer: function(t) {
        this.data.controlled && this.updated(t)
      }
    },
    controlled: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    buttonStyle: [],
    buttonVisible: !1
  },
  computed: {
    classes: ["prefixCls, position, theme, direction, reverse, buttonVisible, hideShadow, actionRotate, buttons, hoverClass", function(a, t, e, n, o, r, i, c, s, l) {
      var u;
      return {
        wrap: (0, _classNames5.default)(a, (_defineProperty(u = {}, "".concat(a, "--").concat(t), t), _defineProperty(u, "".concat(a, "--").concat(e), e), _defineProperty(u, "".concat(a, "--").concat(n), n), _defineProperty(u, "".concat(a, "--reverse"), o), _defineProperty(u, "".concat(a, "--opened"), r), u)),
        action: (0, _classNames5.default)("".concat(a, "__action"), _defineProperty({}, "".concat(a, "__action--hide-shadow"), i)),
        text: (0, _classNames5.default)("".concat(a, "__text"), _defineProperty({}, "".concat(a, "__text--rotate"), r && c)),
        button: s.map(function(t) {
          var e;
          return {
            wrap: (0, _classNames5.default)("".concat(a, "__button"), (_defineProperty(e = {}, "".concat(a, "__button--hide-shadow"), t.hideShadow), _defineProperty(e, "".concat(a, "__button--disabled"), t.disabled), _defineProperty(e, "".concat(t.className), t.className), e)),
            hover: t.hoverClass && "default" !== t.hoverClass ? t.hoverClass : "".concat(a, "__button--hover")
          }
        }),
        icon: "".concat(a, "__icon"),
        label: "".concat(a, "__label"),
        backdrop: "".concat(a, "__backdrop"),
        hover: l && "default" !== l ? l : "".concat(a, "--hover")
      }
    }]
  },
  methods: {
    updated: function(t) {
      this.data.buttonVisible !== t && (this.setData({
        buttonVisible: t
      }), this.updateButtonStyle(!t))
    },
    onChange: function(t) {
      this.data.controlled || this.updated(t), this.triggerEvent("change", {
        value: t
      })
    },
    onToggle: function() {
      this.onChange(!this.data.buttonVisible)
    },
    onTap: function(t) {
      var e = t.currentTarget.dataset,
        a = e.index,
        n = e.value,
        o = {
          index: a,
          value: n,
          buttons: this.data.buttons
        };
      n.disabled || (this.triggerEvent("click", o), this.onChange(!1))
      if (a == 0) {
        var pages = getCurrentPages()    //获取加载的页面
        var currentPage = pages[pages.length - 1]    //获取当前页面的对象
        currentPage.addTask();
      } else {
        wx.navigateTo({
          url: '../../pages/setting/setting'
        })
      }
    },
    getRect: function(t, a) {
      var n = this;
      return new Promise(function(e) {
        wx.createSelectorQuery().in(n)[a ? "selectAll" : "select"](t).boundingClientRect(function(t) {
          a && Array.isArray(t) && t.length && e(t), !a && t && e(t)
        }).exec()
      })
    },
    forceUpdateButtonStyle: function() {
      this.updateButtonStyle(!this.data.buttonVisible)
    },
    updateButtonStyle: function(t) {
      var n = this,
        e = this.data,
        a = e.prefixCls,
        r = e.buttons,
        i = e.duration,
        c = e.direction,
        s = e.spaceBetween,
        l = e.scale,
        u = [],
        d = this.data.reverse ? 1 : -1,
        A = "horizontal" === c;
      if (t) return r.forEach(function() {
        u.push("opacity: 0; transform: translate3d(0, 0, 0)")
      }), void(this.data.buttonStyle !== u && this.setData({
        buttonStyle: u
      }));
      this.getRect(".".concat(a, "__action")).then(function(o) {
        switch (c) {
          case "horizontal":
          case "vertical":
            r.forEach(function(t, e) {
              var a = "".concat(d * (o.width + s) * (e + 1)),
                n = setTransform(a, l, i, A);
              u.push(n)
            });
            break;
          case "circle":
            var a = o.width + s;
            r.forEach(function(t, e) {
              u.push(n.getCircleStyle(e, a))
            })
        }
        n.data.buttonStyle !== u && n.setData({
          buttonStyle: u
        })
      })
    },
    getCircleStyle: function(t, e) {
      var a = this.data,
        n = a.sAngle,
        o = a.eAngle,
        r = a.duration,
        i = a.scale,
        c = this.data.buttons.length,
        s = Math.max,
        l = Math.sin,
        u = Math.cos,
        d = Math.PI,
        A = n * d / 180,
        p = o * d / 180,
        f = A + (p - A) / (p % (2 * d) == 0 ? c : s(1, c - 1)) * t,
        b = l(f) * e,
        h = u(f) * e;
      b = parseFloat(b.toFixed(6)), h = parseFloat(h.toFixed(6));
      var v = "transform: scale(".concat(i, ") translate3d(").concat(b, "px, ").concat(h, "px, 0)");
      return "opacity: 1; transition-duration: ".concat(r, "ms; ").concat(v)
    },
    bindgetuserinfo: function(t) {
      this.triggerEvent("getuserinfo", _objectSpread({}, t.detail, {}, t.currentTarget.dataset))
    },
    bindcontact: function(t) {
      this.triggerEvent("contact", _objectSpread({}, t.detail, {}, t.currentTarget.dataset))
    },
    bindgetphonenumber: function(t) {
      this.triggerEvent("getphonenumber", _objectSpread({}, t.detail, {}, t.currentTarget.dataset))
    },
    bindopensetting: function(t) {
      this.triggerEvent("opensetting", _objectSpread({}, t.detail, {}, t.currentTarget.dataset))
    },
    onError: function(t) {
      this.triggerEvent("error", _objectSpread({}, t.detail, {}, t.currentTarget.dataset))
    }
  },
  ready: function() {
    var t = this.data,
      e = t.defaultVisible,
      a = t.visible,
      n = t.controlled ? a : e;
    this.updated(n)
  }
});