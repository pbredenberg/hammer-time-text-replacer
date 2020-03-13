'use strict';

const config = require('./release.config');

module.exports = {
   plugins: config.plugins,
   git: config.git,
};
