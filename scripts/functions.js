//1. Scrie o funcție care primește un număr și returnează true dacă este par, altfel false.
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
        return false;
}
//console.log(isEven(4));


//2. Scrie o funcție care primește două numere și returnează suma lor inmultita cu 0.1
function calculate(num1, num2) {
    
    return (num1 + num2) * 0.1;
}
//console.log(calculate(4, 3));


//3. Scrie o functie care calculeaza procentajul dintr-un numar. Procentajul si numarul se introduc ca parametrii.
function percentOfaNumber(num, percentage) {
    return (num / 100) * percentage;
}
//console.log(percentOfaNumber(70, 0.3));


//4. Scrie o funcție care primește trei numere și returnează cel mai mare dintre ele.
function highestNumber(number1, number2, number3) {
    return Math.max(number1. number2. number3);
}
//console.log(highestNumber(40, 100, 700));


//5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.
function numberSum(N) {
    var total = 0;
      for(var i = 0; i <= N; i++){
        total += i;
      }
      return total;
  }
//console.log(numberSum(13));


//5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.
function numberSum(N) {
    var total = 0;
      for(var i = 0; i <= N; i++){
        total += i;
      }
      return total;
  }
  //console.log(numberSum(13));


//6. Scrie o funcție care primește un număr și returnează true dacă este prim, altfel false.
function isPrime(number) {
    if (number % 2 == 0 || number % 3 == 0 && number % number == 0){
        return false;
    }else {
        return true;
    }
        return false;
    }
//console.log(isPrime(7));


//7. Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. 
Funcția trebuie să returneze un mesaj diferit în fiecare caz.
function verificaNumar(numar) {
    if (numar < 0) {
      console.log("Numărul este mai mic decât 0.");
    } else if (numar > 0) {
      console.log("Numărul este mai mare decât 0.");
    } else {
      console.log("Numărul este egal cu 0.");
    }
  }
  verificaNumar(15); // Numărul este mai mare decât 0.
  verificaNumar(-3); // Numărul este mai mic decât 0.
  verificaNumar(0); // Numărul este egal cu 0.
  

//8. Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru.
function displayEvenNum(min, max) {
    for(let i = min; i < max; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
displayEvenNum(7, 20)   


//9. Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere.
function ascending(a, b, c) {
    let num = [a, b, c];
    num.sort(function (a, b) {
        return a - b;
    });
    return num;
}
//console.log(ascending(30, 17, 27));


//10. Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere.
function descending(a, b, c) {
    let num = [a, b, c];
    num.sort(function (a, b) {
        return b - a;
    });
    return num;
}
//console.log(descending(30, 17, 27));


//11. Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar.
function table(num) {
    for(let i = 1; i <= 10; i++) {
        let result = i * num;
        console.log(result);
    }
}
table(7)   


//12. Scrie o functie care primeste 3 parametrii: nr persoane, locuri disponibile, mese. Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera, iar la final afiseaza cate locuri libere au ramas (total).
function aseazaLaMese(nrPers, locuriDisponibile, persLaMasa) {
   if (nrPers > locuriDisponibile * persLaMasa) {
      console.log("Nu exista suficiente locuri pentru a aseza toate persoanele.");
      return;
    }
  
    var meseOcupate = (nrPers / persLaMasa) | 0; // Numarul de mese ocupate
    var locuriLibere = meseOcupate * persLaMasa - nrPers; // Numarul de locuri libere
    var meseRamas = meseOcupate - Math.floor(nrPers / persLaMasa); // Numarul de mese la care au ramas locuri libere
  
    console.log("Numarul de locuri libere: " + locuriLibere);
    console.log("Numarul de mese la care au ramas locuri libere: " + meseRamas);
  }
  aseazaLaMese(10, 5, 2);
  aseazaLaMese(30, 15, 3);
  aseazaLaMese(20, 10, 4);
  aseazaLaMese(30, 10, 4);
  aseazaLaMese(5, 2, 3);
  aseazaLaMese(10, 5, 1);
  aseazaLaMese(10, 5, 3);
  aseazaLaMese(15, 5, 2);

//13. Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.


//14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.
function calculeazaVarsta(anNastere) {
    var anCurent = new Date().getFullYear();
    var varsta = anCurent - anNastere;
    console.log("Anul de naștere: " + anNastere);
    console.log("Anul curent: " + anCurent);
    console.log("Vârsta: " + varsta);
  }
  calculeazaVarsta(1998);
  

//15. Scrie o functie care calculeaza anii unui animal de companie dat ca parametru (caine sau pisica / daca alegi si altceva, go for it).
function calculeazaVarstaAnimal(animal, ani) {
    if (animal === "caine") {
      return ani * 7; 
    } else if (animal === "pisica") {
      return ani * 5; 
    } else {
      return "Specia introdusă nu este recunoscută.";
    }
  }
  console.log(calculeazaVarstaAnimal("caine", 3)); 
  console.log(calculeazaVarstaAnimal("pisica", 4));