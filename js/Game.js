/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = [
            {phrase:'say hi'},
            {phrase:'gotcha'},
            {phrase:'hello there'},
            {phrase:'puppy junior'},
            {phrase:'fish tacos'}
        ];
    }
    
    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used 
     * 
     */
    getRandomPhrase(){
        const phraseArray = this.phrases;
        const phraseArrayLength = this.phrases.length
        const randomNumber = Math.floor(Math.random() * phraseArrayLength);
        return phraseArray[randomNumber];
    };

    startGame(){
        const overlay = document.getElementById('overlay');
        const start = document.getElementById('btn__reset');

        this.activePhrase = this.getRandomPhrase();
        start.addEventListener('click', (e) => {
            overlay.style.display = 'none';
            }        
        );
    };

    handleInteraction(){
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        
    };

}



