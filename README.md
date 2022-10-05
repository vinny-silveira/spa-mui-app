# POC with MUI v5

This project demonstrates how to use the [MUI](https://mui.com/) lib in [single-spa](https://single-spa.js.org/) with [externals deps in webpack config](https://webpack.js.org/configuration/externals/#string-1), loading by SystemJS in the root-config the import of MUI and Emotion deps.

> This project use PNPM, [check the installation docs](https://pnpm.io/installation)

## Getting started

1. Clone this repo;
2. In the root folder, run `pnpm install`;
3. Run `pnpm run start` to launch;
4. The builded app will be available in [localhost:8080/acme-app.js](http://localhost:8080/acme-app.js);
5. Follow steps described in the [root-config repo](https://github.com/vinny-silveira/spa-mui-root) to finish.
