'use strict';

module.exports = {
   plugins: {
      '@release-it/conventional-changelog': {
         preset: 'conventionalcommits',
         infile: 'CHANGELOG.md',
      },
   },
   git: {
      tagName: 'v${version}',
      tagAnnotation: 'Release ${version}',
      push: false,
   },
};
