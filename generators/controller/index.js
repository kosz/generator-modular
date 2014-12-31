var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('controllerName', { type: String, required: true });

  },

  promptPath: function () {

    this.log(yosay(
      'This will generate a ' + chalk.yellow('controller') + ', a ' + chalk.yellow('template') + ' and a ' + chalk.yellow('spec') + ' file'
    ));

    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'path',
      message : 'Enter the path for this controller\n  Default: ' + chalk.yellow('src/app/'), 
      default : 'src/app/',
      store   : true
    }, function (answers) {

      this.path = answers.path;
      done();
    }.bind(this));

  },

  promptInjections: function () {

    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'injections',
      message : 'Enter a list of items to be injected into the controller, separated by commas\n  Example: ' + chalk.yellow('$scope,$http,someService'),
      store   : true
    }, function (answers) {

      this.injections = answers.injections === '' ? [] : answers.injections.replace(/ /g, '').split(',');
      done();
    }.bind(this));

  },

  promptScopeMethods: function () {

    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'scopeMethods',
      message : 'Enter a list of methods to be declared on the scope, separated by commas\n  Example: ' + chalk.yellow('someMethod,anotherMethod'), 
      store   : true
    }, function (answers) {
      this.scopeMethods = answers.scopeMethods === '' ? [] : answers.scopeMethods.replace(/ /g, '').split(',');
      done();
    }.bind(this));

  },

  promptControllerAs: function () {

    if (this.scopeMethods.length > 0) { 
      var done = this.async();

      this.prompt({
        type: 'list',
        name: 'controllerAs',
        message: 'Are you going to be using the controllerAs pattern ? ( use $scope if unsure )',
        choices: [
        "Use $scope",
        "Use this, and declare controller as in your html"
        ],
        filter: function (val) {
          var filterMap = {
            "Use $scope": 'false', 
            "Use this, and declare controller as in your html": 'true'
          }
          return filterMap[val];
        },  
        store: true,
      }, function (answers) {
        this.controllerAs = answers.controllerAs;
        done();
      }.bind(this));
    } else { 
      this.controllerAs = 'false'; //TODO: not thrilled with this 
    } 

  },

  processTemplates: function () {

    this.template('controller.controller.js', this.path + this.controllerName + '.js');
    this.template('controller.controller.spec.js', this.path + this.controllerName + '.spec.js');

    this.composeWith('angular-webapp:template', { options: { path: this.path, name: this.controllerName }});

  }

});
