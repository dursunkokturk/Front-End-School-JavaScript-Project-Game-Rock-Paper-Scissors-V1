let userScore = 0;
let computerScore = 0;

/* Bilgisayar Tercihini Duzenliyoruz */
let computerSelect = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));
console.log(computerSelect);

// Taş Butonuna Tıklandığında Yapılacak İşlemler
rockButton.addEventListener("click", function () {
  console.log("Kullanıcı Seçimi : Taş");
  rockButton.textContent = rockButton.textContent.toLowerCase();
  // rock();
  if (rockButton.innerHTML === computerSelect){
    console.log("Berabere");
  }
});

function paper() {
  let p = paperButton.innerHTML;
  console.log(p);
}

function scissor() {
  let s = scissorButton.innerHTML;
  console.log(s);
}

function gameEnd() {
  let ge = gameEndButton.innerHTML;
  console.log(ge);
}

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