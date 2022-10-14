/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const letters = document.querySelectorAll('.key');
const start = document.getElementById('btn__reset');

const game = new Game();
const phrase = new Phrase();

start.addEventListener('click', (e) => {
    return game.startGame();
});

const buttons = [...letters];
for (let i=0;i<buttons.length;i++){
buttons[i].addEventListener('click', (e) => {
    if(buttons[i].tagName === "BUTTON"){
        let button = buttons[i];
        return game.handleInteraction(button);
    };
})}   


phrase.phrase = game.phrases;
phrase.addPhraseToDisplay();
game.removeLife();
game.activePhrase = new Phrase(phrase.phrase);
game.activePhrase.checkLetter(this);
game.activePhrase.showMatchedLetter(this);
