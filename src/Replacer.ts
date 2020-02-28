interface IReplacerConfig {
   buttonSelector?: string;
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
      document.querySelectorAll('.replace-me').forEach(
         (el) => {
            if (el.textContent) {
               el.textContent = 'Hammer time.';
            }
         }
      );
   }
}
