//for Public API fetch() faq.html

async function loadRandomCountry() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const name = randomCountry.name?.common || "Unknown country";
    document.getElementById("country-name").textContent = ` ${name}`;
    console.log("Loaded country:", name); // For debugging
  } catch (error) {
    document.getElementById("country-name").textContent = "Failed to load country.";
    console.error("Fetch error:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("load-country").addEventListener("click", loadRandomCountry);
  loadRandomCountry();
});
