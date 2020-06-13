var { t } = require('typy')
const fs = require('fs')
function get(folder, country, location) {
  var f = require('./resources/' + folder + '/' + country + '.json');
  return t(f, location);
}
function toArray(obj) {
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
var getName = function (c) {
  return get('data', c, 'name.common').input
}
var getOfficalName = function (c) {
  return get('data', c, 'name.official').input
}
var getNativeName = function (c) {
  var a = get('data', c, 'name.native').input
  return toArray(a)[0][0]
}
var getOfficialNativeName = function (c) {
  var a = get('data', c, 'name.native').input
  return toArray(a)[0][1]
}
var getDemonym = function (c) {
  return get('data', c, 'demonym').input
}
var getCapital = function (c) {
  return get('data', c, 'capital').input
}
var getIsoAlpha2 = function (c) {
  return get('data', c, 'iso_3166_1_alpha2').input
}
var getIsoAlpha3 = function (c) {
  return get('data', c, 'iso_3166_1_alpha3').input
}
var getIsoNumeric = function (c) {
  return get('data', c, 'iso_3166_1_numeric').input
}
var getTld = function (c) {
  return get('data', c, 'tld').input[0]
}
var getTlds = function (c) {
  return get('data', c, 'tld').input
}
var getAltSpellings = function (c) {
  return get('data', c, 'alt_spellings').input
}
var getLanguage = function (c) {
  return toArray(get('data', c, 'languages').input)[0]
}
var getLanguages = function (c) {
  return toArray(get('data', c, 'languages').input)
}
var getContinent = function (c) {
  return toArray(get('data', c, 'geo.continent').input)[0]
}
var usesPostalCode = function (c) {
  return get('data', c, 'geo.postal_code').input
}
var getLatitude = function (c) {
  return get('data', c, 'geo.latitude').input
}
var getLongitude = function (c) {
  return get('data', c, 'geo.longitude').input
}
var getLatitudeDesc = function (c) {
  return get('data', c, 'geo.latitude_desc').input
}
var getLongitudeDesc = function (c) {
  return get('data', c, 'geo.longitude_desc').input
}
var getMaxLongitude = function (c) {
  return get('data', c, 'geo.max_longitude').input
}
var getMinLongitude = function (c) {
  return get('data', c, 'geo.min_longitude').input
}
var getMaxLatitude = function (c) {
  return get('data', c, 'geo.max_latitude').input
}
var getMinLatitude = function (c) {
  return get('data', c, 'geo.min_latitude').input
}
var getArea = function (c) {
  return get('data', c, 'geo.area').input
}
var getRegion = function (c) {
  return get('data', c, 'geo.region').input
}
var getSubregion = function (c) {
  return get('data', c, 'geo.subregion').input
}
var getWorldRegion = function (c) {
  return get('data', c, 'geo.world_region').input
}
var getRegionCode = function (c) {
  return get('data', c, 'geo.region_code').input
}
var getSubregionCode = function (c) {
  return get('data', c, 'geo.subregion_code').input
}

var isLandlocked = function (c) {
  return get('data', c, 'geo.landlocked').input
}
var getBorders = function (c) {
  return get('data', c, 'geo.borders').input
}
var isIndependent = function (c) {
  return get('data', c, 'geo.independent').input
}
var getCallingCode = function (c) {
  return get('data', c, 'dialling.calling_code').input[0]
}

var getCallingCodes = function (c) {
  return get('data', c, 'dialling.calling_code').input
}

var getNationalPrefix = function (c) {
  return get('data', c, 'dialling.national_prefix').input
}

var getNationalNumberLength = function (c) {
  return get('data', c, 'dialling.national_number_lengths').input[0]
}

var getNationalNumberLengths = function (c) {
  return get('data', c, 'dialling.national_number_lengths').input
}
var getNationalDestinationCodeLength = function (c) {
  return get('data', c, 'dialling.national_destination_code_lengths').input[0]
}

var getNationalDestinationCodeLengths = function (c) {
  return get('data', c, 'dialling.national_destination_code_lengths').input
}
var getInternationalPrefix = function (c) {
  return get('data', c, 'dialling.international_prefix').input
}
var getAddressFormat = function (c) {
  return get('data', c, 'extra.address_format').input
}
var getGeonameid = function (c) {
  return get('data', c, 'extra.geonameid').input
}
var getEdgar = function (c) {
  return get('data', c, 'extra.edgar').input
}
var getWmo = function (c) {
  return get('data', c, 'extra.wmo').input
}
var getDs = function (c) {
  return get('data', c, 'extra.ds').input
}

var getFifa = function (c) {
  return get('data', c, 'extra.fifa').input
}
var getFips = function (c) {
  return get('data', c, 'extra.fips').input
}
var getGaul = function (c) {
  return get('data', c, 'extra.gaul').input
}
var getIoc = function (c) {
  return get('data', c, 'extra.ioc').input
}
var getCowc = function (c) {
  return get('data', c, 'extra.cowc').input
}
var getCown = function (c) {
  return get('data', c, 'extra.cown').input
}
var getFao = function (c) {
  return get('data', c, 'extra.fao').input
}
var getImf = function (c) {
  return get('data', c, 'extra.imf').input
}
var getAr5 = function (c) {
  return get('data', c, 'extra.ar5').input
}
var isEuMember = function (c) {
  return get('data', c, 'extra.eu_member').input
}
var getVatRates = function (c) {
  return get('data', c, 'extra.vat_rates').input
}
var getEmoji = function (c) {
  return get('data', c, 'extra.emoji').input
}
var getDivisons = function (c) {
  return get('divisions', c, '').input
}
var getDivisonNames = function (c) {
  var a = toArray(get('divisions', c, '').input)
  var b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i][0])
  }
  return b
}
var getDivision = function (c, n) {
  return get('divisions', c, n).input
}
var getCurrency = function (c) {
  return get('data', c, 'currency').input
}

