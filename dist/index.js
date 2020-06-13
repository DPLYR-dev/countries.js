'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('typy'),
    t = _require.t;

var fs = require('fs');
function _get(folder, country, location) {
  var f = require('./resources/' + folder + '/' + country + '.json');
  return t(f, location);
}
function toArray(obj) {
  var result = [];
  for (var prop in obj) {
    var value = obj[prop];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      result.push(toArray(value)); // <- recursive call
    } else {
      result.push(value);
    }
  }
  return result;
}
var getName = function getName(c) {
  return _get('data', c, 'name.common').input;
};
var getOfficalName = function getOfficalName(c) {
  return _get('data', c, 'name.official').input;
};
var getNativeName = function getNativeName(c) {
  var a = _get('data', c, 'name.native').input;
  return toArray(a)[0][0];
};
var getOfficialNativeName = function getOfficialNativeName(c) {
  var a = _get('data', c, 'name.native').input;
  return toArray(a)[0][1];
};
var getDemonym = function getDemonym(c) {
  return _get('data', c, 'demonym').input;
};
var getCapital = function getCapital(c) {
  return _get('data', c, 'capital').input;
};
var getIsoAlpha2 = function getIsoAlpha2(c) {
  return _get('data', c, 'iso_3166_1_alpha2').input;
};
var getIsoAlpha3 = function getIsoAlpha3(c) {
  return _get('data', c, 'iso_3166_1_alpha3').input;
};
var getIsoNumeric = function getIsoNumeric(c) {
  return _get('data', c, 'iso_3166_1_numeric').input;
};
var getTld = function getTld(c) {
  return _get('data', c, 'tld').input[0];
};
var getTlds = function getTlds(c) {
  return _get('data', c, 'tld').input;
};
var getAltSpellings = function getAltSpellings(c) {
  return _get('data', c, 'alt_spellings').input;
};
var getLanguage = function getLanguage(c) {
  return toArray(_get('data', c, 'languages').input)[0];
};
var getLanguages = function getLanguages(c) {
  return toArray(_get('data', c, 'languages').input);
};
var getContinent = function getContinent(c) {
  return toArray(_get('data', c, 'geo.continent').input)[0];
};
var usesPostalCode = function usesPostalCode(c) {
  return _get('data', c, 'geo.postal_code').input;
};
var getLatitude = function getLatitude(c) {
  return _get('data', c, 'geo.latitude').input;
};
var getLongitude = function getLongitude(c) {
  return _get('data', c, 'geo.longitude').input;
};
var getLatitudeDesc = function getLatitudeDesc(c) {
  return _get('data', c, 'geo.latitude_desc').input;
};
var getLongitudeDesc = function getLongitudeDesc(c) {
  return _get('data', c, 'geo.longitude_desc').input;
};
var getMaxLongitude = function getMaxLongitude(c) {
  return _get('data', c, 'geo.max_longitude').input;
};
var getMinLongitude = function getMinLongitude(c) {
  return _get('data', c, 'geo.min_longitude').input;
};
var getMaxLatitude = function getMaxLatitude(c) {
  return _get('data', c, 'geo.max_latitude').input;
};
var getMinLatitude = function getMinLatitude(c) {
  return _get('data', c, 'geo.min_latitude').input;
};
var getArea = function getArea(c) {
  return _get('data', c, 'geo.area').input;
};
var getRegion = function getRegion(c) {
  return _get('data', c, 'geo.region').input;
};
var getSubregion = function getSubregion(c) {
  return _get('data', c, 'geo.subregion').input;
};
var getWorldRegion = function getWorldRegion(c) {
  return _get('data', c, 'geo.world_region').input;
};
var getRegionCode = function getRegionCode(c) {
  return _get('data', c, 'geo.region_code').input;
};
var getSubregionCode = function getSubregionCode(c) {
  return _get('data', c, 'geo.subregion_code').input;
};

var isLandlocked = function isLandlocked(c) {
  return _get('data', c, 'geo.landlocked').input;
};
var getBorders = function getBorders(c) {
  return _get('data', c, 'geo.borders').input;
};
var isIndependent = function isIndependent(c) {
  return _get('data', c, 'geo.independent').input;
};
var getCallingCode = function getCallingCode(c) {
  return _get('data', c, 'dialling.calling_code').input[0];
};

