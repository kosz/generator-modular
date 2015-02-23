exports.sanitizePath = function (path) {

  if ( path[path.length-1] !== "/" ) {
    path = path + "/";
  }
  return path;

};

exports.wrapAngularMockInjections = function(injections) {
  for (var i = 0; i < injections.length; i+=1) {
    injections[i] = '_' + injections[i] + '_';
  }
  return injections;
};
