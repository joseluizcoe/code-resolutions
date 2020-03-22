function countingValleys(n, s) {
  let stepsStringsArray = s.split('');
  if (n != stepsStringsArray.length) { return 0 };
  let valleys = 0;
  let possibleSteps = {
    U: 1,
    D: -1,
  };

  let stepsConvertedToNumber = [];

  stepsStringsArray.forEach(
    (item, index) => {
      stepsConvertedToNumber[index] = possibleSteps[item];
      let thisStepPosition = stepsConvertedToNumber[index];

      let prev = stepsConvertedToNumber[index-1] || 0;
      stepsConvertedToNumber[index] = thisStepPosition + prev;
      if (stepsConvertedToNumber[index] < 0 && (prev == 0)) {
        valleys++;
      }

    }
  );

  return valleys;
}


module.exports = { countingValleys };