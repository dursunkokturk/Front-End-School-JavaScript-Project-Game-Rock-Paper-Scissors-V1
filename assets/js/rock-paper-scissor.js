let userScore = 0;
let computerScore = 0;

// Fonksiyon Her Cagirilmasinda Farkli Bir Sayi Uretiyoruz
// Uretilen Sayiyi Secenekler Ile Eslestiriyoruz
function getComputerChoise(){
  const choises = ["taş", "kağıt", "makas"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choises[randomIndex];
}
/* Bilgisayar Tercihini Duzenliyoruz */
// let computerSelect = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() * 3));
// console.log("Bilgisayar Seçimi " + computerSelect);

// Tas Butonuna Tiklandiginda Yapilacak Islemler
rockButton.addEventListener("click", function () {
  computerSelect = getComputerChoise();
  console.log("Kullanıcı Seçimi : Taş");
  // let userChoise = "taş";
  rockButton.textContent = rockButton.textContent.toLowerCase();
  if (rockButton.innerHTML === computerSelect) {
    userScore++;
    console.log("Kullanıcı Puanı : "+userScore);
    console.log("Kazandınız");
  } else {
    computerScore++;
    console.log("Bilgisayar Puanı : "+computerScore);
    console.log("Kaybettiniz \n Bilgisayar Seçimi " + computerSelect);
  }
});

// Kagit Butonuna Tiklandiginda Yapilacak Islemler
paperButton.addEventListener("click", function () {
  computerSelect = getComputerChoise();
  console.log("Kullanıcı Seçimi : Kağıt");
  paperButton.textContent = paperButton.textContent.toLowerCase();
  if (paperButton.innerHTML === computerSelect) {
    userScore++;
    console.log("Kullanıcı Puanı : "+userScore);
    console.log("Kazandınız");
  } else {
    computerScore++;
    console.log("Bilgisayar Puanı : "+computerScore);
    console.log("Kaybettiniz \n Bilgisayar Seçimi " + computerSelect);
  }
});

// Makas Butonuna Tiklandiginda Yapilacak Islemler
scissorButton.addEventListener("click", function () {
  computerSelect = getComputerChoise();
  console.log("Kullanıcı Seçimi : Makas");
  scissorButton.textContent = scissorButton.textContent.toLowerCase();
  if (scissorButton.innerHTML === computerSelect) {
    userScore++;
    console.log("Kullanıcı Puanı : "+userScore);
    console.log("Kazandınız");
  } else {
    computerScore++;
    console.log("Bilgisayar Puanı : "+computerScore);
    console.log("Kaybettiniz \n Bilgisayar Seçimi " + computerSelect);
  }
});

// Oyunu Bitir Butonuna Tiklandiginda Yapilacak Islemler
gameEndButton.addEventListener("click", function () {
  console.log("Oyun Bitti");
  gameEndButton.textContent = gameEndButton.textContent.toLowerCase();
  if (gameEndButton.innerHTML === computerSelect) {
    console.log("Berabere");
  }
});