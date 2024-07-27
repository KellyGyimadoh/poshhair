
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) { // Only collapse for small screens
          navbarToggler.click(); // Simulate the toggler button click to collapse the navbar
        }
      });
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });

