const baseURL = "http://localhost:5000/api/auth";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Register User
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    try {
      const res = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        window.location.href = "chat.html"; // To be created next
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  });
}

// Login User
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const res = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        window.location.href = "chat.html";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  });
}
