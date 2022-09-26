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
        let array = [];
        let selectedPhrase = game.activePhrase.phrase;
        array.push(selectedPhrase);
        let array2 = array[0].split(''); 
        const ul = document.getElementById('phrase').firstElementChild;
        array2.forEach(letter => {
            const li = document.createElement('li');
            if (letter === " ") {
                li.classList.add('hide', 'space'); 
                li.textContent = letter;
            } else {
                li.classList.add('hide', 'letter', letter); 
                li.textContent = letter;
            }
            ul.appendChild(li);
        })
    };
    }
console.log(this.addArray(phrase));