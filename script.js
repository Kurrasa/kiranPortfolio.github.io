document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {  // Check if the element exists
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Handle the case where the target element doesn't exist
            console.error("Target element not found:", targetId);
            // You could optionally display an error message to the user.
        }
    });
});