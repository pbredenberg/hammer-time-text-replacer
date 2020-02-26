export default class Replacer {
   constructor() {
      console.log('It\'s hammer time!');
      const button = document.querySelector('.replace-button');
      if (button) {
         button.addEventListener('click', () => {
            this.replace();
         });
      }
   }

   public replace(): void {
      document.querySelectorAll('.replace-me').forEach(
         el => {
            if (el.textContent) {
               el.textContent = 'Hammer time.'
            }
         }
      )
   }
}