var getCallingCodes = function getCallingCodes(c) {
  return _get('data', c, 'dialling.calling_code').input;
};

var getNationalPrefix = function getNationalPrefix(c) {
  return _get('data', c, 'dialling.national_prefix').input;
};

var getNationalNumberLength = function getNationalNumberLength(c) {
  return _get('data', c, 'dialling.national_number_lengths').input[0];
};

var getNationalNumberLengths = function getNationalNumberLengths(c) {
  return _get('data', c, 'dialling.national_number_lengths').input;
};
var getNationalDestinationCodeLength = function getNationalDestinationCodeLength(c) {
  return _get('data', c, 'dialling.national_destination_code_lengths').input[0];
};

var getNationalDestinationCodeLengths = function getNationalDestinationCodeLengths(c) {
  return _get('data', c, 'dialling.national_destination_code_lengths').input;
};
var getInternationalPrefix = function getInternationalPrefix(c) {
  return _get('data', c, 'dialling.international_prefix').input;
};
var getAddressFormat = function getAddressFormat(c) {
  return _get('data', c, 'extra.address_format').input;
};
var getGeonameid = function getGeonameid(c) {
  return _get('data', c, 'extra.geonameid').input;
};
var getEdgar = function getEdgar(c) {
  return _get('data', c, 'extra.edgar').input;
};
var getWmo = function getWmo(c) {
  return _get('data', c, 'extra.wmo').input;
};
var getDs = function getDs(c) {
  return _get('data', c, 'extra.ds').input;
};

var getFifa = function getFifa(c) {
  return _get('data', c, 'extra.fifa').input;
};
var getFips = function getFips(c) {
  return _get('data', c, 'extra.fips').input;
};
var getGaul = function getGaul(c) {
  return _get('data', c, 'extra.gaul').input;
};
var getIoc = function getIoc(c) {
  return _get('data', c, 'extra.ioc').input;
};
var getCowc = function getCowc(c) {
  return _get('data', c, 'extra.cowc').input;
};
var getCown = function getCown(c) {
  return _get('data', c, 'extra.cown').input;
};
var getFao = function getFao(c) {
  return _get('data', c, 'extra.fao').input;
};
var getImf = function getImf(c) {
  return _get('data', c, 'extra.imf').input;
};
var getAr5 = function getAr5(c) {
  return _get('data', c, 'extra.ar5').input;
};
var isEuMember = function isEuMember(c) {
  return _get('data', c, 'extra.eu_member').input;
};
var getVatRates = function getVatRates(c) {
  return _get('data', c, 'extra.vat_rates').input;
};
var getEmoji = function getEmoji(c) {
  return _get('data', c, 'extra.emoji').input;
};
var getDivisons = function getDivisons(c) {
  return _get('divisions', c, '').input;
};
var getDivisonNames = function getDivisonNames(c) {
  var a = toArray(_get('divisions', c, '').input);
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b.push(a[i][0]);
  }
  return b;
};
var getDivision = function getDivision(c, n) {
  return _get('divisions', c, n).input;
};
var getCurrency = function getCurrency(c) {
  return _get('data', c, 'currency').input;
};

var getGeoJSON = function getGeoJSON(c) {
  return _get('geodata', c, '').input;
};

var getFlagSVG = function getFlagSVG(c) {
  fs.readFile('./resources/flags/' + c + '.svg', 'utf8', function (err, contents) {
    return contents;
  });
};

