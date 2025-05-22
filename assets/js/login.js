//Controll Username and Password through API 

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginRes = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const loginData = await loginRes.json();
    if (!loginRes.ok) throw new Error(loginData.message);

    document.getElementById("loginMessage").style.display = "block";

    const accessToken = loginData.accessToken;
    const refreshToken = loginData.refreshToken;

  
    const meRes = await fetch("https://dummyjson.com/auth/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
      // credentials: "include",
    });

    const meData = await meRes.json();
    console.log("User Info:", meData);

    const refreshRes = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken, expiresInMins: 30 }),
      // credentials: "include",
    });

    const refreshData = await refreshRes.json();
    console.log("Refreshed Token:", refreshData);

  } catch (error) {
    console.error("Login Error:", error);
    alert("Login failed. Please check your username and password.");
  }
});
