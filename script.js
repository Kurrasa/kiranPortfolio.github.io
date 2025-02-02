document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute('href').substring(1); 
      const targetSection = document.getElementById(targetId); 
  
      if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Back to Top Button
  const backToTopButton = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block'; // Show the button when scrolling down
    } else {
      backToTopButton.style.display = 'none'; // Hide the button when at the top
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  });
  
  // Form Validation
  const contactForm = document.querySelector('.contact form');
  
  contactForm.addEventListener('submit', (e) => {
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');
    let isValid = true;
  
   
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      isValid = false;
    }
  
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      isValid = false;
    }
  
  
    if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      isValid = false;
    }
  
    // Prevent form submission if validation fails
    if (!isValid) {
      e.preventDefault();
    }
  });
  
  
  
  
  
  