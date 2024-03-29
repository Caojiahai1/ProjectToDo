"use strict";

function _defineProperty(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _typeof(e) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function _toConsumableArray(e) {
  return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(e) {
  if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
}

function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n
  }
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.getRealIndex = getRealIndex, exports.getRealIndexes = getRealIndexes, exports.getIndexFromValue = getIndexFromValue, exports.getIndexesFromValues = getIndexesFromValues, exports.getValueFromIndex = getValueFromIndex, exports.getValuesFromIndexes = getValuesFromIndexes, exports.getRealValue = getRealValue, exports.getRealValues = getRealValues, exports.getLabelFromIndex = getLabelFromIndex, exports.getLabelsFromIndexes = getLabelsFromIndexes, exports.isMultiPicker = isMultiPicker, exports.getRealCol = getRealCol, exports.getRealCols = getRealCols, exports.defaultFieldNames = void 0;
var defaultFieldNames = {
  label: "label",
  value: "value",
  children: "children"
};

function getRealIndex() {
  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
    n = 2 < arguments.length ? arguments[2] : void 0;
  return e <= t ? t : n <= e ? n : e
}

function getRealIndexes() {
  var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
  return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).reduce(function(e, t, n) {
    return [].concat(_toConsumableArray(e), [getRealIndex(r[n], 0, t.length - 1)])
  }, [])
}

function getIndexFromValue(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultFieldNames;
  return getRealIndex(t.map(function(e) {
    return e[n.value]
  }).indexOf(e), 0, t.length - 1)
}

function getIndexesFromValues() {
  var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultFieldNames;
  return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).reduce(function(e, t, n) {
    return [].concat(_toConsumableArray(e), [getIndexFromValue(r[n], t, o)])
  }, [])
}

function getValueFromIndex(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultFieldNames;
  return t[getRealIndex(e, 0, t.length - 1)][n.value]
}

function getValuesFromIndexes() {
  var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultFieldNames;
  return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).reduce(function(e, t, n) {
    return [].concat(_toConsumableArray(e), [getValueFromIndex(r[n], t, o)])
  }, [])
}

function getRealValue() {
  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultFieldNames;
  return 0 < t.length ? t[getIndexFromValue(e, t, n)][n.value] : null
}

function getRealValues() {
  var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
    e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : defaultFieldNames;
  return 0 < e.length ? e.reduce(function(e, t, n) {
    return [].concat(_toConsumableArray(e), [getRealValue(r[n], t, o)])
  }, []) : []
}

function getLabelFromIndex(e) {
  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
    n = 2 < arguments.length ? arguments[2] : void 0;
  return n ? t[e] && t[e][n] : t[e]
}

function getLabelsFromIndexes(r) {
  var o = 2 < arguments.length ? arguments[2] : void 0;
  return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).reduce(function(e, t, n) {
    return [].concat(_toConsumableArray(e), [getLabelFromIndex(r[n], t, o)])
  }, [])
}

function isMultiPicker() {
  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
  return !!e && Array.isArray(e[0])
}

function getRealCol() {
  var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultFieldNames;
  return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).map(function(e) {
    return "object" === _typeof(e) ? e : (_defineProperty(t = {}, n.value, e), _defineProperty(t, n.label, e), t);
    var t
  })
}

function getRealCols() {
  var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
    n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : defaultFieldNames;
  return (isMultiPicker(e) ? e : [e]).reduce(function(e, t) {
    return [].concat(_toConsumableArray(e), [getRealCol(t, n)])
  }, [])
}
exports.defaultFieldNames = defaultFieldNames;