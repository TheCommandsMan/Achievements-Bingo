const achievements = [
  "Stone Age",
  "Getting an Upgrade",
  "Acquire Hardware",
  "Suit Up",
  "Hot Stuff",
  "Isn't It Iron Pick",
  "Not Today, Thank You",
  "Ice Bucket Challenge",
  "Diamonds!",
  "We Need to Go Deeper",
  "Return to Sender",
  "Who's the Pillager Now?",
  "Subspace Bubble",
  "A Terrible Fortress",
  "Those Were the Days",
  "Netherite Armor",
  "Cover Me in Debris",
  "Eye Spy",
  "The End?",
  "Free the End",
  "You Need a Mint",
  "Great View From Up Here",
  "Tactical Fishing",
  "Two Birds, One Arrow",
  "Sweet Dreams"
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateBoard() {
  const board = document.getElementById("bingo-board");
  board.innerHTML = "";
  const shuffled = shuffle([...achievements]).slice(0, 25);

  shuffled.forEach((item, index) => {
    const cell = document.createElement("div");
    cell.className = "bingo-cell";
    cell.innerText = index === 12 ? "FREE SPACE" : item;
    board.appendChild(cell);
  });
}

generateBoard();
