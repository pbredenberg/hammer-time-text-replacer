'use strict';

const RELEASE_VERSION_NAME = 'release v${version}',
      CHANGELOG_PATTERN = 'git log --pretty=format:"* %s (%h)" $(git describe --tags --abbrev=0)...HEAD',
      CHANGELOG_INFILE = 'CHANGELOG.md',
      REPOSITORY_RELEASE_SETTINGS = {};

REPOSITORY_RELEASE_SETTINGS.release = true;
REPOSITORY_RELEASE_SETTINGS.releaseName = 'Release ${tagName}';
REPOSITORY_RELEASE_SETTINGS.releaseNotes = CHANGELOG_PATTERN;

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
      changelog: CHANGELOG_PATTERN,
   },
   gitHub: REPOSITORY_RELEASE_SETTINGS,
   gitLab: REPOSITORY_RELEASE_SETTINGS,
};
