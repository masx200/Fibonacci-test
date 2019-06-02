var fs = require("fs");
var bigInt = require("./BigInteger");
function getfbnq(num) {
  num = Math.floor(num);
  /* Maximum call stack size exceeded */
  if (num > 5000 && !feibonq[num]) {
    feibonq[num - 5000] = feibonq[num - 5000] || getfbnq(num - 5000);
  }
  num = bigInt(num);

  feibonq[num] =
    feibonq[num] || bigInt(getfbnq(num - 1)).add(bigInt(getfbnq(num - 1)));

  return feibonq[num];
}
var feibonq = [bigInt(0), bigInt(1)];

// console.log("5000",getfbnq(5000));
// var testnum =124999;
// console.time("斐波那契" + testnum);
// console.log(testnum, getfbnq(testnum).toString());
// console.timeEnd("斐波那契" + testnum);
// console.log(feibonq);
/* 如果计算的数太大,可能导致内存溢出 */
// for (let i = 1; i < 184500; i += 1000 * Math.random()) {
for (let i = 1; i < 12450; i += 1000 * Math.random()) {
  var testnum = Math.floor(i);
  console.time("斐波那契" + testnum);
  console.log(testnum, getfbnq(testnum).toString());
  console.timeEnd("斐波那契" + testnum);
  //   console.log(feibonq);
}
// console.log(JSON.stringify(feibonq));
fs.writeFile("./Fibonacci-test-"+new Date().getTime()+".txt",JSON.stringify(feibonq),()=>{})