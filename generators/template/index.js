var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('name', { type: String, required: false });
    if ( this.name === undefined ) { this.name = this.options.name; }
    this.path = this.options.path;

  },
  promptPath: function () {
    if (!this.path) {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'path',
        message : 'Enter the path for this template\n  Default: ' + chalk.yellow('src/app/'), 
        default : 'src/app/',
        store   : true
      }, function (answers) {
        this.path = answers.path;
        done();
      }.bind(this));
    }
  },

  processTemplates: function () {

    this.template('template.html', this.path + this.name + '.html');

  }
});
