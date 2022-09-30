/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.startGame();
const phrase = new Phrase();
phrase.addPhraseToDisplay();
// console.log(game.activePhrase.checkLetter('a'));
phrase.checkLetter();
console.log(game.activePhrase.phrase);


//game.activePhrase.checkLetter('a')