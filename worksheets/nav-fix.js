(function(){
  function fix(){
    const body=document.body;
    if(!body || !body.querySelector('.wrap')) return;
    const wrap=body.querySelector('.wrap');
    const current=location.pathname.split('/').pop().replace('.html','');
    const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
    const i=names.indexOf(current);
    const other=location.pathname.includes('/4A/')?'4B':'4A';
    const prev=i>0?names[i-1]+'.html':'index.html';
    const next=i<names.length-1?names[i+1]+'.html':'index.html';
    const makeNav=()=>{const n=document.createElement('nav');n.className='nav nav-fixed';n.innerHTML=`<a href="${prev}">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="${next}">Next →</a>`;return n};
    const old=body.querySelector('.nav');
    if(old){old.innerHTML=`<a href="${prev}">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="${next}">Next →</a>`;}
    const hero=wrap.querySelector('.hero');
    if(hero && !wrap.querySelector('.nav-top')){const n=makeNav();n.classList.add('nav-top');hero.parentNode.insertBefore(n,hero);}
    const logo=wrap.querySelector('.logo');
    if(logo && !logo.querySelector('svg')){
      logo.innerHTML=`<svg viewBox="0 0 120 120" aria-label="Mohammad Bakhshandeh MB logo"><defs><path id="mbArc" d="M 18,60 A 42,42 0 0,1 102,60"/></defs><circle cx="60" cy="60" r="56" fill="#fff" stroke="#315f7a" stroke-width="1.5"/><text class="logoName"><textPath href="#mbArc" startOffset="50%">MOHAMMAD BAKHSHANDEH</textPath></text><text x="60" y="68" text-anchor="middle" class="logoMB">MB</text></svg>`;
    }
    if(!document.getElementById('navFixStyle')){
      const s=document.createElement('style');s.id='navFixStyle';s.textContent=`.nav-top{margin:18px 0 20px}.logo{border:0!important;background:transparent!important;box-shadow:none!important}.logo svg{width:100%;height:100%;display:block}.logoName{font-size:5.2px;font-weight:800;letter-spacing:1px;fill:#23465b}.logoMB{font:900 25px Inter,Arial,sans-serif;letter-spacing:1px;fill:#315f7a}`;document.head.appendChild(s);
    }
    const sw=wrap.querySelector('.float.switch');
    if(sw){sw.href=`../${other}/index.html`;sw.textContent=other+' Worksheets';}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();