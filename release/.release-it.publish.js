'use strict';

const config = require('./release.config');

module.exports = {
    plugins: config.plugins, 
    git: {
        push: false,
        tag: false,
        commit: false,
    },
    npm: {
        publish: true,
    },
    github: {
        release: true,
    },
};
