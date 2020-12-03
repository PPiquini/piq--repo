
const printNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

const { nationality = 'Brazilian' } = person;

console.log(printNationality(otherPerson)); // Ivan is Russian
console.log(printNationality(person));