'use strict';

const config = require('./release.config');

const git = Object.assign(
    config.git,
    {
        changelog: 'git log --pretty=format:"* %s (%h)" $(git describe --tags --abbrev=0)...HEAD',
    },
);

module.exports = {
    plugins: config.plugins,
    git: git,
    npm: {
        publish: false,
    },
    github: {
        release: false,
    },
    gitlab: {
        release: false
    }
};
