const btn = document.getElementById("buyBtn");

/* 🔘 ボタン演出 */
btn.addEventListener("click", () => {
    btn.innerText = "開発中...";
    btn.style.background = "#00ff88";
    btn.style.boxShadow = "0 0 40px rgba(0,255,136,0.6)";

    setTimeout(() => {
        btn.innerText = "COMING SOON";
        btn.style.background = "#4cc9ff";
        btn.style.boxShadow = "0 0 25px rgba(76,201,255,0.4)";
    }, 2000);
});

/* ✨ スクロールでふわっと出す */
const elements = document.querySelectorAll("section, .mouse-container");

function showOnScroll(){
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if(rect.top < window.innerHeight - 100){
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "0.6s";
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

/* 🌌 初期状態 */
elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
});
.mouse{
    position:relative;
    overflow:hidden;
}

/* 光の反射 */
.mouse::after{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent);
    top:0;
    left:-100%;
    animation:shine 3s infinite;
}

@keyframes shine{
    0%{left:-100%;}
    50%{left:100%;}
    100%{left:100%;}
}
const items = document.querySelectorAll("section, .mouse-container");

function show(){
  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", show);
show();
