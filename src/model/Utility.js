/**
 * Random sayilarin ve fake hayvan sahibi isimlerinin ve fake hayvan yasinin uretildigi class.
 */
class Utility {
    randomAnimal() {
      return Math.floor(Math.random() * 3);
    }
    randomAnimalNumber(pMax, pMin) {
      return Math.floor(Math.random() * (pMax - pMin + 1) + pMin);
    }
    static fakeName() {
      return faker.name.findName();
    }
    static fakeAge() {
      return faker.random.number({ min: 1, max: 10 });
      
    }
    randomIndex(){// niyazinin rastgele kedi veya hamsi tedavi etmesi icin kullanilacak.(niyazi tedavi edebilecegi hayvan tiplerini bir arrayde tutar,0 veya 1 ureterek o diziden rastgele hayvan secer.)
      return Math.floor(Math.random()*2);
    }
  }
  