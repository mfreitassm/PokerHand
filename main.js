import { createInterface } from "readline";
import { createReadStream } from "fs";
import { compareHands } from "./poker-hand.helper.js";

(async function () {
  // Make sure we got a filename on the command line.
  if (process.argv.length < 3) {
    console.log("Usage: node " + process.argv[1] + " FILENAME");
    process.exit(1);
  }

  // Read the file from app arguments.
  const filename = process.argv[2];

  const rl = createInterface({
    input: createReadStream(filename),
  });

  let countPlayer1 = 0;
  let countPlayer2 = 0;

  for await (const line of rl) {
    // Each line in file will be successively available here as `line`.
    const hands = line.split(" ");
    if (hands.length != 10) {
      throw "Minimal set of cards not provided.";
    }
    const p1Hand = hands.slice(0, 5);
    const p2Hand = hands.slice(5, 10);

    const [p1Score, p2Score] = compareHands(p1Hand, p2Hand);
    countPlayer1 += p1Score;
    countPlayer2 += p2Score;
  }

  console.log(`Player 1: ${countPlayer1} hands`);
  console.log(`Player 2: ${countPlayer2} hands`);
})();
