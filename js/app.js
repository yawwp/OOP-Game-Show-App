/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.startGame();
const phrase = new Phrase();
phrase.addPhraseToDisplay();
// console.log(phrase.addPhraseToDisplay());
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
