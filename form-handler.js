const params = new URLSearchParams(window.location.search);
const eventName = params.get("event") || "Event";

const feeMap = {
  "CodeCraft": 100,
  "DebugDuel": 80,
  "ByteDance": 120,
  "RoboRush": 150,
  "InkVerse": 60,
  "StageStorm": 90
};

const fee = feeMap[eventName] || 50;
document.getElementById("eventTitle").textContent = `Register for ${eventName}`;
document.getElementById("eventFee").textContent = `Entry Fee: ₹${fee}`;

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = new FormData(this);
  const name = form.get("name");
  const gender = form.get("gender");
  const suc = form.get("suc");
  const email = form.get("email");

  const msg = `Dear ${name}, you registered for ${eventName}!`;
  const motivation = gender === "female"
    ? "🌸 Girls who code change the world. Go lead it!"
    : "💪 The future belongs to the ones who build it — go conquer!";

  document.getElementById("confirmMsg").innerHTML = `${msg}<br><strong>${motivation}</strong>`;

  const qrImg = document.createElement("img");
  qrImg.src = "qr.jpg";
  qrImg.alt = "QR Code";
  document.getElementById("qrcode").appendChild(qrImg);

  document.getElementById("confirmationBox").style.display = "block";
  this.style.display = "none";
});
