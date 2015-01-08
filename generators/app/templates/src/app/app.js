angular.module('<%= config.get("name") %>', [ 'ngRoute' ])
.config([ '$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

}]);
