interface IReplacerConfig {
   buttonSelectors?: string[];
   replacementSelectors?: string[];
}

export default class Replacer {

   private _config: IReplacerConfig = {};

   public constructor(config: IReplacerConfig = {}) {
      this._config = config;

      this._initButtons();

      console.log('It\'s hammer time!'); // eslint-disable-line
   }

   public replace(): void {
      const selectors = this._config.replacementSelectors || [ '.replace-me' ];

      document
         .querySelectorAll(this._selectorsJoiner(selectors))
         .forEach((el) => {
            if (el.textContent) {
               el.textContent = 'Hammer time.';
            }
         });
   }

   private _initButtons(): void {
      const selectors = this._config.buttonSelectors || [ '.replace-button' ];

      document
         .querySelectorAll(this._selectorsJoiner(selectors))
         .forEach((button) => {
            button.addEventListener('click', () => {
               this.replace();
            });
         });
   }

   private _selectorsJoiner(selectors: string[]): string {
      return selectors.join(',');
   }
}
