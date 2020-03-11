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

      this.registerPrompts({
         pause: {
            type: 'confirm',
            message: () => { return 'Have you finished editing the changelog?'; },
         },
      });

      await this.step(
         {
            enabled: true,
            label: 'Pause for changelog update:',
            prompt: 'pause',
         }
      );
   }
}

module.exports = InteractiveConventionalChangelog;
