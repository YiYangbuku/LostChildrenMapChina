window.JSMaps.heatMapColorforValue = function heatMapColorforValue(value, min, max) {
  var h = ( value / (max - min));
  return "rgb(" + 255 + ", " + 255 * (1 - h) + ", " + 255 * (1 - h) +")";
};
