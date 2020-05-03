/**
 * tedavisi yapilan hayvan turlerinin bilgilerini tutan arrayin olusturuldugu class
 */
class Animal {
    ownerName = Utility.fakeName();
    animalAge = Utility.fakeAge();
    constructor(animalName, time, price) {
      this.animalName = animalName;
      this.time = time;
      this.price = price;
    }
  }/**
   * Bu classta gunluk olarak olusturulan hayvan sayisinin belirlenmesi icin baz alinan hayvan bilgileri mevcuttur.
   *Manager classi "animalList" dizisindeki hayvanlardan rastgele ve rastgele sayida alir.
   */
  class AllAnimals {
    animalList(pNumber) {
      let animals = [
        new Animal("KARGA", 5000, 150),
        new Animal("HAMSI", 3000, 40),
        new Animal("KEDI", 7000, 100),
      ];
      return animals[pNumber];
    }
  }
  