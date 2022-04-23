# TripLeap Travel App
The web page: [TripLeap Travel App](https://bespoke-gelato-6d8052.netlify.app/) 
GitHub repository: [nmarkevich/TripLeap](https://github.com/nmarkevich/TripLeap)
## Overview
TripLeap is a travel app that obtains a desired trip location & dates from the user, and displays a weather and an image of the location using information obtained from external APIs.

## Authors
The project implemented by [Natallia Markevich](https://github.com/nmarkevich).

## Installation
- Run 'npm install' command to install npm and all dependencies.
- Create '.env' file in the root directory.
- Add 'GEONAMES_USERNAME =' parameter with you API key into '.env' file. To get the key register [here](http://www.geonames.org/export/web-services.html)
- Add 'WEATHERBIT_API_KEY =' parameter with you API key into '.env' file. To get the key register [here](https://www.weatherbit.io/account/create)
- Add 'PIXABAY_API_KEY =' parameter with you API key into '.env' file. To get the key register [here](https://pixabay.com/api/docs/)

### Production environment
- Run 'npm run build-prod' to make build the app.
- Run 'npm run start' to run the server.
### Development environment
- Run 'npm run build-dev' to build and run the webpack dev server.
### Jest tests
- Run 'npm run test' to execute the tests.

### ESLint
- Run 'npm run lint' to run ESLint.