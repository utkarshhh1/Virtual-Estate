// Animations using GSAP

// Header animations
gsap.from(".contact-title", {
    duration: 0.8, // Reduced duration for faster animation
    opacity: 0,
    y: -50,
    ease: "power2.out",
  });
  
  gsap.from(".contact-subtitle", {
    duration: 0.8, // Reduced duration
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 0.3, // Shortened delay
  });
  
  // Contact form animations
  gsap.from(".form label", {
    duration: 0.8, // Reduced duration
    opacity: 0,
    y: -20,
    stagger: 0.2, // Reduced stagger for a quicker effect
    ease: "power2.out",
    delay: 0.8, // Shortened delay
  });
  
  gsap.from(".form input, .form textarea", {
    duration: 0.7, // Reduced duration
    opacity: 0,
    x: -100,
    stagger: 0.1, // Reduced stagger
    ease: "power2.out",
    delay: 1.2, // Shortened delay
  });
  
  // Contact Details Section
  gsap.from(".contact-details h2", {
    duration: 0.8, // Reduced duration
    opacity: 0,
    y: -50,
    ease: "power2.out",
    delay: 1.8, // Shortened delay
  });
  
  gsap.from(".contact-details p", {
    duration: 0.7, // Reduced duration
    opacity: 0,
    y: 50,
    stagger: 0.2, // Reduced stagger
    ease: "power2.out",
    delay: 2.2, // Shortened delay
  });
  
  // Submit button animation without bounce effect
  gsap.from(".submit-btn", {
    duration: 0.8, // Reduced duration
    opacity: 0,
    scale: 0.5,
    ease: "power2.out", // Removed bounce effect
    delay: 1.5, // Shortened delay
  });
  