// ボタン反応
document.getElementById("buyBtn").addEventListener("click", function() {
    alert("Coming Soon!");
});

// カウントダウン（ダミー）
const countdown = document.getElementById("countdown");

function updateCountdown() {
    const launchDate = new Date("2026-12-31").getTime();
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    countdown.innerHTML = "あと " + days + " 日";
}

setInterval(updateCountdown, 1000);
updateCountdown();

