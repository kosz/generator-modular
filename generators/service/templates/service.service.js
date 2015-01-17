/**
 * @ngdoc service
 * @name <%= config.get('name') %>.service:<%= serviceName  %>
 *
 * @description
 * Factory <%= serviceName %>
 *
 * **Note:** documentation needs to be updated as logic is added
 *
 */
angular.module('<%= config.get('name') %>').<%= serviceType %>('<%= serviceName %>', [ <% for(var i = 0; i<injections.length; i++ ) { %>
'<%= injections[i] %>', <% } %>
function (<%= injections.join(',') %>) { <%
  scopeMethods.forEach(function(method) {
  %>

  //
  // <%= method %>
  //
  var <%= method %> = function <%= method %>() {

  }; <% }) %>

  return { <% scopeMethods.forEach(function(method,index) { %>
    <%= method %>: <%= method %><%= index === scopeMethods.length-1 ? '' : ',' %><% }) %>
  };

}]);
