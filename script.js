const clockEl = document.getElementById("clock");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggleFormat");

let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let ampm = '';
  if (!is24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
  }

  const formattedHours = String(hours).padStart(2, "0");
  const colon = `<span class="blink">:</span>`;

  clockEl.innerHTML = `${formattedHours}${colon}${minutes}${colon}${seconds}`;
  ampmEl.textContent = is24Hour ? '' : ampm;
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, dateOptions);
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour
    ? "Switch to 12-Hour Format"
    : "Switch to 24-Hour Format";
});

setInterval(updateClock, 1000);
updateClock(); 
