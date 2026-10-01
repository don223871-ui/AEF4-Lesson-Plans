document.addEventListener('DOMContentLoaded',()=>{
  const wrap=document.querySelector('.wrap');
  if(!wrap) return;
  const current=location.pathname.split('/').pop().replace('.html','');
  const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
  const i=names.indexOf(current);
  const prev=i>0?names[i-1]+'.html':'index.html';
  const next=i<names.length-1?names[i+1]+'.html':'index.html';
  const other=location.pathname.includes('/4A/')?'4B':'4A';

  const navHTML=()=>`<a href="${prev}">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="${next}">Next →</a>`;

  const existing=wrap.querySelector('.nav');
  if(existing) existing.innerHTML=navHTML();

  const hero=wrap.querySelector('.hero');
  if(hero && !wrap.querySelector('.nav-top')){
    const top=document.createElement('nav');
    top.className='nav nav-top';
    top.innerHTML=navHTML();
    hero.parentNode.insertBefore(top,hero);
  }

  document.querySelectorAll('.logo').forEach(el=>{
    el.innerHTML=`<svg viewBox="0 0 120 120" aria-label="Mohammad Bakhshandeh MB logo">
      <defs><path id="mbArc" d="M18,60 A42,42 0 0,1 102,60"/></defs>
      <circle cx="60" cy="60" r="56" fill="#fff" stroke="#315f7a" stroke-width="1.5"/>
      <text class="logoName"><textPath href="#mbArc" startOffset="50%" text-anchor="middle">MOHAMMAD BAKHSHANDEH</textPath></text>
      <text x="60" y="69" text-anchor="middle" class="logoMB">MB</text>
    </svg>`;
  });

  if(!document.getElementById('finalFixStyle')){
    const s=document.createElement('style');
    s.id='finalFixStyle';
    s.textContent=`
      .nav-top{margin:18px 0 20px}
      .nav .hub{background:#17212b!important;color:#fff!important;border-color:#17212b!important}
      .logo{border:0!important;background:transparent!important;box-shadow:none!important;width:92px;height:92px}
      .logo svg{width:100%;height:100%;display:block}
      .logoName{font-family:Inter,Arial,sans-serif;font-size:5.2px;font-weight:800;letter-spacing:1px;fill:#23465b}
      .logoMB{font-family:Georgia,serif;font-size:25px;font-weight:700;letter-spacing:-1px;fill:#315f7a}
    `;
    document.head.appendChild(s);
  }

  const sw=wrap.querySelector('.float.switch');
  if(sw){
    sw.href=`../${other}/index.html`;
    sw.textContent=`${other} Worksheets`;
  }
});