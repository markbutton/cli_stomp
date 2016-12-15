# CliStomp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

# Material2 Design
These Demo apps consume Angular Material 2 components. Built with the [angular-cli](https://github.com/angular/angular-cli).
Check out this project for more information on Material2 Design https://github.com/jelbourn/material2-app

# Rest API Prototype
Simple Contact app that consumes a seperate NodeJS, ExpressJS and MongoDB (MEAN STACK) backend.  
Built with the express-cli. The node-mongo project is also required to run this demo application.
https://github.com/markbutton/node-mongo

# STOMP Websocket Protoype

> A demo application using [Angular 2](https://github.com/angular/angular) in
> [Typescript](https://github.com/Microsoft/TypeScript) and [STOMP.js](https://github.com/jmesnil/stomp-websocket),
> generated with [angular-cli](https://github.com/angular/angular-cli).

This demo app contrasts the request/response model and implements an observer pattern.
It demonstrates a reliable way of connecting to a message queue and subscribing to messages 
from a STOMP topic and how Angular2 itself can subscribe to model changes. It uses the Typescript 
interface definition from Jeff Mesnil's excellent STOMP.js JavaScript library. It features a 
STOMPService which subscribes to messages, and an example toaster component and an alert component 
which use the Observable type to data-bind messages to the DOM.

## Quick Start 

> As well as the following, you will also need the [angular-cli](https://github.com/angular/angular-cli) 
> and a message broker supporting STOMP, the Simple Text Oriented 
> Messaging Protocol. This example was built using [ActiveMQ WebSTOMP](http://activemq.apache.org/)
> but other brokers will also work. 
> The contact example requires the [node-mongo](https://github.com/markbutton/node-mongo)

To get started running this app locally (assuming you've already got angular-cli):

```bash
# Clone the repo
git clone https://github.com/markbutton/cli_stomp.git
# cd into it
cd cli_stomp
# Install the packages from package.json
npm install
```

You will also need to edit the `app/api/config.json` configuration file to set
the correct connection parameters for your message broker. When you've done 
this, you can run the application locally:

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Layout

The source is located under the `app` folder:

```
├── src                                          * Source folder
│   ├── api                                      * Example API folder (static for demo)
│   │   └── config.json                          * Configuration file for STOMP
│   │
│   ├── app                                      * Application folder
│   │   ├── components                           * Components folder
│   │   │   ├── alerts                           * Alert Components for STOMP Demo
│   │   │   ├── contacts                         * Contact Components for REST Demo
│   │   │   ├── demo                             * Material 2 Design Demo
│   │   │   └── status                           * STOMP Status component folder
│	│ 	│  
│	│	├── models								 * Example data models  
│   │   │
│   │   ├── services                             * Services folder
│	│	│	├── config							 * Config service folder (retrieves the configuration)
│   │   │   ├── mongo                            * Config service folder (retrieves the configuration)
│   │   │   └── stomp                            * STOMP service folder (ng2 definition for a STOMP configuration)
│   │   │
│   │   ├── store                                * Local observable data stores
│   │   │
│   │   ├── app.component.css                    * Component css file
│   │   ├── app.component.html                   * Component html file
│   │   ├── app.component.spec.ts                * Component testings
│   │   ├── app.component.ts                     * Top-level app-root component
│   │   ├── app.module.ts                        * App module definition
│   │   └── index.ts                             * Indexing file
│   │
│   ├── assets                                   * Assets folder
│   │   └── .gitkeep                             * Placeholder to include the folder to source control
│   │
│	├── data                                     * Mock Data Objects
│   │
│   ├── environments                             * Environment settings folder
│   │   ├── environment.prod.ts                  * Production environment settings
│   │   └── environment.ts                       * Development environment settings
│   │
│   ├── scripts                                  * AOT script
│   │
│   ├── index.html                               * The root page served to browser
│   ├── main.ts                                  * App bootstrap
│   ├── stomp-theme.scss                         * Main css for Material 2 Design	
│   ├── styles.css                               * Main css file
│   ├── tsconfig.json                            * Typescript transpiler options 
│   └── typings.d.ts                             * Typescript typings definition file
│
├── angular-cli.json                             * Angular CLI configuration file
├── package.json                                 * Package info and list of dependencies to install
└── tslint.json                                  * Typescript Linter configuration file
```

> Excluded from this partial tree for brevity: sub-component `.ts` `.html` etc 
files under folders, testing framework files, and the `e2e` End to End testing 
folder containing app behaviour testings and definitions. The `node_modules` 
directory will also be generated for the installed node packages.)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
