'use strict';

const config = require('./release.config');

config.git.changelog = false;
config.git.tagAnnotation = null;

module.exports = {
   preRelease: 'rc',
   git: config.git,
};
