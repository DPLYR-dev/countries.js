# Countries.js by DPLYR

**Countries.js** is a simple and lightweight package for retrieving country details with flexibility. A whole bunch of data including name, demonym, capital, iso codes, dialling codes, geo data, currencies, flags, emoji, and other attributes for all 250 countries worldwide at your fingertips.

**This is package is sponsored and maintained by [DPLYR](https://www.dplyr.dev) the easist way to deploy your websites with support for node.js and all the major databasescheck them out at [www.dplyr.dev](https://www.dplyr.dev)**


## Usage

Install via `npm install countriesjs` or `yarn add countriesjs`, then use onw of these ways:

### There's two ways of using this library 
#### 1. Intainlizing countries as indivual variables and accessing them indivually
```javascript
const Country = require('countriesjs')
// Get single country
const egypt = Country('eg');

// Get country name                                 // Get country native name
egypt.getName();                             egypt.getNativeName();

// Get country official name                        // Get country ISO 3166-1 alpha2 code
egypt.getOfficialName();                     egypt.getIsoAlpha2();

// Get country area                                 // Get country borders
egypt.getArea();                             egypt.getBorders();

// Get country currencies                           // Get country languages
egypt.getCurrencies();                       egypt.getLanguages();

// Get country emoji                                // Get country flag
egypt.getEmoji();                            egypt.getFlag();

```
#### 2. Importing the functions indivually and passing the country everytime
```javascript
const {getName, getNativeName, getOfficialName, getIsoAlpha2, getArea, getBorders, getCurrencies, getLanguages, getEmoji, getFlag} = require('countriesjs')

// Get country name                                 // Get country native name
getName('eg');                             getNativeName('eg');

// Get country official name                        // Get country ISO 3166-1 alpha2 code
getOfficialName('eg');                     getIsoAlpha2('eg');

// Get country area                                 // Get country borders
getArea('eg');                             getBorders('eg');

// Get country currencies                           // Get country languages
getCurrencies('eg');                       getLanguages('eg');

// Get country emoji                                // Get country flag
getEmoji('eg');                            getFlag('eg');

```


## Table Of Contents

- [Countries.js by DPLYR](#countriesjs-by-dplyr)
  - [Usage](#usage)
    - [There's two ways of using this library](#theres-two-ways-of-using-this-library)
      - [1. Intainlizing countries as indivual variables and accessing them indivually](#1-intainlizing-countries-as-indivual-variables-and-accessing-them-indivually)
      - [2. Importing the functions indivually and passing the country everytime](#2-importing-the-functions-indivually-and-passing-the-country-everytime)
  - [Table Of Contents](#table-of-contents)
  - [Advanced Usage](#advanced-usage)
    - [This example uses the first apporach of using countriesjs but the same functions are available with the second apporaches but with the () after the function name and the country name passed in](#this-example-uses-the-first-apporach-of-using-countriesjs-but-the-same-functions-are-available-with-the-second-apporaches-but-with-the--after-the-function-name-and-the-country-name-passed-in)
      - [in the getDivision function inthe second apporach the name of the  division is passed as the second parameter](#in-the-getdivision-function-inthe-second-apporach-the-name-of-the-division-is-passed-as-the-second-parameter)
  - [Features Explained](#features-explained)
  - [Data Sources](#data-sources)
  - [Changelog](#changelog)
  - [Support](#support)
  - [Contributing & Protocols](#contributing--protocols)
  - [Security Vulnerabilities](#security-vulnerabilities)
  - [About DPLYR](#about-dplyr)
  - [Acknowledgement](#acknowledgement)
  - [License](#license)


## Advanced Usage
### This example uses the first apporach of using countriesjs but the same functions are available with the second apporaches but with the () after the function name and the country name passed in
#### in the getDivision function inthe second apporach the name of the  division is passed as the second parameter
Get country attributes (self-descriptive):

```javascript
const Country = require('countriesjs')
var egypt = Country('eg');

// Egypt                                            // مصر
egypt.getName;                                  egypt.getNativeName;

// Arab Republic of Egypt                           // جمهورية مصر العربية
egypt.getOfficialName;                          egypt.getNativeOfficialName;

// Egyptian                                         // Cairo
egypt.getDemonym;                               egypt.getCapital;

// EG                                               // EGY
egypt.getIsoAlpha2;                             egypt.getIsoAlpha3;

// 818                                              // .eg
egypt.getIsoNumeric;                            egypt.getTld;

// [".eg",".مصر"]                                   // ["EG","Arab Republic of Egypt"]
egypt.getTlds;                                  egypt.getAltSpellings;

// Arabic                                           // {"ara":"Arabic"}
egypt.getLanguage;                              egypt.getLanguages;

// Africa                                           // true
egypt.getContinent;                             egypt.usesPostalCode;

// 27 00 N                                          // 30 00 E
egypt.getLatitude;                              egypt.getLongitude;

// 26.756103515625                                  // 29.86229705810547
egypt.getLatitudeDesc;                          egypt.getLongitudeDesc;

// 31.916667                                        // 36.333333
egypt.getMaxLatitude;                           egypt.getMaxLongitude;

// 20.383333                                        // 24.7
egypt.getMinLatitude;                           egypt.getMinLongitude;

// 1002450                                          // Africa
egypt.getArea;                                  egypt.getRegion;

// Northern Africa                                  // EMEA
egypt.getSubregion;                             egypt.getWorldRegion;

// 002                                              // 015
egypt.getRegionCode;                            egypt.getSubregionCode;

// false                                            // ["ISR","LBY","SDN"]
egypt.isLandlocked;                             egypt.getBorders;

// Yes                                              // 20
egypt.isIndependent;                            egypt.getCallingCode;

// ["20"]                                           // 0
egypt.getCallingCodes;                          egypt.getNationalPrefix;

// 9                                                // [9]
egypt.getNationalNumberLength;                  egypt.getNationalNumberLengths;

// 2                                                // [2]
egypt.getNationalDestinationCodeLength;         egypt.getnationaldestinationcodelengths;

// "00"                                             // {{recipient}}\n{{street}}\n{{postalcode}} {{city}}\n{{country}}
egypt.getInternationalPrefix;                   egypt.getAddressFormat;

// 357994                                           // H2
egypt.getGeonameid;                             egypt.getEdgar;

// EGY                                              // ua
egypt.getItu;                                   egypt.getMarc;

// EG                                               // ET
egypt.getWmo;                                   egypt.getDs;

// EGY                                              // EG
egypt.getFifa;                                  egypt.getFips;

// 40765                                            // EGY
egypt.getGaul;                                  egypt.getIoc;

// EGY                                              // 651
egypt.getCowc;                                  egypt.getCown;

// 59                                               // 469
egypt.getFao;                                   egypt.getImf;

// MAF                                              // null
egypt.getAr5;                                   egypt.isEuMember;

// null                                             // 🇪🇬
egypt.getVatRates;                              egypt.getEmoji;

// GeoJson data returned as string                  // SVG data returned as string
egypt.getGeoJson;                               egypt.getFlag;

// Divisions returned as array                      

// {"iso_4217_code":"EGP","iso_4217_numeric":818,"iso_4217_name":"Egyptian Pound","iso_4217_minor_unit":2}
egypt.getCurrency;
// {"name":"Al Iskandariyah","alt_names":["El Iskandariya","al-Iskandariyah","al-Iskandarīyah","Alexandria","Alexandrie","Alexandria"],"geo":{"latitude":31.2000924,"longitude":29.9187387,"min_latitude":31.1173177,"min_longitude":29.8233701,"max_latitude":31.330904,"max_longitude":30.0864016}}
egypt.division = "WAD"
egypt.getDivision
```


## Features Explained

- Country data are all stored here: `resources/data/countries.json`.
- `name`
    - `common` - common name in english
    - `official` - official name in english
    - `native` - list of all native names
        - key: three-letter ISO 639-3 language alpha code
        - value: name object
            - key: `official` - official name translation
            - key: `common` - common name translation
- `demonym` - name of residents
- `capital` - capital city
- `iso_3166_1_alpha2` - code ISO 3166-1 alpha-2
- `iso_3166_1_alpha3` -code ISO  3166-1 alpha-3
- `iso_3166_1_numeric` - code ISO 3166-1 numeric
- `currency` - ISO 4217 currency code(s)
    - key: three-letter ISO 4217 currency code
    - value: currency object
        - key: `iso_4217_code` - three-letter ISO 4217 currency alpha code
        - key: `iso_4217_numeric` - three-number ISO 4217 currency numeric code
        - key: `iso_4217_name` - official ISO 4217 currency name
        - key: `iso_4217_minor_unit` - minor currency unit
- `tld` - country code top-level domain
- `alt_spellings` - alternative spellings
- `languages` - list of official languages
    - key: three-letter ISO 639-3 language code
    - value: name of the language in english
- `translations` - list of name translations
    - key: three-letter ISO 639-3 language code
    - value: name object
        - key: `official` - official name translation
        - key: `common` - common name translation
- `geo`
    - `continent` - continents that country lies in
        - key: two-letter continent code
        - value: name of the continent in english
    - `postal_code` - whether the country uses postal codes
    - `latitude` - short form of latitude coordinate point
    - `latitude_desc` - described latitude coordinate point
    - `longitude` - short form of longitude coordinate point
    - `longitude_desc` - described longitude coordinate point
    - `max_latitude` - maximum latitude coordinate point
    - `max_longitude` - maximum longitude coordinate point
    - `min_latitude` - minimum latitude coordinate point
    - `min_longitude` - minimum longitude coordinate point
    - `area` - land area in km²
    - `region` - geographical region
    - `subregion` - geographical sub-region
    - `world_region` - geographical world region
    - `region_code` - geographical region numeric code
    - `subregion_code` - geographical sub-region numeric code
    - `landlocked` - landlock status
    - `borders` - land borders
    - `independent` - independent status
- `dialling`
    - `calling_code` - calling code(s)
    - `national_prefix` - national prefix
    - `national_number_lengths` - national number lengths
    - `national_destination_code_lengths` - national destination code lengths
    - `international_prefix` - international prefix
- `extra`
    - `geonameid` - Geoname ID
    - `edgar` - Electronic Data Gathering, Analysis, and Retrieval system
    - `itu` - Codes assigned by the International Telecommunications Union
    - `marc` - MAchine-Readable Cataloging codes from the Library of Congress
    - `wmo` - Country abbreviations by the World Meteorological Organization
    - `ds` - Distinguishing signs of vehicles in international traffic
    - `fifa` - Codes assigned by the Fédération Internationale de Football Association
    - `fips` - Codes from the U.S. Federal Information Processing Standard
    - `gaul` - Global Administrative Unit Layers from the Food and Agriculture Organization
    - `ioc` - Codes assigned by the International Olympics Committee
    - `cowc` - Correlates of War character
    - `cown` - Correlates of War numeric
    - `fao` - Food and Agriculture Organization
    - `imf` - International Monetary Fund
    - `ar5` - Fifth Assessment Report (AR5)
    - `address_format` - Address forma
    - `eu_member` - European Union Member
    - `vat_rates` - Value-Added Tax
    - `emoji` - Emoji Flag


## Data Sources

- Currency Data (27th Sep, 2016): http://www.currency-iso.org
- Emoji Flags (27th Sep, 2016): http://unicode.org/emoji/charts/full-emoji-list.html
- World Borders (27th Sep, 2016): http://thematicmapping.org/downloads/world_borders.php
- GeoJson & SVG Flags (27th Sep, 2016): https://github.com/mledoze/countries/tree/master/data
- Main Country Data, Regions, and Divisions (27th Sep, 2016): https://github.com/hexorx/countries
- Other Resources:
    - https://en.wikipedia.org
    - https://github.com/annexare/Countries
    - https://github.com/umpirsky/country-list
    - https://github.com/datasets/country-list
    - https://github.com/datasets/country-codes
    - https://github.com/sripaulgit/country-codes
    - https://github.com/alexrabarts/iso_country_codes
    - https://github.com/vincentarelbundock/countrycode
    - https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes


## Changelog

Refer to the [Changelog](CHANGELOG.md) for a full history of the project.


## Support

The following support channels are available at your fingertips:

- [Help on Email](mailto:info@dplyr.dev)
- [Follow on Facebook](https://facebook.com/dplyr.dev)
- [Follow on Twitter](https://twitter.com/dplyrdev)


## Contributing & Protocols

Thank you for considering contributing to this project! The contribution guide can be found in [CONTRIBUTING.md](CONTRIBUTING.md).

Bug reports, feature requests, and pull requests are very welcome.

- [Versioning](CONTRIBUTING.md#versioning)
- [Pull Requests](CONTRIBUTING.md#pull-requests)
- [Feature Requests](CONTRIBUTING.md#feature-requests)
- [Git Flow](CONTRIBUTING.md#git-flow)


## Security Vulnerabilities

If you discover a security vulnerability within this project, please send an e-mail to [info@dplyr.dev](info@dplyr.dev). All security vulnerabilities will be promptly addressed.


## About DPLYR

[DPLYR](https://www.dplyr.dev) is a SaaS tool that helps devlopers just like you to deploy thier web apps more easily. It supports deploying Node.js apps with MongoDB, MySQL or PostgreSQL databases all for free. Go now  to [www.dplyr.dev](https://www.dplyr.dev) and create a free account.

## Acknowledgement

> This package is a fork from [Rinvex countries](https://github.com/rinvex/countries) and modified to work with javascript. Thanks rinvex team for your contribution to the open source community😀
## License

This software is released under [The MIT License (MIT)](LICENSE).

(c) 2020 DPLYR LLC, Some rights reserved.