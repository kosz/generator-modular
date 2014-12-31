angular.module('<%= config.get('name') %>').controller('<%= controllerName %>', [ <% for(var i = 0; i<injections.length; i++ ) { %>
'<%= injections[i] %>', <% } %>
function (<%= injections.join(',') %>) {

  console.log('Started controller <%= controllerName %>'); <% 
    var scope = controllerAs === 'false' ? '$scope' : 'this'; 
    scopeMethods.forEach(function(method) {
  %>

  //
  // <%= method %>
  //
  <%= scope + "." + method %> = function <%= method %>() {

  }; <% }) %>

}]);