var Country = function () {
  function Country(country, division) {
    _classCallCheck(this, Country);

    this.country = country;
    this.diviosn = division;
  }

  _createClass(Country, [{
    key: 'getName',
    get: function get() {
      // console.log(country+"this is class")
      return _get('data', this.country, 'name.common').input;
    }
  }, {
    key: 'getOfficalName',
    get: function get() {
      return _get('data', this.country, 'name.official').input;
    }
  }, {
    key: 'getNativeName',
    get: function get() {
      var a = _get('data', this.country, 'name.native').input;
      return toArray(a)[0][0];
    }
  }, {
    key: 'getOfficialNativeName',
    get: function get() {
      var a = _get('data', this.country, 'name.native').input;
      return toArray(a)[0][1];
    }
  }, {
    key: 'getDemonym',
    get: function get() {
      return _get('data', this.country, 'demonym').input;
    }
  }, {
    key: 'getCapital',
    get: function get() {
      return _get('data', this.country, 'capital').input;
    }
  }, {
    key: 'getIsoAlpha2',
    get: function get() {
      return _get('data', this.country, 'iso_3166_1_alpha2').input;
    }
  }, {
    key: 'getIsoAlpha3',
    get: function get() {
      return _get('data', this.country, 'iso_3166_1_alpha3').input;
    }
  }, {
    key: 'getIsoNumeric',
    get: function get() {
      return _get('data', this.country, 'iso_3166_1_numeric').input;
    }
  }, {
    key: 'getTld',
    get: function get() {
      return _get('data', this.country, 'tld').input[0];
    }
  }, {
    key: 'getTlds',
    get: function get() {
      return _get('data', this.country, 'tld').input;
    }
  }, {
    key: 'getAltSpellings',
    get: function get() {
      return _get('data', this.country, 'alt_spellings').input;
    }
  }, {
    key: 'getLanguage',
    get: function get() {
      return toArray(_get('data', this.country, 'languages').input)[0];
    }
  }, {
    key: 'getLanguages',
    get: function get() {
      return toArray(_get('data', this.country, 'languages').input);
    }
  }, {
    key: 'getContinent',
    get: function get() {
      return toArray(_get('data', this.country, 'geo.continent').input)[0];
    }
  }, {
    key: 'usesPostalCode',
    get: function get() {
      return _get('data', this.country, 'geo.postal_code').input;
    }
  }, {
    key: 'getLatitude',
    get: function get() {
      return _get('data', this.country, 'geo.latitude').input;
    }
  }, {
    key: 'getLongitude',
    get: function get() {
      return _get('data', this.country, 'geo.longitude').input;
    }
  }, {
    key: 'getLatitudeDesc',
    get: function get() {
      return _get('data', this.country, 'geo.latitude_desc').input;
    }
  }, {
    key: 'getLongitudeDesc',
    get: function get() {
      return _get('data', this.country, 'geo.longitude_desc').input;
    }
  }, {
    key: 'getMaxLongitude',
    get: function get() {
      return _get('data', this.country, 'geo.max_longitude').input;
    }
  }, {
    key: 'getMinLongitude',
    get: function get() {
      return _get('data', this.country, 'geo.min_longitude').input;
    }
  }, {
    key: 'getMaxLatitude',
    get: function get() {
      return _get('data', this.country, 'geo.max_latitude').input;
    }
  }, {
    key: 'getMinLatitude',
    get: function get() {
      return _get('data', this.country, 'geo.min_latitude').input;
    }
  }, {
    key: 'getArea',
    get: function get() {
      return _get('data', this.country, 'geo.area').input;
    }
  }, {
    key: 'getRegion',
    get: function get() {
      return _get('data', this.country, 'geo.region').input;
    }
  }, {
    key: 'getSubregion',
    get: function get() {
      return _get('data', this.country, 'geo.subregion').input;
    }
  }, {
    key: 'getWorldRegion',
    get: function get() {
      return _get('data', this.country, 'geo.world_region').input;
    }
  }, {
    key: 'getRegionCode',
    get: function get() {
      return _get('data', this.country, 'geo.region_code').input;
    }
  }, {
    key: 'getSubregionCode',
    get: function get() {
      return _get('data', this.country, 'geo.subregion_code').input;
    }
  }, {
    key: 'isLandlocked',
    get: function get() {
      return _get('data', this.country, 'geo.landlocked').input;
    }
  }, {
    key: 'getBorders',
    get: function get() {
      return _get('data', this.country, 'geo.borders').input;
    }
  }, {
    key: 'isIndependent',
    get: function get() {
      return _get('data', this.country, 'geo.independent').input;
    }
  }, {
    key: 'getCallingCode',
    get: function get() {
      return _get('data', this.country, 'dialling.calling_code').input[0];
    }
  }, {
    key: 'getCallingCodes',
    get: function get() {
      return _get('data', this.country, 'dialling.calling_code').input;
    }
  }, {
    key: 'getNationalPrefix',
    get: function get() {
      return _get('data', this.country, 'dialling.national_prefix').input;
    }
  }, {
    key: 'getNationalNumberLength',
    get: function get() {
      return _get('data', this.country, 'dialling.national_number_lengths').input[0];
    }
  }, {
    key: 'getNationalNumberLengths',
    get: function get() {
      return _get('data', this.country, 'dialling.national_number_lengths').input;
    }
  }, {
    key: 'getNationalDestinationCodeLength',
    get: function get() {
      return _get('data', this.country, 'dialling.national_destination_code_lengths').input[0];
    }
  }, {
    key: 'getNationalDestinationCodeLengths',
    get: function get() {
      return _get('data', this.country, 'dialling.national_destination_code_lengths').input;
    }
  }, {
    key: 'getInternationalPrefix',
    get: function get() {
      return _get('data', this.country, 'dialling.international_prefix').input;
    }
  }, {
    key: 'getAddressFormat',
    get: function get() {
      return _get('data', this.country, 'extra.address_format').input;
    }
  }, {
    key: 'getGeonameid',
    get: function get() {
      return _get('data', this.country, 'extra.geonameid').input;
    }
  }, {
    key: 'getEdgar',
    get: function get() {
      return _get('data', this.country, 'extra.edgar').input;
    }
  }, {
    key: 'getWmo',
    get: function get() {
      return _get('data', this.country, 'extra.wmo').input;
    }
  }, {
    key: 'getDs',
    get: function get() {
      return _get('data', this.country, 'extra.ds').input;
    }
  }, {
    key: 'getFifa',
    get: function get() {
      return _get('data', this.country, 'extra.fifa').input;
    }
  }, {
    key: 'getFips',
    get: function get() {
      return _get('data', this.country, 'extra.fips').input;
    }
  }, {
    key: 'getGaul',
    get: function get() {
      return _get('data', this.country, 'extra.gaul').input;
    }
  }, {
    key: 'getIoc',
    get: function get() {
      return _get('data', this.country, 'extra.ioc').input;
    }
  }, {
    key: 'getCowc',
    get: function get() {
      return _get('data', this.country, 'extra.cowc').input;
    }
  }, {
    key: 'getCown',
    get: function get() {
      return _get('data', this.country, 'extra.cown').input;
    }
  }, {
    key: 'getFao',
    get: function get() {
      return _get('data', this.country, 'extra.fao').input;
    }
  }, {
    key: 'getImf',
    get: function get() {
      return _get('data', this.country, 'extra.imf').input;
    }
  }, {
    key: 'getAr5',
    get: function get() {
      return _get('data', this.country, 'extra.ar5').input;
    }
  }, {
    key: 'isEuMember',
    get: function get() {
      return _get('data', this.country, 'extra.eu_member').input;
    }
  }, {
    key: 'getVatRates',
    get: function get() {
      return _get('data', this.country, 'extra.vat_rates').input;
    }
  }, {
    key: 'getEmoji',
    get: function get() {
      return _get('data', this.country, 'extra.emoji').input;
    }
  }, {
    key: 'getDivisons',
    get: function get() {
      return _get('divisions', this.country, '').input;
    }
  }, {
    key: 'getDivisonNames',
    get: function get() {
      var a = toArray(_get('divisions', this.country, '').input);
      var b = [];
      for (var i = 0; i < a.length; i++) {
        b.push(a[i][0]);
      }
      return b;
    }
  }, {
    key: 'getDivision',
    get: function get() {
      return _get('divisions', this.country, this.division).input;
    }
  }, {
    key: 'getCurrency',
    get: function get() {
      return _get('data', this.country, 'currency').input;
    }
  }, {
    key: 'getGeoJSON',
    get: function get() {
      return _get('geodata', this.country, '').input;
    }
  }, {
    key: 'getFlagSVG',
    get: function get() {
      fs.readFile('./resources/flags/' + this.country + '.svg', 'utf8', function (err, contents) {
        return contents;
      });
    }
  }]);

  return Country;
}();

