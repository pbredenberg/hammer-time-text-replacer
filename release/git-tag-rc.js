'use strict';

const { Plugin } = require('release-it');

class GitTagRc extends Plugin {
   async beforeRelease() {
      const context = this.config.getContext();

      // Set up our interactive prompt.
      this.registerPrompts({
         tagRc: {
            type: 'confirm',
            message: () => { return `Tag this release with ${context.version}?`; },
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

      this.exec(`git tag -a ${context.version}`);
   }
}

module.exports = GitTagRc;
