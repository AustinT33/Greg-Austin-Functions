/* eslint-disable no-console */
/* eslint-disable strict */
function createGreeting (name,age) {
  let yourName = name;
  let yourAge = age;
  let yearOfBirth = (2019 - age)
  return(`Hi, my name is ${yourName} and I\'m ${yourAge} years old, I was born in ${yearOfBirth}`);
}

const greeting1 = createGreeting();
console.log(greeting1);

