export default class Replacer {
   public constructor() {
      console.log('It\'s hammer time!'); // eslint-disable-line
      const button = document.querySelector('.replace-button');

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
