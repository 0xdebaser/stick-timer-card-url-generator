const fs = require("fs");

const BASE_URL = "https://stick-timer.vercel.app/edit/";
const RACE_NAME = "Test Race 1";
const RANGE_END = 100;

const urlArray = [];

for (let i = 1; i <= RANGE_END; i++) {
  const newUrl = `${BASE_URL}${RACE_NAME}/${i}`;
  urlArray.push(newUrl);
}

const csvString = urlArray.join("\r\n");

fs.writeFile(`${RACE_NAME}.csv`, csvString, (err) => {
  console.log(err || "done");
});
