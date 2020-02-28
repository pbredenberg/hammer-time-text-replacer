interface IReplacerConfig {
   buttonSelector?: string;
   replacementSelectors?: string[];
}

export default class Replacer {

   private _config: IReplacerConfig = {};

   public constructor(config: IReplacerConfig = {}) {
      let button;

      this._config = config;

      button = document.querySelector(this._config.buttonSelector || '.replace-button');

      if (button) {
         button.addEventListener('click', () => {
            this.replace();
         });
      }

      console.log('It\'s hammer time!'); // eslint-disable-line
   }

   public replace(): void {
      const selectors = this._config.replacementSelectors || [ '.replace-me' ];

      document.querySelectorAll(selectors.join(',')).forEach(
         (el) => {
            if (el.textContent) {
               el.textContent = 'Hammer time.';
            }
         }
      );
   }
}
