async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";

  // Typing simulation
  appendMessage("bot", "Typing...");

  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    // Remove typing message
    document.querySelector(".bot-message:last-child").remove();

    appendMessage("bot", data.reply);
  } catch (err) {
    document.querySelector(".bot-message:last-child").remove();
    appendMessage("bot", "❌ Error: Could not reach server.");
    console.error(err);
  }
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
