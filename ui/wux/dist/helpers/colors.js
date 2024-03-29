"use strict";
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.isPresetColor = exports.colors = void 0;
var colors = {
  light: "#ddd",
  stable: "#b2b2b2",
  positive: "#387ef5",
  calm: "#11c1f3",
  balanced: "#33cd5f",
  energized: "#ffc900",
  assertive: "#ef473a",
  royal: "#886aea",
  dark: "#444",
  darkBlue: "#6491CB"
};
exports.colors = colors;
var isPresetColor = function(e) {
  return !!e && (colors[e] ? colors[e] : e)
};
exports.isPresetColor = isPresetColor;