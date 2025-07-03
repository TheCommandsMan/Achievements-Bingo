
const advancements = [
  { name: "Stone Age", desc: "Mine stone with your new pickaxe." },
  { name: "Getting an Upgrade", desc: "Construct a better pickaxe." },
  { name: "Acquire Hardware", desc: "Smelt an iron ingot." },
  { name: "Suit Up", desc: "Protect yourself with a piece of iron armor." },
  { name: "Hot Stuff", desc: "Fill a bucket with lava." },
  { name: "Isn't It Iron Pick", desc: "Upgrade your pickaxe." },
  { name: "Not Today, Thank You", desc: "Block a projectile with a shield." },
  { name: "Ice Bucket Challenge", desc: "Obtain a block of obsidian." },
  { name: "Diamonds!", desc: "Acquire diamonds." },
  { name: "We Need to Go Deeper", desc: "Enter the Nether." },
  { name: "Subspace Bubble", desc: "Use the Nether to travel 7 km in the Overworld." },
  { name: "Return to Sender", desc: "Destroy a Ghast with its own fireball." },
  { name: "Those Were the Days", desc: "Enter a Bastion Remnant." },
  { name: "Hidden in the Depths", desc: "Obtain ancient debris." },
  { name: "Who's Cutting Onions?", desc: "Obtain Crying Obsidian." },
  { name: "Oh Shiny", desc: "Distract Piglins with gold." },
  { name: "This Boat Has Legs", desc: "Ride a Strider with a warped fungus on a stick." },
  { name: "A Terrible Fortress", desc: "Break your way into a Nether Fortress." },
  { name: "Eye Spy", desc: "Follow an Eye of Ender." },
  { name: "The End?", desc: "Enter the End dimension." },
  { name: "Free the End", desc: "Kill the Ender Dragon." },
  { name: "The Next Generation", desc: "Hold the Dragon Egg." },
  { name: "Remote Getaway", desc: "Escape the End using an End Gateway." },
  { name: "The End... Again...", desc: "Respawn the Ender Dragon." },
  { name: "How Did We Get Here?", desc: "Have every effect at the same time." }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateBingoCard() {
  const grid = document.getElementById("bingo");
  grid.innerHTML = "";
  const shuffled = shuffle([...advancements]).slice(0, 25);

  shuffled.forEach((adv) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = `${adv.name} <div class='info' onclick='event.stopPropagation(); showInfo("${adv.name}")'>?</div>`;
    square.addEventListener("click", () => {
      square.classList.toggle("checked");
    });
    grid.appendChild(square);
  });
}

function showInfo(name) {
  const adv = advancements.find(a => a.name === name);
  document.getElementById("popupContent").innerText = `${adv.name}:
${adv.desc}`;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("generateBtn").addEventListener("click", generateBingoCard);
