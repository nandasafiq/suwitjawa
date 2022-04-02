function getpilihancomputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function gethasil(comp, player) {
  var hasil = "";
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
  return "memasukkan pilihan yang salah!";
}

function putar() {
  const imgcomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktumulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktumulai > 1000) {
      clearInterval;
      return;
    }
    imgcomputer.setAttribute("src", "img/" + gambar[i++] + ".png");

    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihancomputer = getpilihancomputer();
    const pilihanplayer = pil.className;
    const hasil = gethasil(pilihancomputer, pilihanplayer);

    putar();
    setTimeout(function () {
      const imgcomputer = document.querySelector(".img-komputer");
      imgcomputer.setAttribute("src", "img/" + pilihancomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
