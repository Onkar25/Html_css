let adjective = "crazy amazing fire";
let shopName = "engine foods garments";
let word = "bros limited hub";

function getRandomWord(myWord) {
  var randomIndex = Math.floor(Math.random() * myWord.split(" ").length);
  return myWord.split(" ")[randomIndex]; //.shuffled().take(1);
}

console.log(
  `${getRandomWord(adjective)} ${getRandomWord(shopName)} ${getRandomWord(
    word
  )}`
);
