var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  }
});

module.exports = generators.Base.extend({

	promptProjectType: function () {
    var done = this.async();
		this.prompt({
			type: 'list',
			name: 'projectType',
			message: 'What type of project will this be ?',
			choices: [
			"Angular Web App",
			"Module to be included in other Web Apps"
			],
			filter: function (val) {
				var filterMap = {
					"Angular Web App": 'Webapp', 
					"Module to be included in other Angular Web Apps": 'Module'
				}
				return filterMap[val];
			},	
			store: true,
		}, function (answers) {
      this.log(answers.projectType);
			this.projectType = answers.projectType;
      done();
    }.bind(this));
  },

	promptProjectName: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Enter a name for your ' + this.projectType + ' project.',
			store	  : true,
      default : this.appname
    }, function (answers) {
      this.log(answers.name);
			this.name = answers.name;
      done();
    }.bind(this));
  },

	promptAngularVersion: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'angularVersion',
      message: 'Which angular version would you like to use ? (eg: 1.2.28)',
			store: true,
      default: '1.3.8',
    }, function (answers) {
      this.log(answers.angularVersion);
			this.angularVersion = answers.angularVersion;
      done();
    }.bind(this));
  },

	processTemplates: function () {

		this.template('gulpfile.js', 'gulpfile.js');
		this.template('.gitignore', '.gitignore');
		this.template('bower.json', 'bower.json');
		this.template('package.json', 'package.json');

		this.template('src/index.html', 'src/index.html');

		this.template('src/app/app.js', 'src/app/app.js');

  }

});
