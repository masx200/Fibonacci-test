let i = 50000;
var testnum = Math.floor(i);
console.time("斐波那契" + testnum);
console.log(testnum, getfbnq(testnum).toString());
console.timeEnd("斐波那契" + testnum);

console.log(feibonq);
