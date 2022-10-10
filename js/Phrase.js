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
        if ([...this.phrase].includes(letter)){
            return true;
        }   else {
            return false;
        }
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const lis = document.querySelectorAll('.letter');
        lis.forEach((li) => {
            if(letter === li.innerHTML){
                li.classList.remove('hide');
                li.classList.add('show');
            }
        })
    };
};