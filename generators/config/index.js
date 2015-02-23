'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var generatorWebappUtils = require('../../util/generator-webapp-utils.js');

module.exports = generators.Base.extend({

  constructor: function () {

    generators.Base.apply(this, arguments);

    this.generatorWebappUtils = generatorWebappUtils;

  },

  helloWorld: function () {
    if (this.options.path) { return; }
    this.log(yosay(
      'The ' + chalk.yellow('config') + ' subgenerator, allows defining settings that will then be remembered when you run other subgenerators, and will allow you to customize those generators for your own needs.'
    ));
  },

  promptControllerAs: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'controllerAs',
      message: 'Would you ALWAYS like to use the controllerAs pattern ?',
      choices: [
        '1. Always use controllerAs.',
        '2. Always use $scope.',
        '3. Always ask me which one to use.'
      ],
      filter: function (val) {
        var filterMap = {
          '1. Always use controllerAs.': 'controllerAs',
          '2. Always use $scope.': '$scope',
          '3. Always ask me which one to use.': 'ask'
        };
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.config.set('controllerAs', answers.controllerAs);
      done();
    }.bind(this));

  },

  promptControllerSuffix: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'controllerSuffix',
      message: 'Would you like to enforce a controller suffix ?',
      choices: [
        '1. Yes - use `Ctrl`',
        '2. Yes - use `Controller`',
        '3. Yes - use `Ctl`',
        '4. No  - use whatever is entered'
      ],
      filter: function (val) {
        var filterMap = {
          '1. Yes - use `Ctrl`': 'Ctrl',
          '2. Yes - use `Controller`': 'Controller',
          '3. Yes - use `Ctl`': 'Ctl',
          '4. No  - use whatever is entered': ''
        };
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.config.set('controllerSuffix', answers.controllerSuffix);
      done();
    }.bind(this));

  },

  promptControllerPrefix: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'controllerPrefix',
      message: 'Would you like to be asked to enter a controller prefix, to facilitate controller namespacing ?',
      choices: [
        '1. Yes - ask me to enter it everytime i create a controller',
        '2. No  - use the default behaviour, never ask this question'
      ],
      filter: function (val) {
        var filterMap = {
          '1. Yes - ask me to enter it everytime i create a controller': 'true',
          '2. No  - use the default behaviour, never ask this question': 'false'
        };
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.config.set('controllerPrefix', answers.controllerPrefix);
      done();
    }.bind(this));

  },

  promptDirectiveController: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'directiveController',
      message: 'Would you like to be asked if you need a controller to be generated, when generating directives ?',
      choices: [
        '1. Yes - ask me every time.',
        '2. No  - but always create one by default',
        '3. No  - but never create one by default'
      ],
      filter: function (val) {
        var filterMap = {
          '1. Yes - ask me every time.': 'ask',
          '2. No  - but always create one by default': 'create',
          '3. No  - but never create one by default': 'never'
        };
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.config.set('directiveController', answers.directiveController);
      done();
    }.bind(this));

  },

  promptFunctionDeclaration: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'functionDeclaration',
      message: 'How would you like your generated function declarations to look ?',
      choices: [
        '1: function functionName () { ...',
        '2: var functionName = function () { ...',
        '3: var functionName = function functionName { ...',
        '4: self.functionName = function () { ...',
        '5: Never ask. Never scaffold any functions. Turn this feature off'
      ],
      filter: function (val) {
        var filterMap = {
          '1: function functionName () { ...': '1',
          '2: var functionName = function () { ...': '2',
          '3: var functionName = function functionName { ...': '3',
          '4: self.functionName = function () { ...': '4',
          '5: Never ask. Never scaffold any functions. Turn this feature off': '5'
        };
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.config.set('functionDeclaration', answers.functionDeclaration);
      done();
    }.bind(this));

  },

  promptCommentScaffolding: function () {

    var done = this.async();

    this.prompt({
      type: 'list',
      name: 'commentsScaffolding',
      message: 'Would you like to generate comments ( in ngdoc format ) in your generated code ?',
      choices: [
        '1. Yes',
        '2. No'
      ],
      filter: function (val) {
        var filterMap = {
          '1. Yes': 'true',
          '2. No': 'false'
        };
        return filterMap[val];
      },
      store: true,
    }, function (answers) {
      this.config.set('commentsScaffolding', answers.commentsScaffolding);
      done();
    }.bind(this));

  }

});
