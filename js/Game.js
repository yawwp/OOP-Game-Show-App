/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = [
            {phrase:'importance of small things'},
            {phrase:'do not fear failure'},
            {phrase:'as long as you get there'},
            {phrase:'an ounce of action'},
            {phrase:'dreams versus reality'}
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
        this.activePhrase = game.getRandomPhrase();

        start.addEventListener('click', (e) => {
            overlay.style.display = 'none';
            }        
        );
    };

    handleInteraction(){
        const keyboard = document.getElementById('qwerty');
        keyboard.addEventListener('click', (e) => {
            let select = e.target.textContent;
            console.log(phrase.addPhraseToDisplay());
        })
    };

}




