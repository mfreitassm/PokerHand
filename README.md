# Poker Hand Sorter
---

A barebones [Node.js](http://nodejs.org/) application that takes, via STDIN, a "stream" of hands for a two players poker game. At the completion of the stream, a program will print to STDOUT the number of hands won by Player 1, and the number of hands won by Player 2.

## Running Locally
Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:mfreitassm/PokerHand.git # or clone your own fork
cd PokerHand
npm install
npm start
```

Your app should now print on your terminal.
```sh
Player 1: 263 hands
Player 2: 237 hands
```

If you want to test another file you can run `node ./main.js /path/to/file.txt`


