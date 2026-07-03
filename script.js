// ボタン
document.getElementById("buyBtn").addEventListener("click", () => {
    alert("Coming Soon 🚀");
});

// カウントダウン
const countdown = document.getElementById("countdown");
const launchDate = new Date("2026-12-31").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    countdown.innerHTML = "発売まであと " + days + " 日";
}, 1000);

// スクロール演出
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

// マウスパーティクル背景
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2,
        dx: (Math.random()-0.5)*1,
        dy: (Math.random()-0.5)*1
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;

        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = "#4cc9ff";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    hamburger.classList.toggle("active");
});
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("show");
    hamburger.classList.toggle("active");
});

