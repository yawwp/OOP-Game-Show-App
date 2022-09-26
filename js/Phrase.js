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
        let letters = array[0].split(''); // https://stackoverflow.com/questions/27303655/split-is-not-a-function-on-array
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
    }
