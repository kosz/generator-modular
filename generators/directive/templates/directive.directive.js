 <% if ( config.get('commentsScaffolding') === 'true' ) { %>/**
 * @ngdoc controller
 * @name <%= config.get('name') %>.directive:<%= directiveName %>
 *
 * @description
 * Controller <%= directiveName %>
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */<% } %>

'use strict';

angular.module('<%= config.get('name') %>').directive('<%= directiveName %>', [function() {
  return {
    restrict: 'EA',
    templateUrl: 'directives/my-dir/my-dir.html',
    link: function(scope, element, attrs) {

    }
  };
}]);
