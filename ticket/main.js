const mainBox = document.getElementById("mainBox");

mainBox.addEventListener("click", () => {
  mainBox.style.display = "none"; // Ana kutuyu gizle

  // Dört küçük kutu oluştur
  const part1 = document.createElement("div");
  const part2 = document.createElement("div");
  const part3 = document.createElement("div");
  const part4 = document.createElement("div");

  // Hepsine "part" sınıfını ve her birine özel sınıf ekle
  part1.classList.add("part", "part1");
  part2.classList.add("part", "part2");
  part3.classList.add("part", "part3");
  part4.classList.add("part", "part4");

  // Kutuları sayfaya ekle
  document.querySelector(".container").appendChild(part1);
  document.querySelector(".container").appendChild(part2);
  document.querySelector(".container").appendChild(part3);
  document.querySelector(".container").appendChild(part4);

  // Kutular 2 saniye sonra kaybolduktan sonra DOM'dan kaldır
  setTimeout(() => {
    part1.remove();
    part2.remove();
    part3.remove();
    part4.remove();
  }, 2000);
});
