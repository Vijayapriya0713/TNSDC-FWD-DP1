// Scroll to section

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}

// Handle contact form (just shows message)

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault()

  document.querySelector(".form-message").textContent = "✅ Your message has been sent!";

  this.reset();

});