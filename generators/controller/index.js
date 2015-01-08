var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generatorWebappUtils = require('../../util/generator-webapp-utils.js');
var reusablePrompts = require('../../util/reusable-prompts.js');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('controllerName', { type: String, required: true });

  },

  helloWorld: function () {
    this.log(yosay(
      'This will generate a ' + chalk.yellow('controller') + ', a ' + chalk.green('template') + ' and a ' + chalk.yellow('spec') + ' file'
    ));
  },

  promptPath: reusablePrompts.promptPath,

  promptInjections: reusablePrompts.promptInjections, 

  promptScopeMethods: reusablePrompts.promptScopeMethods,

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

    this.template('controller.controller.js', generatorWebappUtils.sanitizePath(this.path) + this.controllerName + '.js');
    this.template('controller.controller.spec.js', generatorWebappUtils.sanitizePath(this.path) + this.controllerName + '.spec.js');

    this.composeWith('angular-webapp:template', { options: { path: generatorWebappUtils.sanitizePath(this.path), name: this.controllerName }});

  }

});
