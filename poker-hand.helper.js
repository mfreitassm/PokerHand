export function compareHands(handPlayer1, handPlayer2) {
  let player1 = getHandDetails(handPlayer1);
  let player2 = getHandDetails(handPlayer2);
  const win = [1, 0];
  const lose = [0, 1];
  const tie = [0, 1];

  if (player1.rank === player2.rank) {
    if (player1.value < player2.value) {
      return win;
    } else if (player1.value > player2.value) {
      return lose;
    } else {
      return tie;
    }
  }

  return player1.rank < player2.rank ? win : lose;
}

function getHandDetails(cards) {
  const order = "123456789TJQKA";
  const faces = cards.map((a) => String.fromCharCode([77 - order.indexOf(a[0])])).sort();
  const counts = faces.reduce(count, {});
  const duplicates = Object.values(counts).reduce(count, {});
  const suits = cards.map((a) => a[1]).sort();
  const flush = suits[0] === suits[4];
  const first = faces[0].charCodeAt(0);
  const lowStraight = faces.join("") === "AJKLM";
  faces[0] = lowStraight ? "N" : faces[0];
  const straight = lowStraight || faces.every((f, index) => f.charCodeAt(0) - first === index);
  let rank =
    (flush && straight && 1) ||
    (duplicates[4] && 2) ||
    (duplicates[3] && duplicates[2] && 3) ||
    (flush && 4) ||
    (straight && 5) ||
    (duplicates[3] && 6) ||
    (duplicates[2] > 1 && 7) ||
    (duplicates[2] && 8) ||
    9;

  const value = faces.sort(byCountFirst).join("");
  return { rank, value };

  function byCountFirst(a, b) {
    const countDiff = counts[b] - counts[a];
    if (countDiff) return countDiff;
    return b > a ? -1 : b === a ? 0 : 1;
  }

  function count(c, a) {
    c[a] = (c[a] || 0) + 1;
    return c;
  }
}
