describe('Controller: <%= controllerName %>', function() {
  var controller, $rootScope;
    <% if (injections.length > 0) {  %>var <%= injections.join(',') %>;<% } %>

  beforeEach(module('<%= config.get('name') %>')); <%

%>
    beforeEach(inject(function (<%
        var mockInjections = ['$controller','$rootScope'].concat(injections);
        mockInjections = generatorWebappUtils.wrapAngularMockInjections(mockInjections);
        var scopeIdx = mockInjections.indexOf('_$scope_');
        var hasScope = false;
        if (  scopeIdx > -1 ) {
            mockInjections.splice(scopeIdx,1);
            hasScope = true;
        }
         %><%= mockInjections.join(',') %>) { 
    <% 
        mockInjections.forEach(function(injection) {
        if ( injection !== '_$scope_' ) {
%>
        <%= injection.replace(/_/g, '') + ' = ' + injection %>;<% } else { 
        %> 
        $scope = $rootScope.$new(); <%
}}) %>
        <%= hasScope ? '$scope = $rootScope.$new();' : '' %>

    controller = $controller('<%= controllerName %>', { <% 
            injections.forEach(function(injection,index) { %>
            '<%= injection %>': <%= injection %><%= injections.length > index+1 ? ',' : '' %><%
        });
%>
      });
  }));

  it('should get initialized', function() {
    expect(controller).not.toEqual(undefined);
  }); <%
    var scope = controllerAs === 'false' ? '$scope' : 'controller'; 
    scopeMethods.forEach(function(method,index) {
  %>

  it('should define <%= scope === "controller" ? "" : scope %>.<%= method %>', function () {
    expect(angular.isFunction(<%= scope %>.<%= method %>)).toBe(true);
    // TODO: add tests for other behaviour here
  });<% }); %>

});
