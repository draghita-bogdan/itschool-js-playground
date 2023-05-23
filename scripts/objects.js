Exercițiul 1 
Calcularea sumei vârstelor
Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
Calculează suma vârstelor tuturor studenților și returnează rezultatul.

var studenti = {
    student1: { nume: "John", varsta: 20 },
    student2: { nume: "Alice", varsta: 22 },
    student3: { nume: "Mark", varsta: 19 }
  };
  function calculeazaSumaVarstelor(studenti) {
    let sumaVarstelor = 0;
  
    for (let student in studenti) {
      sumaVarstelor += studenti[student].varsta;
    }
  
    return sumaVarstelor;
  }
console.log(calculeazaSumaVarstelor(studenti));


Exercițiul 2
Concatenarea numelor de familie
Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.

var familii = {
    familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
    familie2: { numeTata: "Radu", numeMama: "Georgescu" }
  };
  function concateneazaNumeFamilie(familii) {
    var numeFamilieConcatenat = "";
  
    for (var familie in familii) {
      numeFamilieConcatenat += familii[familie].numeTata + " " + familii[familie].numeMama + " ";
    }
  
    return numeFamilieConcatenat.trim();
  }
console.log(concateneazaNumeFamilie(familii)); 

Exercițiul 3
Găsirea celui mai mare punctaj
Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.

var elevi = {
    elev1: { nume: "Maria", punctaj: 80 },
    elev2: { nume: "Alex", punctaj: 95 },
    elev3: { nume: "Andrei", punctaj: 85 }
  };
  
  var highestScore = 0;
  
  for (var elev in elevi) {
    if (elevi[elev].punctaj > highestScore) {
      highestScore = elevi[elev].punctaj;
    }
  }
console.log("Cel mai mare punctaj este: " + highestScore); 

  
Exercițiul 4
Verificarea existenței unui email într-un obiect
Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.

var utilizatori = {
    utilizator1: { nume: "John", email: "john@example.com" },
    utilizator2: { nume: "Alice", email: "alice@example.com" }
  };
  function doesEmailExist(utilizatori, email) {
    for (var utilizator1 in utilizatori) {
      if (utilizatori[utilizator1].email === email) {
        return true;
      }
    }
    return false;
  }
  function doesEmailExist(utilizatori, email) {
    for (var utilizator2 in utilizatori) {
      if (utilizatori[utilizator2].email === email) {
        return true;
      }
    }
    return false;
  }
console.log(doesEmailExist(utilizatori, "john@example.com"));
console.log(doesEmailExist(utilizatori,"alice@example.com"));

  
Exercițiul 5
Calcularea numărului total de persoane dintr-un obiect
Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.

var angajati = {
    departament1: { nume: "John", varsta: 30 },
    departament2: { nume: "Alice", varsta: 35 },
    departament3: { nume: "Mark", varsta: 28 }
  };
  
  function numPeople(angajati) {
    var numarTotalPersoane = 0;
  
    for (var departament in angajati) {
      if (angajati.hasOwnProperty(departament)) {
        numarTotalPersoane++;
      }
    }
  
    return numarTotalPersoane;
  }
  var rezultat = numPeople(angajati);
console.log(rezultat);


Exercițiul 6
Verificarea existenței unui departament într-un obiect
Primești un obiect companie care conține informații despre departamentele dintr-o companie, inclusiv numele și vechimea lor.
Verifică dacă un anumit departament există în obiectul companie și returnează true sau false.

var companie = {
    departamentIT: { nume: "John", vechime: 5 },
    departamentVanzari: { nume: "Alice", vechime: 3 }
  };
  function verificaExistentaDepartament(companie, numeDepartament) {
    for (var departament in companie) {
      if (departament === numeDepartament) {
        return true;
      }
    }
  
    return false;
  }
console.log(
    verificaExistentaDepartament(
      {
        departamentIT: { nume: "John", vechime: 5 },
        departamentVanzari: { nume: "Alice", vechime: 3 },
      },
      "departamentVanzari"
    )
  ); 
  

Exercițiul 7
Verificarea existenței unei calificări într-un obiect
Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o listă de calificări.
Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.

var candidati = {
    candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
    candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
  };
function verificaExistentaCalificare(candidati, calificareCautata) {
    for (var candidat in candidati) {
      var calificari = candidati[candidat].calificari;
      for (var i = 0; i < calificari.length; i++) {
        if (calificari[i] === calificareCautata) {
          return true;
        }
      }
    }
  
    return false;
  }
console.log(verificaExistentaCalificare(candidati, "JavaScript"));