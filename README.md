# AngularJS Webapp Generator

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kosz/generator-angular-webapp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Yeoman generator for creating Angular Front End Applications and Modules. Uses gulp, live reload, watchers, bower, automatic injection of js and css into html, and follows the [Angular Best Practice for App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) 

> **Under Construction, pre alpha quality, currently version 0.1.2** 

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

Run `gulp` to start the live-reload server and the watchers.

## Prerequisites
* Node
* npm
* bower

## Generators

Available generators:

* Available
    - angular-webapp
    - angular-webapp:controller
    - angular-webapp:template
    - angular-webapp:service
* Planned
    - others

## Contribute

Development is done in the branch with the latest version number.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
