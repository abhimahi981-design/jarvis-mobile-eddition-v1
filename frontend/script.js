const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const send = document.getElementById("send");

send.onclick = sendMessage;

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const text = input.value.trim();

  if (!text) return;

  addMessage("YOU: " + text, "user");

  input.value = "";

  const reply = addMessage(
    "J.A.R.V.I.S: Processing...",
    "ai"
  );

  setTimeout(() => {
    reply.innerText =
      "J.A.R.V.I.S: Systems online. How may I assist you, Boss?";
  }, 1000);
}

function addMessage(text, type) {
  const div = document.createElement("div");

  div.className = "msg " + type;
  div.innerText = text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;

  return div;
}
