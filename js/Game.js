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
        const lis = document.querySelectorAll('.letter');
        let answer = [];
        let guesses = [];
        lis.forEach(li => {
            answer.push(li.innerHTML);
            if (li.classList.contains('show')){
                guesses.push(li.innerHTML);
            }
        })
        if (answer.every((value) => guesses.includes(value))){
            return true;
        } else {
            return false; 
        }   
    };

        /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const lives = document.querySelectorAll(".tries");
        lives.forEach(live => {
            live.src="images/lostHeart.png"
        })
    };


        /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {};

}



