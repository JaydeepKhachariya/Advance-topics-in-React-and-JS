// pure function

function calArea(radius) {
  return Math.PI * radius * radius;
}

const area = calArea(5);

// console.log(area,"<--- area");


// immutability

const obj = { a: 1, b: 2 };
const modifyObj = { ...obj, c: 3 };

// console.log(obj, "<--- obj");
// console.log(modifyObj, "<--- modifyObj");


// currying function

const users = [
    {
        name: "John",
        age: 15,
        gender: "male",
        country: "US"
    },
    {
        name: "Jane",
        age: 25,
        gender: "female",
        country: "UK"
    },
    {
        name: "Tom",
        age: 35,
        gender: "male",
        country: "US"
    },
    {
        name: "Alice",
        age: 45,
        gender: "female",
        country: "canada"
    }
] 

function curryingFilter(key) { 
    return function(value) {
        return users.filter(user => user[key] === value);
    }
}

const filterByGender = curryingFilter("gender");
const filterByCountry = curryingFilter("country");


// memoization

function memoization(fn){
    const cache = {};
    return function (...args) {
      const key = args.toString();
      if (!cache[key]) {
        cache[key] = fn.apply(this, args);
        }
      return cache[key];
    };
}

const factorial = memoization(function (x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
});

console.log(factorial(5), "<--- factorial(5)");
console.log(factorial(5), "<--- factorial(5)");
