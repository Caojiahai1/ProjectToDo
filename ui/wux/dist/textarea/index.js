"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames2 = _interopRequireDefault(require("../helpers/classNames")),
  _eventsMixin = _interopRequireDefault(require("../helpers/eventsMixin")),
  _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));

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
  onChange: function() {},
  onFocus: function() {},
  onBlur: function() {},
  onConfirm: function() {},
  onClear: function() {},
  onError: function() {},
  onLineChange: function() {}
};
(0, _baseComponent.default)({
  behaviors: [(0, _eventsMixin.default)({
    defaultEvents: defaultEvents
  })],
  relations: {
    "../field/index": {
      type: "ancestor"
    }
  },
  properties: {
    prefixCls: {
      type: String,
      value: "wux-textarea"
    },
    label: {
      type: String,
      value: ""
    },
    extra: {
      type: String,
      value: ""
    },
    defaultValue: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: "",
      observer: function(e) {
        this.data.controlled && this.updated(e)
      }
    },
    controlled: {
      type: Boolean,
      value: !1
    },
    placeholder: {
      type: String,
      value: ""
    },
    placeholderStyle: {
      type: [String, Object],
      value: "",
      observer: function(e) {
        this.setData({
          extStyle: (0, _styleToCssString.default)(e)
        })
      }
    },
    placeholderClass: {
      type: String,
      value: "textarea-placeholder"
    },
    disabled: {
      type: Boolean,
      value: !1
    },
    maxlength: {
      type: Number,
      value: 140
    },
    autoHeight: {
      type: Boolean,
      value: !1
    },
    cursorSpacing: {
      type: Number,
      value: 11
    },
    focus: {
      type: Boolean,
      value: !1
    },
    cursor: {
      type: Number,
      value: -1
    },
    showConfirmBar: {
      type: Boolean,
      value: !0
    },
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: !0
    },
    rows: {
      type: Number,
      value: 1,
      observer: "updateHeight"
    },
    hasCount: {
      type: Boolean,
      value: !1
    },
    clear: {
      type: Boolean,
      value: !1
    },
    error: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    inputValue: "",
    inputFocus: !1,
    inputRows: 1,
    inputHeight: "",
    extStyle: ""
  },
  computed: {
    classes: ["prefixCls, disabled, inputFocus, error, hasCount", function(e, t, n, a, r) {
      var i;
      return {
        wrap: (0, _classNames2.default)(e, (_defineProperty(i = {}, "".concat(e, "--focus"), n), _defineProperty(i, "".concat(e, "--disabled"), t), _defineProperty(i, "".concat(e, "--error"), a), _defineProperty(i, "".concat(e, "--has-count"), r), i)),
        label: "".concat(e, "__label"),
        control: "".concat(e, "__control"),
        item: "".concat(e, "__item"),
        clear: "".concat(e, "__clear"),
        error: "".concat(e, "__error"),
        extra: "".concat(e, "__extra"),
        count: "".concat(e, "__count"),
        current: "".concat(e, "__current")
      }
    }]
  },
  methods: {
    updateHeight: function(e) {
      var n = this,
        t = 0 < arguments.length && void 0 !== e ? e : this.data.rows,
        a = Math.max(1, parseInt(t)),
        r = this.data,
        i = r.prefixCls,
        o = r.inputRows;
      o !== a && wx.createSelectorQuery().in(this).select(".".concat(i, "__item")).boundingClientRect(function(e) {
        if (e) {
          var t = (1 < o ? e.height / o : e.height) * a;
          if (t == 0) {
            t = 47;
          }
          n.setData({
            inputRows: a,
            inputHeight: t
          })
        }
      }).exec()
    },
    updated: function(e) {
      this.hasFieldDecorator || this.data.inputValue !== e && this.setData({
        inputValue: e
      })
    },
    onChange: function(e) {
      var t = e.detail.value;
      this.data.controlled || this.updated(t), this.triggerEvent("change", e.detail)
    },
    onFocus: function(e) {
      this.clearTimer(), this.setData({
        inputFocus: !0
      }), this.triggerEvent("focus", e.detail)
    },
    onBlur: function(e) {
      this.setTimer(), this.triggerEvent("blur", e.detail)
    },
    onConfirm: function(e) {
      this.triggerEvent("confirm", e.detail)
    },
    onClear: function(e) {
      var t = {
        value: ""
      };
      this.data.controlled || this.updated(t.value), this.triggerEvent("change", t), this.triggerEvent("clear", t)
    },
    onError: function() {
      var e = this.data.inputValue;
      this.triggerEvent("error", {
        value: e
      })
    },
    onLineChange: function(e) {
      this.triggerEvent("linechange", e.detail)
    },
    setTimer: function() {
      var e = this;
      this.clearTimer(), this.timeout = setTimeout(function() {
        e.setData({
          inputFocus: !1
        })
      }, 200)
    },
    clearTimer: function() {
      this.timeout && (clearTimeout(this.timeout), this.timeout = null)
    }
  },
  attached: function() {
    var e = this.data,
      t = e.defaultValue,
      n = e.value,
      a = e.controlled ? n : t;
    this.updated(a)
  },
  ready: function() {
    this.updateHeight()
  }
});