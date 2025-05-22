document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent real submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
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

    // Simulate success
    alert("✅ Message sent successfully.");
    alert(`Dear ${name},

Thank you for reaching out to Reale Mutua. Your message has been received successfully.

Please note that this form is part of a simulated testing environment, and no real data has been stored or transmitted.

We appreciate your participation!

Warm regards,
Your Developer Artem Bulgakov`);

    form.reset();
  });
});
