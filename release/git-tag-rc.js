'use strict';

const { Plugin } = require('release-it');

class GitTagRc extends Plugin {
   async release() {
      const context = this.config.getContext(),
            newTag = `v${context.version}`;

      // Set up our interactive prompts.
      this.registerPrompts({
         tagRc: {
            type: 'confirm',
            message: () => { return `Tag this release with ${newTag}?`; },
         },
         pushTag: {
            types: 'confirm',
            message: () => { return `Push tag ${newTag}?`; },
         },
      });

      // Execute a git tag.
      await this.step(
         {
            enabled: true,
            label: 'Prompt for tagging.',
            prompt: 'tagRc',
         }
      );

      this.log.log(`Tagging ${newTag}...`);
      // Tag without annotation, which makes it easier when filtering
      // commit for changelogs in major versions.
      this.exec(`git tag ${newTag}`);

      // Push the tag.
      await this.step(
         {
            enabled: true,
            label: 'Prompt for tag push.',
            prompt: 'pushTag',
         }
      );

      this.log.log('Pushing tags...');
      this.exec(`git push origin ${this.getNewTag()}`);
   }
}

module.exports = GitTagRc;
