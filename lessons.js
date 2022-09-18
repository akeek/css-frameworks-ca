// Template object
const myCountry = {
    country: 'Norway',
    city: 'Oslo',
    currency: 'Krone',
  };

  const {country: land, city, currency} = myCountry;

  console.log(land, city, currency);

//   const myCountryJSON = JSON.stringify(myCountry);
//   console.log(myCountryJSON)

//   const myCountryPARSE = JSON.parse(myCountryJSON)
//   console.log(myCountryPARSE)


    //Local storage
  localStorage.setItem('firstName', 'Ola');
  localStorage.setItem('lastName', 'Nordmann');

  const firstName = localStorage.getItem('firstName');

console.log(firstName)

localStorage.removeItem('firstName');

localStorage.clear();

const mySet = new Set();

mySet.add('1');
mySet.add('2');
mySet.add('2');
mySet.add('2');
mySet.add('3');
mySet.add('4');
mySet.add('5');

console.log(mySet.size);

console.log(mySet.has('1'));
console.log(mySet.has('a'));



class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speaks(){
        console.log('Hello ' + this.firstName, this.lastName);
    }
}

const newPerson = new Person('Ola', 'Nordmann');
newPerson.speaks();


const names = [
    { firstName: 'Ola', lastName: 'Nordmann' },
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mario', lastName: 'Rossi' },
    { firstName: 'Jan', lastName: 'Jansen' },
  ];

  const combinedNames = names.map((person) =>{
    return `${person.firstName} ${person.lastName}`;
  });

  console.log(combinedNames);

  const a = 50;
  const b = 10;

  const resultOne = a + b;
  const resultTwo = a - b;

  console.log(resultOne)
  console.log(resultTwo)

  