/* eslint-disable no-console */
/* eslint-disable strict */
function YearOfBirth(age) {
  return (2019 - age);
}

function createGreeting (name,age) {
  let yourName = name;
  let yourAge = age;
  if (yourName === undefined)
    throw new Error('Arguments not valid');
  if (yourAge === undefined)
    throw new Error('Arguments not valid');
  if (typeof(yourName) !== String)
    throw new TypeError();
  if (typeof(yourAge) !== Number)
    throw new TypeError();
  if (2019-yourAge < 0)
    throw new Error('Age can not be negative');    
  let yob = YearOfBirth(yourAge);
  return(`Hi, my name is ${yourName} and I'm ${yourAge} years old, I was born in ${yob}`);
}

try {
  const greeting1 = createGreeting();
  console.log(greeting1);
}

catch(error) {
  console.error(error);
}

