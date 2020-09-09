const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let newArr = [];
  for (var i = 0; i < backyard.length; i++) {
    newArr.push(...backyard[i]);
  }
  return newArr.filter((elem) => elem === "^^").length;
};
