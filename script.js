"use strict";

const arr = ["67549", "2678", "4854", "3435", "778178", "1588", "46543"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("4") || arr[i].startsWith("2")) {
    console.log(arr[i]);
  }
}

const divider = (rez) => {
  let arr = [];
  if (rez !== 1) {
    arr.push(1);
    for (let j = 2; rez >= j * j; j++) {
      if (rez % j === 0) {
        arr.push(j);
      }
    }
  }
  arr.push(rez);
  return arr;
};

for (let i = 2; i <= 100; i++) {
  const n = divider(i);
  if (n.length <= 2) {
    console.log(`${i}: Делители этого числа: ${n.join(" и ")}`);
  }
}
