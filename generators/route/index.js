var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var generatorWebappUtils = require('../../util/generator-webapp-utils.js');
var reusablePrompts = require('../../util/reusable-prompts.js');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('routeName', { type: String, required: true });
    this.generatorWebappUtils = generatorWebappUtils;

  },

  helloWorld: function () {
    this.log(yosay(
      'This will generate a ' + chalk.blue('index.js') + ' file defining the route, a '+ chalk.yellow('controller') + ', a ' + chalk.green('template') + ' and a ' + chalk.yellow('spec') + ' file'
    ));
  },

  promptPath: reusablePrompts.promptPath,

  processTemplates: function () {

    this.template('index.js', generatorWebappUtils.sanitizePath(this.path) + 'index.js');
    
    this.composeWith('angular-webapp:controller', { options: { path: generatorWebappUtils.sanitizePath(this.path), name: this.routeName }});

  }

});
