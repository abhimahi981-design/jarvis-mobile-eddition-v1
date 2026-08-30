const chat = document.getElementById("chat");
const input = document.getElementById("msg");
const send = document.getElementById("send");

function add(text, who) {
    const d = document.createElement("div");
    d.className = "msg " + who;
    d.innerText = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    const t = input.value.trim();

    if (!t) return;

    add("YOU: " + t, "user");
    input.value = "";

    const processing = document.createElement("div");
    processing.className = "msg ai";
    processing.innerText = "J.A.R.V.I.S: Processing...";
    chat.appendChild(processing);

    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        const command = t.toLowerCase();

        let response;

        if (command.includes("hello") || command.includes("hi")) {
            response = "Hello, Boss. All systems are online.";
        }
        else if (command.includes("status")) {
            response = "All core systems are operational.";
        }
        else if (command.includes("who are you")) {
            response = "I am J.A.R.V.I.S., your personal AI assistant.";
        }
        else if (command.includes("time")) {
            response = "Current system time: " +
                new Date().toLocaleTimeString();
        }
        else if (command.includes("date")) {
            response = "Today's date: " +
                new Date().toLocaleDateString();
        }
        else {
            response = "Systems online. How may I assist you, Boss?";
        }

        processing.innerText = "J.A.R.V.I.S: " + response;
        chat.scrollTop = chat.scrollHeight;

    }, 1000);
}

send.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
