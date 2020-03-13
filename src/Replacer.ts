interface IReplacerConfig {
   buttonSelectors?: string[];
   replacementSelectors?: string[];
   restoreButtonSelectors?: string[];
   replaceButtonSelectors?: string[];
   replacementText?: string;
}

interface INodeRecord {
   id: number;
   node: Node;
}

const DEFAULT_REPLACEMENT_SELECTOR = '.replace-me',
      DEFAULT_REPLACEMENT_TEXT = 'Hammer time.';

export default class Replacer {

   private _config: IReplacerConfig = {};

   private _nodeRecords: INodeRecord[] = [];

   public constructor(config: IReplacerConfig = {}) {
      this._config = config;

      this._initButtons();
   }

   /**
    * Performs repacements.
    */
   public replace(): void {
      const selectors = this._config.replacementSelectors || [ DEFAULT_REPLACEMENT_SELECTOR ];

      document
         .querySelectorAll(this._selectorsJoiner(selectors))
         .forEach((el) => {
            if (el.textContent) {
               this._nodeRecords.push({
                  id: this._nodeRecords.length,
                  node: el.cloneNode(true),
               });
               el.textContent = this._config.replacementText || DEFAULT_REPLACEMENT_TEXT;
            }
         });
   }

   public restore(): void {
      const selectors = this._config.replacementSelectors || [ DEFAULT_REPLACEMENT_SELECTOR ];

      document
         .querySelectorAll(this._selectorsJoiner(selectors))
         .forEach((el, key) => {
            const nodeRecord = this._nodeRecords[key];

            if (nodeRecord) {
               el.textContent = nodeRecord.node.textContent;
            }
         });
   }

   private _initButtons(): void {
      const replaceButtonSelectors = this._config.replaceButtonSelectors || [ '.replace-button' ];

      const restoreButtonSelectors = this._config.restoreButtonSelectors || [ '.restore-button' ];

      document
         .querySelectorAll(this._selectorsJoiner(replaceButtonSelectors))
         .forEach((button) => {
            button.addEventListener('click', () => {
               this.replace();
            });
         });

      document
         .querySelectorAll(this._selectorsJoiner(restoreButtonSelectors))
         .forEach((button) => {
            button.addEventListener('click', () => {
               this.restore();
            });
         });
   }

   private _selectorsJoiner(selectors: string[]): string {
      return selectors.join(',');
   }
}
