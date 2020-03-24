// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let socks = ar.sort();
  let socksPair = 0;

  for (let socksIndex = 0; socksIndex < n; socksIndex++) {
    let prevSock = socks[socksIndex - 1];
    let thisSock = socks[socksIndex];
    if (thisSock == prevSock) {
      socksPair++;
      socksIndex++;
    }
  }

  return socksPair;
}

module.exports = {
  sockMerchant,
};
