import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8").split(",");
const final = readFileSync("final.txt", "utf8").split(",");
const DAYS = 80;

const part2 = (datas) => {
  const fish = datas.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1;
    return acc;
  }, new Array(9).fill(0));

  for (let day = 1; day <= DAYS; day++) {
    const fish0 = fish.shift();
    fish.push(fish0);
    fish[6] += fish0;
  }

  return fish.reduce((acc, curr) => acc + curr, 0);
};

console.log(part2(test));
