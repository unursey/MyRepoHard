let lang = "en";

let arr = {
  ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  en: ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"],
};

if (lang == "ru") {
  console.log(arr['ru']);
} else if (lang == "en") {
  console.log(arr['en']);
}

switch (lang) {
  case "ru":
    console.log(arr['ru']);
    break;
  case "en":
    console.log(arr['en']);
    break;
}


console.log(arr[lang]);

let namePerson = "Артем";
namePerson === "Артем"
  ? console.log("директор")
  : namePerson === "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
