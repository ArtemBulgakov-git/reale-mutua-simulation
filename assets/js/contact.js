document.addEventListener("DOMContentLoaded", () => {
  // --- Form Validation ---
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name.length < 2) {
        alert("Please enter a valid name (at least 2 characters).");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
      }

      if (message.length < 10) {
        alert("Your message should be at least 10 characters long.");
        return;
      }

      alert("✅ Message sent successfully.");
      alert(`Dear ${name},

Thank you for reaching out to Reale Mutua. Your message has been received successfully.

Please note that this form is part of a simulated testing environment, and no real data has been stored or transmitted.

We appreciate your participation!

Warm regards,
Your Developer Artem Bulgakov`);

      form.reset();
    });
  }

  // --- Mobile Navbar Toggle ---
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link =>
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      })
    );
  }
});
