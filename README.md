
# AngularJS Webapp Generator 
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kosz/generator-angular-webapp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Stories in Ready](https://badge.waffle.io/kosz/generator-angular-webapp.png?label=ready&title=Ready)](https://waffle.io/kosz/generator-angular-webapp) [![npm version](https://badge.fury.io/js/generator-angular-webapp.svg)](http://badge.fury.io/js/generator-angular-webapp) 
> Yeoman generator for creating Angular Front End Applications and Modules. Uses gulp, live reload, watchers, bower, automatic injection of js and css into html, and follows the [Angular Best Practice for App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) 

> **Under Construction, pre alpha quality work in progress, currently version 0.1.5** 

## Usage

Install `generator-angular-webapp`:
```
npm install -g generator-angular-webapp
```

Make a new directory,and `cd` into it:
```
mkdir my-new-project && cd $
```

Run `yo angular-webapp`, optionally passing an app name:
```
yo angular-webapp
```

Run `gulp` to start the live-reload server and the watchers. For a more indepth usage document have a look at [this](https://github.com/kosz/generator-angular-webapp/wiki/Using-the-angular-webapp-generator) `Wiki page`.

## Prerequisites
* node
* npm
* bower
* gulp
* yeoman

## Generators

Available generators:

* Available
    - angular-webapp
    - angular-webapp:controller
    - angular-webapp:template
    - angular-webapp:service
    - angular-webapp:route
* Planned
    - others

## Contributing

Should you wish to contribute, feel free to fork and open pull requests from your fork.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
