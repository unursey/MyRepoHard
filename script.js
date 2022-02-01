"use strict";

const message = (arg) => {
  let res;
  if (typeof arg === "string") {
    const maxLength = 30;
    const str = arg.trim();
    if (str.length > maxLength) {
      res = str.substr(0, maxLength) + "...";
    } else {
      res = str;
    }
  }
  return res;
};

console.log(message("  ммммаленькая "));
console.log(
  message(" длииииииинная очееееееееееееееееень строкаааааааааааааа    ")
);
