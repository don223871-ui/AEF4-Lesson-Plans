(function(){
  function fix(){
    const body=document.body;
    const wrap=body&&body.querySelector('.wrap');
    if(!wrap)return;
    const current=location.pathname.split('/').pop().replace('.html','');
    const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
    const i=names.indexOf(current);
    if(i<0)return;
    const other=location.pathname.includes('/4A/')?'4B':'4A';
    const prev=i>0?names[i-1]+'.html':'index.html';
    const next=i<names.length-1?names[i+1]+'.html':'index.html';
    const navHTML=`<a href="${prev}">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="${next}">Next →</a>`;
    wrap.querySelectorAll('.nav').forEach(n=>n.remove());
    const hero=wrap.querySelector('.hero');
    const top=document.createElement('nav');
    top.className='nav nav-top';
    top.innerHTML=navHTML;
    if(hero)hero.parentNode.insertBefore(top,hero);else wrap.insertBefore(top,wrap.firstChild);
    const footer=wrap.querySelector('.footer');
    const bottom=document.createElement('nav');
    bottom.className='nav nav-bottom';
    bottom.innerHTML=navHTML;
    if(footer)footer.parentNode.insertBefore(bottom,footer);else wrap.appendChild(bottom);
    const logo=wrap.querySelector('.logo');
    if(logo){
      logo.innerHTML=`<svg viewBox="0 0 120 120" aria-label="Mohammad Bakhshandeh MB logo"><defs><path id="mbCircleFull" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs><circle cx="60" cy="60" r="56" fill="#fff" stroke="#315f7a" stroke-width="1.5"/><text class="logoName"><textPath href="#mbCircleFull" startOffset="50%" text-anchor="middle">MOHAMMAD BAKHSHANDEH</textPath></text><text x="60" y="68" text-anchor="middle" class="logoMB">MB</text></svg>`;
    }
    const sw=wrap.querySelector('.float.switch');
    if(sw){sw.href=`../${other}/index.html`;sw.textContent=other+' Worksheets';}
    if(!document.getElementById('navFixStyle')){
      const s=document.createElement('style');s.id='navFixStyle';s.textContent=`.nav-top{margin:18px 0 20px}.nav-bottom{margin:28px 0 8px}.logo{border:0!important;background:transparent!important;box-shadow:none!important}.logo svg{width:100%;height:100%;display:block}.logoName{font-size:5.2px;font-weight:800;letter-spacing:1px;fill:#23465b}.logoMB{font:900 25px Inter,Arial,sans-serif;letter-spacing:1px;fill:#315f7a}`;document.head.appendChild(s);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();