document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);
    
   
    const toggleMenu = (isOpen) => {
        hamburger.classList.toggle('active', isOpen);
        navLinks.classList.toggle('active', isOpen);
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggleMenu(!hamburger.classList.contains('active')));

    
    const closeMenu = () => toggleMenu(false);

    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    overlay.addEventListener('click', closeMenu);

   
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    mediaQuery.addEventListener('change', (e) => {
        if (e.matches) closeMenu();
    });
});



