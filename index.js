const fs = require("fs");

const BASE_URL = "https://stick-timer.vercel.app/edit/";
const RACE_NAME = "2022 Wobble Gobble";
const RANGE_END = 1000;

const urlArray = ["Stick Number,URL"];

for (let i = 1; i <= RANGE_END; i++) {
  const newUrl = `${i},${BASE_URL}${RACE_NAME}/${i}`;
  urlArray.push(newUrl);
}

const csvString = urlArray.join("\r\n");

fs.writeFile(`${RACE_NAME}.csv`, csvString, (err) => {
  console.log(err || "done");
});
