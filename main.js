import { createInterface } from "readline";
import { createReadStream } from "fs";

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " FILENAME");
  process.exit(1);
}

// Read the file and print its contents.
const filename = process.argv[2];

const lineReader = createInterface({
  input: createReadStream(filename),
});

lineReader.on("line", function (line) {
  const hands = line.split(" ");
  if (hands.length != 10) {
    throw "Minimal set of cards not provided.";
  }
  const p1Hand = hands.slice(0, 5);
  const p2Hand = hands.slice(5, 10);

  console.log("Line from file:", line);
  console.log("p1Hand:", p1Hand);
  console.log("p2Hand:", p2Hand);
  console.log();
});
