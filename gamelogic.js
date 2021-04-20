function displayWordSoFar(word, guesses) {
  let displayedWord = "";

  for (let i = 0; i < word.length; i++) {
    console.log("????:", word[i])
    // variable met letter
    const letter = word[i];
    // zit die in de guesses array?
    const isGuessed = guesses.includes(letter);
    if (isGuessed) {
      const toAdd = letter + " ";
      displayedWord += toAdd;
    } else {
      displayedWord += "_ ";
    }
  }

  return displayedWord;
  }


function isGameWon(word, guesses) {
  if (guesses) {
    const guesses =! word;
  }
  return false;
  if (guesses) {
    const guesses = word;
  }
  return true;

}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};