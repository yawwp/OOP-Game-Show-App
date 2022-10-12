/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = [
            {phrase:'say hi'},
            {phrase:'hello there'},
            {phrase:'puppy junior'},
            {phrase:'fish tacos'},
            {phrase:'gotcha'}];
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
            this.getRandomPhrase();

            const button = document.getElementsByClassName('key');
                for (let i=0; i<button.length;i++){
                    button[i].disabled = false;
                    button[i].classList.remove('chosen');
                    button[i].classList.remove('wrong');
                }

            const lis = document.querySelectorAll('.letter');
            lis.forEach(li => li.remove());
            phrase.addPhraseToDisplay();
            
            this.missed = 0;
            const imgs = document.querySelectorAll('img');
            const lives = [...imgs];
            imgs.forEach(img => img.src = 'images/liveHeart.png');

            });
        }
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button = document.getElementsByClassName('key');
        for (let i=0; i<button.length;i++){
            button[i].addEventListener('click', (e) => {
                let select = e.target.innerHTML;
                if (phrase.checkLetter(select)){
                    phrase.showMatchedLetter(select);
                    button[i].disabled = true;
                    button[i].classList.add('chosen');
                } else {
                    button[i].disabled = true;
                    button[i].classList.add('wrong');
                    this.removeLife();
                }
                this.gameOver(this.checkForWin());
            }
        )}
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
        const over = document.querySelector("#game-over-message");
        const title = document.querySelector(".title");
        const imgs = document.querySelectorAll('img');
        const lives = [...imgs];

        if(this.missed !== lives.length-1){
            lives[this.missed].src = 'images/lostHeart.png';
            this.missed++;
        } else{
            over.innerHTML = "Sorry, better luck next time!"
            over.classList.add('title');
            overlay.style.display = 'block';
            overlay.classList.add('lose');
            this.missed = 0;
            if (this.missed === 0){
                imgs.forEach(img => img.src = 'images/liveHeart.png');
                }
            }

        };

        /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const over = document.querySelector("#game-over-message");
        if(gameWon){
            over.innerHTML = "Great Job!"
            over.classList.add('title');
            overlay.classList.remove('lose');
            overlay.classList.add('win');
            overlay.style.display = 'block';
        }
    };
}


