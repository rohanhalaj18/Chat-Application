const token = localStorage.getItem("token");
const username = localStorage.getItem("username");

//redirect to login page if token is not found
if (!token || !username) {
    window.location.href = "login.html";
}
document.getElementById("usernameDisplay").innerHTML = username;

const socket = io("http://localhost:5000", {
    auth: { token }
});
const messagesDiv = document.getElementById("messages");
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");



//send message 
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = messageInput.value.trim();
    if (msg) {
        socket.emit("chatMessage", { message: msg });
        appendMessage(msg, "me");
        messageInput.value = "";
    }
})

//receive message
socket.on("chatMessage", (data) => {
    if (data.username !== username) {
        appendMessage(`${data.username}: ${data.message}`, "other");
    }
})

function appendMessage(text, type) {
    const div = document.createElement("div");
    div.className = `message ${type}`;
    div.innerText = text;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});