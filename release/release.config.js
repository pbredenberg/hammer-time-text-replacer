'use strict';

const RELEASE_VERSION_NAME = 'release v${version}';

module.exports = {
   plugins: {
      '@release-it/conventional-changelog': {
         preset: 'conventionalcommits',
         infile: 'CHANGELOG.md',
      },
   },
   git: {
      tagName: 'v${version}',
      tagAnnotation: RELEASE_VERSION_NAME,
      commitMessage: 'chore: ' + RELEASE_VERSION_NAME,
      releaseName: RELEASE_VERSION_NAME,
   },
};
