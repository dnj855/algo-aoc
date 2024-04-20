import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8").split(",");
const final = readFileSync("final.txt", "utf8").split(",");
const DAY_AMOUNT = 18;

// Initialisation du tableau qui contiendra les fishs par âge
const initialisation = (datas) => {
  if (typeof datas !== "object") {
    throw new Error("Invalid dataset : you must provide an array.");
  }
  const fishAges = new Array(9).fill(0);
  for (let i = 0; i < datas.length; i++) {
    let index = Number(datas[i]);
    fishAges[index]++;
  }
  return fishAges;
};

const iteration = (data) => {
  let datas = initialisation(data);
  for (let day = 1; day < DAY_AMOUNT; day++) {
    for (let i = 8; i <= 0; i--) {}
  }
};

iteration(test);
