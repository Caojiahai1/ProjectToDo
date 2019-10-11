"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames2 = _interopRequireDefault(require("../helpers/classNames")),
  _eventsMixin = _interopRequireDefault(require("../helpers/eventsMixin"));

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var defaultEvents = {
  onClick: function() {},
  onError: function() {}
};
(0, _baseComponent.default)({
  behaviors: [(0, _eventsMixin.default)({
    defaultEvents: defaultEvents
  })],
  relations: {
    "../cell-group/index": {
      type: "ancestor"
    },
    "../picker/index": {
      type: "parent"
    },
    "../date-picker/index": {
      type: "parent"
    },
    "../popup-select/index": {
      type: "parent"
    }
  },
  properties: {
    prefixCls: {
      type: String,
      value: "wux-cell"
    },
    disabled: {
      type: Boolean,
      value: !1
    },
    hoverClass: {
      type: String,
      value: "default"
    },
    hoverStopPropagation: {
      type: Boolean,
      value: !1
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: "en"
    },
    sessionFrom: {
      type: String,
      value: ""
    },
    sendMessageTitle: {
      type: String,
      value: ""
    },
    sendMessagePath: {
      type: String,
      value: ""
    },
    sendMessageImg: {
      type: String,
      value: ""
    },
    showMessageCard: {
      type: Boolean,
      value: !1
    },
    appParameter: {
      type: String,
      value: ""
    },
    thumb: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    label: {
      type: String,
      value: ""
    },
    extra: {
      type: String,
      value: ""
    },
    isLink: {
      type: Boolean,
      value: !1
    },
    openType: {
      type: String,
      value: "navigateTo"
    },
    url: {
      type: String,
      value: ""
    },
    delta: {
      type: Number,
      value: 1
    }
  },
  data: {
    isLast: !1
  },
  computed: {
    classes: ["prefixCls, hoverClass, isLast, isLink, disabled", function(e, t, n, a, i) {
      var r;
      return {
        wrap: (0, _classNames2.default)(e, (_defineProperty(r = {}, "".concat(e, "--last"), n), _defineProperty(r, "".concat(e, "--access"), a), _defineProperty(r, "".concat(e, "--disabled"), i), r)),
        hd: "".concat(e, "__hd"),
        thumb: "".concat(e, "__thumb"),
        bd: "".concat(e, "__bd"),
        text: "".concat(e, "__text"),
        desc: "".concat(e, "__desc"),
        ft: "".concat(e, "__ft"),
        hover: t && "default" !== t ? t : "".concat(e, "--hover")
      }
    }]
  },
  methods: {
    onTap: function() {
      this.data.disabled || (this.triggerEvent("click"), this.linkTo())
    },
    bindgetuserinfo: function(e) {
      this.triggerEvent("getuserinfo", e.detail)
    },
    bindcontact: function(e) {
      this.triggerEvent("contact", e.detail)
    },
    bindgetphonenumber: function(e) {
      this.triggerEvent("getphonenumber", e.detail)
    },
    bindopensetting: function(e) {
      this.triggerEvent("opensetting", e.detail)
    },
    onError: function(e) {
      this.triggerEvent("error", e.detail)
    },
    linkTo: function() {
      var e = this.data,
        t = e.url,
        n = e.isLink,
        a = e.openType,
        i = e.delta;
      return !!(n && t && ["navigateTo", "redirectTo", "switchTab", "navigateBack", "reLaunch"].includes(a)) && ("navigateBack" === a ? wx[a].call(wx, {
        delta: i
      }) : wx[a].call(wx, {
        url: t
      }))
    },
    updateIsLastElement: function(e) {
      this.setData({
        isLast: e
      })
    }
  }
});