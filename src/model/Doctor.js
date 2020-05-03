/**
 * Doktor bilgilerinin tutuldugu arrayi olusturan class.
 */
class Doctor {
    constructor(doctorName, animalName, price, status, treatedAnimals) {
      this.doctorName = doctorName;
      this.animalName = animalName;
      this.price = price;
      this.status = status;
      this.treatedAnimals = treatedAnimals;
    }
  }
  class ArrayDoctor {
    #arrayDoctor = [];
    constructor() {
      this.arrayDoctor();
    }
    arrayDoctor() {
      this.#arrayDoctor = [
        new Doctor("Yasemin", ["KARGA","KARGA"], 0, true, []),
        new Doctor("Cabbar", ["KEDI","KEDI"], 0, true, []),
       new Doctor("Niyazigul",["KEDI","HAMSI"], 0,true,[]),
        new Doctor("Eleni", ["HAMSI","HAMSI"], 0, true, [])
      ];
    }
    getArrayDoctor() {
      return this.#arrayDoctor;
    }
  }
  