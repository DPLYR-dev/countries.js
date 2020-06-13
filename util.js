var { t } = require('typy')

exports.get = function get(folder, country, location) {
  var f = require('./resources/' + folder + '/' + country + '.json');
  return t(f, location);
}

exports.get = function toArray(obj) {
  const result = [];
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value === 'object') {
      result.push(toArray(value)); // <- recursive call
    }
    else {
      result.push(value);
    }
  }
  return result;
}