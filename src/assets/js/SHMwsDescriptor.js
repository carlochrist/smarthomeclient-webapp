//
// Definitions for schema: null
//  http://localhost:8080/SmartHomeManagerWebServices?wsdl#types2
//
//
// Definitions for schema: null
//  http://localhost:8080/SmartHomeManagerWebServices?wsdl#types1
//
//
// Definitions for schema: http://wsprovider.connection.global.smarthome.thm.de/
//  http://localhost:8080/SmartHomeManagerWebServices?xsd=1
//
//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}userTransferObjectArray
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray';
  this._item = [];
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray.prototype.getItem
// element get for item
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}userTransferObject
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray.prototype.setItem
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_getItem() { return this._item;}

wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray.prototype.getItem = wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_getItem;

function wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_setItem(value) { this._item = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray.prototype.setItem = wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_setItem;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}userTransferObjectArray
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._item != null) {
      for (var ax = 0;ax < this._item.length;ax ++) {
        if (this._item[ax] == null) {
          xml = xml + '<item xsi:nil=\'true\'/>';
        } else {
          xml = xml + this._item[ax].serialize(cxfjsutils, 'item', null);
        }
      }
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_serialize;

function wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing item');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item')) {
    item = [];
    do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
        arrayItem = wsprovider_connection_global_smarthome_thm_de__userTransferObject_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item'));
    newobject.setItem(item);
    var item = null;
  }
  return newobject;
}

