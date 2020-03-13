'use strict';

const config = require('./release.config');

config.git.changelog = false;
config.git.tag = false;

config.plugins['./release/git-tag-rc.js'] = {
   remote: 'origin',
};

module.exports = {
   preRelease: 'rc',
   git: config.git,
   plugins: config.plugins,
};
