/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase){
        this.phrase = phrase;
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').firstElementChild;
        let selectedPhrase = game.getRandomPhrase().phrase;
        [...selectedPhrase].forEach(letter => {
            const li = document.createElement('li');
            if (letter === " ") {
                li.classList.add('hide', 'space'); 
                li.textContent = letter;
            } else {
                li.classList.add('hide', 'letter', letter); 
                li.textContent = letter;
            }
            ul.appendChild(li);
            this.phrase = selectedPhrase;
        });
    };


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        const keyboard = document.getElementById('qwerty');
        keyboard.addEventListener('click', (e) => {
            if ([...this.phrase].includes(e.target.textContent)){
                console.log("true");
            } else {
                console.log("false");
            }
        }
    )};
    
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter() {


    };
}