//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}weatherStationTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject';
  this._airHumidity = 0.0;
  this._airHumidityUnit = null;
  this._airHumidityUnit_t = null;
  this._airPressure = 0.0;
  this._airPressureUnit = null;
  this._airPressureUnit_t = null;
  this._manufacturer = null;
  this._manufacturer_t = null;
  this._message = null;
  this._model = null;
  this._name = null;
  this._outdoorTemperature = 0.0;
  this._outdoorTemperatureUnit = null;
  this._outdoorTemperatureUnit_t = null;
  this._rainfallAmount = 0.0;
  this._rainfallAmountUnit = null;
  this._rainfallAmountUnit_t = null;
  this._responseCode = null;
  this._serialnumber = null;
  this._windVelocity = 0.0;
  this._windVelocityUnit = null;
  this._windVelocityUnit_t = null;
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirHumidity
// element get for airHumidity
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for airHumidity
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirHumidity
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirHumidity() { return this._airHumidity;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirHumidity = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirHumidity;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirHumidity(value) { this._airHumidity = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirHumidity = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirHumidity;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirHumidityUnit
// element get for airHumidityUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for airHumidityUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirHumidityUnit
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirHumidityUnit() { return this._airHumidityUnit;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirHumidityUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirHumidityUnit;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirHumidityUnit(value) { this._airHumidityUnit = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirHumidityUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirHumidityUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirHumidityUnit_t
// element get for airHumidityUnit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for airHumidityUnit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirHumidityUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirHumidityUnit_t() { return this._airHumidityUnit_t;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirHumidityUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirHumidityUnit_t;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirHumidityUnit_t(value) { this._airHumidityUnit_t = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirHumidityUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirHumidityUnit_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirPressure
// element get for airPressure
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for airPressure
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirPressure
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirPressure() { return this._airPressure;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirPressure = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirPressure;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirPressure(value) { this._airPressure = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirPressure = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirPressure;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirPressureUnit
// element get for airPressureUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for airPressureUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirPressureUnit
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirPressureUnit() { return this._airPressureUnit;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirPressureUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirPressureUnit;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirPressureUnit(value) { this._airPressureUnit = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirPressureUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirPressureUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirPressureUnit_t
// element get for airPressureUnit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for airPressureUnit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirPressureUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirPressureUnit_t() { return this._airPressureUnit_t;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getAirPressureUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getAirPressureUnit_t;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirPressureUnit_t(value) { this._airPressureUnit_t = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setAirPressureUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setAirPressureUnit_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getManufacturer
// element get for manufacturer
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}deviceManufacturer
// - optional element
//
// element set for manufacturer
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setManufacturer
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getManufacturer() { return this._manufacturer;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getManufacturer = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getManufacturer;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setManufacturer(value) { this._manufacturer = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setManufacturer = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setManufacturer;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getManufacturer_t
// element get for manufacturer_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for manufacturer_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setManufacturer_t
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getManufacturer_t() { return this._manufacturer_t;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getManufacturer_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getManufacturer_t;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setManufacturer_t(value) { this._manufacturer_t = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setManufacturer_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setManufacturer_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setMessage
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getMessage() { return this._message;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getMessage;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setMessage(value) { this._message = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setMessage = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setMessage;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getModel
// element get for model
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for model
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setModel
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getModel() { return this._model;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getModel = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getModel;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setModel(value) { this._model = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setModel = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setModel;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setName
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getName() { return this._name;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getName = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getName;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setName(value) { this._name = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setName = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setName;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getOutdoorTemperature
// element get for outdoorTemperature
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for outdoorTemperature
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setOutdoorTemperature
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getOutdoorTemperature() { return this._outdoorTemperature;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getOutdoorTemperature = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getOutdoorTemperature;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setOutdoorTemperature(value) { this._outdoorTemperature = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setOutdoorTemperature = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setOutdoorTemperature;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getOutdoorTemperatureUnit
// element get for outdoorTemperatureUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for outdoorTemperatureUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setOutdoorTemperatureUnit
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getOutdoorTemperatureUnit() { return this._outdoorTemperatureUnit;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getOutdoorTemperatureUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getOutdoorTemperatureUnit;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setOutdoorTemperatureUnit(value) { this._outdoorTemperatureUnit = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setOutdoorTemperatureUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setOutdoorTemperatureUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getOutdoorTemperatureUnit_t
// element get for outdoorTemperatureUnit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for outdoorTemperatureUnit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setOutdoorTemperatureUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getOutdoorTemperatureUnit_t() { return this._outdoorTemperatureUnit_t;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getOutdoorTemperatureUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getOutdoorTemperatureUnit_t;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setOutdoorTemperatureUnit_t(value) { this._outdoorTemperatureUnit_t = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setOutdoorTemperatureUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setOutdoorTemperatureUnit_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getRainfallAmount
// element get for rainfallAmount
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for rainfallAmount
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setRainfallAmount
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getRainfallAmount() { return this._rainfallAmount;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getRainfallAmount = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getRainfallAmount;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setRainfallAmount(value) { this._rainfallAmount = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setRainfallAmount = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setRainfallAmount;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getRainfallAmountUnit
// element get for rainfallAmountUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for rainfallAmountUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setRainfallAmountUnit
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getRainfallAmountUnit() { return this._rainfallAmountUnit;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getRainfallAmountUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getRainfallAmountUnit;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setRainfallAmountUnit(value) { this._rainfallAmountUnit = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setRainfallAmountUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setRainfallAmountUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getRainfallAmountUnit_t
// element get for rainfallAmountUnit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for rainfallAmountUnit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setRainfallAmountUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getRainfallAmountUnit_t() { return this._rainfallAmountUnit_t;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getRainfallAmountUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getRainfallAmountUnit_t;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setRainfallAmountUnit_t(value) { this._rainfallAmountUnit_t = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setRainfallAmountUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setRainfallAmountUnit_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getResponseCode
// element get for responseCode
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
// - optional element
//
// element set for responseCode
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setResponseCode
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getResponseCode() { return this._responseCode;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getResponseCode = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getResponseCode;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setResponseCode(value) { this._responseCode = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setResponseCode = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setResponseCode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getSerialnumber
// element get for serialnumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for serialnumber
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setSerialnumber
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getSerialnumber() { return this._serialnumber;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getSerialnumber = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getSerialnumber;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setSerialnumber(value) { this._serialnumber = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setSerialnumber = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setSerialnumber;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getWindVelocity
// element get for windVelocity
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for windVelocity
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setWindVelocity
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getWindVelocity() { return this._windVelocity;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getWindVelocity = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getWindVelocity;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setWindVelocity(value) { this._windVelocity = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setWindVelocity = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setWindVelocity;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getWindVelocityUnit
// element get for windVelocityUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for windVelocityUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setWindVelocityUnit
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getWindVelocityUnit() { return this._windVelocityUnit;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getWindVelocityUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getWindVelocityUnit;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setWindVelocityUnit(value) { this._windVelocityUnit = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setWindVelocityUnit = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setWindVelocityUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getWindVelocityUnit_t
// element get for windVelocityUnit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for windVelocityUnit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setWindVelocityUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getWindVelocityUnit_t() { return this._windVelocityUnit_t;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.getWindVelocityUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_getWindVelocityUnit_t;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setWindVelocityUnit_t(value) { this._windVelocityUnit_t = value;}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.setWindVelocityUnit_t = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_setWindVelocityUnit_t;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}weatherStationTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    xml = xml + '<airHumidity>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._airHumidity);
    xml = xml + '</airHumidity>';
  }
  // block for local variables
  {
    if (this._airHumidityUnit != null) {
      xml = xml + '<airHumidityUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._airHumidityUnit);
      xml = xml + '</airHumidityUnit>';
    }
  }
  // block for local variables
  {
    if (this._airHumidityUnit_t != null) {
      xml = xml + '<airHumidityUnit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._airHumidityUnit_t);
      xml = xml + '</airHumidityUnit_t>';
    }
  }
  // block for local variables
  {
    xml = xml + '<airPressure>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._airPressure);
    xml = xml + '</airPressure>';
  }
  // block for local variables
  {
    if (this._airPressureUnit != null) {
      xml = xml + '<airPressureUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._airPressureUnit);
      xml = xml + '</airPressureUnit>';
    }
  }
  // block for local variables
  {
    if (this._airPressureUnit_t != null) {
      xml = xml + '<airPressureUnit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._airPressureUnit_t);
      xml = xml + '</airPressureUnit_t>';
    }
  }
  // block for local variables
  {
    if (this._manufacturer != null) {
      xml = xml + '<manufacturer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer);
      xml = xml + '</manufacturer>';
    }
  }
  // block for local variables
  {
    if (this._manufacturer_t != null) {
      xml = xml + '<manufacturer_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer_t);
      xml = xml + '</manufacturer_t>';
    }
  }
  // block for local variables
  {
    if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
    }
  }
  // block for local variables
  {
    if (this._model != null) {
      xml = xml + '<model>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._model);
      xml = xml + '</model>';
    }
  }
  // block for local variables
  {
    if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
    }
  }
  // block for local variables
  {
    xml = xml + '<outdoorTemperature>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._outdoorTemperature);
    xml = xml + '</outdoorTemperature>';
  }
  // block for local variables
  {
    if (this._outdoorTemperatureUnit != null) {
      xml = xml + '<outdoorTemperatureUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._outdoorTemperatureUnit);
      xml = xml + '</outdoorTemperatureUnit>';
    }
  }
  // block for local variables
  {
    if (this._outdoorTemperatureUnit_t != null) {
      xml = xml + '<outdoorTemperatureUnit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._outdoorTemperatureUnit_t);
      xml = xml + '</outdoorTemperatureUnit_t>';
    }
  }
  // block for local variables
  {
    xml = xml + '<rainfallAmount>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._rainfallAmount);
    xml = xml + '</rainfallAmount>';
  }
  // block for local variables
  {
    if (this._rainfallAmountUnit != null) {
      xml = xml + '<rainfallAmountUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._rainfallAmountUnit);
      xml = xml + '</rainfallAmountUnit>';
    }
  }
  // block for local variables
  {
    if (this._rainfallAmountUnit_t != null) {
      xml = xml + '<rainfallAmountUnit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._rainfallAmountUnit_t);
      xml = xml + '</rainfallAmountUnit_t>';
    }
  }
  // block for local variables
  {
    if (this._responseCode != null) {
      xml = xml + '<responseCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._responseCode);
      xml = xml + '</responseCode>';
    }
  }
  // block for local variables
  {
    if (this._serialnumber != null) {
      xml = xml + '<serialnumber>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._serialnumber);
      xml = xml + '</serialnumber>';
    }
  }
  // block for local variables
  {
    xml = xml + '<windVelocity>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._windVelocity);
    xml = xml + '</windVelocity>';
  }
  // block for local variables
  {
    if (this._windVelocityUnit != null) {
      xml = xml + '<windVelocityUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._windVelocityUnit);
      xml = xml + '</windVelocityUnit>';
    }
  }
  // block for local variables
  {
    if (this._windVelocityUnit_t != null) {
      xml = xml + '<windVelocityUnit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._windVelocityUnit_t);
      xml = xml + '</windVelocityUnit_t>';
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_serialize;

function wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing airHumidity');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setAirHumidity(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing airHumidityUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'airHumidityUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setAirHumidityUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing airHumidityUnit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'airHumidityUnit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setAirHumidityUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing airPressure');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setAirPressure(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing airPressureUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'airPressureUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setAirPressureUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing airPressureUnit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'airPressureUnit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setAirPressureUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing message');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing model');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'model')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setModel(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing name');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing outdoorTemperature');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setOutdoorTemperature(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing outdoorTemperatureUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'outdoorTemperatureUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setOutdoorTemperatureUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing outdoorTemperatureUnit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'outdoorTemperatureUnit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setOutdoorTemperatureUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing rainfallAmount');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setRainfallAmount(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing rainfallAmountUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'rainfallAmountUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setRainfallAmountUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing rainfallAmountUnit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'rainfallAmountUnit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setRainfallAmountUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing responseCode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'responseCode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setResponseCode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing serialnumber');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'serialnumber')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setSerialnumber(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing windVelocity');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setWindVelocity(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing windVelocityUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'windVelocityUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setWindVelocityUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing windVelocityUnit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'windVelocityUnit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setWindVelocityUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  return newobject;
}

//
// Simple type (enumeration) {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
//
// - LoginFailed
// - LoginSuccessful
// - LogoutFailed
// - LogoutSuccessful
// - WrongPassword
// - WrongUsername
// - NotLoggedIn
// - HeatingCouldNotBeCreated
// - ShutterCouldNotBeCreated
// - ThermometerCouldNotBeCreated
// - LoggedIn
// - DBError
// - LoggedOut
// - UndoSuccessful
// - CommandInvokedSuccessfully
// - CommandInvocationFailed
// - SwitchedOn
// - SwitchedOff
// - AlreadySwitchedOn
// - AlreadySwitchedOff
// - TemperatureAdjustmentSuccessful
// - TemperatureAdjustmentFailed
// - MovedUpSuccessfully
// - MoveUpFailed
// - MoveDownFailed
// - MovedDownSuccessfully
// - UndoFailed
// - MoveToPositionFailed
// - MoveToPositionSuccessful
// - SwitchOnFailed
// - SwitchOffFailed
// - AlreadyMovedDown
// - AlreadyMovedUp
// - AlreadyAtThisPosition
// - UserCreatedSuccessfully
// - UserCreationFailed
// - UserDeletedSuccessfully
// - UserDeletionFailed
// - UserAlteredSuccessfully
// - UserAlterationFailed
// - Success
// - Fail
// - WeatherStationCouldNotBeCreated
//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}thermometerTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject';
  this._manufacturer = null;
  this._manufacturer_t = null;
  this._message = null;
  this._model = null;
  this._name = null;
  this._responseCode = null;
  this._serialnumber = null;
  this._temperature = 0.0;
  this._temperatureUnit = null;
  this._temperatureUnit_t = null;
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getManufacturer
// element get for manufacturer
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}deviceManufacturer
// - optional element
//
// element set for manufacturer
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setManufacturer
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getManufacturer() { return this._manufacturer;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getManufacturer = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getManufacturer;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setManufacturer(value) { this._manufacturer = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setManufacturer = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setManufacturer;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getManufacturer_t
// element get for manufacturer_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for manufacturer_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setManufacturer_t
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getManufacturer_t() { return this._manufacturer_t;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getManufacturer_t = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getManufacturer_t;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setManufacturer_t(value) { this._manufacturer_t = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setManufacturer_t = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setManufacturer_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setMessage
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getMessage() { return this._message;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getMessage;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setMessage(value) { this._message = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setMessage = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setMessage;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getModel
// element get for model
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for model
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setModel
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getModel() { return this._model;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getModel = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getModel;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setModel(value) { this._model = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setModel = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setModel;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setName
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getName() { return this._name;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getName = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getName;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setName(value) { this._name = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setName = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setName;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getResponseCode
// element get for responseCode
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
// - optional element
//
// element set for responseCode
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setResponseCode
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getResponseCode() { return this._responseCode;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getResponseCode = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getResponseCode;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setResponseCode(value) { this._responseCode = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setResponseCode = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setResponseCode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getSerialnumber
// element get for serialnumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for serialnumber
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setSerialnumber
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getSerialnumber() { return this._serialnumber;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getSerialnumber = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getSerialnumber;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setSerialnumber(value) { this._serialnumber = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setSerialnumber = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setSerialnumber;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getTemperature
// element get for temperature
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for temperature
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setTemperature
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getTemperature() { return this._temperature;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getTemperature = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getTemperature;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setTemperature(value) { this._temperature = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setTemperature = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setTemperature;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getTemperatureUnit
// element get for temperatureUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for temperatureUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setTemperatureUnit
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getTemperatureUnit() { return this._temperatureUnit;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getTemperatureUnit = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getTemperatureUnit;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setTemperatureUnit(value) { this._temperatureUnit = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setTemperatureUnit = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setTemperatureUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getTemperatureUnit_t
// element get for temperatureUnit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for temperatureUnit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setTemperatureUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getTemperatureUnit_t() { return this._temperatureUnit_t;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.getTemperatureUnit_t = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_getTemperatureUnit_t;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setTemperatureUnit_t(value) { this._temperatureUnit_t = value;}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.setTemperatureUnit_t = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_setTemperatureUnit_t;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}thermometerTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._manufacturer != null) {
      xml = xml + '<manufacturer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer);
      xml = xml + '</manufacturer>';
    }
  }
  // block for local variables
  {
    if (this._manufacturer_t != null) {
      xml = xml + '<manufacturer_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer_t);
      xml = xml + '</manufacturer_t>';
    }
  }
  // block for local variables
  {
    if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
    }
  }
  // block for local variables
  {
    if (this._model != null) {
      xml = xml + '<model>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._model);
      xml = xml + '</model>';
    }
  }
  // block for local variables
  {
    if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
    }
  }
  // block for local variables
  {
    if (this._responseCode != null) {
      xml = xml + '<responseCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._responseCode);
      xml = xml + '</responseCode>';
    }
  }
  // block for local variables
  {
    if (this._serialnumber != null) {
      xml = xml + '<serialnumber>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._serialnumber);
      xml = xml + '</serialnumber>';
    }
  }
  // block for local variables
  {
    xml = xml + '<temperature>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._temperature);
    xml = xml + '</temperature>';
  }
  // block for local variables
  {
    if (this._temperatureUnit != null) {
      xml = xml + '<temperatureUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._temperatureUnit);
      xml = xml + '</temperatureUnit>';
    }
  }
  // block for local variables
  {
    if (this._temperatureUnit_t != null) {
      xml = xml + '<temperatureUnit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._temperatureUnit_t);
      xml = xml + '</temperatureUnit_t>';
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_serialize;

function wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing message');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing model');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'model')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setModel(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing name');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setName(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing responseCode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'responseCode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setResponseCode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing serialnumber');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'serialnumber')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setSerialnumber(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing temperature');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setTemperature(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing temperatureUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'temperatureUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setTemperatureUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing temperatureUnit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'temperatureUnit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setTemperatureUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  return newobject;
}

//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__userTransferObject';
  this._firstname = null;
  this._lastname = null;
  this._message = null;
  this._password = null;
  this._responseCode = null;
  this._userGroup = null;
  this._username = null;
  this._eMail = null;
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getFirstname
// element get for firstname
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for firstname
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setFirstname
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getFirstname() { return this._firstname;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getFirstname = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getFirstname;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setFirstname(value) { this._firstname = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setFirstname = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setFirstname;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getLastname
// element get for lastname
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for lastname
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setLastname
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getLastname() { return this._lastname;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getLastname = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getLastname;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setLastname(value) { this._lastname = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setLastname = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setLastname;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setMessage
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getMessage() { return this._message;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getMessage;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setMessage(value) { this._message = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setMessage = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setMessage;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for password
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setPassword
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getPassword() { return this._password;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getPassword = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getPassword;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setPassword(value) { this._password = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setPassword = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setPassword;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getResponseCode
// element get for responseCode
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
// - optional element
//
// element set for responseCode
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setResponseCode
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getResponseCode() { return this._responseCode;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getResponseCode = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getResponseCode;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setResponseCode(value) { this._responseCode = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setResponseCode = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setResponseCode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getUserGroup
// element get for userGroup
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}userGroup
// - optional element
//
// element set for userGroup
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setUserGroup
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getUserGroup() { return this._userGroup;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getUserGroup = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getUserGroup;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setUserGroup(value) { this._userGroup = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setUserGroup = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setUserGroup;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getUsername
// element get for username
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for username
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setUsername
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getUsername() { return this._username;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getUsername = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getUsername;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setUsername(value) { this._username = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setUsername = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setUsername;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getEMail
// element get for eMail
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for eMail
// setter function is is wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setEMail
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_getEMail() { return this._eMail;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.getEMail = wsprovider_connection_global_smarthome_thm_de__userTransferObject_getEMail;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_setEMail(value) { this._eMail = value;}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.setEMail = wsprovider_connection_global_smarthome_thm_de__userTransferObject_setEMail;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__userTransferObject_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._firstname != null) {
      xml = xml + '<firstname>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._firstname);
      xml = xml + '</firstname>';
    }
  }
  // block for local variables
  {
    if (this._lastname != null) {
      xml = xml + '<lastname>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._lastname);
      xml = xml + '</lastname>';
    }
  }
  // block for local variables
  {
    if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
    }
  }
  // block for local variables
  {
    if (this._password != null) {
      xml = xml + '<password>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._password);
      xml = xml + '</password>';
    }
  }
  // block for local variables
  {
    if (this._responseCode != null) {
      xml = xml + '<responseCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._responseCode);
      xml = xml + '</responseCode>';
    }
  }
  // block for local variables
  {
    if (this._userGroup != null) {
      xml = xml + '<userGroup>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._userGroup);
      xml = xml + '</userGroup>';
    }
  }
  // block for local variables
  {
    if (this._username != null) {
      xml = xml + '<username>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._username);
      xml = xml + '</username>';
    }
  }
  // block for local variables
  {
    if (this._eMail != null) {
      xml = xml + '<eMail>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._eMail);
      xml = xml + '</eMail>';
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__userTransferObject.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__userTransferObject_serialize;

function wsprovider_connection_global_smarthome_thm_de__userTransferObject_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__userTransferObject();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing firstname');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'firstname')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setFirstname(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing lastname');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'lastname')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setLastname(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing message');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing password');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'password')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setPassword(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing responseCode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'responseCode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setResponseCode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing userGroup');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'userGroup')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setUserGroup(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing username');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'username')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setUsername(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing eMail');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'eMail')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setEMail(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  return newobject;
}

//
// Simple type (enumeration) {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
//
// - temperature_DegreesCelsius
// - temperature_DegreesFahrenheit
// - velocity_KilometersPerHour
// - velocity_MilesPerHour
// - volume_LitresPerSquareMeter
// - volume_GallonsPerSquareInch
// - pressure_Bar
// - pressure_PoundForcePerSquareInch
// - distance_meters
// - distance_feet
// - relation_percent
//
// Simple type (enumeration) {http://wsprovider.connection.global.smarthome.thm.de/}power
//
// - On
// - Off
//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObjectArray
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray';
  this._item = [];
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray.prototype.getItem
// element get for item
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObject
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray.prototype.setItem
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_getItem() { return this._item;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray.prototype.getItem = wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_getItem;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_setItem(value) { this._item = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray.prototype.setItem = wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_setItem;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObjectArray
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._item != null) {
      for (var ax = 0;ax < this._item.length;ax ++) {
        if (this._item[ax] == null) {
          xml = xml + '<item xsi:nil=\'true\'/>';
        } else {
          xml = xml + this._item[ax].serialize(cxfjsutils, 'item', null);
        }
      }
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_serialize;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing item');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item')) {
    item = [];
    do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
        arrayItem = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item'));
    newobject.setItem(item);
    var item = null;
  }
  return newobject;
}

//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}commandResponseObject
//
function wsprovider_connection_global_smarthome_thm_de__commandResponseObject () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__commandResponseObject';
  this._message = null;
  this._responseCode = null;
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.setMessage
//
function wsprovider_connection_global_smarthome_thm_de__commandResponseObject_getMessage() { return this._message;}

wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_getMessage;

function wsprovider_connection_global_smarthome_thm_de__commandResponseObject_setMessage(value) { this._message = value;}

wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.setMessage = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_setMessage;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.getResponseCode
// element get for responseCode
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
// - optional element
//
// element set for responseCode
// setter function is is wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.setResponseCode
//
function wsprovider_connection_global_smarthome_thm_de__commandResponseObject_getResponseCode() { return this._responseCode;}

wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.getResponseCode = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_getResponseCode;

function wsprovider_connection_global_smarthome_thm_de__commandResponseObject_setResponseCode(value) { this._responseCode = value;}

wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.setResponseCode = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_setResponseCode;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}commandResponseObject
//
function wsprovider_connection_global_smarthome_thm_de__commandResponseObject_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
    }
  }
  // block for local variables
  {
    if (this._responseCode != null) {
      xml = xml + '<responseCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._responseCode);
      xml = xml + '</responseCode>';
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__commandResponseObject.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_serialize;

function wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__commandResponseObject();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing message');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing responseCode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'responseCode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setResponseCode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  return newobject;
}

//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}heatingTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__heatingTransferObject';
  this._heatingName = null;
  this._manufacturer = null;
  this._manufacturer_t = null;
  this._message = null;
  this._mode = null;
  this._model = null;
  this._powerState = null;
  this._powerState_t = null;
  this._responseCode = null;
  this._serialnumber = null;
  this._temperature = 0.0;
  this._temperatureUnit = null;
  this._unit_t = null;
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getHeatingName
// element get for heatingName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for heatingName
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setHeatingName
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getHeatingName() { return this._heatingName;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getHeatingName = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getHeatingName;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setHeatingName(value) { this._heatingName = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setHeatingName = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setHeatingName;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getManufacturer
// element get for manufacturer
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}deviceManufacturer
// - optional element
//
// element set for manufacturer
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setManufacturer
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getManufacturer() { return this._manufacturer;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getManufacturer = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getManufacturer;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setManufacturer(value) { this._manufacturer = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setManufacturer = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setManufacturer;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getManufacturer_t
// element get for manufacturer_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for manufacturer_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setManufacturer_t
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getManufacturer_t() { return this._manufacturer_t;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getManufacturer_t = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getManufacturer_t;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setManufacturer_t(value) { this._manufacturer_t = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setManufacturer_t = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setManufacturer_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setMessage
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getMessage() { return this._message;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getMessage;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setMessage(value) { this._message = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setMessage = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setMessage;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getMode
// element get for mode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mode
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setMode
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getMode() { return this._mode;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getMode = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getMode;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setMode(value) { this._mode = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setMode = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setMode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getModel
// element get for model
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for model
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setModel
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getModel() { return this._model;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getModel = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getModel;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setModel(value) { this._model = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setModel = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setModel;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getPowerState
// element get for powerState
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}power
// - optional element
//
// element set for powerState
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setPowerState
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getPowerState() { return this._powerState;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getPowerState = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getPowerState;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setPowerState(value) { this._powerState = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setPowerState = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setPowerState;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getPowerState_t
// element get for powerState_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for powerState_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setPowerState_t
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getPowerState_t() { return this._powerState_t;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getPowerState_t = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getPowerState_t;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setPowerState_t(value) { this._powerState_t = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setPowerState_t = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setPowerState_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getResponseCode
// element get for responseCode
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
// - optional element
//
// element set for responseCode
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setResponseCode
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getResponseCode() { return this._responseCode;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getResponseCode = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getResponseCode;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setResponseCode(value) { this._responseCode = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setResponseCode = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setResponseCode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getSerialnumber
// element get for serialnumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for serialnumber
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setSerialnumber
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getSerialnumber() { return this._serialnumber;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getSerialnumber = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getSerialnumber;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setSerialnumber(value) { this._serialnumber = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setSerialnumber = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setSerialnumber;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getTemperature
// element get for temperature
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for temperature
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setTemperature
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getTemperature() { return this._temperature;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getTemperature = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getTemperature;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setTemperature(value) { this._temperature = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setTemperature = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setTemperature;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getTemperatureUnit
// element get for temperatureUnit
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}unitOfMeasurement
// - optional element
//
// element set for temperatureUnit
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setTemperatureUnit
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getTemperatureUnit() { return this._temperatureUnit;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getTemperatureUnit = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getTemperatureUnit;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setTemperatureUnit(value) { this._temperatureUnit = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setTemperatureUnit = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setTemperatureUnit;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getUnit_t
// element get for unit_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for unit_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setUnit_t
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getUnit_t() { return this._unit_t;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.getUnit_t = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_getUnit_t;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setUnit_t(value) { this._unit_t = value;}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.setUnit_t = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_setUnit_t;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}heatingTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._heatingName != null) {
      xml = xml + '<heatingName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._heatingName);
      xml = xml + '</heatingName>';
    }
  }
  // block for local variables
  {
    if (this._manufacturer != null) {
      xml = xml + '<manufacturer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer);
      xml = xml + '</manufacturer>';
    }
  }
  // block for local variables
  {
    if (this._manufacturer_t != null) {
      xml = xml + '<manufacturer_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer_t);
      xml = xml + '</manufacturer_t>';
    }
  }
  // block for local variables
  {
    if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
    }
  }
  // block for local variables
  {
    if (this._mode != null) {
      xml = xml + '<mode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mode);
      xml = xml + '</mode>';
    }
  }
  // block for local variables
  {
    if (this._model != null) {
      xml = xml + '<model>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._model);
      xml = xml + '</model>';
    }
  }
  // block for local variables
  {
    if (this._powerState != null) {
      xml = xml + '<powerState>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._powerState);
      xml = xml + '</powerState>';
    }
  }
  // block for local variables
  {
    if (this._powerState_t != null) {
      xml = xml + '<powerState_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._powerState_t);
      xml = xml + '</powerState_t>';
    }
  }
  // block for local variables
  {
    if (this._responseCode != null) {
      xml = xml + '<responseCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._responseCode);
      xml = xml + '</responseCode>';
    }
  }
  // block for local variables
  {
    if (this._serialnumber != null) {
      xml = xml + '<serialnumber>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._serialnumber);
      xml = xml + '</serialnumber>';
    }
  }
  // block for local variables
  {
    xml = xml + '<temperature>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._temperature);
    xml = xml + '</temperature>';
  }
  // block for local variables
  {
    if (this._temperatureUnit != null) {
      xml = xml + '<temperatureUnit>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._temperatureUnit);
      xml = xml + '</temperatureUnit>';
    }
  }
  // block for local variables
  {
    if (this._unit_t != null) {
      xml = xml + '<unit_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._unit_t);
      xml = xml + '</unit_t>';
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__heatingTransferObject.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_serialize;

function wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__heatingTransferObject();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing heatingName');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'heatingName')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setHeatingName(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing message');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing mode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing model');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'model')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setModel(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing powerState');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'powerState')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setPowerState(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing powerState_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'powerState_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setPowerState_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing responseCode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'responseCode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setResponseCode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing serialnumber');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'serialnumber')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setSerialnumber(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing temperature');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseFloat(value);
  }
  newobject.setTemperature(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing temperatureUnit');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'temperatureUnit')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setTemperatureUnit(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing unit_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'unit_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setUnit_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  return newobject;
}

//
// Simple type (enumeration) {http://wsprovider.connection.global.smarthome.thm.de/}deviceManufacturer
//
// - VIESSMANN
// - BUDERUS
// - VAILLANT
//
// Simple type (enumeration) {http://wsprovider.connection.global.smarthome.thm.de/}userGroup
//
// - Administrator
// - EndUser
//
// Constructor for XML Schema item {http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject () {
  this.typeMarker = 'wsprovider_connection_global_smarthome_thm_de__shutterTransferObject';
  this._manufacturer = null;
  this._manufacturer_t = null;
  this._message = null;
  this._mode = null;
  this._model = null;
  this._moveComplete = '';
  this._position = 0;
  this._responseCode = null;
  this._serialnumber = null;
  this._shutterID = null;
}

//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getManufacturer
// element get for manufacturer
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}deviceManufacturer
// - optional element
//
// element set for manufacturer
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setManufacturer
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getManufacturer() { return this._manufacturer;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getManufacturer = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getManufacturer;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setManufacturer(value) { this._manufacturer = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setManufacturer = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setManufacturer;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getManufacturer_t
// element get for manufacturer_t
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for manufacturer_t
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setManufacturer_t
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getManufacturer_t() { return this._manufacturer_t;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getManufacturer_t = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getManufacturer_t;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setManufacturer_t(value) { this._manufacturer_t = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setManufacturer_t = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setManufacturer_t;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setMessage
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getMessage() { return this._message;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getMessage;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setMessage(value) { this._message = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setMessage = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setMessage;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getMode
// element get for mode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mode
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setMode
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getMode() { return this._mode;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getMode = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getMode;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setMode(value) { this._mode = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setMode = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setMode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getModel
// element get for model
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for model
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setModel
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getModel() { return this._model;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getModel = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getModel;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setModel(value) { this._model = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setModel = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setModel;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getMoveComplete
// element get for moveComplete
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for moveComplete
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setMoveComplete
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getMoveComplete() { return this._moveComplete;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getMoveComplete = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getMoveComplete;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setMoveComplete(value) { this._moveComplete = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setMoveComplete = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setMoveComplete;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getPosition
// element get for position
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for position
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setPosition
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getPosition() { return this._position;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getPosition = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getPosition;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setPosition(value) { this._position = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setPosition = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setPosition;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getResponseCode
// element get for responseCode
// - element type is {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
// - optional element
//
// element set for responseCode
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setResponseCode
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getResponseCode() { return this._responseCode;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getResponseCode = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getResponseCode;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setResponseCode(value) { this._responseCode = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setResponseCode = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setResponseCode;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getSerialnumber
// element get for serialnumber
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for serialnumber
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setSerialnumber
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getSerialnumber() { return this._serialnumber;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getSerialnumber = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getSerialnumber;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setSerialnumber(value) { this._serialnumber = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setSerialnumber = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setSerialnumber;
//
// accessor is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getShutterID
// element get for shutterID
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for shutterID
// setter function is is wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setShutterID
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getShutterID() { return this._shutterID;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.getShutterID = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_getShutterID;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setShutterID(value) { this._shutterID = value;}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.setShutterID = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_setShutterID;
//
// Serialize {http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._manufacturer != null) {
      xml = xml + '<manufacturer>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer);
      xml = xml + '</manufacturer>';
    }
  }
  // block for local variables
  {
    if (this._manufacturer_t != null) {
      xml = xml + '<manufacturer_t>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._manufacturer_t);
      xml = xml + '</manufacturer_t>';
    }
  }
  // block for local variables
  {
    if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
    }
  }
  // block for local variables
  {
    if (this._mode != null) {
      xml = xml + '<mode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mode);
      xml = xml + '</mode>';
    }
  }
  // block for local variables
  {
    if (this._model != null) {
      xml = xml + '<model>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._model);
      xml = xml + '</model>';
    }
  }
  // block for local variables
  {
    xml = xml + '<moveComplete>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._moveComplete);
    xml = xml + '</moveComplete>';
  }
  // block for local variables
  {
    xml = xml + '<position>';
    xml = xml + cxfjsutils.escapeXmlEntities(this._position);
    xml = xml + '</position>';
  }
  // block for local variables
  {
    if (this._responseCode != null) {
      xml = xml + '<responseCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._responseCode);
      xml = xml + '</responseCode>';
    }
  }
  // block for local variables
  {
    if (this._serialnumber != null) {
      xml = xml + '<serialnumber>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._serialnumber);
      xml = xml + '</serialnumber>';
    }
  }
  // block for local variables
  {
    if (this._shutterID != null) {
      xml = xml + '<shutterID>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._shutterID);
      xml = xml + '</shutterID>';
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__shutterTransferObject.prototype.serialize = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_serialize;

function wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_deserialize (cxfjsutils, element) {
  var newobject = new wsprovider_connection_global_smarthome_thm_de__shutterTransferObject();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing manufacturer_t');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'manufacturer_t')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setManufacturer_t(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing message');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMessage(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing mode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setMode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing model');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'model')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setModel(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing moveComplete');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = (value == 'true');
  }
  newobject.setMoveComplete(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing position');
  var value = null;
  if (!cxfjsutils.isElementNil(curElement)) {
    value = cxfjsutils.getNodeText(curElement);
    item = parseInt(value);
  }
  newobject.setPosition(item);
  var item = null;
  if (curElement != null) {
    curElement = cxfjsutils.getNextElementSibling(curElement);
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing responseCode');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'responseCode')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setResponseCode(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing serialnumber');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'serialnumber')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setSerialnumber(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing shutterID');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'shutterID')) {
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
    }
    newobject.setShutterID(item);
    var item = null;
    if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
  }
  return newobject;
}

//
// Definitions for schema: http://jaxb.dev.java.net/array
//  http://localhost:8080/SmartHomeManagerWebServices?xsd=2
//
//
// Constructor for XML Schema item {http://jaxb.dev.java.net/array}stringArray
//
function jaxb_dev_java_net_array_stringArray () {
  this.typeMarker = 'jaxb_dev_java_net_array_stringArray';
  this._item = [];
}

//
// accessor is jaxb_dev_java_net_array_stringArray.prototype.getItem
// element get for item
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
// - nillable
//
// element set for item
// setter function is is jaxb_dev_java_net_array_stringArray.prototype.setItem
//
function jaxb_dev_java_net_array_stringArray_getItem() { return this._item;}

jaxb_dev_java_net_array_stringArray.prototype.getItem = jaxb_dev_java_net_array_stringArray_getItem;

function jaxb_dev_java_net_array_stringArray_setItem(value) { this._item = value;}

jaxb_dev_java_net_array_stringArray.prototype.setItem = jaxb_dev_java_net_array_stringArray_setItem;
//
// Serialize {http://jaxb.dev.java.net/array}stringArray
//
function jaxb_dev_java_net_array_stringArray_serialize(cxfjsutils, elementName, extraNamespaces) {
  var xml = '';
  if (elementName !== null) {
    xml = xml + '<';
    xml = xml + elementName;
    if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
    }
    xml = xml + '>';
  }
  // block for local variables
  {
    if (this._item != null) {
      for (var ax = 0;ax < this._item.length;ax ++) {
        if (this._item[ax] == null) {
          xml = xml + '<item xsi:nil=\'true\'/>';
        } else {
          xml = xml + '<item>';
          xml = xml + cxfjsutils.escapeXmlEntities(this._item[ax]);
          xml = xml + '</item>';
        }
      }
    }
  }
  if (elementName !== null) {
    xml = xml + '</';
    xml = xml + elementName;
    xml = xml + '>';
  }
  return xml;
}

jaxb_dev_java_net_array_stringArray.prototype.serialize = jaxb_dev_java_net_array_stringArray_serialize;

function jaxb_dev_java_net_array_stringArray_deserialize (cxfjsutils, element) {
  var newobject = new jaxb_dev_java_net_array_stringArray();
  cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
  var curElement = cxfjsutils.getFirstElementChild(element);
  var item;
  cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
  cxfjsutils.trace('processing item');
  if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item')) {
    item = [];
    do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
        value = cxfjsutils.getNodeText(curElement);
        arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'item'));
    newobject.setItem(item);
    var item = null;
  }
  return newobject;
}

//
// Definitions for service: {http://wsprovider.connection.global.smarthome.thm.de/}SmartHomeManagerWebServiceDescriptorService
//

// Javascript for {http://wsprovider.connection.global.smarthome.thm.de/}SmartHomeManagerWebServices

function wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices () {
  this.jsutils = new CxfApacheOrgUtil();
  this.jsutils.interfaceObject = this;
  this.synchronous = false;
  //this.url = null;
  this.url = 'http://localhost:8080/SmartHomeManagerWebServices';
  this.client = null;
  this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}userTransferObjectArray'] = wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}userTransferObjectArray'] = wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}weatherStationTransferObject'] = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}weatherStationTransferObject'] = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}thermometerTransferObject'] = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}thermometerTransferObject'] = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}userTransferObject'] = wsprovider_connection_global_smarthome_thm_de__userTransferObject_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}userTransferObject'] = wsprovider_connection_global_smarthome_thm_de__userTransferObject_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObjectArray'] = wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObjectArray'] = wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}commandResponseObject'] = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}commandResponseObject'] = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}heatingTransferObject'] = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}heatingTransferObject'] = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_deserialize;
    this.globalElementSerializers['{http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObject'] = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_serialize;
    this.globalElementDeserializers['{http://wsprovider.connection.global.smarthome.thm.de/}shutterTransferObject'] = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_deserialize;
    this.globalElementSerializers['{http://jaxb.dev.java.net/array}stringArray'] = jaxb_dev_java_net_array_stringArray_serialize;
    this.globalElementDeserializers['{http://jaxb.dev.java.net/array}stringArray'] = jaxb_dev_java_net_array_stringArray_deserialize;
  }

  function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
      var responseObject = null;
      var element = responseXml.documentElement;
      this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
      element = this.jsutils.getFirstElementChild(element);
      this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
      while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
        element = this.jsutils.getNextElementSibling(element);
        if (element == null) {
          throw 'No env:Body in message.'
        }
      }
      element = this.jsutils.getFirstElementChild(element);
      this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
      this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUpResponse_deserializeResponse');
      responseObject = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUpResponse_deserializeResponse(this.jsutils, element);
      client.user_onsuccess(responseObject);
    }
  }

  wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersUp_onsuccess = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_op_onsuccess;

  function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_op_onerror(client) {
    if (client.user_onerror) {
      var httpStatus;
      var httpStatusText;
      try {
        httpStatus = client.req.status;
        httpStatusText = client.req.statusText;
      } catch(e) {
        httpStatus = -1;
        httpStatusText = 'Error opening connection to server';
      }
      if (client.parseErrorDetails) {
        client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
      } else {
        client.user_onerror(httpStatus, httpStatusText);
      }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersUp_onerror = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}moveAllShuttersUp
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.moveAllShuttersUp_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.moveAllShuttersUp_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.moveAllShuttersUp_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersUp = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_op;

function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:moveAllShuttersUp>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:moveAllShuttersUp>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersUp_serializeInput = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUp_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersUpResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getMessage_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getMessageResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getMessageResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getMessage_onsuccess = wsprovider_connection_global_smarthome_thm_de__getMessage_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getMessage_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getMessage_onerror = wsprovider_connection_global_smarthome_thm_de__getMessage_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getMessage
// - bare operation. Parameters:
// - type {http://wsprovider.connection.global.smarthome.thm.de/}responseCode
//
function wsprovider_connection_global_smarthome_thm_de__getMessage_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getMessage_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getMessage_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getMessage_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getMessage = wsprovider_connection_global_smarthome_thm_de__getMessage_op;

function wsprovider_connection_global_smarthome_thm_de__getMessage_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getMessage>';
  // block for local variables
  {
    xml = xml + '<arg0>';
    xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
    xml = xml + '</arg0>';
  }
  xml = xml + '</jns0:getMessage>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getMessage_serializeInput = wsprovider_connection_global_smarthome_thm_de__getMessage_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getMessageResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnText = cxfjsutils.getNodeText(partElement);
  var returnObject = returnText;
  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getAllUserData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getAllUserDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getAllUserDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllUserData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getAllUserData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getAllUserData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllUserData_onerror = wsprovider_connection_global_smarthome_thm_de__getAllUserData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getAllUserData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getAllUserData_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getAllUserData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getAllUserData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getAllUserData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllUserData = wsprovider_connection_global_smarthome_thm_de__getAllUserData_op;

function wsprovider_connection_global_smarthome_thm_de__getAllUserData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getAllUserData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getAllUserData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllUserData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getAllUserData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getAllUserDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__userTransferObjectArray_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getShutterPosition_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getShutterPositionResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getShutterPositionResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterPosition_onsuccess = wsprovider_connection_global_smarthome_thm_de__getShutterPosition_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getShutterPosition_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterPosition_onerror = wsprovider_connection_global_smarthome_thm_de__getShutterPosition_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getShutterPosition
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getShutterPosition_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.getShutterPosition_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getShutterPosition_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getShutterPosition_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterPosition = wsprovider_connection_global_smarthome_thm_de__getShutterPosition_op;

function wsprovider_connection_global_smarthome_thm_de__getShutterPosition_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getShutterPosition>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:getShutterPosition>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterPosition_serializeInput = wsprovider_connection_global_smarthome_thm_de__getShutterPosition_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getShutterPositionResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__moveShutterDown_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__moveShutterDownResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__moveShutterDownResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterDown_onsuccess = wsprovider_connection_global_smarthome_thm_de__moveShutterDown_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__moveShutterDown_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterDown_onerror = wsprovider_connection_global_smarthome_thm_de__moveShutterDown_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}moveShutterDown
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__moveShutterDown_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.moveShutterDown_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.moveShutterDown_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.moveShutterDown_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterDown = wsprovider_connection_global_smarthome_thm_de__moveShutterDown_op;

function wsprovider_connection_global_smarthome_thm_de__moveShutterDown_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:moveShutterDown>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:moveShutterDown>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterDown_serializeInput = wsprovider_connection_global_smarthome_thm_de__moveShutterDown_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__moveShutterDownResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getRainfallAmountResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getRainfallAmountResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getRainfallAmount_onsuccess = wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getRainfallAmount_onerror = wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getRainfallAmount
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getRainfallAmount_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getRainfallAmount_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getRainfallAmount_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getRainfallAmount = wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_op;

function wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getRainfallAmount>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getRainfallAmount>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getRainfallAmount_serializeInput = wsprovider_connection_global_smarthome_thm_de__getRainfallAmount_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getRainfallAmountResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__readLogs_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__readLogsResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__readLogsResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.readLogs_onsuccess = wsprovider_connection_global_smarthome_thm_de__readLogs_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__readLogs_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.readLogs_onerror = wsprovider_connection_global_smarthome_thm_de__readLogs_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}readLogs
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - type {http://www.w3.org/2001/XMLSchema}int
//
function wsprovider_connection_global_smarthome_thm_de__readLogs_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.readLogs_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.readLogs_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.readLogs_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.readLogs = wsprovider_connection_global_smarthome_thm_de__readLogs_op;

function wsprovider_connection_global_smarthome_thm_de__readLogs_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:readLogs>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + '<arg1>';
    xml = xml + cxfjsutils.escapeXmlEntities(args[1]);
    xml = xml + '</arg1>';
  }
  xml = xml + '</jns0:readLogs>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.readLogs_serializeInput = wsprovider_connection_global_smarthome_thm_de__readLogs_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__readLogsResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = jaxb_dev_java_net_array_stringArray_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__createShutter_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__createShutterResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__createShutterResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createShutter_onsuccess = wsprovider_connection_global_smarthome_thm_de__createShutter_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__createShutter_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createShutter_onerror = wsprovider_connection_global_smarthome_thm_de__createShutter_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}createShutter
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__createShutter_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.createShutter_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.createShutter_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.createShutter_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createShutter = wsprovider_connection_global_smarthome_thm_de__createShutter_op;

function wsprovider_connection_global_smarthome_thm_de__createShutter_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:createShutter>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:createShutter>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createShutter_serializeInput = wsprovider_connection_global_smarthome_thm_de__createShutter_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__createShutterResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getServerInfo_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getServerInfoResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getServerInfoResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getServerInfo_onsuccess = wsprovider_connection_global_smarthome_thm_de__getServerInfo_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getServerInfo_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getServerInfo_onerror = wsprovider_connection_global_smarthome_thm_de__getServerInfo_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getServerInfo
// - bare operation. Parameters:
//
function wsprovider_connection_global_smarthome_thm_de__getServerInfo_op(successCallback, errorCallback) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(0);
  xml = this.getServerInfo_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getServerInfo_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getServerInfo_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getServerInfo = wsprovider_connection_global_smarthome_thm_de__getServerInfo_op;

function wsprovider_connection_global_smarthome_thm_de__getServerInfo_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getServerInfo>';
  xml = xml + '</jns0:getServerInfo>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getServerInfo_serializeInput = wsprovider_connection_global_smarthome_thm_de__getServerInfo_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getServerInfoResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnText = cxfjsutils.getNodeText(partElement);
  var returnObject = returnText;
  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getAirPressure_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getAirPressureResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getAirPressureResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirPressure_onsuccess = wsprovider_connection_global_smarthome_thm_de__getAirPressure_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getAirPressure_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirPressure_onerror = wsprovider_connection_global_smarthome_thm_de__getAirPressure_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getAirPressure
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getAirPressure_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getAirPressure_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getAirPressure_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getAirPressure_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirPressure = wsprovider_connection_global_smarthome_thm_de__getAirPressure_op;

function wsprovider_connection_global_smarthome_thm_de__getAirPressure_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getAirPressure>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getAirPressure>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirPressure_serializeInput = wsprovider_connection_global_smarthome_thm_de__getAirPressure_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getAirPressureResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDownResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDownResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersDown_onsuccess = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersDown_onerror = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}moveAllShuttersDown
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.moveAllShuttersDown_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.moveAllShuttersDown_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.moveAllShuttersDown_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersDown = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_op;

function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:moveAllShuttersDown>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:moveAllShuttersDown>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveAllShuttersDown_serializeInput = wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDown_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__moveAllShuttersDownResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__createUser_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__createUserResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__createUserResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createUser_onsuccess = wsprovider_connection_global_smarthome_thm_de__createUser_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__createUser_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createUser_onerror = wsprovider_connection_global_smarthome_thm_de__createUser_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}createUser
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__createUser_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.createUser_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.createUser_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.createUser_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createUser = wsprovider_connection_global_smarthome_thm_de__createUser_op;

function wsprovider_connection_global_smarthome_thm_de__createUser_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:createUser>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:createUser>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createUser_serializeInput = wsprovider_connection_global_smarthome_thm_de__createUser_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__createUserResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getAllShutterData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getAllShutterDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getAllShutterDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllShutterData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getAllShutterData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getAllShutterData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllShutterData_onerror = wsprovider_connection_global_smarthome_thm_de__getAllShutterData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getAllShutterData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getAllShutterData_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getAllShutterData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getAllShutterData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getAllShutterData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllShutterData = wsprovider_connection_global_smarthome_thm_de__getAllShutterData_op;

function wsprovider_connection_global_smarthome_thm_de__getAllShutterData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getAllShutterData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getAllShutterData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAllShutterData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getAllShutterData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getAllShutterDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__shutterTransferObjectArray_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getUserData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getUserDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getUserDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getUserData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getUserData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getUserData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getUserData_onerror = wsprovider_connection_global_smarthome_thm_de__getUserData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getUserData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getUserData_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.getUserData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getUserData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getUserData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getUserData = wsprovider_connection_global_smarthome_thm_de__getUserData_op;

function wsprovider_connection_global_smarthome_thm_de__getUserData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getUserData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:getUserData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getUserData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getUserData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getUserDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__userTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__deleteUser_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__deleteUserResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__deleteUserResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteUser_onsuccess = wsprovider_connection_global_smarthome_thm_de__deleteUser_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__deleteUser_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteUser_onerror = wsprovider_connection_global_smarthome_thm_de__deleteUser_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}deleteUser
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__deleteUser_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.deleteUser_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.deleteUser_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.deleteUser_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteUser = wsprovider_connection_global_smarthome_thm_de__deleteUser_op;

function wsprovider_connection_global_smarthome_thm_de__deleteUser_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:deleteUser>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:deleteUser>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteUser_serializeInput = wsprovider_connection_global_smarthome_thm_de__deleteUser_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__deleteUserResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getAirHumidity_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getAirHumidityResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getAirHumidityResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirHumidity_onsuccess = wsprovider_connection_global_smarthome_thm_de__getAirHumidity_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getAirHumidity_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirHumidity_onerror = wsprovider_connection_global_smarthome_thm_de__getAirHumidity_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getAirHumidity
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getAirHumidity_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getAirHumidity_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getAirHumidity_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getAirHumidity_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirHumidity = wsprovider_connection_global_smarthome_thm_de__getAirHumidity_op;

function wsprovider_connection_global_smarthome_thm_de__getAirHumidity_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getAirHumidity>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getAirHumidity>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getAirHumidity_serializeInput = wsprovider_connection_global_smarthome_thm_de__getAirHumidity_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getAirHumidityResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__deleteHeating_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__deleteHeatingResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__deleteHeatingResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteHeating_onsuccess = wsprovider_connection_global_smarthome_thm_de__deleteHeating_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__deleteHeating_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteHeating_onerror = wsprovider_connection_global_smarthome_thm_de__deleteHeating_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}deleteHeating
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__deleteHeating_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.deleteHeating_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.deleteHeating_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.deleteHeating_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteHeating = wsprovider_connection_global_smarthome_thm_de__deleteHeating_op;

function wsprovider_connection_global_smarthome_thm_de__deleteHeating_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:deleteHeating>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:deleteHeating>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteHeating_serializeInput = wsprovider_connection_global_smarthome_thm_de__deleteHeating_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__deleteHeatingResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getHeatingTemperatureResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getHeatingTemperatureResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingTemperature_onsuccess = wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingTemperature_onerror = wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getHeatingTemperature
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getHeatingTemperature_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getHeatingTemperature_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getHeatingTemperature_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingTemperature = wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_op;

function wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getHeatingTemperature>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getHeatingTemperature>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingTemperature_serializeInput = wsprovider_connection_global_smarthome_thm_de__getHeatingTemperature_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getHeatingTemperatureResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__setHeatingTemperatureResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__setHeatingTemperatureResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setHeatingTemperature_onsuccess = wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setHeatingTemperature_onerror = wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}setHeatingTemperature
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - type {http://www.w3.org/2001/XMLSchema}double
//
function wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.setHeatingTemperature_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.setHeatingTemperature_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.setHeatingTemperature_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setHeatingTemperature = wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_op;

function wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:setHeatingTemperature>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + '<arg1>';
    xml = xml + cxfjsutils.escapeXmlEntities(args[1]);
    xml = xml + '</arg1>';
  }
  xml = xml + '</jns0:setHeatingTemperature>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setHeatingTemperature_serializeInput = wsprovider_connection_global_smarthome_thm_de__setHeatingTemperature_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__setHeatingTemperatureResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__createWeatherStation_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__createWeatherStationResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__createWeatherStationResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createWeatherStation_onsuccess = wsprovider_connection_global_smarthome_thm_de__createWeatherStation_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__createWeatherStation_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createWeatherStation_onerror = wsprovider_connection_global_smarthome_thm_de__createWeatherStation_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}createWeatherStation
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__createWeatherStation_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.createWeatherStation_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.createWeatherStation_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.createWeatherStation_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createWeatherStation = wsprovider_connection_global_smarthome_thm_de__createWeatherStation_op;

function wsprovider_connection_global_smarthome_thm_de__createWeatherStation_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:createWeatherStation>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:createWeatherStation>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createWeatherStation_serializeInput = wsprovider_connection_global_smarthome_thm_de__createWeatherStation_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__createWeatherStationResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__setShutterPosition_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__setShutterPositionResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__setShutterPositionResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setShutterPosition_onsuccess = wsprovider_connection_global_smarthome_thm_de__setShutterPosition_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__setShutterPosition_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setShutterPosition_onerror = wsprovider_connection_global_smarthome_thm_de__setShutterPosition_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}setShutterPosition
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__setShutterPosition_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.setShutterPosition_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.setShutterPosition_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.setShutterPosition_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setShutterPosition = wsprovider_connection_global_smarthome_thm_de__setShutterPosition_op;

function wsprovider_connection_global_smarthome_thm_de__setShutterPosition_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:setShutterPosition>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:setShutterPosition>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.setShutterPosition_serializeInput = wsprovider_connection_global_smarthome_thm_de__setShutterPosition_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__setShutterPositionResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__switchHeatingOnResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__switchHeatingOnResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOn_onsuccess = wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOn_onerror = wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}switchHeatingOn
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.switchHeatingOn_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.switchHeatingOn_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.switchHeatingOn_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOn = wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_op;

function wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:switchHeatingOn>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:switchHeatingOn>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOn_serializeInput = wsprovider_connection_global_smarthome_thm_de__switchHeatingOn_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__switchHeatingOnResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__createThermometer_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__createThermometerResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__createThermometerResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createThermometer_onsuccess = wsprovider_connection_global_smarthome_thm_de__createThermometer_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__createThermometer_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createThermometer_onerror = wsprovider_connection_global_smarthome_thm_de__createThermometer_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}createThermometer
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__createThermometer_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.createThermometer_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.createThermometer_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.createThermometer_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createThermometer = wsprovider_connection_global_smarthome_thm_de__createThermometer_op;

function wsprovider_connection_global_smarthome_thm_de__createThermometer_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:createThermometer>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:createThermometer>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createThermometer_serializeInput = wsprovider_connection_global_smarthome_thm_de__createThermometer_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__createThermometerResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__undoLastCommand_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__undoLastCommandResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__undoLastCommandResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.undoLastCommand_onsuccess = wsprovider_connection_global_smarthome_thm_de__undoLastCommand_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__undoLastCommand_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.undoLastCommand_onerror = wsprovider_connection_global_smarthome_thm_de__undoLastCommand_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}undoLastCommand
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__undoLastCommand_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.undoLastCommand_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.undoLastCommand_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.undoLastCommand_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.undoLastCommand = wsprovider_connection_global_smarthome_thm_de__undoLastCommand_op;

function wsprovider_connection_global_smarthome_thm_de__undoLastCommand_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:undoLastCommand>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:undoLastCommand>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.undoLastCommand_serializeInput = wsprovider_connection_global_smarthome_thm_de__undoLastCommand_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__undoLastCommandResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperatureResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperatureResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getOutdoorTemperature_onsuccess = wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getOutdoorTemperature_onerror = wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getOutdoorTemperature
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getOutdoorTemperature_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getOutdoorTemperature_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getOutdoorTemperature_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getOutdoorTemperature = wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_op;

function wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getOutdoorTemperature>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getOutdoorTemperature>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getOutdoorTemperature_serializeInput = wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperature_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getOutdoorTemperatureResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__moveShutterUp_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__moveShutterUpResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__moveShutterUpResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterUp_onsuccess = wsprovider_connection_global_smarthome_thm_de__moveShutterUp_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__moveShutterUp_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterUp_onerror = wsprovider_connection_global_smarthome_thm_de__moveShutterUp_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}moveShutterUp
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__moveShutterUp_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.moveShutterUp_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.moveShutterUp_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.moveShutterUp_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterUp = wsprovider_connection_global_smarthome_thm_de__moveShutterUp_op;

function wsprovider_connection_global_smarthome_thm_de__moveShutterUp_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:moveShutterUp>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:moveShutterUp>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.moveShutterUp_serializeInput = wsprovider_connection_global_smarthome_thm_de__moveShutterUp_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__moveShutterUpResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getShutterData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getShutterDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getShutterDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getShutterData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getShutterData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterData_onerror = wsprovider_connection_global_smarthome_thm_de__getShutterData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getShutterData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getShutterData_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.getShutterData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getShutterData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getShutterData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterData = wsprovider_connection_global_smarthome_thm_de__getShutterData_op;

function wsprovider_connection_global_smarthome_thm_de__getShutterData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getShutterData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:getShutterData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getShutterData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getShutterData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getShutterDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__shutterTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__alterUser_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__alterUserResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__alterUserResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.alterUser_onsuccess = wsprovider_connection_global_smarthome_thm_de__alterUser_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__alterUser_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.alterUser_onerror = wsprovider_connection_global_smarthome_thm_de__alterUser_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}alterUser
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__alterUser_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.alterUser_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.alterUser_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.alterUser_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.alterUser = wsprovider_connection_global_smarthome_thm_de__alterUser_op;

function wsprovider_connection_global_smarthome_thm_de__alterUser_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:alterUser>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:alterUser>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.alterUser_serializeInput = wsprovider_connection_global_smarthome_thm_de__alterUser_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__alterUserResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__deleteThermometer_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__deleteThermometerResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__deleteThermometerResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteThermometer_onsuccess = wsprovider_connection_global_smarthome_thm_de__deleteThermometer_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__deleteThermometer_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteThermometer_onerror = wsprovider_connection_global_smarthome_thm_de__deleteThermometer_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}deleteThermometer
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__deleteThermometer_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.deleteThermometer_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.deleteThermometer_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.deleteThermometer_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteThermometer = wsprovider_connection_global_smarthome_thm_de__deleteThermometer_op;

function wsprovider_connection_global_smarthome_thm_de__deleteThermometer_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:deleteThermometer>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:deleteThermometer>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteThermometer_serializeInput = wsprovider_connection_global_smarthome_thm_de__deleteThermometer_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__deleteThermometerResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__login_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__loginResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__loginResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.login_onsuccess = wsprovider_connection_global_smarthome_thm_de__login_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__login_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.login_onerror = wsprovider_connection_global_smarthome_thm_de__login_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}login
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__login_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.login_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.login_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.login_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.login = wsprovider_connection_global_smarthome_thm_de__login_op;

function wsprovider_connection_global_smarthome_thm_de__login_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:login>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:login>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.login_serializeInput = wsprovider_connection_global_smarthome_thm_de__login_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__loginResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__createHeating_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__createHeatingResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__createHeatingResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createHeating_onsuccess = wsprovider_connection_global_smarthome_thm_de__createHeating_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__createHeating_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createHeating_onerror = wsprovider_connection_global_smarthome_thm_de__createHeating_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}createHeating
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__heatingTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__createHeating_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.createHeating_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.createHeating_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.createHeating_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createHeating = wsprovider_connection_global_smarthome_thm_de__createHeating_op;

function wsprovider_connection_global_smarthome_thm_de__createHeating_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:createHeating>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:createHeating>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.createHeating_serializeInput = wsprovider_connection_global_smarthome_thm_de__createHeating_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__createHeatingResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getThermometerData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getThermometerDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getThermometerDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getThermometerData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getThermometerData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getThermometerData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getThermometerData_onerror = wsprovider_connection_global_smarthome_thm_de__getThermometerData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getThermometerData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getThermometerData_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getThermometerData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getThermometerData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getThermometerData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getThermometerData = wsprovider_connection_global_smarthome_thm_de__getThermometerData_op;

function wsprovider_connection_global_smarthome_thm_de__getThermometerData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getThermometerData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getThermometerData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getThermometerData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getThermometerData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getThermometerDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__deleteWeatherStationResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__deleteWeatherStationResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteWeatherStation_onsuccess = wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteWeatherStation_onerror = wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}deleteWeatherStation
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.deleteWeatherStation_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.deleteWeatherStation_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.deleteWeatherStation_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteWeatherStation = wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_op;

function wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:deleteWeatherStation>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:deleteWeatherStation>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteWeatherStation_serializeInput = wsprovider_connection_global_smarthome_thm_de__deleteWeatherStation_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__deleteWeatherStationResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getIndoorTemperatureResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getIndoorTemperatureResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getIndoorTemperature_onsuccess = wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getIndoorTemperature_onerror = wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getIndoorTemperature
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getIndoorTemperature_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getIndoorTemperature_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getIndoorTemperature_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getIndoorTemperature = wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_op;

function wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getIndoorTemperature>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getIndoorTemperature>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getIndoorTemperature_serializeInput = wsprovider_connection_global_smarthome_thm_de__getIndoorTemperature_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getIndoorTemperatureResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__thermometerTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getHeatingData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getHeatingDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getHeatingDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getHeatingData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getHeatingData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingData_onerror = wsprovider_connection_global_smarthome_thm_de__getHeatingData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getHeatingData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getHeatingData_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getHeatingData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getHeatingData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getHeatingData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingData = wsprovider_connection_global_smarthome_thm_de__getHeatingData_op;

function wsprovider_connection_global_smarthome_thm_de__getHeatingData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getHeatingData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getHeatingData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getHeatingData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getHeatingData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getHeatingDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__heatingTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__switchHeatingOffResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__switchHeatingOffResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOff_onsuccess = wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOff_onerror = wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}switchHeatingOff
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.switchHeatingOff_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.switchHeatingOff_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.switchHeatingOff_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOff = wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_op;

function wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:switchHeatingOff>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:switchHeatingOff>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.switchHeatingOff_serializeInput = wsprovider_connection_global_smarthome_thm_de__switchHeatingOff_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__switchHeatingOffResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__halloWeltResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__halloWeltResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.halloWelt_onsuccess = wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.halloWelt_onerror = wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}halloWelt
// - bare operation. Parameters:
// - type {http://www.w3.org/2001/XMLSchema}string
//
function wsprovider_connection_global_smarthome_thm_de__halloWelt_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;

  // xml = this.halloWelt_serializeInput(this.jsutils, args);

  xml =   this.wsprovider_connection_global_smarthome_thm_de__halloWelt_serializeInput(this.jsutils, args)
  console.log(xml);

  this.client.user_onsuccess = successCallback;
  ///console.log(this.client.user_onsuccess );
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.halloWelt_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.halloWelt_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';

  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
  console.log("REQUEST");
  console.log(this.url);
  console.log(xml);
  console.log("method - null");
  console.log(this.synchronous);
  console.log(requestHeaders);

}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.halloWelt = wsprovider_connection_global_smarthome_thm_de__halloWelt_op;

function wsprovider_connection_global_smarthome_thm_de__halloWelt_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:halloWelt>';
  // block for local variables
  {
    xml = xml + '<arg0>';
    xml = xml + cxfjsutils.escapeXmlEntities(args[0]);
    xml = xml + '</arg0>';
  }
  xml = xml + '</jns0:halloWelt>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.halloWelt_serializeInput = wsprovider_connection_global_smarthome_thm_de__halloWelt_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__halloWeltResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnText = cxfjsutils.getNodeText(partElement);
  var returnObject = returnText;
  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__logout_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__logoutResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__logoutResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.logout_onsuccess = wsprovider_connection_global_smarthome_thm_de__logout_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__logout_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.logout_onerror = wsprovider_connection_global_smarthome_thm_de__logout_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}logout
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__logout_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.logout_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.logout_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.logout_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.logout = wsprovider_connection_global_smarthome_thm_de__logout_op;

function wsprovider_connection_global_smarthome_thm_de__logout_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:logout>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:logout>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.logout_serializeInput = wsprovider_connection_global_smarthome_thm_de__logout_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__logoutResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getWeatherStationDataResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getWeatherStationDataResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWeatherStationData_onsuccess = wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWeatherStationData_onerror = wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getWeatherStationData
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getWeatherStationData_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getWeatherStationData_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getWeatherStationData_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWeatherStationData = wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_op;

function wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getWeatherStationData>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getWeatherStationData>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWeatherStationData_serializeInput = wsprovider_connection_global_smarthome_thm_de__getWeatherStationData_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getWeatherStationDataResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__deleteShutter_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__deleteShutterResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__deleteShutterResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteShutter_onsuccess = wsprovider_connection_global_smarthome_thm_de__deleteShutter_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__deleteShutter_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteShutter_onerror = wsprovider_connection_global_smarthome_thm_de__deleteShutter_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}deleteShutter
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
// - wsprovider_connection_global_smarthome_thm_de__shutterTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__deleteShutter_op(successCallback, errorCallback, arg0, arg1) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(2);
  args[0] = arg0;
  args[1] = arg1;
  xml = this.deleteShutter_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.deleteShutter_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.deleteShutter_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteShutter = wsprovider_connection_global_smarthome_thm_de__deleteShutter_op;

function wsprovider_connection_global_smarthome_thm_de__deleteShutter_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:deleteShutter>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  // block for local variables
  {
    xml = xml + args[1].serialize(cxfjsutils, 'arg1', null);
  }
  xml = xml + '</jns0:deleteShutter>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.deleteShutter_serializeInput = wsprovider_connection_global_smarthome_thm_de__deleteShutter_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__deleteShutterResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__commandResponseObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__getWindVelocity_op_onsuccess(client, responseXml) {
  if (client.user_onsuccess) {
    var responseObject = null;
    var element = responseXml.documentElement;
    this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
    while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
        throw 'No env:Body in message.'
      }
    }
    element = this.jsutils.getFirstElementChild(element);
    this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
    this.jsutils.trace('calling wsprovider_connection_global_smarthome_thm_de__getWindVelocityResponse_deserializeResponse');
    responseObject = wsprovider_connection_global_smarthome_thm_de__getWindVelocityResponse_deserializeResponse(this.jsutils, element);
    client.user_onsuccess(responseObject);
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWindVelocity_onsuccess = wsprovider_connection_global_smarthome_thm_de__getWindVelocity_op_onsuccess;

function wsprovider_connection_global_smarthome_thm_de__getWindVelocity_op_onerror(client) {
  if (client.user_onerror) {
    var httpStatus;
    var httpStatusText;
    try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
    } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
    }
    if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
    } else {
      client.user_onerror(httpStatus, httpStatusText);
    }
  }
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWindVelocity_onerror = wsprovider_connection_global_smarthome_thm_de__getWindVelocity_op_onerror;

//
// Operation {http://wsprovider.connection.global.smarthome.thm.de/}getWindVelocity
// - bare operation. Parameters:
// - wsprovider_connection_global_smarthome_thm_de__userTransferObject
//
function wsprovider_connection_global_smarthome_thm_de__getWindVelocity_op(successCallback, errorCallback, arg0) {
  this.client = new CxfApacheOrgClient(this.jsutils);
  var xml = null;
  var args = new Array(1);
  args[0] = arg0;
  xml = this.getWindVelocity_serializeInput(this.jsutils, args);
  this.client.user_onsuccess = successCallback;
  this.client.user_onerror = errorCallback;
  var closureThis = this;
  this.client.onsuccess = function(client, responseXml) { closureThis.getWindVelocity_onsuccess(client, responseXml); };
  this.client.onerror = function(client) { closureThis.getWindVelocity_onerror(client); };
  var requestHeaders = [];
  requestHeaders['SOAPAction'] = '';
  this.jsutils.trace('synchronous = ' + this.synchronous);
  this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWindVelocity = wsprovider_connection_global_smarthome_thm_de__getWindVelocity_op;

function wsprovider_connection_global_smarthome_thm_de__getWindVelocity_serializeInput(cxfjsutils, args) {
  var xml;
  xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://wsprovider.connection.global.smarthome.thm.de/' ");
  xml = xml + '<jns0:getWindVelocity>';
  // block for local variables
  {
    xml = xml + args[0].serialize(cxfjsutils, 'arg0', null);
  }
  xml = xml + '</jns0:getWindVelocity>';
  xml = xml + cxfjsutils.endSoap11Message();
  return xml;
}

wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices.prototype.getWindVelocity_serializeInput = wsprovider_connection_global_smarthome_thm_de__getWindVelocity_serializeInput;

function wsprovider_connection_global_smarthome_thm_de__getWindVelocityResponse_deserializeResponse(cxfjsutils, partElement) {
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  partElement = cxfjsutils.getFirstElementChild(partElement);
  cxfjsutils.trace('rpc element: ' + cxfjsutils.traceElementName(partElement));
  var returnObject = wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject_deserialize (cxfjsutils, partElement);

  return returnObject;
}
function wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices_wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServicesPort () {
  this.url = 'http://localhost:8080/SmartHomeManagerWebServices';
}
wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices_wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServicesPort.prototype = new wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices;

function halloWelt() {
  console.log("Huh..! Harri hart")
 // wsprovider_connection_global_smarthome_thm_de__halloWelt_op(successFunction(),failFunction(),"Karle")
  wsprovider_connection_global_smarthome_thm_de__SmartHomeManagerWebServices ();
  // wsprovider_connection_global_smarthome_thm_de__halloWelt_op(wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onsuccess(this.client), wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onerror(this.client));
  wsprovider_connection_global_smarthome_thm_de__halloWelt_op(successFunction(),failFunction(),"Karles Soap-Test :D")
}

function successFunction() {
  console.log("HarriSaccezz")
}

function failFunction() {
  console.log("HarriFätt")
}
