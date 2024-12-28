//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika menu hamberger di click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

document.getElementById("sendButton").addEventListener("click", function () {
  // Ambil nilai dari form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validasi sederhana
  if (!name || !email || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Buat URL untuk API WhatsApp
  const phoneNumber = "6281218422303"; // Ganti dengan nomor WA Anda
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo%20Mimin%0ASaya%20*${encodeURIComponent(
    name
  )}*%0AEmail%20Saya%20*${encodeURIComponent(
    email
  )}*%0A%0A*${encodeURIComponent(message)}*`;

  // Redirect ke WhatsApp
  window.open(whatsappUrl, "_blank");
});
