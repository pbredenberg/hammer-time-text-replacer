'use strict';
const ConventionalChangelog = require('@release-it/conventional-changelog');

class InteractiveConventionalChangelog extends ConventionalChangelog {
   async beforeRelease() {
      const { infile } = this.options,
            { isDryRun } = this.global,
            changelog = await this.getChangelog();

      this.debug({ changelog });
      this.config.setContext({ changelog });

      this.log.exec(`Writing changelog to ${infile}`, isDryRun);

      if (infile && !isDryRun) {
         await this.writeChangelog();
      }

      // Set up our interactive prompt.
      this.registerPrompts({
         pause: {
            type: 'confirm',
            message: () => { return `Paused for ${infile} edits. Continue?`; },
         },
      });

      // Execute the prompt.
      await this.step(
         {
            enabled: true,
            label: 'Pause for changelog update.',
            prompt: 'pause',
         }
      );
   }
}

module.exports = InteractiveConventionalChangelog;
