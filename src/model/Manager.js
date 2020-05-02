/**
 * Manager classi rastgele gunluk tedavi edilecek hayvan sayisi ve turu uretir ve bunlari bir diziye("dailyAnimals") koyar.
 * Doctor arrayi icinde bulunan doktorlari kontrol eder ve durumu musait olan doktora uygun hayvani verir.
 * Her hayvan icin tedavi suresi bitince doktor musait duruma gelir ve yeni hayvan alir.
 * Mesai bitince butun bilgiler "ViewController" classina gonderilir.
 */
class Manager {
    #arrayDoctor = new ArrayDoctor().getArrayDoctor();// doctor.js' te olusturulan doctor bilgilerini tutan arraya ulasilir.
    #dailyAnimals = [];//gunluk toplam hayvan dizisi
    #dailyAnimalsLength=null;
    #timerHandle = null;
    constructor(finishedShift, continueShift) {// tedavi devam ederken ve mesai biiriginde disaridan cagirilan fonksiyonlar
      this.finishedShift = finishedShift;
      this.continueShift = continueShift;
      this.randomInformation = new Utility();// rastgele bilgilerin "Utility" classindan alinmasini saglayan degisken
      this.animals = new AllAnimals(); // gunluk toplam tedaviye gelen hayvanlarin olusturulmasi icin "AllAnimals" classini cagiran degisken
      this.doDailyAnimals();//gunluk toplam tedaviye gelen hayvanlarin olusturan metod
      this.getDailyAnimals();
      
    }/**
     * her 100 msn'de bir run() metodunu calistirir.
     *180 sn bitince disaridan "finishedShift" metodunu cagirir ve run() metodunun calsimasi durdurur
     */
    start() {
      this.#timerHandle = setInterval(() => this.run(), 100); 
      setTimeout(() => {
        clearInterval(this.#timerHandle);
        this.finishedShift(this.#arrayDoctor, this.#dailyAnimals,this.#dailyAnimalsLength);
      }, 180000);
    }
    /**
     * program calsitigi surece disardan "continueShift" metodunu cagirir.
     * doktorlarin bilgilerinin bulundugu "#arrayDoctor" dizisindeki doktorlarin statusleri kontrol eder ve durumu musait olan doktor icin "check()" metodunu cagirir.
     */
    run() {
      this.continueShift(this.#dailyAnimals);//hayvanlari ekrana bastiran fonksiyon disaridan cagrilir.
      this.#arrayDoctor.map((doctor) => {
        if (doctor.status) {
          doctor.status = !doctor.status;// Durumu musait olan doktor hemen hayvan alacagi icin durumu false olarak degistirilir.
          this.check(doctor);
        }
      });
    }
    /**
     * Burda tum hayvanlarin bulundugu "dailyAnimals" listteki hayvan ile  ve run() fonksiyonundan gelen doktorun baktigi hayvan kontrol edilir ve uyusmasi halinde ilk siradaki hayvanin tedavisi baslamsi icin "startTreatment" metodu cagrilir. 
     * "startTreatment" metoduna run() metodundan gelen ve durumu musait olan doktor ve onunla uyusan hayvan parametre olarak gonderilir.
     * @param {*} pDoctor 
     */
    check(pDoctor) {
      let nextAnimal = this.#dailyAnimals.find((animal) => {
        if (animal.animalName === pDoctor.animalName[this.randomInformation.randomIndex()]) //0 veya 1 uretir, boylece niyazi rastgele hamsi veya kedi alir.
        return animal;
      });
      this.startTreatment(pDoctor, nextAnimal);
    }
  /**tedaviyi baslatan fonksiyon.
   * Her hayvan icin beliri surede(o sure parametre olarak gelen hayvandan(nextAnimal) alinir ) tedavisi yapilir ve sure sonunda doktor status tekrardan true hale gelir.
   * Daha sonra tedavi edilen hayvan "dailyAnimals" dizisinden cikarilir.
   * @param {*} pDoctor 
   * @param {*} pAnimal 
   */
    startTreatment(pDoctor, pAnimal) {
      setTimeout(() => {
        let status = !pDoctor.status;// doktor tekradan musait hale geldi.
        pDoctor.status = status;// doktorun durumu doktorun bulundugu array elemanina eklendi.
        pDoctor.treatedAnimals.push(pAnimal.animalName);// doktorun baktigi hayvan doktorun bulundugu array elemanina eklendi.
        pDoctor.price += pAnimal.price;//doktorun baktigi hayvanin tedavi masrafi doktorun bulundugu array elemanina eklendi.
        this.finishTreatedAnimal(pAnimal);// tedavi edilen hayvani "dailyAnimals" dizisinden cikaran metod
      }, pAnimal.time);
    }
    finishTreatedAnimal(pAnimal) {
      let treatedAnimalIndex = this.#dailyAnimals.indexOf(pAnimal);
      this.#dailyAnimals.splice(treatedAnimalIndex, 1);
    }
    /**
     * astgele gunluk tedavi edilecek hayvan sayisi ve turu uretir ve bunlari bir diziye("dailyAnimals") koyan metod.
     */
    doDailyAnimals() {
      let number = this.randomInformation.randomAnimalNumber(200,250);
      for (let i = 0; i < number; i++) {
        let number = this.randomInformation.randomAnimal();
        this.#dailyAnimals.push(this.animals.animalList(number));
        this.#dailyAnimalsLength= this.#dailyAnimals.length;// ilk dizinin uzunlugu istatistik bilgiler icin kullanilmak uzre viewControlere gonderilrir.
      }
      
    }/**
     * dailyAnimals nesnesin disina verir.
     */
    getDailyAnimals() {
      return this.#dailyAnimals;
    }/**
     * doktorlar dizisini nesnesin disina verir.
     */
    getArrayDoctor() {
      return this.#arrayDoctor;
    }
  
  }