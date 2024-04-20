import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const DAY_AMOUNT = 80;
  let updated = data.split(",");

  for (let i = 0; i < DAY_AMOUNT; i++) {
    let newFish = [];
    updated = updated.map((item) => {
      let fishAge = Number(item);
      if (fishAge <= 8 && fishAge > 0) {
        return fishAge - 1;
      } else if (fishAge === 0) {
        newFish.push(8);
        return 6;
      }
    });
    updated = [...updated, ...newFish];
  }
  return updated.length;
};

console.log(part1(final));
