var bigInt = require("./BigInteger.js");
function getfbnq(num) {
  num = Math.floor(num);
  num = bigInt(num);
  for (let e = feibonq.length; e <= num; e++) {
    feibonq[e] =
      feibonq[e] || bigInt(feibonq[e - 1]).add(bigInt(feibonq[e - 2]));
  }
  return feibonq[num];
}
var feibonq = [bigInt(0), bigInt(1), bigInt(1)];
exports.default = getfbnq;
