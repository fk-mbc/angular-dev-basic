# AngularJS basic template
This template provides a quick startup template to develop a project or to try out some functions in an
automated development environment. It is based on the [John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) style guidelines. So you have separate
folder for your routes and components and you will nest all files depending on it inside these folders.

## What it is
A lightweight template to quickly try out some angular functions, plugins, what ever. You don't have
to be care about to set up an angular environment or install all of the yeoman stuff that is shiped
with it. You will have a preconfigured angular app with the style from [John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Try it out!

## What it isn't
It is not a full development environment like yo angular. But it is near and more lightweight. ATM it
doesn't provide testing tools or a final build. You can install your favorit tools and add the configuration to the
grunt tasks. (Place your javascript test files inside the folder of your controller, service, etc. and
name it with *.spec.js. It will be ignored from the dev grunt tast and you can use it in your custom
test task.)

## Features
- server
- livereload
- sass
- bower injector (wiredep)
- file injector for js files

## Installation
You will need to have node.js with npm, grunt cli and bower installed. Run the following commands
from a terminal / console window to install and start the application.

```
npm install
bower install
grunt dev
```

