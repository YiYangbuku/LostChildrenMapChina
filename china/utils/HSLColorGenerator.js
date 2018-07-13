function heatMapColorforValue(value, min, max) {
  var h = (1.0 - ( value / (max - min))) * 240;
  return "hsl(" + h + ", 100%, 50%)";
};

module.exports = heatMapColorforValue;

