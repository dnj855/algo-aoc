import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8").split(",");
const final = readFileSync("final.txt", "utf8").split(",");
const DAYS = 80;
const new_day = (fish) => {
  const staticLength = fish.length;
  for (let i = 0; i < staticLength; i++) {
    if (fish[i] === 0) {
      fish[i] = 6;
      fish.push(8);
    } else {
      fish[i] = fish[i] - 1;
    }
  }
};

const part1 = (datas) => {
  const fish = datas.split(",").map(Number);

  for (let day = 1; day <= DAYS; day++) {
    new_day(fish);
  }

  return fish.length;
};
