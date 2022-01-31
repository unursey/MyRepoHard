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

const result = a ** 3;

let resul = String(result);
console.log(resul.substr(0, 2)); 

let lang ='ru';

if (lang == "ru") {
  console.log('Понедельник');
  console.log('Вторник');
  console.log('Среда');
  console.log('Четверг');
  console.log('Пятница');
  console.log('Суббота');
  console.log('Воскресенье');

} else if (lang == "en") {
  console.log('Monday');
  console.log('Tuesday');
  console.log('Wednesday');
  console.log('Thursday');
  console.log('Friday');
  console.log('Saturday');
  console.log('Sunday');
} 

switch (lang) {
  case 'ru':
  console.log('Понедельник');
  console.log('Вторник');
  console.log('Среда');
  console.log('Четверг');
  console.log('Пятница');
  console.log('Суббота');
  console.log('Воскресенье');
    break 
  case 'en':
  console.log('Monday');
  console.log('Tuesday');
  console.log('Wednesday');
  console.log('Thursday');
  console.log('Friday');
  console.log('Saturday');
  console.log('Sunday');
    break 
}

 let arr = {
  'ru':['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  'en':['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'],
};

console.log(arr[lang]);


let = namePerson = "Антон";
(namePerson === "Артем") ? console.log("директор") : (namePerson === "Александр") ? console.log("преподаватель") : console.log("студент");



