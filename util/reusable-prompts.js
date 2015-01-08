var generators = require('yeoman-generator');
var chalk = require('chalk');

exports.promptPath = function () {

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

};

exports.promptInjections = function () {

  var done = this.async();
  this.prompt({
    type    : 'input',
    name    : 'injections',
    message : 'Enter a list of items to be injected, separated by commas\n  Example: ' + chalk.yellow('$scope,$http,someService'),
    store   : true
  }, function (answers) {

    this.injections = answers.injections === '' ? [] : answers.injections.replace(/ /g, '').split(',');
    done();
  }.bind(this));

};

exports.promptScopeMethods = function () {

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

};

exports.promptTemplateCreation = function () { 

  var done = this.async(); 

  this.prompt({
    type: 'list',
    name: 'createTemplate',
    message: 'Would you like to create a template associated with this ?',
    choices: [
      "yes",
      "no"
    ],
    filter: function (val) {
      var filterMap = {
        "yes": 'true', 
        "no": 'false'
      }
      return filterMap[val];
    },  
    store: true,
  }, function (answers) {
    this.createTemplate = answers.createTemplate;
    done();
  }.bind(this));

};
