"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.props = exports.defaultFieldNames = void 0;
var defaultFieldNames = {
  label: "label",
  value: "value",
  children: "children"
};
exports.defaultFieldNames = defaultFieldNames;
var props = {
  prefixCls: {
    type: String,
    value: "wux-picker-col"
  },
  defaultValue: {
    type: String,
    value: ""
  },
  value: {
    type: String,
    value: ""
  },
  controlled: {
    type: Boolean,
    value: !1
  },
  itemHeight: {
    type: Number,
    value: 34
  },
  itemStyle: {
    type: [String, Object, Array],
    value: ""
  },
  indicatorStyle: {
    type: [String, Object, Array],
    value: ""
  },
  indicatorClass: {
    type: String,
    value: ""
  },
  maskStyle: {
    type: [String, Object, Array],
    value: ""
  },
  maskClass: {
    type: String,
    value: ""
  },
  labelAlign: {
    type: String,
    value: "center"
  },
  defaultFieldNames: {
    type: Object,
    value: defaultFieldNames
  },
  loading: {
    type: Boolean,
    value: !1
  },
  options: {
    type: Array,
    value: []
  }
};
exports.props = props;