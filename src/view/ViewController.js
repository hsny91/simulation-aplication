/**
 * finish metodu ile program bitince managerden aldigi bilgileri ekrana yazdirir.
 * continue metodu program devam ederken managerden aldigi hayvan listesini ekrana yazdirir.
 * (hayvan sayisi oldukca fazla ekrana yazdirmak aslinda cok mantikli degil ancak ekranda hayvanlarin sira ile tedaviye gitmeleri ve ekrandan silinmeleri gormek icin ekrana yazdirdim. )
 */
class ViewController {
    finish(pDoctorArray, pAnimalArray,pArrayLength) {
      let table = `<table class="table table-striped table-dark table-hover">`;
      table += `<thead>`;
      table += `<tr>
                  <th>DOCTOR NAME</th>
                  <th>PRICE</th>
                  <th>ANIMAL NAME</th>
                  <th>TOTAL NUMBER OF ANIMAL</th>
                </tr>`;
      table += `</thead>`;
      pDoctorArray.map((doctor) => {
          table += `<tr>
              <td>${doctor.doctorName}</td>
              <td>${doctor.price}</td>
              <td>${doctor.animalName}</td>
              <td>${doctor.treatedAnimals.length}</td>
              </tr>`;
        }).join("");
      table += `</table>`;
      document.querySelector("#finish-table").innerHTML = table;
      let untreatedAnimals = pAnimalArray.length;  //tedavi edilmeden kalan hayvan sayisi
      let totalAnimals=pArrayLength;//toplam gunluk tedaviye gelen hayvan sayisi
      let percentTreatedAnimal=100-((untreatedAnimals/totalAnimals)*100)
        
      document.querySelector("#total-animal").innerHTML ="Total Animals: "+totalAnimals;
      document.querySelector("#untreated-animals").innerHTML ="Untreated Animals: "+untreatedAnimals;
      document.querySelector("#treated-animals").innerHTML ="Treated Animals: %"+percentTreatedAnimal;
  
    }
    continue(pArray) {
      let table = `<table class="table w-25">`;
      table += `<thead>`;
      table += `<tr class="text-light bg-dark">
                    <th>ANIMAL TYPE</th>
                    <th>OWNER</th>
                    <th>AGE</th>
                   </tr>`;
      table += `</thead>`;
      pArray.map((animal) => {
          table += `<tr class="table-success">
              <td>${animal.animalName}</td>
              <td>${animal.ownerName}</td>
              <td>${animal.animalAge}</td>
              </tr>`;
        }).join("");
      document.querySelector("#finish-table").innerHTML = table;
    }
  
  
  
  }