/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase){
        this.phrase = phrase;
        this.letters = [];
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        let array = [];
        let selectedPhrase = game.activePhrase.phrase;
        array.push(selectedPhrase);
        let letters = array[0].split('');
        const ul = document.getElementById('phrase').firstElementChild;
        letters.forEach(letter => {
            const li = document.createElement('li');
            if (letter === " ") {
                this.letters.push(letter);
                li.classList.add('hide', 'space'); 
                li.textContent = letter;
            } else {
                this.letters.push(letter);
                li.classList.add('hide', 'letter', letter); 
                li.textContent = letter;
            }
            ul.appendChild(li);
        })
    };


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

    // This function need to be put into the this.activePhrase
    // this.activePhrase.checkLetter(letter);
    checkLetter(letter) {
        let active = game.activePhrase;
        
        const keyboard = document.getElementById('qwerty');
        const keys = document.querySelectorAll('.key');
        const letters = document.querySelectorAll('.letter');
        
        keyboard.addEventListener('click', (e) => {
            let select = e.target.textContent;
            letters.forEach((letter) => {
                if (select === letter.innerHTML){
                    console.log("true");
                } else {
                    console.log("false");
                }
                }
            )
        })

    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {


    };
}