const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
  ) {
    return false;
  }
  const k = ln2 / HALF_LIFE_PERIOD;
  return (
    Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k) ||
    false
  );
};
