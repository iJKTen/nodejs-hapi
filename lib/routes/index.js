'use strict';

const Hello = require('./hello');

module.exports = [
  {path: '/hello', method: 'GET', config: Hello.get}
];
