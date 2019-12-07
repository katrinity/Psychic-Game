
let ASCIICode = Math.floor((Math.random() * 25) + 97);

let NUM_WINS = 0;
let NUM_LOSES = 0;
let NUM_GUESSES_LEFT = 9;
let NUM_GUESSES_SO_FAR = [];

const reset = () => {
  NUM_WINS = 0;
  NUM_LOSES = 0;
  NUM_GUESSES_LEFT = 9;
  NUM_GUESSES_SO_FAR = [];
  ASCIICode = Math.floor((Math.random() * 25) + 97);

  $('#wins').html('Wins: ' + NUM_WINS);
  // $('#yourLetter').html('Secret: ' + String.fromCharCode(ASCIICode));
  $('#guessesSoFar').html('Your Guesses So Far: ' + NUM_GUESSES_SO_FAR.join(', '));
  $('#guessesLeft').html(`Guesses Left: ${NUM_GUESSES_LEFT}`);
  $('#loses').html(`Loses: ${NUM_LOSES}`);

};

reset();

document.addEventListener("keyup", event => {
  // this one is to check what letter randomly generated
  $('#yourLetter').html('Secret: ' + String.fromCharCode(ASCIICode));
  const enteredChar = event.keyCode + 32;

  // add new guess
  NUM_GUESSES_SO_FAR.push(String.fromCharCode(enteredChar));
  $('#guessesSoFar').html('Your Guesses So Far: ' + NUM_GUESSES_SO_FAR.join(', '));

  // win situation
  if (ASCIICode === enteredChar) {
    NUM_WINS += 1;
    $('#wins').html(`Wins: ${NUM_WINS}`);

    ASCIICode = Math.floor((Math.random() * 25) + 97);
    NUM_GUESSES_SO_FAR = [];
    NUM_GUESSES_LEFT = 9;
    $('#guessesLeft').html(`Guesses Left: ${NUM_GUESSES_LEFT}`);
    $('#yourLetter').html('Secret: ' + String.fromCharCode(ASCIICode));
    $('#guessesSoFar').html('Your Guesses So Far: ' + NUM_GUESSES_SO_FAR.join(', '));
    // wrong guess  
  } else {
    // we can still guess more
    if (NUM_GUESSES_LEFT > 1) {
      NUM_GUESSES_LEFT -= 1;
      NUM_LOSES += 1;
      $('#loses').html(`Loses: ${NUM_LOSES}`);
      $('#guessesLeft').html(`Guesses Left: ${NUM_GUESSES_LEFT}`);
      // run out of guesses  
    } else {
      reset();
    }
  }
});

