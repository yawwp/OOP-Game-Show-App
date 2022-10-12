/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase();
phrase.phrase = game.phrases;

game.startGame();
phrase.addPhraseToDisplay();
game.activePhrase = new Phrase(phrase.phrase);

game.activePhrase.checkLetter(this);
game.activePhrase.showMatchedLetter(this);
game.handleInteraction();
