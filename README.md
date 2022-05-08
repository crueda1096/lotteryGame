# LotteryGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [jest](https://jestjs.io/), view the test coverage in the directory: ./coverage/lottery/icov-report/index.html


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Components

1. Ball-selector: is a component where the user can be select de lottery balls.
2. Bet-slip: is a component where the user can view the in bet.
3. bet-details: this component show the bet result. Here, the app show to user if win or lost.
4. app.component: app component load the other components, also allows user play the bet and show the bet value.

## Services

1. ball service: this service return the balls data to balls selector, also return the balls selected to all components. This is done by means of observable and subject

2. bet service: this service allow propagate the bet value to all components. This is done by means of observable and subject