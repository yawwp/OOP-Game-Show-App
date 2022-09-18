/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// const phrases = [
//     {quote:'importance of small things'},
//     {quote:'do not fear failure'},
//     {quote:'as long as you get there'},
//     {quote:'an ounce of action'},
//     {quote:'dreams versus reality'}
// ];



class Phrase {
    constructor (phrase){
        this.phrase = phrase;
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        let array = [];
        array.push(this.phrase);
        let array2 = array[0].split(''); //https://stackoverflow.com/questions/27303655/split-is-not-a-function-on-array
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
