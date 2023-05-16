'use strict';

/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');

module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'serve -s build -l 80'
    },
  ],
};
