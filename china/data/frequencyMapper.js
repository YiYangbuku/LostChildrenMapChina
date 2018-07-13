const frequency = require('frequecy');
const heatMapColorforValue = require('../utils/HSLColorGenerator');

function getColorByFrequency(province) {
  const max = Math.max.apply(null, Object.values(frequency));
  const min = Math.min.apply(null, Object.values(frequency));
  return heatMapColorforValue(frequency[province] ? (frequency[province] - min) : 0, min, max);
}

window.JSMaps.maps.china.paths.forEach(function (path) {
  path.color = getColorByFrequency(path.name);
});

module.exports = getColorByFrequency;