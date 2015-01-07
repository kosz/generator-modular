exports.sanitizePath = function (path) { 
  
  if ( path[path.length-1] !== "/" ) { 
    path = path + "/"; 
  }  
  return path;

};
