let userScore = 0;
let computerScore = 0;

while (true) {

  /* Kullanicidan Tercihi Aliyoruz */
  let userPreference = prompt("Tercihinizi Giriniz (taş / kağıt / makas / çıkış)");

  /* Bilgisayar Tercihini Duzenliyoruz */
  let computerSelect = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));

  /* Oyun Baslamadan Yada Oyun Esnasinda Oyunu Bitirme */
  if (userPreference === "çıkış"){
    alert("Oyun Bitti");
    console.log(`Kullanıcı Puanı : ${userScore} Bilgisayar Puanı : ${computerScore}`);
    break;
  }

  /* Kullaniciya Sunulan Tercihlerin Disinda Bir Tercih Girilmesi Durumu */
  if(!["taş", "kağıt", "makas"].includes(userPreference)){
    alert("Geçersiz Hamle");
    continue;
  }

  /* Kullanici ve Bilgisayarin Ayni Tercihleri Yapmasi Durumu */
  if (userPreference === computerSelect) {
    console.log("Berabere");
    console.log(`Kullanıcı Puanı : ${userScore} Bilgisayar Puanı : ${computerScore}`);
    continue;
  }

  /* Kullanici ve Bilgisayarin Farkli Tercihler Sonucunda Kazanma ve Kaybetme Durumu */
  let win = userPreference === "taş" && computerSelect === "makas" || userPreference === "kağıt" && computerSelect === "taş" || userPreference === "makas" && computerSelect === "kağıt";
  if (win) {
    userScore++;
    console.log("Kazandın");
  } else {
    computerScore++;
    console.log("Kaybettin");
  }

  /* Genel Puan Tablosu */
  console.log(`Kullanıcı Puanı : ${userScore} Bilgisayar Puanı : ${computerScore}`);
}