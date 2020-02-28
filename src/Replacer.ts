interface IReplacer {
   buttonSelector?: string;
}

export default class Replacer {
   public constructor(config: IReplacer = {}) {
      console.log('It\'s hammer time!'); // eslint-disable-line
      const button = document.querySelector(config.buttonSelector || '.replace-button');

      if (button) {
         button.addEventListener('click', () => {
            this.replace();
         });
      }
   }

   public replace(): void {
      document.querySelectorAll('.replace-me').forEach(
         (el) => {
            if (el.textContent) {
               el.textContent = 'Hammer time.';
            }
         }
      );
   }
}
