[![Stories in Ready](https://badge.waffle.io/kosz/generator-modular.png?label=ready&title=Ready)](https://waffle.io/kosz/generator-modular)
### generator-modular

[![Join the chat at https://gitter.im/kosz/generator-modular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kosz/generator-modular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Yeoman Generator for AngularJS webapps and modules
> Generates AngularJS webapps and stand alone modules. Uses gulp, follows the Google Recommendation for AngularJS Project File Structure, and provides sub generators, to automate development beyond the initial project scaffolding, generating routes, controllers and other AngularJS objects and tests.

### Under construction

Currently release 0.0.2, still needs work, more information available in the gitter channel :  [![Join the chat at https://gitter.im/kosz/generator-modular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kosz/generator-modular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Version 0.0.3 planned for the end of this week ( Feb 15 ). New releases on a weekly basis. This is a fork of, and meant to continue/replace:  [generator-angular-webapp](https://github.com/kosz/generator-angular-webapp).

### Installation

```
npm install -g generator-modular
```

Make sure all prerequisites are installed and up to date : gulp, npm, yeoman, bower, git.

### Scaffolding a new project

Create a new dir for your project and cd into it.
```
mkdir myProject && cd myProject
```

Run the main generator.
```
yo modular
```

Start the live reload server with gulp
```
gulp serve
```

Start the karma runner to run jasmine tests. 
```
gulp test:auto
```

### Generators

#### Available: 

- yo modular 
- yo modular:route [nameOfYourRoute]
- yo modular:controller [nameOfYourController]
- yo modular:service [nameOfYourService]
- yo modular:template [nameOfYourHtmlTemplate]

#### Planned

- yo modular:directive
- yo modular:filter
- yo modular:resource

many others... 

### Prerequisites

- gulp `npm install -g gulp`
- npm / node 
- yeoman `npm install -g yo`
- bower `npm install -g bower`

## License

[Apache license](http://www.apache.org/licenses/LICENSE-2.0)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/kosz/generator-modular/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

