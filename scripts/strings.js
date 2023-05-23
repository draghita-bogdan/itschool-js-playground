// 1. Scrie un program care primește de la utilizator două cuvinte și le concatenează într-un singur șir de caractere. Apoi, determină lungimea șirului rezultat și afișează în consolă.

let nume1 = 'Fast Food'; 
let nume2 = 'McDonalds';
let result = nume1 + ' ' + nume2;
console.log('Șirul rezultat:', result);
console.log('Lungimea șirului rezultat: ', result.length);


// 2. Scrie o funcție care primește un șir de caractere și returnează un array conținând fiecare caracter al șirului ca element separat. Apoi, apelează funcția cu un șir introdus de utilizator și afișează array-ul rezultat în consolă.

let str1 = "Hello, my name is Draghita!";
const split_string = str1.split(" ");
console.log(split_string);


// 3. Scrie un program care primește un șir de caractere de la utilizator și afișează fiecare caracter al șirului în ordine inversă, folosind un loop.

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('bye');


// 4. Creează un obiect care reprezintă o persoană, având proprietăți precum nume, vârstă și hobburi (reprezentate printr-un array de șiruri de caractere). Apoi, afișează un mesaj în consolă care să conțină informații despre persoană, folosind proprietățile obiectului.

var person = {
  name: "Draghita",
  age: 25,
  hobbies: ["music", "shopping"]
};
var message1 = `Numele meu este ${person.name}, am ${person.age} de ani și următoarele hobby uri: ${person.hobbies}.`;
console.log(message1);


// 5. Scrie un program care primește un șir de cuvinte separate prin spații de la utilizator. Folosind un loop, afișează fiecare cuvânt în consolă, împreună cu numărul de caractere pe care îl conține.

const str = "Web Development is difficult!";
const words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    console.log(`Cuvântul "${words[i]}" are ${words[i].length} caractere.`);
  }
