var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var generatorWebappUtils = require('../../util/generator-webapp-utils.js');
var reusablePrompts = require('../../util/reusable-prompts.js');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.argument('routeName', { type: String, required: false });
    if ( this.routeName === undefined ) {
      if (!this.options.name) {
        throw new Error(chalk.red('Must specify a route name : yo modular:route my-route'));
      }
      this.routeName = this.options.name;
    }
    this.path = this.options.path;
    this.type = 'route';
    this.defaultPath = 'src/routes/' + this.routeName;
    this.rtfm = 'https://github.com/kosz/generator-modular/wiki/yo-modular:route';

    this.generatorWebappUtils = generatorWebappUtils;

  },

  helloWorld: function () {
    if (this.options.path) { return; }
    this.log(yosay(
      'This will generate a ' + chalk.blue('index.js') + ' file defining the route, a '+ chalk.yellow('controller') + ', a ' + chalk.green('template') + ' and a ' + chalk.yellow('spec') + ' file'
    ));
  },

  promptPath: function () {
    if (!this.path) { reusablePrompts.promptPath.apply(this); }
  },

  processTemplates: function () {

    this.template('index.js', generatorWebappUtils.sanitizePath(this.path) + 'index.js');

    this.composeWith('modular:controller', {
      options:
        {
          path: generatorWebappUtils.sanitizePath(this.path),
          injections: [],
          scopeMethods: [],
          createTemplate: 'true',
          name: this.routeName
        }
    });

  }

});
