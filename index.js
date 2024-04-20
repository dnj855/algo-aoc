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

const part2 = (data) => {
  const DAY_AMOUNT = 256;
  const ages = data
    .split(",")
    .map(Number)
    .reduce((acc, curr) => {
      acc[curr] = acc[curr] + 1;
      return acc;
    }, new Array(9).fill(0));
  for (let day = 0; day < DAY_AMOUNT; day++) {
    const age0 = ages.shift();
    ages.push(age0);
    ages[6] += age0;
  }
  return ages.reduce((acc, curr) => acc + curr);
};

console.log(part1(final));
console.log(part2(final));
