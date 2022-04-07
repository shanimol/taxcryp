#TaxCryp

This is the new React App with latest React, Redux and Webpack.

The UI is built using:

- react: https://facebook.github.io/react/
- redux: https://github.com/reactjs/redux
- react-router: https://github.com/reactjs/react-router
- scss: https://sass-lang.com/

## Development/Local running

To start developing this UI you there are some prerequisites:

- node.js ~ 8.11.2
- npm ~ 5.5.1
- webpack ~ 3.8.1

They all need to be installed globally (i.e. with `npm install -g`)

To develop/run the ui locally execute the following steps:

1. Install the prereqs mentioned above.
2. Check out the project from BitBucket [TaxCryp](https://bitbucket.org/keyvaluesoftwaresystems/kv-new-react-boilerplate/)
3. Run `npm install`
4. To run the local server (in dev mode) run `npm run serve`

### npm tasks

- `npm test` runs tests with Jest
- `npm run clean` cleans the `./dist` directory
- `npm run build-prod` builds production in `./dist/
- `npm run serve` runs a development server on port 8090
- `npm run tests` runs eslint and jest test
- `npm run eslint` runs eslint test
- `npm run eslint-json-summary` generates json file with eslint test summary

### Precommit Hooks

`npm run type-check` is run as a precommit hook

## Deployment

Deployment can be done as a Web App.

### Deployment as Web App

`npm run build` generates an index.html with the js bundle, css bundle and all assets which can be deployed directly on a web server. The js and css bundles are hashed for setting a long cache.

### Deployment as Web App in a Docker Container

Pre-requisite:

- Docker

We may use docker containers for deployment.
The docker container should be first built using `build.sh` and then installed using `run.sh`.

After running `run.sh`, the application can be accessed at `http://{server}:8088`

NOTE: To run docker without using `sudo` please follow the steps mentioned [here](https://docs.docker.com/install/linux/linux-postinstall/)
