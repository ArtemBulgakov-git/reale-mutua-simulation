document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent real submission

    // Get form values
    const name = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = parseInt(document.getElementById("age").value, 10);
    const carModel = document.getElementById("car-model").value.trim();
    const carYear = parseInt(document.getElementById("car-year").value, 10);
    const insuranceType = document.getElementById("insurance-type").value;

    // Basic validation
    if (name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (isNaN(age) || age < 18) {
      alert("Age must be 18 or older.");
      return;
    }

    if (carModel.length < 2) {
      alert("Please enter a valid car model.");
      return;
    }

    if (isNaN(carYear) || carYear < 1990 || carYear > 2025) {
      alert("Please enter a valid registration year.");
      return;
    }

    if (!insuranceType) {
      alert("Please select an insurance type.");
      return;
    }

    // Simulate success
    alert("✅ All information inserted correctly.");
    alert(`Dear ${name},

Thank you for participating in the testing phase of my project. I truly appreciate your willingness to provide personal information as part of the simulated membership process.

Please rest assured that your data has been handled with the utmost care and was used solely within the isolated virtual environment of your local database. No personal information was transmitted or stored outside this environment.

Best regards,
Your Developer Artem Bulgakov`);


    // Optionally submit the form if using a real backend
    // form.submit();
  });
});
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('active');
});
