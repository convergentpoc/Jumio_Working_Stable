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

// Installation constructor that binds CustomJumio to window
CustomJumio.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.customJumio = new CustomJumio();
  return window.plugins.customJumio;
};
cordova.addConstructor(CustomJumio.install);