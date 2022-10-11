/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.phrases = [
    {phrase:'say hi'},
    {phrase:'hello there'},
    {phrase:'puppy junior'},
    {phrase:'fish tacos'}];

const phrase = new Phrase();
phrase.phrase = game.phrases;

game.startGame();
phrase.addPhraseToDisplay();
game.activePhrase = new Phrase(phrase.phrase);

game.activePhrase.checkLetter(this);
game.activePhrase.showMatchedLetter(this);
game.handleInteraction();
