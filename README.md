[![Stories in Ready](https://badge.waffle.io/kosz/generator-modular.png?label=ready&title=Ready)](https://waffle.io/kosz/generator-modular)
### generator-modular

[![Join the chat at https://gitter.im/kosz/generator-modular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kosz/generator-modular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Yeoman Generator for AngularJS webapps and modules
> Generates AngularJS webapps and stand alone modules. Uses gulp, follows the Google Recommendation for AngularJS Project File Structure, and provides sub generators, to automate development beyond the initial project scaffolding, generating routes, controllers and other AngularJS objects and tests.

### Under construction

Currently release 0.0.4, still needs work, more information available in the gitter channel :  [![Join the chat at https://gitter.im/kosz/generator-modular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kosz/generator-modular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

New releases on a weekly basis. This is a fork of, and meant to continue/replace:  [generator-angular-webapp](https://github.com/kosz/generator-angular-webapp).

### Installation

```
npm install -g generator-modular
```

### Installing the latest version from the git master branch

Since the project is still young, it may be prefered at times to work with the latest version from git. In order to achieve this, we will: 
- clone this repo locally
- npm link from the root of the project, to install generator-modular from the source code

All that can be achieved by running:
```
git clone git@github.com:kosz/generator-modular.git && cd generator-modular && npm link
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

### Credits

This generator is influenced by other great generators : 

- [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) ( gulp scripts ) 
- [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack) ( ongoing development automation and file naming patterns ) 
- [generator-angular](https://github.com/yeoman/generator-angular) ( the grandfather )


### Useful links

- [Github Issues](https://github.com/kosz/generator-modular/issues)
- [Known Bugs](https://github.com/kosz/generator-modular/labels/bug)
- [Milestones](https://github.com/kosz/generator-modular/milestones)
- [Changelog](https://github.com/kosz/generator-modular/blob/master/CHANGELOG.md)
- [Wiki](https://github.com/kosz/generator-modular/wiki)

## License

[Apache license](http://www.apache.org/licenses/LICENSE-2.0)
