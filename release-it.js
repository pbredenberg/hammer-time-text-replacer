'use strict';

const config = require('@silvermine/release-it-config');

module.exports = {
   plugins: config.default.plugins,
   git: config.default.git,
   gitHub: config.default.gitHub,
};