var getGeoJSON = function (c) {
  return get('geodata', c, '').input
}

var getFlagSVG = function (c) {
  fs.readFile('./resources/flags/' + c + '.svg', 'utf8', function (err, contents) {
    return contents
  });
}


class Country {
    constructor(country, division) {
      this.country = country;
      this.diviosn = division;
    }
    get getName() {
      // console.log(country+"this is class")
      return get('data', this.country, 'name.common').input
    }
    get getOfficalName () {
      return get('data', this.country, 'name.official').input
    }
    get getNativeName () {
      var a = get('data', this.country, 'name.native').input
      return toArray(a)[0][0]
    }
    get getOfficialNativeName  () {
      var a = get('data', this.country, 'name.native').input
      return toArray(a)[0][1]
    }
    get getDemonym  () {
      return get('data', this.country, 'demonym').input
    }
    get getCapital  () {
      return get('data', this.country, 'capital').input
    }
    get getIsoAlpha2  () {
      return get('data', this.country, 'iso_3166_1_alpha2').input
    }
    get getIsoAlpha3  () {
      return get('data', this.country, 'iso_3166_1_alpha3').input
    }
    get getIsoNumeric  () {
      return get('data', this.country, 'iso_3166_1_numeric').input
    }
    get getTld  () {
      return get('data', this.country, 'tld').input[0]
    }
    get getTlds  () {
      return get('data', this.country, 'tld').input
    }
    get getAltSpellings  () {
      return get('data', this.country, 'alt_spellings').input
    }
    get getLanguage  () {
      return toArray(get('data', this.country, 'languages').input)[0]
    }
    get getLanguages  () {
      return toArray(get('data', this.country, 'languages').input)
    }
    get getContinent  () {
      return toArray(get('data', this.country, 'geo.continent').input)[0]
    }
    get usesPostalCode  () {
      return get('data', this.country, 'geo.postal_code').input
    }
    get getLatitude  () {
      return get('data', this.country, 'geo.latitude').input
    }
    get getLongitude  () {
      return get('data', this.country, 'geo.longitude').input
    }
    get getLatitudeDesc  () {
      return get('data', this.country, 'geo.latitude_desc').input
    }
    get getLongitudeDesc  () {
      return get('data', this.country, 'geo.longitude_desc').input
    }
    get getMaxLongitude  () {
      return get('data', this.country, 'geo.max_longitude').input
    }
    get getMinLongitude  () {
      return get('data', this.country, 'geo.min_longitude').input
    }
    get getMaxLatitude  () {
      return get('data', this.country, 'geo.max_latitude').input
    }
    get getMinLatitude  () {
      return get('data', this.country, 'geo.min_latitude').input
    }
    get getArea  () {
      return get('data', this.country, 'geo.area').input
    }
    get getRegion  () {
      return get('data', this.country, 'geo.region').input
    }
    get getSubregion  () {
      return get('data', this.country, 'geo.subregion').input
    }
    get getWorldRegion  () {
      return get('data', this.country, 'geo.world_region').input
    }
    get getRegionCode  () {
      return get('data', this.country, 'geo.region_code').input
    }
    get getSubregionCode  () {
      return get('data', this.country, 'geo.subregion_code').input
    }
    
    get isLandlocked  () {
      return get('data', this.country, 'geo.landlocked').input
    }
    get getBorders  () {
      return get('data', this.country, 'geo.borders').input
    }
    get isIndependent  () {
      return get('data', this.country, 'geo.independent').input
    }
    get getCallingCode  () {
      return get('data', this.country, 'dialling.calling_code').input[0]
    }
    
