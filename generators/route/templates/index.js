angular.module('<%= config.get('name')  %>').config([ '$routeProvider', 
function ($routeProvider) {
  
  $routeProvider.when('/<%= routeName %>', {
    templateUrl: '<%= generatorWebappUtils.sanitizePath(path).replace("src/", "") + routeName %>.html',
    controller: '<%= routeName %>',
    controllerAs: '<%= routeName %>' 
  });

}]);
