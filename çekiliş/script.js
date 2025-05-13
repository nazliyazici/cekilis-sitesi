
/*
const button = document.querySelector("#cekilisYap");
const attention = document.querySelector("#kazanan");
const numbers = document.querySelector("#numbers");
const playAgain = document.querySelector("#startAgain");
const inputField = document.querySelector("#isimler");
const kazananSayisiInput = document.querySelector("#kazananSayisi");
const yedekButton = document.querySelector("#yedekSec");

let kazananlar = [];
let yedekler = [];

function rastgeleIsimSec(isimler) {
    let index = Math.floor(Math.random() * isimler.length);
    return isimler[index];
}

button.addEventListener("click", () => {
    let inputText = inputField.value;

    // Satır bazlı isimleri al, boşlukları temizle
    let isimListesi = inputText.split("\n").map(isim => isim.trim()).filter(isim => isim !== "");
    if (isimListesi.length === 0) {
        attention.textContent = "Lütfen en az bir isim girin!";
        attention.style.color = "red";
         return;
    }
    let kazananIsim = rastgeleIsimSec(isimListesi);
    kazananlar.push(kazananIsim);
    attention.textContent = "Kazanan: " + kazananIsim;
    attention.style.color = "green";

    // Yeniden çekiliş butonunu göster
    playAgain.style.display = "inline-block";
    yedekler = []; // Yeni çekilişte yedekleri sıfırla
    yedekSonuc.innerHTML = "";
});

// Yedek kazanan seçme
yedekButton.addEventListener("click", () => {
    let inputText = inputField.value.trim();
    let isimListesi = inputText.split("\n").map(isim => isim.trim()).filter(isim => isim !== "");
    let kalanKisiler = isimListesi.filter(isim => !kazananlar.includes(isim));
    let yedekSayisi = 1; // Şu an sadece 1 yedek seçiyor, istenirse artırılabilir

    if (kalanKisiler.length === 0) {
        yedekSonuc.textContent = "⚠ Yedek için yeterli kişi yok!";
        yedekSonuc.style.color = "red";
        return;
    }
  
    yedekler = rastgeleSec(kalanKisiler, yedekSayisi);
    yedekSonuc.innerHTML = "<strong>🔄 Yedek Kazanan:</strong> " + yedekler.join(", ");
    yedekSonuc.style.color = "orange";
});

playAgain.addEventListener("click", () => {
    kazananlar = [];
    yedekler = [];
    attention.textContent = "Kazanan: ?";
    yedekSonuc.textContent = "";
    playAgain.style.display = "none";
    inputField.value = "";
});

// Enter tuşuna basınca çekiliş başlasın
inputField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
    }
}); 

*/





const button = document.querySelector("#cekilisYap");
const attention = document.querySelector("#kazananSonuc");
const yedekSonuc = document.querySelector("#yedekSonuc");
const playAgain = document.querySelector("#startAgain");
const inputField = document.querySelector("#isimler");
const kazananSayisiInput = document.querySelector("#kazananSayisi");
const yedekButton = document.querySelector("#yedekSec");

let kazananlar = [];
let yedekler = [];

function rastgeleSec(liste, adet) {
    let secilenler = [];
    let kopyaListe = [...liste];

    for (let i = 0; i < adet && kopyaListe.length > 0; i++) {
        let index = Math.floor(Math.random() * kopyaListe.length);
        secilenler.push(kopyaListe[index]);
        kopyaListe.splice(index, 1); // Seçilen kişiyi listeden çıkar
    }
    return secilenler;
}

button.addEventListener("click", () => {
    let inputText = inputField.value.trim();

    // Satır bazlı isimleri al, boşlukları temizle
    let isimListesi = inputText.split("\n").map(isim => isim.trim()).filter(isim => isim !== "");
    let kazananSayisi = parseInt(kazananSayisiInput.value) || 1;

    if (isimListesi.length === 0) {
        attention.textContent = "⚠️ Lütfen en az bir isim girin!";
        attention.style.color = "red";
        return;
    }
    if (kazananSayisi > isimListesi.length) {
        attention.textContent = "⚠ Yeterli isim yok!";
        attention.style.color = "red";
        return;
    }

    kazananlar = rastgeleSec(isimListesi, kazananSayisi);
    attention.innerHTML = "<strong>🏆 Kazananlar:</strong> " + kazananlar.join(", ");
    attention.style.color = "green";

    // Yeniden çekiliş butonunu göster
    playAgain.style.display = "inline-block";
    yedekler = []; // Yeni çekilişte yedekleri sıfırla
    yedekSonuc.innerHTML = "";
});

// Yedek kazanan seçme
yedekButton.addEventListener("click", () => {
    let inputText = inputField.value.trim();
    let isimListesi = inputText.split("\n").map(isim => isim.trim()).filter(isim => isim !== "");
    let kalanKisiler = isimListesi.filter(isim => !kazananlar.includes(isim));
    let yedekSayisi = 2; // Şu an sadece 2 yedek seçiyor, istenirse artırılabilir

    if (kalanKisiler.length === 0) {
        yedekSonuc.textContent = "⚠ Yedek için yeterli kişi yok!";
        yedekSonuc.style.color = "red";
        return;
    }
    yedekler = rastgeleSec(kalanKisiler, yedekSayisi);
    yedekSonuc.innerHTML = "<strong>🔄 Yedek Kazanan:</strong> " + yedekler.join(", ");
    yedekSonuc.style.color = "orange";
});

playAgain.addEventListener("click", () => {
    kazananlar = [];
    yedekler = [];
    attention.textContent = "Kazanan: ?";
    yedekSonuc.textContent = "";
    playAgain.style.display = "none";
    inputField.value = "";
    kazananSayisiInput.value = "1";
});
// Enter tuşuna basınca çekiliş başlasın
inputField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
    }
}); 




