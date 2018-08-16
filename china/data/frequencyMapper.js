function getColorByFrequency(province) {
  const frequency = window.JSMaps.ccserFrequency;
  const max = Math.max.apply(null, Object.values(frequency));
  const min = Math.min.apply(null, Object.values(frequency));
  return window.JSMaps.heatMapColorforValue(frequency[province] ? (frequency[province] - min) : 0, min, max);
}

window.JSMaps.maps.china.paths.forEach(function (path) {
  path.color = getColorByFrequency(path.name);
});
