document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Responsive Hamburger Menu
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links li a");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Toggle aria-expanded attribute for accessibility
      const isExpanded = navLinks.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isExpanded);
      // Change icon on toggle
      const icon = hamburger.querySelector("i");
      if (isExpanded) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when a link is clicked (for single-page feel on mobile)
    navLinkItems.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.setAttribute("aria-expanded", false);
          const icon = hamburger.querySelector("i");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // Sticky Navbar - CSS handles this with position: sticky, but you might add a class for styling if needed
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Subtle Scroll Animations (Slide-in)
  const scrollElements = document.querySelectorAll(".slide-in-on-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        // Optional: hide element again if it's scrolled out of view upwards
        // hideScrollElement(el);
      }
    });
  };

  if (scrollElements.length > 0) {
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
    // Trigger once on load for elements already in view
    handleScrollAnimation();
  }

  // Basic Form Validation
  const validateForm = (form) => {
    let isValid = true;
    const requiredFields = form.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
      // Reset error display
      field.style.borderColor = ""; // Reset border color
      const errorMsgId = field.id + "-error";
      const existingErrorMsg = document.getElementById(errorMsgId);
      if (existingErrorMsg) existingErrorMsg.remove();

      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = "var(--primary-red)"; // Use CSS variable
        const error = document.createElement("p");
        error.id = errorMsgId;
        error.textContent =
          field.previousElementSibling &&
          field.previousElementSibling.tagName === "LABEL"
            ? `${field.previousElementSibling.textContent} is required.`
            : "This field is required.";
        error.style.color = "var(--primary-red)";
        error.style.fontSize = "0.85rem";
        error.style.marginTop = "4px";
        field.parentNode.insertBefore(error, field.nextSibling);
      }

      if (field.type === "email") {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(field.value.trim())) {
          isValid = false;
          field.style.borderColor = "var(--primary-red)";
          const error = document.createElement("p");
          error.id = errorMsgId;
          error.textContent = "Please enter a valid email address.";
          error.style.color = "var(--primary-red)";
          error.style.fontSize = "0.85rem";
          error.style.marginTop = "4px";
          // Remove old error if exists before inserting new one
          const oldError = document.getElementById(errorMsgId);
          if (oldError) oldError.remove();
          field.parentNode.insertBefore(error, field.nextSibling);
        }
      }
    });
    return isValid;
  };

  const contactForm = document.getElementById("main-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateForm(this)) {
        // alert('Form submitted successfully! (Placeholder)');
        // In a real application, you would submit the form data here.
        // For now, show a success message and reset the form
        const successMessage = document.createElement("p");
        successMessage.textContent =
          "Thank you for your message! We will get back to you soon.";
        successMessage.style.color = "green";
        successMessage.style.marginTop = "10px";
        this.parentNode.insertBefore(successMessage, this.nextSibling);
        this.reset();
        setTimeout(() => successMessage.remove(), 5000); // Remove message after 5s
      } else {
        // alert('Please fill out all required fields correctly. (Placeholder)');
      }
    });
  }

  const careersForm = document.getElementById("careers-inquiry-form");
  if (careersForm) {
    careersForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateForm(this)) {
        // alert('Inquiry submitted successfully! (Placeholder)');
        const successMessage = document.createElement("p");
        successMessage.textContent =
          "Thank you for your inquiry! We will get back to you soon.";
        successMessage.style.color = "green";
        successMessage.style.marginTop = "10px";
        this.parentNode.insertBefore(successMessage, this.nextSibling);
        this.reset();
        setTimeout(() => successMessage.remove(), 5000);
      } else {
        // alert('Please fill out all required fields correctly. (Placeholder)');
      }
    });
  }

  // Active Nav Link Styling based on current page
  const currentPath = window.location.pathname.split("/").pop();
  if (navLinks) {
    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      const linkPath = link.getAttribute("href").split("/").pop();
      if (
        linkPath === currentPath ||
        (currentPath === "" && linkPath === "index.html")
      ) {
        link.classList.add("active");
      }
    });
  }

  // Custom Gallery Lightbox
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const galleryThumbs = document.querySelectorAll(".gallery-thumb");
  const closeLightbox = document.querySelector(".lightbox-close");
  const prevButton = document.querySelector(".lightbox-prev");
  const nextButton = document.querySelector(".lightbox-next");

  let currentImageIndex;
  let images = [];

  if (lightboxModal) {
    // Check if lightbox elements exist on the page
    galleryThumbs.forEach((thumb, index) => {
      images.push({ src: thumb.href, alt: thumb.querySelector("img").alt });
      thumb.addEventListener("click", (e) => {
        e.preventDefault();
        currentImageIndex = parseInt(thumb.dataset.index);
        openLightbox(currentImageIndex);
      });
    });

    const openLightbox = (index) => {
      lightboxModal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent background scrolling
      updateLightboxImage(index);
    };

    const updateLightboxImage = (index) => {
      if (index >= images.length) {
        currentImageIndex = 0;
      } else if (index < 0) {
        currentImageIndex = images.length - 1;
      } else {
        currentImageIndex = index;
      }
      lightboxImg.src = images[currentImageIndex].src;
      lightboxCaption.textContent = images[currentImageIndex].alt; // Use alt text as caption
    };

    const changeImage = (step) => {
      updateLightboxImage(currentImageIndex + step);
    };

    if (closeLightbox) {
      closeLightbox.onclick = () => {
        lightboxModal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
      };
    }

    if (prevButton) {
      prevButton.onclick = () => changeImage(-1);
    }

    if (nextButton) {
      nextButton.onclick = () => changeImage(1);
    }

    // Close lightbox if user clicks outside the image content
    window.onclick = (event) => {
      if (event.target == lightboxModal) {
        lightboxModal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
      }
    };

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (lightboxModal.style.display === "block") {
        if (e.key === "Escape") {
          closeLightbox.onclick();
        }
        if (e.key === "ArrowLeft") {
          changeImage(-1);
        }
        if (e.key === "ArrowRight") {
          changeImage(1);
        }
      }
    });
  }
});
