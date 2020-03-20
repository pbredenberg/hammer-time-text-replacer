'use strict';

const config = require('@silvermine/release-it-config').default;

module.exports = {
   plugins: config.plugins,
   git: config.git,
   gitHub: config.gitHub,
   npm: config.npm,
};
