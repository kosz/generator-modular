var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('controllerName', { type: String, required: true });

  },

  promptInjections: function () {

    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'injections',
      message : 'Enter a list of items to be injected into the controller, separated by commas', 
      store   : true
    }, function (answers) {
      this.log(answers.injections);
      this.injections = answers.injections.replace(' ', '').split(',');
      done();
    }.bind(this));

  },

  processTemplates: function () {

    this.template('controller.controller.js', this.controllerName + '.js');
    this.template('controller.controller.spec.js', this.controllerName + '.spec.js');

  }

});
