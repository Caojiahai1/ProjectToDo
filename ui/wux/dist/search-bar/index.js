"use strict";
var _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames2 = _interopRequireDefault(require("../helpers/classNames")),
  _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString"));

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}(0, _baseComponent.default)({
  properties: {
    prefixCls: {
      type: String,
      value: "wux-search-bar"
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
    placeholder: {
      type: String,
      value: "搜索待办事项"
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
      value: "input-placeholder"
    },
    disabled: {
      type: Boolean,
      value: !1
    },
    maxlength: {
      type: Number,
      value: 140
    },
    cursorSpacing: {
      type: Number,
      value: 11
    },
    focus: {
      type: Boolean,
      value: !1,
      observer: function(e) {
        this.setData({
          inputFocus: e
        })
      }
    },
    confirmType: {
      type: String,
      value: "search"
    },
    confirmHold: {
      type: Boolean,
      value: !1
    },
    cursor: {
      type: Number,
      value: -1
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
    clear: {
      type: Boolean,
      value: !1
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    showCancel: {
      type: Boolean,
      value: !1
    },
    controlled: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    inputValue: "",
    inputFocus: !1,
    extStyle: ""
  },
  computed: {
    classes: ["prefixCls, disabled, inputFocus", function(e, t, a) {
      var n;
      return {
        wrap: (0, _classNames2.default)(e, (_defineProperty(n = {}, "".concat(e, "--focus"), a), _defineProperty(n, "".concat(e, "--disabled"), t), n)),
        form: "".concat(e, "__form"),
        box: "".concat(e, "__box"),
        search: "".concat(e, "__search"),
        input: "".concat(e, "__input"),
        clear: "".concat(e, "__clear"),
        label: "".concat(e, "__label"),
        icon: "".concat(e, "__icon"),
        text: "".concat(e, "__text"),
        cancel: "".concat(e, "__cancel")
      }
    }]
  },
  methods: {
    updated: function(e) {
      this.data.inputValue !== e && this.setData({
        inputValue: e
      })
    },
    onChange: function(e) {
      this.data.controlled || this.updated(e.detail.value), this.data.inputFocus || this.setData({
        inputFocus: !0
      }), this.triggerEvent("change", e.detail)
    },
    onFocus: function(e) {
      this.setData({
        inputFocus: !0
      }), this.triggerEvent("focus", e.detail)
    },
    onBlur: function(e) {
      this.setData({
        inputFocus: !1
      }), this.triggerEvent("blur", e.detail)
    },
    onConfirm: function(e) {
      this.triggerEvent("confirm", e.detail)
    },
    onClear: function() {
      var e = this.data,
        t = e.controlled,
        a = e.inputValue;
      this.setData({
        inputValue: t ? a : "",
        inputFocus: !0
      }), this.triggerEvent("clear", {
        value: ""
      })
    },
    onCancel: function() {
      this.triggerEvent("cancel", {
        value: this.data.inputValue
      })
    },
    onClick: function() {
      this.data.disabled || this.setData({
        inputFocus: !0
      })
    }
  },
  attached: function() {
    var e = this.data,
      t = e.defaultValue,
      a = e.value,
      n = e.controlled ? a : t;
    this.updated(n)
  }
});