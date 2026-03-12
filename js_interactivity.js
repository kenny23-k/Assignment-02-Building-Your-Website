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