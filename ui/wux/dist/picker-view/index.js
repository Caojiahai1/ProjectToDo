"use strict";
var _observers, _baseComponent = _interopRequireDefault(require("../helpers/baseComponent")),
  _classNames2 = _interopRequireDefault(require("../helpers/classNames")),
  _shallowEqual = _interopRequireDefault(require("../helpers/shallowEqual")),
  _styleToCssString = _interopRequireDefault(require("../helpers/styleToCssString")),
  _gestures = require("../helpers/gestures"),
  _checkIPhoneX = require("../helpers/checkIPhoneX"),
  _props = require("./props"),
  _utils = require("./utils");

function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
    default: t
  }
}

function _defineProperty(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = s, t
}

function getStyles(t) {
  return Array.isArray(t) ? t.map(function(t) {
    return (0, _styleToCssString.default)(t)
  }) : (0, _styleToCssString.default)(t)
}(0, _baseComponent.default)({
  properties: _props.props,
  data: {
    inputValue: null,
    selectedIndex: null,
    selectedValue: null,
    cols: [],
    extIndicatorStyle: "",
    extItemStyle: "",
    extMaskStyle: "",
    contentStyle: "",
    fieldNames: _props.defaultFieldNames,
    itemCount: 7,
    styles: {}
  },
  computed: {
    classes: ["prefixCls, labelAlign", function(t, e) {
      return {
        wrap: (0, _classNames2.default)(t, _defineProperty({}, "".concat(t, "--").concat(e), e)),
        mask: "".concat(t, "__mask"),
        indicator: "".concat(t, "__indicator"),
        content: "".concat(t, "__content"),
        item: "".concat(t, "__item")
      }
    }]
  },
  observers: (_observers = {
    itemHeight: function(t) {
      this.updatedStyles(t)
    },
    itemStyle: function(t) {
      this.setData({
        extItemStyle: getStyles(t)
      })
    },
    indicatorStyle: function(t) {
      this.setData({
        extIndicatorStyle: getStyles(t)
      })
    },
    maskStyle: function(t) {
      this.setData({
        extMaskStyle: getStyles(t)
      })
    }
  }, _defineProperty(_observers, "value, options", function(t, e) {
    var s = this.data.controlled,
      i = Object.assign({}, _props.defaultFieldNames, this.data.defaultFieldNames),
      a = (0, _utils.getRealCol)(e, i);
    (0, _shallowEqual.default)(this.data.cols, a) || this.setData({
      cols: a
    }), s && this.setValue(t, !0)
  }), _defineProperty(_observers, "inputValue", function(t) {
    var e = this.getValue(t),
      s = e.selectedIndex,
      i = e.selectedValue;
    this.setData({
      selectedIndex: s,
      selectedValue: i
    })
  }), _observers),
  methods: {
    updatedStyles: function(t) {
      var e = this.data.itemCount;
      e % 2 == 0 && e--, e--, e /= 2;
      var s = {
        wrap: "height: ".concat(t * this.data.itemCount, "px;"),
        item: "line-height: ".concat(t, "px; height: ").concat(t, "px;"),
        content: "padding: ".concat(t * e, "px 0;"),
        indicator: "top: ".concat(t * e, "px; height: ").concat(t, "px;"),
        mask: "background-size: 100% ".concat(t * e, "px;")
      };
      this.setData({
        styles: s
      })
    },
    updated: function(t, e) {
      var s = this;
      this.data.inputValue === t && !e || this.setData({
        inputValue: t
      }), e && this.select(t, this.data.itemHeight, function(t) {
        return s.scrollTo(t, 0, !1)
      })
    },
    setValue: function(t, e) {
      var s = this.getValue(t).value;
      this.updated(s, e)
    },
    getValue: function(t, e) {
      var s = 0 < arguments.length && void 0 !== t ? t : this.data.inputValue,
        i = 1 < arguments.length && void 0 !== e ? e : this.data.cols,
        a = this.data.fieldNames,
        l = (0, _utils.getRealValue)(s, i, a) || null,
        n = l,
        o = (0, _utils.getIndexFromValue)(s, i, a);
      return {
        value: l,
        displayValue: (0, _utils.getLabelFromIndex)(o, i, a.label),
        selectedIndex: o,
        selectedValue: n,
        cols: i
      }
    },
    scrollTo: function(t, e, s) {
      var i = this,
        a = 1 < arguments.length && void 0 !== e ? e : .3,
        l = !(2 < arguments.length && void 0 !== s) || s;
      this.scrollY !== t && (this.runCallbacks && (clearTimeout(this.runCallbacks), this.runCallbacks = null), this.scrollY = t, this.setTransform(-t, a, function() {
        l && (i.runCallbacks = setTimeout(function() {
          i.setTransform(-t, 0, i.scrollingComplete)
        }, 1e3 * +a))
      }))
    },
    onFinish: function() {
      var e = this;
      this.isMoving = !1;
      var t = this.scrollY,
        s = this.data,
        i = s.cols,
        a = s.itemHeight,
        l = (i.length - 1) * a;
      t % a != 0 && (t = Math.round(t / a) * a), t < 0 ? t = 0 : l < t && (t = l);
      var n = this.getChildMeta(t, a);
      n && !n.disabled ? this.scrollTo(t, .3) : this.select(this.data.inputValue, a, function(t) {
        return e.scrollTo(t, 0, !1)
      }), this.onScrollChange()
    },
    onTouchStart: function(t) {
      1 < (0, _gestures.getPointsNumber)(t) || (this.isMoving = !0, this.startY = (0, _gestures.getTouchPoints)(t).y, this.lastY = this.scrollY, this.triggerEvent("beforeChange", this.getValue()))
    },
    onTouchMove: function(t) {
      !this.isMoving || 1 < (0, _gestures.getPointsNumber)(t) || (this.scrollY = this.lastY - (0, _gestures.getTouchPoints)(t).y + this.startY, this.setTransform(-this.scrollY, !1, this.onScrollChange))
    },
    onTouchEnd: function(t) {
      1 < (0, _gestures.getPointsNumber)(t) || this.onFinish()
    },
    onItemClick: function(t) {
      var e = t.currentTarget.dataset,
        s = e.index;
      e.disabled || this.scrollTo(s * this.data.itemHeight)
    },
    setTransform: function(t, e, s) {
      var i = {
        transform: "translate3d(0,".concat(t, "px,0)"),
        transition: e ? "cubic-bezier(0, 0, 0.2, 1.15) ".concat(e, "s") : "none"
      };
      this.setData({
        contentStyle: (0, _styleToCssString.default)(i)
      }, s)
    },
    select: function(t, e, s) {
      var i = this.data,
        a = i.cols,
        l = i.fieldNames,
        n = (0, _utils.getIndexFromValue)(t, a, l);
      this.selectByIndex(n, e, s)
    },
    selectByIndex: function(t, e, s) {
      t < 0 || t >= this.data.cols.length || !e || s.call(this, t * e)
    },
    computeChildIndex: function(t, e, s) {
      var i = Math.round(t / e);
      return Math.min(i, s - 1)
    },
    getChildMeta: function(t, e) {
      var s = this.data,
        i = s.cols;
      s.fieldNames;
      return i[this.computeChildIndex(t, e, i.length)]
    },
    scrollingComplete: function() {
      var t = this.scrollY;
      if (0 <= t) {
        var e = this.data,
          s = e.itemHeight,
          i = e.fieldNames,
          a = this.getChildMeta(t, s);
        if (a) {
          var l = a[i.value];
          this.data.inputValue !== l && this.fireValueChange(l)
        }
      }
    },
    onScrollChange: function() {
      var t = this.scrollY;
      if (0 <= t) {
        var e = this.data,
          s = e.cols,
          i = e.itemHeight,
          a = e.fieldNames,
          l = this.computeChildIndex(t, i, s.length);
        if (this.scrollValue !== l) {
          var n = s[this.scrollValue = l];
          if (n) {
            var o = this.getValue(n[a.value]);
            this.triggerEvent("scrollChange", o)
          }
          this.vibrateShort()
        }
      }
    },
    fireValueChange: function(t) {
      this.data.controlled || this.updated(t), this.triggerEvent("valueChange", this.getValue(t)), this.vibrateShort()
    }
  },
  created: function() {
    var t = (0, _checkIPhoneX.getSystemInfo)();
    this.vibrateShort = function() {
      "devtools" !== t.platform && wx.vibrateShort()
    }, this.scrollValue = void 0, this.scrollY = -1, this.lastY = 0, this.startY = 0, this.isMoving = !1
  },
  attached: function() {
    var t = this.data,
      e = t.defaultValue,
      s = t.value,
      i = t.controlled,
      a = t.options,
      l = t.itemHeight,
      n = i ? s : e,
      o = Object.assign({}, _props.defaultFieldNames, this.data.defaultFieldNames),
      r = (0, _utils.getRealCol)(a, o);
    this.updatedStyles(l), this.setData({
      cols: r,
      fieldNames: o
    }), this.setValue(n, !0)
  }
});