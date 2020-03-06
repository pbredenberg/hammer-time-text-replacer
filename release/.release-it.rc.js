'use strict';

const config = require('./release.config');

const git = Object.assign(
    config.git,
    {
        changelog: false,
    },
);

module.exports = {
    preRelease: 'rc',
    plugins: config.plugins,
    git: git,
    npm: {
        publish: false,
    },
    github: {
        'release': false,
    },
};
