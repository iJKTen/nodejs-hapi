'use strict';

const _ = require('lodash');


exports.get = {
  description: 'Say hello',
  tags: ['api'],
  auth: false,
  handler: async function(request) {
    const name = _.get(request, 'query.name', 'World!');

    return {message: `Hello ${name}`};
  }
};
