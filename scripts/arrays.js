//1. Scrie un program care primește de la utilizator trei numere și le adaugă într-un array. Apoi, calculează suma numerelor din array și o afișează în consolă.

let numbers = [4, 17, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++ ) {
  sum += numbers[i];
}
//console.log("Suma numerelor este: " + sum);


//2. Scrie un program care primește un array de la utilizator și verifică dacă există vreun element negativ în array. Dacă da, afișează un mesaj corespunzător. Altfel, calculează media numerelor din array și o afișează în consolă.

var arr = [4, -17, 20];
function containsNegative(array){
for(var arr of array){
        if(arr < 0) return true;
    }
    return false;
  }
//console.log(containsNegative(arr));


//3. Scrie un program care primește un cod de țară de la utilizator și afișează numele țării respective, împreună cu o listă de capitale asociate. Folosește un obiect pentru a mapa codurile de țară la numele țărilor și la array-uri cu capitalele corespunzătoare.

var tari = {
    RO: {
      nume: "România",
      capitale: ["București"]
    },
    US: {
      nume: "Statele Unite ale Americii",
      capitale: ["Washington, D.C.", "New York"]
    },
    FR: {
      nume: "Franța",
      capitale: ["Paris"]
    },
    
  };
function afiseazaDetaliiTara(codTara) {
    var tara = tari[codTara];
  
    if (tara) {
      console.log("Țara: " + tara.nume);
      console.log("Capitale: " + tara.capitale.join(", "));
    } else {
      console.log("Nu s-a găsit o țară cu acest cod.");
    }
  }
var codTara = prompt("Introduceți codul de țară:");
afiseazaDetaliiTara(codTara);
  

//4. Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a produselor (preț x cantitate) și o afișează în consolă.

var arr = [
    {name:'candy', price: 3},
    {name:'chocolate', price: 10},
    {name:'gum', price: 5},
    
  ];
  var suma = 0;
  for (var i = 0; i < arr.length; i++) {
          suma += arr[i].price;
      }
//console.log(suma);

      
      
//5. Scrie un program care primește de la utilizator un array de obiecte reprezentând studenți (cu proprietăți precum nume, vârstă, note) și calculează media notelor pentru fiecare student. Afișează numele și media fiecărui student în consolă.

const students = [
        {name:'Ana', age: 17, grade: 9},
        {name:'Maria', age: 18, grade: 8},
        {name:'Andreea', age: 17, grade: 10}
    ];
    
    let i = 0;
    while(i < students.length) {
        const student = students[i];

