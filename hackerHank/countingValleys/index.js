function countingValleys(n, s) {
  if (n != s.length) { return 0; }

  let steps = s.split('');
  let stepsConvertedToNumber = [];
  let valleysCount = 0;
  let possibleSteps = {
    U: 1,
    D: -1,
  };

  steps.forEach(
    (step, index) => {
      let thisStepConvertedToNumber = possibleSteps[step];
      let previousStepConvertedToNumber = stepsConvertedToNumber[index-1] || 0;
      stepsConvertedToNumber[index] = thisStepConvertedToNumber + previousStepConvertedToNumber;
      let willStartNewValley = (
        stepsConvertedToNumber[index] < 0 && 
        (previousStepConvertedToNumber == 0)
      );

      if (willStartNewValley) {
        valleysCount++;
      }
    }
  );

  return valleysCount;
}

module.exports = { countingValleys };
