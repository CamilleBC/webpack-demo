# webpack-demo

This project is just a basic webpack configuration in order to learn the tool in a more "hands-on" fashion.

## Webpack organisation

I use a file called `webpack.parts.js` to architecture the different webpack concerns. The different parts could be separated in a file per feature (webpack-dev-server, CSS, etc.) if needed. It could also be separated in a file per mode (production/development/etc.) but I'm not a huge fan of that organisation.

## Nodemon

Nodemon watches the webpack.config.js file, and reloads the configuration when it is modified.

## Hot Module Reloading

The webpack configuration includes Hot Module Reloading (HMR).

This allows one module to be reloaded, while keeping the state of all other module. It makes for a faster refresh, as only necessary modules are refreshed, not the entire page.

You can increase the counter, then edit the `component.js` file to check what happens with hot reloading. The counter and checkbox should keep their state if you only modify the `component.js` file.

## Dependencies

- node v12.10.0
- npm v6.10.3
