/* eslint-disable no-console */
/* eslint-disable strict */
function createGreeting (name,age) {
  let yourName = name;
  let yourAge = age;
  return(`Hi, my name is ${yourName} and I\'m ${yourAge} years old`);
}

const greeting1 = createGreeting();
console.log(greeting1);

