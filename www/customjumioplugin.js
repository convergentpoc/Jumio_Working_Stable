// Empty constructor
function CustomJumio() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
CustomJumio.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'CustomJumio', 'show', [options]);
}

var exec = require('cordova/exec');
CustomJumio.prototype.initNetverify = function(token, secret, datacenter, options, customization, successCallback, errorCallback) {
  
  //Currently working implementation.
  var requestOptions = {};
  requestOptions.token = token;
  requestOptions.secret = secret;
  requestOptions.datacenter = datacenter;
  requestOptions.options = options;
  requestOptions.customization = customization;

  cordova.exec(successCallback, errorCallback, 'CustomJumio', 'initNetverify', [requestOptions]);

  //Attempt to make it array for easier access.
  // var requestOptions = [];
  // requestOptions[0] = token;
  // requestOptions[1] = secret;
  // requestOptions[2] = datacenter;
  // requestOptions[3] = options;
  // requestOptions[4] = customization;

  // cordova.exec(successCallback, errorCallback, 'CustomJumio', 'initNetverify', requestOptions);
}

CustomJumio.prototype.startNetverify = function(success, error) {
  exec(success, error, "JumioMobileSDK", "startNetverify", []);
};

CustomJumio.prototype.initBAM = function(token, secret, datacenter, options, customization) {
  exec(function(success) { console.log("BAM::init Success: " + success) }, 
   function(error) { console.log("BAM::init Error: " + error) },
   "JumioMobileSDK", 
   "initBAM", 
   [token, secret, datacenter, options, customization]);
};

CustomJumio.prototype.startBAM = function(success, error) {
    exec(success, error, "JumioMobileSDK", "startBAM", []);
};

CustomJumio.prototype.initDocumentVerification = function(token, secret, datacenter, options, customization) {
    exec(function(success) { console.log("DocumentVerification::init Success: " + success) }, 
		 function(error) { console.log("DocumentVerification::init Error: " + error) },
		 "JumioMobileSDK", 
		 "initDocumentVerification", 
		 [token, secret, datacenter, options, customization]);
};

CustomJumio.prototype.startDocumentVerification = function(success, error) {
    exec(success, error, "JumioMobileSDK", "startDocumentVerification", []);
};


// Installation constructor that binds CustomJumio to window
CustomJumio.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.customJumio = new CustomJumio();
  return window.plugins.customJumio;
};
cordova.addConstructor(CustomJumio.install);

