document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarMenu.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInside && navbarMenu.classList.contains('show')) {
            navbarMenu.classList.remove('show');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});