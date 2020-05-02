
/**
 * VETERINER
 * Uygulamada sistem rastgele olarak hayvan uretir.
 * Veteriner kliniginde calisan her doktor kendi uzmanlik alaninda olan hayvani musaitse tedavi eder.
 * Mesai bitiminde her doktorun kac hayvana baktigi ve ne kadar kazandigi kac tane hayvanin tedavi icin getirildiigi ve hayvanlarin kacinin tedavi oldugu bilgisi ekrana yazdirilir.
 * 
 * ANALIZ
 * - Model OBJELERI: Animal,Doctor, Utility,Manager
 * - View OBJELERI: ViewController
 * 
 * Animal, tedavi edilecek hayvan turlerini ve bilgilerini olusturur.
 * Doctor,doctor isimlerini ve bilgilerini bir diziye aktarir.
 * Manager  ilk olarak gunluk tedaviye gelen hayvanlari rastgele olusturur ve bu bilgileri ViewController paylasir ve  hayvan listesi ekrar basilir.
 * Manager, doctorlarin musaitligini belirli araliklarla kontrol eder ve musait olan doktora o doktorun tedavi edebilecegi turde olan hayvani veririr.
 * Hayvanlarin tedavi masraflari, tedavi edilen hayvan sayilari doktorlarin bulundugu arraye islenir.
 * Manager, tedavisi biten hayvani taburcu eder yani hayvanlarin bulundugu diziden siler.
 * Manger, 180 sn bitiminde uygulamanin calismasini durdurur. 
 * Manager, 180 bitiminde doktorlar arrayindeki bilgileri ViewController paylasir ve sonuc ekrar basilir.
 * 
 */


const viewController = new ViewController();
new Manager(viewController.finish,viewController.continue).start();


    
