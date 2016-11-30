# CliStomp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.


# Material2-app
Simple app that consumes Angular Material 2 components. Built with the angular-cli.
https://github.com/jelbourn/material2-app

# STOMP.js Angular 2 Demo App

> A demo application using [Angular 2](https://github.com/angular/angular) in
[Typescript](https://github.com/Microsoft/TypeScript) and [STOMP.js](https://github.com/jmesnil/stomp-websocket),
> generated with [angular-cli](https://github.com/angular/angular-cli).

This demo app implements a more ng2-faithful way of connecting to a message 
queue and subscribing to messages from a STOMP topic. Uses the Typescript 
interface definition for Jeff Mesnil's excellent STOMP.js JavaScript library,
a STOMPService which subscribes to messages, and an example 'raw data' 
component which uses the Observable type to data-bind messages to the DOM.

## Quick Start 

> As well as the following, you will also need the [angular-cli](https://github.com/angular/angular-cli) 
> and a message broker supporting STOMP, the Simple Text Oriented 
> Messaging Protocol. This example was built using [RabbitMQ WebSTOMP](http://www.rabbitmq.com/blog/2012/05/14/introducing-rabbitmq-web-stomp/)
> but other brokers will also work. (Shameless self-plug: if you want SSL with
> your RabbitMQ socks, you might want to read [my blog post](https://sjmf.in/wp/?p=86).)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
