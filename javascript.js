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

// List Tugas Filter
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Experimen bikin coundown tugas aja
document.addEventListener("DOMContentLoaded", function () {
  const tasks = [
    {
      course: "Kewirausahaan",
      task: "Presentasi Pitching di Auditorium",
      deadline: "2024-06-10T08:00:00",
    },
    {
      course: "Aplikasi Komputer Akuntansi",
      task: "Membuat Makalah Akuntansi Mengenai Analisis Pasar LQ-45",
      deadline: "2024-06-07T23:59:59",
    },
    {
      course: "Bahasa Inggris",
      task: "Project UAS: Membuat Video Individu",
      deadline: "2024-06-07T23:59:59",
    },
    {
      course: "Kewirausahaan",
      task: "Mengumpulkan Screenshot Komentar Video Latihan Teknik Presentasi",
      deadline: "2024-06-06T23:54:59",
    },
    {
      course: "Praktik Layanan Nasabah",
      task: "Ujian Praktik Role Play",
      deadline: "2024-06-05T08:00:00",
    },
    {
      course: "Bahasa Inggris",
      task: "Quiz 2 dan Konsultasi Project UAS",
      deadline: "2024-05-31T23:59:59",
    },
    {
      course: "Bahasa Inggris",
      task: "Mengumpulkan Laporan Tertulis Project UAS pada Tugas Written Report",
      deadline: "2024-05-31T23:59:59",
    },
    {
      course: "Pengantar Hukum Bisnis",
      task: "Tugas Pribadi > Membuat Makalah Mengenai Undang-Undang",
      deadline: "2024-05-29T12:00:00",
    },
    {
      course: "Aplikasi Komputer Akuntansi",
      task: "Praktik Zahir Pertemuan 15 | Rabu, 23 Mei 2024",
      deadline: "2024-05-28T08:00:00",
    },
    {
      course: "Bank dan Transaksi Keuangan",
      task: "Quiz 2 dan Presentasi Kelompok Tambahan",
      deadline: "2024-05-28T08:00:00",
    },
    {
      course: "Agama Islam",
      task: "Membuat LTM 13 Mengenai Islam dan Perempuan",
      deadline: "2024-05-26T23:59:59",
    },
    {
      course: "Kewirausahaan",
      task: "Mengumpulkan Video dan Pitchdeck Kelompok",
      deadline: "2024-05-26T23:59:59",
    },
    {
      course: "Kewirausahaan",
      task: "Mengumpulkan Proposal Bisnis yang Disempurnakan",
      deadline: "2024-05-25T00:00:00",
    },
    {
      course: "Bahasa Inggris",
      task: "Membuat Email pada Tugas Emailing Task",
      deadline: "2024-05-24T23:59:59",
    },
    {
      course: "Kewirausahaan",
      task: "Mengumpulkan Screenshot Komentar Video Public Speaking",
      deadline: "2024-05-24T23:54:00",
    },
    {
      course: "Kewirausahaan",
      task: "Mengumpulkan Lembar Kerja 8 ERRC dan Business Model Canvas",
      deadline: "2024-05-23T23:55:00",
    },
    {
      course: "Agama Islam",
      task: "Membuat LTM 12 Mengenai Islam dan Media di Era Post-Truth",
      deadline: "2024-05-19T23:59:59",
    },

    // Tambahkan tugas lainnya di sini
  ];

  const taskList = document.getElementById("taskList");

  tasks.forEach((task) => {
    const row = document.createElement("tr");

    // Format due date
    const deadlineDate = new Date(task.deadline);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDeadline = `Due date: ${deadlineDate.toLocaleDateString(
      "id-ID",
      options
    )}`;

    row.innerHTML = `
            <td>${task.course}</td>
            <td>${task.task}<span class="due-date">${formattedDeadline}</span></td>
            <td id="${task.task}-countdown"></td>
        `;
    taskList.appendChild(row);

    updateCountdown(task, row);
    setInterval(() => updateCountdown(task, row), 1000);
  });

  function updateCountdown(task, row) {
    const countdownElement = document.getElementById(`${task.task}-countdown`);
    const deadline = new Date(task.deadline).getTime();
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
      row.classList.add("completed");
      countdownElement.textContent = "Deadline Passed";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.textContent = `${days} Hari ${hours} Jam ${minutes} Menit`;
    }
  }
});
