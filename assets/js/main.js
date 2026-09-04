/* Shared behaviour: nav, petals, confetti, scroll reveals */

/* ---- Navigation (built once, highlights current page) ---- */
function buildNav(active){
  const pages = [
    ["index.html","Home"],
    ["gallery.html","Gallery"],
    ["puzzle.html","Puzzle"],
    ["jeopardy.html","Jeopardy"],
    ["poetry.html","Poetry"]
  ];
  const links = pages.map(([href,label])=>
    `<a href="${href}" class="${active===href?'active':''}">${label}</a>`).join("");
  const nav = document.createElement("nav");
  nav.className="nav";
  nav.innerHTML = `
    <a class="brand" href="index.html">Alinah<span class="dot">.</span></a>
    <button class="burger" aria-label="menu">☰</button>
    <div class="links">${links}</div>`;
  document.body.prepend(nav);
  const burger = nav.querySelector(".burger");
  const linksEl = nav.querySelector(".links");
  burger.addEventListener("click",()=>linksEl.classList.toggle("open"));
  // close the mobile menu after tapping a link
  linksEl.addEventListener("click",e=>{ if(e.target.tagName==="A") linksEl.classList.remove("open"); });

  // the bar tightens up once you start scrolling
  let ticking=false;
  function onScroll(){
    if(ticking) return;
    ticking=true;
    requestAnimationFrame(()=>{
      nav.classList.toggle("scrolled", window.scrollY > 24);
      ticking=false;
    });
  }
  window.addEventListener("scroll",onScroll,{passive:true});
  onScroll();
}

/* ---- Floating petals / hearts ---- */
function buildPetals(){
  const glyphs=["🌸","💛","❤","✨","🌷","💗"];
  const layer=document.createElement("div");
  layer.className="petals";
  for(let i=0;i<16;i++){
    const p=document.createElement("span");
    p.className="petal";
    // inner span drifts sideways while the outer one falls
    const inner=document.createElement("span");
    inner.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];
    inner.style.animationDuration=(5+Math.random()*5)+"s";
    inner.style.animationDelay=(-Math.random()*6)+"s";
    p.appendChild(inner);
    p.style.left=Math.random()*100+"vw";
    p.style.fontSize=(13+Math.random()*18)+"px";
    p.style.animationDuration=(11+Math.random()*12)+"s";
    p.style.animationDelay=(-Math.random()*18)+"s";
    p.style.opacity=(.28+Math.random()*.3).toFixed(2);
    layer.appendChild(p);
  }
  document.body.appendChild(layer);
}

/* ---- Scroll reveal for .fade / .tile elements, staggered by group ---- */
function initReveal(){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
  },{threshold:.12, rootMargin:"0px 0px -40px 0px"});

  // items sharing a parent come in one after another rather than all at once
  const groups=new Map();
  document.querySelectorAll(".fade,.tile").forEach(el=>{
    const parent=el.parentElement;
    const list=groups.get(parent)||[];
    list.push(el); groups.set(parent,list);
  });
  groups.forEach(list=>{
    list.forEach((el,i)=>{
      if(!el.style.getPropertyValue("--d")) el.style.setProperty("--d", Math.min(i,8)*70+"ms");
      io.observe(el);
    });
  });
  return io;
}

/* ---- Confetti ---- */
function confettiBurst(count){
  count = count||160;
  if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let c=document.getElementById("confetti");
  if(!c){c=document.createElement("canvas");c.id="confetti";document.body.appendChild(c);}
  const ctx=c.getContext("2d");
  c.width=innerWidth;c.height=innerHeight;
  const colors=["#d1587a","#c39a4a","#4e1330","#fbd8e2","#ecd6a4","#7a2247","#f1859f"];
  const parts=[];
  for(let i=0;i<count;i++){
    parts.push({
      x:Math.random()*c.width, y:-20-Math.random()*c.height*0.4,
      r:4+Math.random()*7, c:colors[Math.floor(Math.random()*colors.length)],
      vx:-2+Math.random()*4, vy:2+Math.random()*4, rot:Math.random()*6,
      vr:-.2+Math.random()*.4, shape:Math.random()<.5?0:1,
      wob:Math.random()*6, ws:.04+Math.random()*.06
    });
  }
  let frames=0;
  (function anim(){
    ctx.clearRect(0,0,c.width,c.height);
    parts.forEach(p=>{
      p.wob+=p.ws;
      p.x+=p.vx+Math.sin(p.wob)*.7; p.y+=p.vy; p.vy+=0.04; p.rot+=p.vr;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.c;
      ctx.globalAlpha = frames>210 ? Math.max(0,(260-frames)/50) : 1;
      if(p.shape===0){ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.6);}
      else{ctx.beginPath();ctx.arc(0,0,p.r*.7,0,7);ctx.fill();}
      ctx.restore();
    });
    frames++;
    if(frames<260) requestAnimationFrame(anim);
    else ctx.clearRect(0,0,c.width,c.height);
  })();
}

/* ---- boot ---- */
document.addEventListener("DOMContentLoaded",()=>{
  const active = document.body.dataset.page || "index.html";
  buildNav(active);
  buildPetals();
  initReveal();
});