var egypt = new Country('eg');
egypt.division = "WAD";
console.log(egypt.getName);

// getName('eg')
// getOfficalName('eg')
// getNativeName('eg')
// getOfficialNativeName('eg')
// getDemonym('eg')
// getCapital('eg')
// getIsoAlpha2('eg')
// getIsoAlpha3('eg')
// getIsoNumeric('eg')
// getTld('eg')
// getTlds('eg')
// getAltSpellings('eg')
// getLanguage('eg')
// getLanguages('eg')
// getContinent('eg')
// usesPostalCode('eg')
// getLatitude('eg')
// getLongitude('eg')
// getLatitudeDesc('eg')
// getLongitudeDesc('eg')
// getMaxLongitude('eg')
// getMinLongitude('eg')
// getMaxLatitude('eg')
// getMinLatitude('eg')
// getArea('eg')
// getRegion('eg')
// getSubregion('eg')
// getWorldRegion('eg')
// getRegionCode('eg')
// getSubregionCode('eg')
// isLandlocked('eg')
// getBorders('eg')
// isIndependent('eg')
// getCallingCode('eg')
// getCallingCodes('eg')
// getNationalPrefix('eg')
// getNationalNumberLength('eg')
// getNationalNumberLengths('eg')
// getNationalDestinationCodeLength('eg')
// getNationalDestinationCodeLengths('eg')
// getInternationalPrefix('eg')
// getAddressFormat('eg')
// getGeonameid('eg')
// getEdgar('eg')
// getWmo('eg')
// getFifa('eg')
// getFips('eg')
// getGaul('eg')
// getIoc('eg')
// getCowc('eg')
// getCown('eg')
// getFao('eg')
// getImf('eg')
// getAr5('eg')
// isEuMember('eg')
// getVatRates('eg')
// getVatRates('eg')
// getDs('eg')
// getEmoji('eg')
// getDivisons('eg')
// getDivisonNames('eg')
// getDivision('eg', 'AST')
// getCurrency('eg')
// getGeoJSON('eg')
// getFlagSVG('eg')

