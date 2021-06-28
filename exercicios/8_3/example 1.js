const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const example = () => {
  const verifyEven = numbers.filter((element) => element % 2 === 0);
  const sumEven = (acc, number) => acc + number;
  const sum = verifyEven.reduce(sumEven)
  console.log(sum)
};
console.log(example())

//Solução do exemplo fornecida pela Trybe
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//Solução com apenas reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152