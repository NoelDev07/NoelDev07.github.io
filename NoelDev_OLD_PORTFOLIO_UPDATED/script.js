const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const cursor=document.querySelector('.cursor-glow');
window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});

const observer=new IntersectionObserver(entries=>{entries.forEach((entry,i)=>{if(entry.isIntersecting){entry.target.style.transitionDelay=(i%5)*60+'ms';entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
