let lang = "en";

const arr1 = [
  ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"],
];

if (lang == "ru") {
  console.log(arr1[0]);
} else if (lang == "en") {
  console.log(arr1[1]);
}

switch (lang) {
  case "ru":
    console.log(arr1[0]);
    break;
  case "en":
    console.log(arr1[1]);
    break;
}

let arr = {
  ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  en: ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"],
};
console.log(arr[lang]);

let namePerson = "Артем";
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
