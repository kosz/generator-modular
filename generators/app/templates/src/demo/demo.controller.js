/**
 * DemoCtrl, with a demo service injection
 */
angular.module('<%= config.get("name") %>-demo').controller('demoCtrl', [
'$scope',
'demoVersion',
function ($scope,demoVersion) {
  console.log('Started controller demoCtrl for module <%= config.get("name") %> version ' +
    demoVersion.getVersion());
}]);
