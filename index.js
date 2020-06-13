var { t } = require('typy')
const fs  = require('fs')
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

getName = function (c) {
  return get('data', c, 'name.common').input
}
getOfficalName = function (c) {
  return get('data', c, 'name.official').input
}
getNativeName = function (c) {
  var a = get('data', c, 'name.native').input
  return toArray(a)[0][0]
}
getOfficialNativeName = function (c) {
  var a = get('data', c, 'name.native').input
  return toArray(a)[0][1]
}
getDemonym = function (c) {
  return get('data', c, 'demonym').input
}
getCapital = function (c) {
  return get('data', c, 'capital').input
}
getIsoAlpha2 = function (c) {
  return get('data', c, 'iso_3166_1_alpha2').input
}
getIsoAlpha3 = function (c) {
  return get('data', c, 'iso_3166_1_alpha3').input
}
getIsoNumeric = function (c) {
  return get('data', c, 'iso_3166_1_numeric').input
}
getTld = function (c) {
  return get('data', c, 'tld').input[0]
}
getTlds = function (c) {
  return get('data', c, 'tld').input
}
getAltSpellings = function (c) {
  return get('data', c, 'alt_spellings').input
}
getLanguage = function (c) {
  return toArray(get('data', c, 'languages').input)[0]
}
getLanguages = function (c) {
  return toArray(get('data', c, 'languages').input)
}
getContinent = function (c) {
  return toArray(get('data', c, 'geo.continent').input)[0]
}
usesPostalCode = function (c) {
  return get('data', c, 'geo.postal_code').input
}
getLatitude = function (c) {
  return get('data', c, 'geo.latitude').input
}
getLongitude = function (c) {
  return get('data', c, 'geo.longitude').input
}
getLatitudeDesc = function (c) {
  return get('data', c, 'geo.latitude_desc').input
}
getLongitudeDesc = function (c) {
  return get('data', c, 'geo.longitude_desc').input
}
getMaxLongitude = function (c) {
  return get('data', c, 'geo.max_longitude').input
}
getMinLongitude = function (c) {
  return get('data', c, 'geo.min_longitude').input
}
getMaxLatitude = function (c) {
  return get('data', c, 'geo.max_latitude').input
}
getMinLatitude = function (c) {
  return get('data', c, 'geo.min_latitude').input
}
getArea = function (c) {
  return get('data', c, 'geo.area').input
}
getRegion = function (c) {
  return get('data', c, 'geo.region').input
}
getSubregion = function (c) {
  return get('data', c, 'geo.subregion').input
}
getWorldRegion = function (c) {
  return get('data', c, 'geo.world_region').input
}
getRegionCode = function (c) {
  return get('data', c, 'geo.region_code').input
}
getSubregionCode = function (c) {
  return get('data', c, 'geo.subregion_code').input
}

isLandlocked = function (c) {
  return get('data', c, 'geo.landlocked').input
}
getBorders = function (c) {
  return get('data', c, 'geo.borders').input
}
isIndependent = function (c) {
  return get('data', c, 'geo.independent').input
}
getCallingCode = function (c) {
  return get('data', c, 'dialling.calling_code').input[0]
}

getCallingCodes = function (c) {
  return get('data', c, 'dialling.calling_code').input
}

getNationalPrefix = function (c) {
  return get('data', c, 'dialling.national_prefix').input
}

getNationalNumberLength = function (c) {
  return get('data', c, 'dialling.national_number_lengths').input[0]
}

getNationalNumberLengths = function (c) {
  return get('data', c, 'dialling.national_number_lengths').input
}
getNationalDestinationCodeLength = function (c) {
  return get('data', c, 'dialling.national_destination_code_lengths').input[0]
}

