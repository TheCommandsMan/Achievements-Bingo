
const achievements = [
  ["Stone Age", "Mine stone with a pickaxe"],
  ["Getting an Upgrade", "Craft a stone pickaxe"],
  ["Acquire Hardware", "Smelt an iron ingot"],
  ["Suit Up", "Equip a piece of iron armor"],
  ["Hot Stuff", "Fill a bucket with lava"],
  ["Isn't It Iron Pick", "Craft an iron pickaxe"],
  ["Not Today, Thank You", "Block a projectile with a shield"],
  ["Ice Bucket Challenge", "Obtain a block of obsidian"],
  ["Diamonds!", "Acquire diamonds"],
  ["We Need to Go Deeper", "Enter the Nether through a portal"],
  ["Return to Sender", "Kill a ghast with its own fireball"],
  ["A Terrible Fortress", "Locate a Nether fortress"],
  ["Those Were the Days", "Enter a bastion remnant"],
  ["Hidden in the Depths", "Obtain ancient debris"],
  ["Cover Me in Debris", "Wear a full set of netherite armor"],
  ["Not Quite \"Nine\" Lives", "Fully charge a respawn anchor"],
  ["Enchanter", "Enchant an item at an enchantment table"],
  ["Zombie Doctor", "Cure a zombie villager"],
  ["Eye Spy", "Find a stronghold"],
  ["The End?", "Enter the End Portal"],
  ["Free the End", "Defeat the Ender Dragon"],
  ["The Next Generation", "Hold the dragon egg"],
  ["Remote Getaway", "Use an end gateway"],
  ["You Need a Mint", "Collect dragon's breath in a bottle"],
  ["Subspace Bubble", "Travel 7 km in the Overworld via the Nether"],
  ["Sniper Duel", "Kill a skeleton from 50 meters away"],
  ["Monster Hunter", "Kill any hostile mob"],
  ["Take Aim", "Shoot something with a bow and arrow"],
  ["Sweet Dreams", "Sleep in a bed to skip the night"],
  ["What a Deal!", "Trade with a villager"],
  ["Hired Help", "Summon an iron golem"],
  ["The Parrots and the Bats", "Breed two animals"],
  ["Best Friends Forever", "Tame an animal"],
  ["Two by Two", "Breed every animal type"],
  ["Fishy Business", "Catch a fish"],
  ["Tactical Fishing", "Catch a fish with a bucket"],
  ["A Seedy Place", "Plant and grow a seed"],
  ["A Balanced Diet", "Eat every type of food item"],
  ["Serious Dedication", "Break a netherite hoe"],
  ["Wax On", "Wax a copper block with honeycomb"],
  ["Wax Off", "Scrape wax off a copper block"],
  ["Sound the Alarm!", "Ring a bell during a raid"],
  ["Adventuring Time", "Discover every biome"],
  ["Voluntary Exile", "Kill a raid captain"],
  ["Postmortal", "Use a Totem of Undying to cheat death"],
  ["Total Beelocation", "Move a bee nest with 3 bees using Silk Touch"],
  ["Sticky Situation", "Slide down a honey block"],
  ["The Cutest Predator", "Catch an axolotl in a bucket"],
  ["Who's the Pillager Now?", "Shoot a pillager with its own crossbow"],
  ["Ol' Betsy", "Shoot a crossbow"],
  ["The Power of Books", "Fully power an enchanting table with bookshelves"],
  ["Star Trader", "Trade with a villager at build height"],
  ["Feelin' Fancy", "Wear armor trimmed in every slot"],
  ["Light as a Rabbit", "Walk on powder snow with leather boots"],
  ["It Spreads", "Kill a mob near a sculk catalyst"],
  ["Whatever Floats Your Goat!", "Ride a boat with a goat"],
  ["Caves & Cliffs", "Survive a fall from build height to bedrock"],
  ["Is It a Balloon?", "Levitated 50 blocks by a shulker"],
  ["Just Keep Swimming", "Swim 1 km continuously"],
  ["Spelunker", "Mine an ore at deepslate level"]
];

function generateBoard() {
  const board = document.getElementById("bingo-board");
  board.innerHTML = "";
  const selected = [];

  while (selected.length < 24) {
    const random = achievements[Math.floor(Math.random() * achievements.length)];
    if (!selected.includes(random)) {
      selected.push(random);
    }
  }

  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "bingo-cell";

    if (i === 12) {
      cell.innerText = "FREE SPACE";
      cell.classList.add("free-space");
    } else {
      const item = selected[i < 12 ? i : i - 1];
      cell.innerText = item[0];
      cell.title = item[1]; // Tooltip on hover
      cell.addEventListener("click", () => {
        alert(item[0] + "\n\n" + item[1]);
      });
    }

    board.appendChild(cell);
  }
}

window.onload = generateBoard;
