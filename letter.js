//letter.js contains a constructor called Letter. 

//the constructor will display either a blank underscore or a hidden character

function Letter(value) {
    this.letter = value;
    this.guessed = false;

    //If letter is not correctly guessed, return an underscore, otherwise return that letter
    this.toString = function () {
        // Added functionality for computer Guess with more than one word
        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };

    //Check if guessed letter is equal to one of the letters in the answer
    this.guess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
};

//Export the letter constructor to be used in word.js
module.exports = Letter;