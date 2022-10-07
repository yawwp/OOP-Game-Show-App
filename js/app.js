/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase();
game.startGame();
phrase.addPhraseToDisplay();

game.activePhrase = new Phrase(phrase.phrase);
let letter = this;
game.activePhrase.checkLetter(letter);
game.activePhrase.showMatchedLetter(letter);
game.removeLife();