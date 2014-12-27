var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('name', { type: String, required: true });

  },
  processTemplates: function () {

    this.template('template.html', this.name + '.html');

  }
});
