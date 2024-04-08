// ! #1
function sum(a, b, c) {
  if (c === 0) {
    return a + b;
  } else {
    return (a + b) / c;
  }
}
console.log(sum(5, 3, 0));
// ! #2
function Strings(a, b) {
  if (b === "upper") {
    return a.map((str) => str.toUpperCase());
  } else if (b === "lower") {
    return a.map((str) => str.toLowerCase());
  } else {
    return "Ошибка введите 'upper' или 'lower'.";
  }
}
const strings = ["Hello", "World", "Makers"];
console.log(Strings(strings, "upper"));
console.log(Strings(strings, "lower"));
console.log(Strings(strings, "invalid"));

// ! #3
// ! #4
let users = [
  { name: "Jack", age: 35, work: "IT-backend developer" },
  { name: "Helen", age: 35, work: "Nurse" },
  { name: "Bob", age: 35, work: "Driver" },
  { name: "Jessica", age: 35, work: "IT-frontend developer" },
  { name: "Hel'ga", age: 35, work: "IT-HR" },
];

function sendPromotion(users) {
  let it = users.filter((user) => {
    return user.work.includes("IT");
  });

  it.forEach((user) => {
    console.log(`Отправлено сообщение о принятий на работу IT ${user.name}`);
  });
}
sendPromotion(users);

// ! #5
function calcfuel(km, fuel) {
  let fuel100km = (fuel / km) * 100;
  fuel100km = fuel100km.toFixed(2);
  return `На 100км было расходовано ${fuel100km}л горючего`;
}
let lastKm = 500;
let lastFuel = 50;
let result = calcfuel(lastKm, lastFuel);
console.log(result);
// ! #6
let user = [
  { name: "Jack", salary: 10000, overTime: 4 },
  { name: "Tom", salary: 15000, overTime: 3 },
  { name: "Jessica", salary: 20000, overTime: 9 },
  { name: "Helen", salary: 25000, overTime: 2 },
  { name: "Peter", salary: 30000, overTime: 7 },
];
function calculateBonus(user) {
  return user.map((bn) => {
    const bonus = bn.overTime * 200;
    const salary1 = bn.salary + bonus;
    return { name: bn.name, salary: salary1 };
  });
}
console.log(calculateBonus(user));

// ! #7
// ! #8
let students = [
  { student: "Jack", marks: 43 },
  { student: "Tom", marks: 92 },
  { student: "Helen", marks: 85 },
  { student: "Peter", marks: 58 },
  { student: "Jessica", marks: 78 },
];
function student1(stud) {
  return stud.sort((a, b) => b.marks - a.marks);
}
console.log(student1(students));

// ! #EXTRA
