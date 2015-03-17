var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generatorWebappUtils = require('../../util/generator-webapp-utils.js');
var reusablePrompts = require('../../util/reusable-prompts.js');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('serviceName', { type: String, required: false });
    if (!this.serviceName) {
      throw new Error(chalk.red('Must specify a service name : yo modular:service myService'));
    }

    this.type = 'controller';
    this.defaultPath = 'src/services/' + this.serviceName;
    this.rtfm = 'https://github.com/kosz/generator-modular/wiki/yo-modular:service';

  },

  helloWorld: function () {
    this.log(yosay(
      'This will generate a ' + chalk.yellow('service') + ' and a ' + chalk.yellow('spec') + ' file'
    ));
  },

  promptPath: reusablePrompts.promptPath,

  promptInjections: reusablePrompts.promptInjections,

  promptScopeMethods: reusablePrompts.promptScopeMethods,

  promptServiceType: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'serviceType',
      message: 'Will this be a service of a factory ?',
      choices: [
        "service (not supported yet)",
        "factory"
      ],
      filter: function (val) {
        var filterMap = {
          "service (not supported yet)": 'service',
          "factory": 'factory'
        }
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.serviceType = answers.serviceType;
      done();
    }.bind(this));

  },

  processTemplates: function () {

    this.template('service.service.js', generatorWebappUtils.sanitizePath(this.path) + this.serviceName + '.' + this.serviceType + '.js');
    this.template('service.service.spec.js', generatorWebappUtils.sanitizePath(this.path) + this.serviceName + '.' + this.serviceType + '.spec.js');

  }

});
