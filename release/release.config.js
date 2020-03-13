'use strict';

const RELEASE_VERSION_NAME = 'release v${version}',
      CHANGELOG_INFILE = 'CHANGELOG.md';

module.exports = {
   plugins: {
      '@release-it/conventional-changelog': {
         preset: 'conventionalcommits',
         infile: CHANGELOG_INFILE,
      },
      './release/pause-for-changelog.js': {
         infile: CHANGELOG_INFILE,
      },
   },
   git: {
      tagName: 'v${version}',
      tagAnnotation: RELEASE_VERSION_NAME,
      commitMessage: 'chore: ' + RELEASE_VERSION_NAME,
      releaseName: RELEASE_VERSION_NAME,
      changelog: 'git log --pretty=format:"* %s (%h)" $(git describe --tags --abbrev=0)...HEAD',
   },
   gitHub: { release: true },
};