getNationalDestinationCodeLengths = function (c) {
  return get('data', c, 'dialling.national_destination_code_lengths').input
}
getInternationalPrefix = function (c) {
  return get('data', c, 'dialling.international_prefix').input
}
getAddressFormat = function (c) {
  return get('data', c, 'extra.address_format').input
}
getGeonameid = function (c) {
  return get('data', c, 'extra.geonameid').input
}
getEdgar = function (c) {
  return get('data', c, 'extra.edgar').input
}
getWmo = function (c) {
  return get('data', c, 'extra.wmo').input
}
getDs = function (c) {
  return get('data', c, 'extra.ds').input
}
getFifa = function (c) {
  return get('data', c, 'extra.fifa').input
}
getFips = function (c) {
  return get('data', c, 'extra.fips').input
}
getGaul = function (c) {
  return get('data', c, 'extra.gaul').input
}
getIoc = function (c) {
  return get('data', c, 'extra.ioc').input
}
getCowc = function (c) {
  return get('data', c, 'extra.cowc').input
}
getCown = function (c) {
  return get('data', c, 'extra.cown').input
}
getFao = function (c) {
  return get('data', c, 'extra.fao').input
}
getImf = function (c) {
  return get('data', c, 'extra.imf').input
}
getAr5 = function (c) {
  return get('data', c, 'extra.ar5').input
}
isEuMember = function (c) {
  return get('data', c, 'extra.eu_member').input
}
getVatRates = function (c) {
  return get('data', c, 'extra.vat_rates').input
}
getEmoji = function (c) {
  return get('data', c, 'extra.emoji').input
}
getDivisons = function (c) {
  return get('divisions', c, '').input
}
getDivisonNames = function (c) {
  var a = toArray(get('divisions', c, '').input)
  var b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i][0])
  }
  console.log(b)
}
getDivision = function (c, n) {
  return get('divisions', c, n).input
}
getCurrency = function (c) {
  return get('data', c, 'currency').input
}

getGeoJSON = function (c) {
  return get('geodata', c, '').input
}

getFlagSVG = function (c) {
  return fs.readFile('./resources/flags/' + c + '.svg', 'utf8', function (err, contents) {
    console.log(contents);
  });
}


console.log(getFlagSVG('eg'))

getName('eg')
getOfficalName('eg')
getNativeName('eg')
getOfficialNativeName('eg')
getDemonym('eg')
getCapital('eg')
getIsoAlpha2('eg')
getIsoAlpha3('eg')
getIsoNumeric('eg')
getTld('eg')
getTlds('eg')
getAltSpellings('eg')
getLanguage('eg')
getLanguages('eg')
getContinent('eg')
usesPostalCode('eg')
getLatitude('eg')
getLongitude('eg')
getLatitudeDesc('eg')
getLongitudeDesc('eg')
getMaxLongitude('eg')
getMinLongitude('eg')
getMaxLatitude('eg')
getMinLatitude('eg')
getArea('eg')
getRegion('eg')
getSubregion('eg')
getWorldRegion('eg')
getRegionCode('eg')
getSubregionCode('eg')
isLandlocked('eg')
getBorders('eg')
isIndependent('eg')
getCallingCode('eg')
getCallingCodes('eg')
getNationalPrefix('eg')
getNationalNumberLength('eg')
getNationalNumberLengths('eg')
getNationalDestinationCodeLength('eg')
getNationalDestinationCodeLengths('eg')
getInternationalPrefix('eg')
getAddressFormat('eg')
getGeonameid('eg')
getEdgar('eg')
getWmo('eg')
getFifa('eg')
getFips('eg')
getGaul('eg')
getIoc('eg')
getCowc('eg')
getCown('eg')
getFao('eg')
getImf('eg')
getAr5('eg')
isEuMember('eg')
getVatRates('eg')
getVatRates('eg')
getDs('eg')
getEmoji('eg')
getDivisons('eg')
getDivisonNames('eg')
getDivision('eg', 'AST')
getCurrency('eg')
getGeoJSON('eg')
getFlagSVG('eg')