    get getCallingCodes  () {
      return get('data', this.country, 'dialling.calling_code').input
    }
    
    get getNationalPrefix  () {
      return get('data', this.country, 'dialling.national_prefix').input
    }
    
    get getNationalNumberLength  () {
      return get('data', this.country, 'dialling.national_number_lengths').input[0]
    }
    
    get getNationalNumberLengths  () {
      return get('data', this.country, 'dialling.national_number_lengths').input
    }
    get getNationalDestinationCodeLength  () {
      return get('data', this.country, 'dialling.national_destination_code_lengths').input[0]
    }
    
    get getNationalDestinationCodeLengths  () {
      return get('data', this.country, 'dialling.national_destination_code_lengths').input
    }
    get getInternationalPrefix  () {
      return get('data', this.country, 'dialling.international_prefix').input
    }
    get getAddressFormat  () {
      return get('data', this.country, 'extra.address_format').input
    }
    get getGeonameid  () {
      return get('data', this.country, 'extra.geonameid').input
    }
    get getEdgar  () {
      return get('data', this.country, 'extra.edgar').input
    }
    get getWmo  () {
      return get('data', this.country, 'extra.wmo').input
    }
    get getDs  () {
      return get('data', this.country, 'extra.ds').input
    }
    
    get getFifa  () {
      return get('data', this.country, 'extra.fifa').input
    }
    get getFips  () {
      return get('data', this.country, 'extra.fips').input
    }
    get getGaul  () {
      return get('data', this.country, 'extra.gaul').input
    }
    get getIoc  () {
      return get('data', this.country, 'extra.ioc').input
    }
    get getCowc  () {
      return get('data', this.country, 'extra.cowc').input
    }
    get getCown  () {
      return get('data', this.country, 'extra.cown').input
    }
    get getFao  () {
      return get('data', this.country, 'extra.fao').input
    }
    get getImf  () {
      return get('data', this.country, 'extra.imf').input
    }
    get getAr5  () {
      return get('data', this.country, 'extra.ar5').input
    }
    get isEuMember  () {
      return get('data', this.country, 'extra.eu_member').input
    }
    get getVatRates  () {
      return get('data', this.country, 'extra.vat_rates').input
    }
    get getEmoji  () {
      return get('data', this.country, 'extra.emoji').input
    }
    get getDivisons  () {
      return get('divisions', this.country, '').input
    }
    get getDivisonNames  () {
      var a = toArray(get('divisions', this.country, '').input)
      var b = [];
      for (let i = 0; i < a.length; i++) {
        b.push(a[i][0])
      }
      return b
    }
    get getDivision  () {
      return get('divisions', this.country, this.division).input
    }
    get getCurrency  () {
      return get('data', this.country, 'currency').input
    }
    
    get getGeoJSON  () {
      return get('geodata', this.country, '').input
    }
    
    get getFlagSVG  () {
      fs.readFile('./resources/flags/' + this.country + '.svg', 'utf8', function (err, contents) {
        return contents
      });
    }
    
}
var egypt = new Country('eg')
egypt.division = "WAD"
console.log(egypt.getName)

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

export default Country
export {
  getName,
  getOfficalName,
  getNativeName,
  getOfficialNativeName,
  getDemonym,
  getCapital,
  getIsoAlpha2,
  getIsoAlpha3,
  getIsoNumeric,
  getTld,
  getTlds,
  getAltSpellings,
  getLanguage,
  getLanguages,
  getContinent,
  usesPostalCode,
  getLatitude,
  getLongitude,
  getLatitudeDesc,
  getLongitudeDesc,
  getMaxLongitude,
  getMinLongitude,
  getMaxLatitude,
  getMinLatitude,
  getArea,
  getRegion,
  getSubregion,
  getWorldRegion,
  getRegionCode,
  getSubregionCode,
  isLandlocked,
  getBorders,
  isIndependent,
  getCallingCode,
  getCallingCodes,
  getNationalPrefix,
  getNationalNumberLength,
  getNationalNumberLengths,
  getNationalDestinationCodeLength,
  getNationalDestinationCodeLengths,
  getInternationalPrefix,
  getAddressFormat,
  getGeonameid,
  getEdgar,
  getWmo,
  getFifa,
  getFips,
  getGaul,
  getIoc,
  getCowc,
  getCown,
  getFao,
  getImf,
  getAr5,
  isEuMember,
  getVatRates,
  getDs,
  getEmoji,
  getDivisons,
  getDivisonNames,
  getDivision,
  getCurrency,
  getGeoJSON,
  getFlagSVG,
}