exports.default = Country;
exports.getName = getName;
exports.getOfficalName = getOfficalName;
exports.getNativeName = getNativeName;
exports.getOfficialNativeName = getOfficialNativeName;
exports.getDemonym = getDemonym;
exports.getCapital = getCapital;
exports.getIsoAlpha2 = getIsoAlpha2;
exports.getIsoAlpha3 = getIsoAlpha3;
exports.getIsoNumeric = getIsoNumeric;
exports.getTld = getTld;
exports.getTlds = getTlds;
exports.getAltSpellings = getAltSpellings;
exports.getLanguage = getLanguage;
exports.getLanguages = getLanguages;
exports.getContinent = getContinent;
exports.usesPostalCode = usesPostalCode;
exports.getLatitude = getLatitude;
exports.getLongitude = getLongitude;
exports.getLatitudeDesc = getLatitudeDesc;
exports.getLongitudeDesc = getLongitudeDesc;
exports.getMaxLongitude = getMaxLongitude;
exports.getMinLongitude = getMinLongitude;
exports.getMaxLatitude = getMaxLatitude;
exports.getMinLatitude = getMinLatitude;
exports.getArea = getArea;
exports.getRegion = getRegion;
exports.getSubregion = getSubregion;
exports.getWorldRegion = getWorldRegion;
exports.getRegionCode = getRegionCode;
exports.getSubregionCode = getSubregionCode;
exports.isLandlocked = isLandlocked;
exports.getBorders = getBorders;
exports.isIndependent = isIndependent;
exports.getCallingCode = getCallingCode;
exports.getCallingCodes = getCallingCodes;
exports.getNationalPrefix = getNationalPrefix;
exports.getNationalNumberLength = getNationalNumberLength;
exports.getNationalNumberLengths = getNationalNumberLengths;
exports.getNationalDestinationCodeLength = getNationalDestinationCodeLength;
exports.getNationalDestinationCodeLengths = getNationalDestinationCodeLengths;
exports.getInternationalPrefix = getInternationalPrefix;
exports.getAddressFormat = getAddressFormat;
exports.getGeonameid = getGeonameid;
exports.getEdgar = getEdgar;
exports.getWmo = getWmo;
exports.getFifa = getFifa;
exports.getFips = getFips;
exports.getGaul = getGaul;
exports.getIoc = getIoc;
exports.getCowc = getCowc;
exports.getCown = getCown;
exports.getFao = getFao;
exports.getImf = getImf;
exports.getAr5 = getAr5;
exports.isEuMember = isEuMember;
exports.getVatRates = getVatRates;
exports.getDs = getDs;
exports.getEmoji = getEmoji;
exports.getDivisons = getDivisons;
exports.getDivisonNames = getDivisonNames;
exports.getDivision = getDivision;
exports.getCurrency = getCurrency;
exports.getGeoJSON = getGeoJSON;
exports.getFlagSVG = getFlagSVG;