'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    animal: 'lion',
    APP_VAR: process.env.APP_VAR,
    SECRET_APP_VAR: process.env.SECRET_APP_VAR,
  };

  callback(null, response);
};
