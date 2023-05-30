//1. Creați o constructor function "Masina" care să aibă proprietăți precum "marca", "model" și "anFabricatie". Adăugați o metodă "afiseazaDetalii" la prototipul constructorului care să afișeze toate detaliile mașinii. Extindeți constructorul adăugând o proprietate statică "numarMasini" care să țină evidența numărului total de mașini create. Apoi, creați două instanțe ale clasei și afișați detaliile și numărul total de mașini create.
function Masina(marca, model, anFabricatie) {
    this.marca = marca;
    this.model = model;
    this.anFabricatie = anFabricatie;

    // counter nrMasiniCreate.
    Masina.nrMasiniCreate+=1;
}
Masina.nrMasiniCreate = 0;

Masina.prototype.afiseazaDetalii = function() {
    console.log(`
        Marca: ${this.marca}, 
        Model: ${this.model}, 
        An de fabricatie: ${this.anFabricatie}
    `);
}

// creez 2 instante de Masina
const masina1 = new Masina("bmw", "Seria 3", "2020");
const masina2 = new Masina("audi", "A4", "2018");

// afisare detalii
masina1.afiseazaDetalii();
console.log(Masina);

const masina3 = new Masina("audi", "A3", "2014");
console.log(Masina);


//2. Extindeți prototipul Array pentru a adăuga o metodă numită "filtrareNrPare" care să returneze un nou array conținând doar numerele pare din array-ul original. Utilizați keyword-ul "this" în implementarea metodei pentru a accesa array-ul curent.
Array.prototype.filtrareNrPare = function () {
    return this.filter(function (number) {
      return number % 2 == 0;
    });
  };
  
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const output = input.filtrareNrPare();
  
console.log(output);


//3. Creați o clasă "FormaGeometrica" care să aibă o metodă statică "descriere" care afișează o descriere generală a formei geometrice. Extindeți clasa pentru a crea subclase pentru forme geometrice specifice, cum ar fi "Cerc" și "Patrat". În fiecare subclasă, adăugați metode specifice pentru calculul ariei și a perimetrului și utilizați keyword-ul "super" pentru a accesa metodele și proprietățile clasei părinte.
  class FormaGeometrica {
    static descriere() {
      console.log("Aceasta este o forma geometrica...");
    }
  }
  
  // afisez textul formei de baza
  FormaGeometrica.descriere();
  
  // Cerc extinde FormaGeometrica
  class Cerc extends FormaGeometrica {
    constructor(r) {
      super();
      this.r = r;
    }
  
    calculeazaAria() {
      return Math.PI * this.r * this.r;
    }
  
    calculeazaPerimetru() {
      return 2 * Math.PI * this.r;
    }
  }
  
  // Patrat extinde FormaGeometrica
  class Patrat extends FormaGeometrica {
    constructor(latura) {
      super();
      this.latura = latura;
    }
  
    calculeazaAria() {
      return this.latura * 2;
    }
  
    calculeazaPerimetru() {
      return this.latura * 4;
    }
  }
  
  const cerc = new Cerc(10);
  console.log("Aria cercului:", cerc.calculeazaAria());
  console.log("Perimetrul cercului:", cerc.calculeazaPerimetru());
  
  const patrat = new Patrat(10);
  console.log("Aria patratului:", patrat.calculeazaAria());
  console.log("Perimetrul patratului:", patrat.calculeazaPerimetru());

