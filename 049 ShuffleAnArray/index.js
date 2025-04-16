//shuffle an array. in this topic, it will be a set of poker cards

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// ============ method 1(not reccommended tho) ===============

// cards.sort(() => Math.random() - 0.5);

// also increasingly more inefficient

// ============ method  2: fisher-yates algorithm (reccommended) ===============

shuffle(cards);

console.log(cards);
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}
