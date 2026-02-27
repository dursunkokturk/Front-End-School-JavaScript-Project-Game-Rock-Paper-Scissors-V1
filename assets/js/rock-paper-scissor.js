let userScore = 0;
let computerScore = 0;

/* Bilgisayar Tercihini Duzenliyoruz */
let computerSelect = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));
console.log("Bilgisayar Seçimi " + computerSelect);

// Taş Butonuna Tıklandığında Yapılacak İşlemler
rockButton.addEventListener("click", function () {
  console.log("Kullanıcı Seçimi : Taş");
  rockButton.textContent = rockButton.textContent.toLowerCase();
  // rock();
  if (rockButton.innerHTML === computerSelect) {
    alert("Kazandınız");
  } else {
    alert("Kaybettiniz \n Bilgisayar Seçimi " + computerSelect);
    
  }
});

// Kagit Butonuna Tıklandığında Yapılacak İşlemler
paperButton.addEventListener("click", function () {
  console.log("Kullanıcı Seçimi : Kağıt");
  paperButton.textContent = paperButton.textContent.toLowerCase();
  if (paperButton.innerHTML === computerSelect) {
    console.log("Berabere");
  }
});

// Makas Butonuna Tıklandığında Yapılacak İşlemler
scissorButton.addEventListener("click", function () {
  console.log("Kullanıcı Seçimi : Makas");
  scissorButton.textContent = scissorButton.textContent.toLowerCase();
  if (scissorButton.innerHTML === computerSelect) {
    console.log("Berabere");
  }
});

// Oyunu Bitir Butonuna Tıklandığında Yapılacak İşlemler
gameEndButton.addEventListener("click", function () {
  console.log("Oyun Bitti");
  gameEndButton.textContent = gameEndButton.textContent.toLowerCase();
  if (gameEndButton.innerHTML === computerSelect) {
    console.log("Berabere");
  }
});

/*
while (true) {

  Kullanicidan Tercihi Aliyoruz
  let userPreference = prompt("Tercihinizi Giriniz (taş / kağıt / makas / çıkış)");


  Oyun Baslamadan Yada Oyun Esnasinda Oyunu Bitirme
  if (userPreference === "çıkış") {
    alert("Oyun Bitti");
    console.log(`Kullanıcı Puanı : ${userScore} Bilgisayar Puanı : ${computerScore}`);
    break;
  }

  Kullaniciya Sunulan Tercihlerin Disinda Bir Tercih Girilmesi Durumu
  if (!["taş", "kağıt", "makas"].includes(userPreference)) {
    alert("Geçersiz Hamle");
    continue;
  }

  Kullanici ve Bilgisayarin Ayni Tercihleri Yapmasi Durumu
  if (userPreference === computerSelect) {
    console.log("Berabere");
    console.log(`Kullanıcı Puanı : ${userScore} Bilgisayar Puanı : ${computerScore}`);
    continue;
  }

  Kullanici ve Bilgisayarin Farkli Tercihler Sonucunda Kazanma ve Kaybetme Durumu
  let win = userPreference === "taş" && computerSelect === "makas" || userPreference === "kağıt" && computerSelect === "taş" || userPreference === "makas" && computerSelect === "kağıt";
  if (win) {
    userScore++;
    console.log("Kazandın");
  } else {
    computerScore++;
    console.log("Kaybettin");
  }

  Genel Puan Tablosu
  console.log(`Kullanıcı Puanı : ${userScore} Bilgisayar Puanı : ${computerScore}`);
}
*/