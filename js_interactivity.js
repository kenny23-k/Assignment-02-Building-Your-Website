// JavaScript for mobile navigation toggle

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const navLinks = document.querySelectorAll(".primary-navigation a");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// close menu when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    });
});


// JavaScript for back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// JavaScript for contact form validation ** a little bit of chatgpt was used for this since i was a little confused

const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const nameErr = document.getElementById('nameError');
const emailErr = document.getElementById('emailError');
const msgErr = document.getElementById('messageError');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('fullname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    nameErr.textContent = '';
    emailErr.textContent = '';
    msgErr.textContent = '';
    successMsg.classList.add('hidden');

    let isValid = true;

    if (name.value.trim() === '') {
        nameErr.textContent = 'Please enter your name.';
        isValid = false;
    }

    if (email.validity.typeMismatch || email.value.trim() === '') {
        emailErr.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (message.value.length < 10) {
        msgErr.textContent = 'Please enter a message with at least 10 characters.';
        isValid = false;
    }

    if (isValid) {
        successMsg.classList.remove('hidden');
        contactForm.reset();
    }
});

contactForm.addEventListener('input', (e) => {
    if (e.target.id === 'fullname') nameErr.textContent = '';
    if (e.target.id === 'email') emailErr.textContent = '';
    if (e.target.id === 'message') msgErr.textContent = '';
});

// FAQs section

const accordionBtns = document.querySelectorAll(".accordion-title")

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Check if the clicked button is already expanded
    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    // Loop through all buttons to close them (Mutual Exclusivity)
    accordionBtns.forEach((otherBtn) => {
      otherBtn.setAttribute("aria-expanded", "false");
      const contentId = otherBtn.getAttribute("aria-controls");
      document.getElementById(contentId).classList.add("hidden");
    });

    // If it was NOT open, open it now
    if (!isExpanded) {
      btn.setAttribute("aria-expanded", "true");
      const targetId = btn.getAttribute("aria-controls");
      document.getElementById(targetId).classList.remove("hidden");
    }
  });
});