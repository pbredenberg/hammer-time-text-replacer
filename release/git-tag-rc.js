'use strict';

const { Plugin } = require('release-it');

class GitTagRc extends Plugin {

   getNewTag() {
      const context = this.config.getContext();

      return `v${context.version}`;
   }

   async addTag() {
      const newTag = this.getNewTag();

      this.log.log(`Tagging ${newTag}...`);

      // Tag without annotation, which makes it easier when filtering
      // commit for changelogs in major versions.
      try {
         return this.exec(`git tag ${newTag}`);
      } catch(error) {
         this.handleError(error);
      }
   }

   async pushTag() {
      const newTag = this.getNewTag();

      this.log.log('Pushing tags...');

      try {
         return this.exec(`git push origin ${newTag}`);
      } catch(error) {
         this.handleError(error);
      }
   }

   async beforeRelease() {
      const newTag = this.getNewTag();

      // Set up our interactive prompts.
      this.registerPrompts({
         tagRc: {
            type: 'confirm',
            message: () => { return `Tag this release with ${newTag}?`; },
         },
         pushTag: {
            type: 'confirm',
            message: () => { return `Push tag ${newTag}?`; },
         },
      });

      // Execute a git tag.
      await this.step(
         {
            enabled: true,
            task: () => { return this.addTag(); },
            label: 'Prompt for tagging.',
            prompt: 'tagRc',
         }
      );

      // Push the tag.
      await this.step(
         {
            enabled: true,
            task: () => { return this.pushTag(); },
            label: 'Prompt for tag push.',
            prompt: 'pushTag',
         }
      );
   }

   rollBack() {
      return this.exec(`git tag -d ${this.getNewTag()}`);
   }

   handleError(error) {
      this.debug(error);
      this.rollBack(this.getNewTag());
   }
}

module.exports = GitTagRc;
