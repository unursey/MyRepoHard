let num = 266219;
console.log(typeof num);

let str = String(num);
console.log(str); 

console.log(str.length); 


let a = 1;
let i = 0;
while (i<str.length) {
a=a*Number(str[i]);  
  i++;
  
}

console.log(a);
