/**
 * DemoCtrl, with a demo service injection
 */
angular.module('<%= config.get("name") %>-demo').controller('demoCtrl', [
'$scope',
function ($scope) {
  console.log('Started controller demoCtrl for module <%= config.get("name") %>');
}]);
