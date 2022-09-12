/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = 
            [    
                {phrase:'Never underestimate the big importance of small things'},
                {phrase:'Do not fear failure but rather fear not trying'},
                {phrase:'It does not matter how slowly you go as long as you do not stop'},
                {phrase:'An ounce of action is worth a ton of theory'},
                {phrase:'It does not do to dwell on dreams and forget to live'}
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

}
