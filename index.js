//Link this file to the word.js file to function 
var Word = require("./word.js");
var inquirer = require("inquirer");

// Used with user validation to only enter letters
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// List of words to choose from
var skiResort = ["breckenridge", "keystone", "heavenly", "northstar", "aspen", "steamboat", "snowbird", "bachelor", "eldora", "boyne", "kirkwood", "stowe"];

// Pick Random index from Ski Resort array
var randomIndex = Math.floor(Math.random() * skiResort.length);
var randomWord = skiResort[randomIndex];
console.log(randomWord);

// Pass random word through Word constructor
computerWord = new Word(randomWord);

var needNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;

function hangman() {

    // if needNewWord is true generate new word for Word constructor
    if (needNewWord) {
        // Pick Random index from Ski Resort array
        var randomIndex = Math.floor(Math.random() * skiResort.length);
        var randomWord = skiResort[randomIndex];

        // Pass random word through Word constructor
        computerWord = new Word(randomWord);

        // Turn off Generator
        needNewWord = false;
    }
};

hangman();