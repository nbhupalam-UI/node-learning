const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// fs.writeFileSync("1-json.json", bookJson);
// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const data = JSON.parse(fs.readFileSync("1-json.json").toString());
data.name = "Pradeep";
data.age = 29;
fs.writeFileSync("1-json.json", JSON.stringify(data));
