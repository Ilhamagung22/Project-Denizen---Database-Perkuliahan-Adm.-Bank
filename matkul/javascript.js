// Buat Jam Digital
function showTime() {
  var date = new Date();
  var d = date.getDay();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  // Buat Hari
  if (d == 1) {
    d = "Senin";
  }

  if (d == 2) {
    d = "Selasa";
  }

  if (d == 3) {
    d = "Rabu";
  }

  if (d == 4) {
    d = "Kamis";
  }

  if (d == 5) {
    d = "Jumat";
  }

  if (d == 6) {
    d = "Sabtu";
  }

  if (d == 0) {
    d = "Minggu";
  }

  // Buat Jam
  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = d + ", " + h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

// Toggle class active buat hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  event.preventDefault();
};

// Toggle class active buat search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = () => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  event.preventDefault();
};

// kalo diklik dimanapun buat ilangin elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
