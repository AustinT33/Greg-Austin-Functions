/* eslint-disable no-console */
/* eslint-disable strict */
function getYearOfBirth(age) {
  return (2019 - age);
}

function createGreeting (name,age) {
  let yourName = name;
  let yourAge = age;
  let yob = getYearOfBirth(yourAge);
  return(`Hi, my name is ${yourName} and I'm ${yourAge} years old, I was born in ${yob}`);
}

const greeting1 = createGreeting();
console.log(greeting1);

