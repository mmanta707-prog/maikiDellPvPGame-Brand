// ===== メニュー =====
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

if(hamburger){
hamburger.addEventListener("click", ()=>{
  dropdown.classList.toggle("show");
});
}

// ===== カート =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// ===== 更新 =====
function updateCart(){

  const count = document.getElementById("cartCount");
  if(count) count.innerText = cart.length;

  const box = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  if(!box) return;

  let total = 0;
  box.innerHTML = "";

  cart.forEach(item=>{
    total += item.price;
    box.innerHTML += `<p>🛒 ${item.name} - ¥${item.price}</p>`;
  });

  if(totalEl) totalEl.innerText = total;
}

updateCart();

// ===== 購入（Stripe仮） =====
function checkout(){
  alert("Stripeはサーバー追加で本物化できます");
}

// ===== カウントダウン =====
const countdown = document.getElementById("countdown");

if(countdown){
  const target = new Date("2026-12-31").getTime();

  setInterval(()=>{
    const now = new Date().getTime();
    const diff = target - now;
    const days = Math.floor(diff/(1000*60*60*24));

    countdown.innerHTML = `⏳ 発売まであと ${days}日`;
  },1000);
}

// ===== 背景 =====
const canvas = document.getElementById("bg");

if(canvas){
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    dx:(Math.random()-0.5),
    dy:(Math.random()-0.5)
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x+=p.dx;
    p.y+=p.dy;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#4cc9ff";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();
}

