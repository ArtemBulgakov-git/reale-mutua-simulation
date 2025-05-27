async function loadRandomCountry() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const name = randomCountry.name?.common || "Unknown country";
    document.getElementById("country-name").textContent = ` ${name}`;
    console.log("Loaded country:", name);
  } catch (error) {
    document.getElementById("country-name").textContent = "Failed to load country.";
    console.error("Fetch error:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Load random country on button click and on load
  document.getElementById("load-country").addEventListener("click", loadRandomCountry);
  loadRandomCountry();

  // Mobile hamburger toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  // Optional: Dropdown toggle on mobile for "MyLogin"
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle("show-dropdown");
    });
  }
});
