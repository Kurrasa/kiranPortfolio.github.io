// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         if (targetElement) {  // Check if the element exists
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         } else {
//             // Handle the case where the target element doesn't exist
//             console.error("Target element not found:", targetId);
//             // You could optionally display an error message to the user.
//         }
//     });
// });


        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile menu toggle
        const menuButton = document.querySelector('.mobile-menu');
        const nav = document.querySelector('nav ul');
        
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('show')
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
        })

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    nav.classList.remove('show');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            })
        })
    