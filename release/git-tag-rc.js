'use strict';

const { Plugin } = require('release-it');

class GitTagRc extends Plugin {
   getNewTag() {
      const context = this.config.getContext();

      return context.version;
   }
   async beforeRelease() {
      const newTag = this.getNewTag();

      // Set up our interactive prompt.
      this.registerPrompts({
         tagRc: {
            type: 'confirm',
            message: () => { return `Tag this release with ${newTag}?`; },
         },
      });

      // Execute the prompt.
      await this.step(
         {
            enabled: true,
            label: 'Prompt for tagging.',
            prompt: 'tagRc',
         }
      );
      this.log.log(`Tagging ${newTag}...`);
      this.exec(`git tag ${newTag}`);
   }

   afterRelease() {
      this.log.log('Pushing tags...');
      this.exec(`git push origin ${this.config.getContext()}`);
   }
}

module.exports = GitTagRc;
