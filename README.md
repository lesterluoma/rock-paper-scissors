# Rock Paper Scissors

A browser version of rock paper scissors. Click rock, paper, or scissors, the computer picks one at random, and the first to 5 points wins the game.

## Running it

Clone the repo and open `index.html` in your browser.

## How it's put together

The game keeps its state (both scores, the current messages, and whether the game is over) in a handful of variables at the top of `script.js`. Whenever something changes, a single `render()` function redraws the page from that state.

`playRound` doesn't touch the page at all. It takes the two choices and returns who won plus a message, and the click handler decides what to do with that.

When someone hits 5, the choice buttons are disabled and a "Play again" button shows up to reset everything.
