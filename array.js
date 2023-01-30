const products = [
 {
  id: 67,
 name: 'Firestrata',
  price: 26,
  brewery: 'Hop Hooligans'
 },
 {
  id: 212, 
  name: 'Punch the Clock',
  price: 21, 
  brewery: 'Bereta',
 },
 {
  id: 111, 
  name: 'The Guardian',
  price: 21,
  brewery: 'Noah'
 },
 {
  id: 345,
  name: 'Pudge',
  price: 30,
  brewery: 'Hop Hooligans'
 },
];
console.log(products);

// 1. Sa se afiseze produsul cu numele "The Guardian"

 console.log(products[2]);

 //SAU

 const guardianName = products.find(product => product.name === "The Guardian");
console.log(guardianName);
 
// 2. Folosind filter, returnati un array care contine doar produsele de la "Hop Hooligans"

const hooligansProduct = products.filter(product => product.brewery === 'Hop Hooligans');
console.log(hooligansProduct);

const breweryHop = products.filter

// 3. Folosind filter, returnati un array care sa nu contina produsul cu id-ul 111

const idProduct = products.filter(product => product.id != 111);
console.log(idProduct);

// 4. Calculati suma tuturor produselor din array.
const sumProducts = products.reduce((sum, product) => sum + product.price, 0);
console.log(sumProducts);

// 5. Fara sa modificati array-ul initial, returnati un array nou, în care fiecare element va avea o proprietate nouă numita “isFavorite”, cu valoarea false.
//TIP: map + Object.assign/spread syntax

const favoriteForProduct = products.map(product => ({...product, isFavorite: false}));
console.log(favoriteForProduct);


//EXERCITII EXTRA

// 1. Calculati suma fiecarui element pozitiv dintr-un array. Daca nu exista nici un numar pozitiv sau array-ul este gol, suma va fi 0.
//TIP: Filter + reduce

const input = [1, -4, 12, 0, -3, 29, -150];
const sumOfPositiveNumbers = input.filter (n => n>0)
.reduce ((sum, n) => sum + n, 0);
console.log(sumOfPositiveNumbers);

// 2. Folosind map, filter si reduce, calculati media tuturor notelor pentru fiecare student, apoi filtrati studenii care au media mai mare de 90.

const students = [
 {name: 'Ionut', scores: [90, 85, 92]},
 {name: 'Gigel', scores: [75, 80, 85]},
 {name: 'Marius', scores:[ 90, 95, 85]
 },
 {name: 'David', scores: [100, 100, 100]},
];

const studentAverage = students.map(student => {
 const sumNotes = student.scores.reduce ((sum, score) => sum + score, 0);
 return {
   name: student.name,
   average: sumNotes / student.scores.length
 }
})
//console.log(studentAverage);
const averageAbove90 = studentAverage.filter( student => student.average > 90);
console.log (averageAbove90);


