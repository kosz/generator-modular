# AngularJS Webapp generator

> Yeoman generator for creating Angular Front End Applications and Modules. Uses gulp, live reload, watchers, bower, automatic injection of js and css into html, and follows the [Angular Best Practice for App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) 
> Under Construction, pre alpha quality, currently version 0.1.2 

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
* Planned
	- others
