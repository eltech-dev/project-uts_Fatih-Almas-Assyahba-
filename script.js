// ==== Smooth section switching ====
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));

    // Ganti class active di navbar
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');

    // Ganti section yang tampil
    sections.forEach(section => section.classList.remove('active'));
    target.classList.add('active');

    // Scroll ke atas secara halus
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ==== Popup form ====
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

    this.reset();
  });
}
