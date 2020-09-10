const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let newArr = [];
  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] === "string" && members[i][0] == " ") {
      members[i] = members[i].split(" ").join("");
      newArr.push(members[i][0].toUpperCase());
    } else if (typeof members[i] === "string") {
      newArr.push(members[i][0].toUpperCase());
    }
  }
  if (newArr.length === 0) {
    return false;
  }
  return newArr.sort().join("");
};
