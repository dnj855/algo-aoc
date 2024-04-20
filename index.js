import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8").split(",");
const final = readFileSync("final.txt", "utf8").split(",");
const DAY_AMOUNT = 80;
let updated = final;

for (let i = 0; i < DAY_AMOUNT; i++) {
  let newBird = [];
  updated = updated.map((item) => {
    let birdAge = Number(item);
    if (birdAge <= 8 && birdAge > 0) {
      return birdAge - 1;
    } else if (birdAge === 0) {
      newBird.push(8);
      return 6;
    }
  });
  updated = [...updated, ...newBird];
}

console.log(updated.length);
