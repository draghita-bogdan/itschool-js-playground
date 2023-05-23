// 1. Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.
var i = 1;
do {
    if (i <= 10) {
      console.log(i);
    }
    i++;
  } while (i <= 10);
  

  // 2. Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.
  for (var i = 0; i <= 20; i += 2) {
    console.log(i);
  }


  // 3. Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.
var num1 = Number(prompt("Type a number", "10"));
var num2 = Number(prompt("Type a number", "25"));
for (i = num1; i < num2; i++) {
    console.log(i)
}


 // 4. Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.
 var caracter = prompt();
 var numarVocale = 0;
 for (let i = 0; i <= caracter.length; i++) {
     let rezultat = caracter[i];
     if (rezultat === 'a' || rezultat === 'e' || rezultat === 'i' || rezultat === 'o' || rezultat === 'u') {
         numarVocale++;
     }
    } 
 console.log(numarVocale);
 

// 5. Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.
var numar = parseInt(prompt("Introdu un număr:"));
for (var i = 1; i <= 10; i++) {
var produs = numar * i;
console.log(numar + " x " + i + " = " + produs);
}