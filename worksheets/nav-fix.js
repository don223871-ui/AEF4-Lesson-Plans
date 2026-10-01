(function(){
  const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
  function logo(){
    const el=document.querySelector('.logo');
    if(!el)return;
    el.innerHTML='<svg viewBox="0 0 120 120" role="img" aria-label="Mohammad Bakhshandeh MB logo"><defs><path id="mbTextCircle" d="M60 60 m-43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0"/></defs><circle cx="60" cy="60" r="56" fill="#fff" stroke="#315f7a" stroke-width="1.6"/><text class="logoName"><textPath href="#mbTextCircle" startOffset="50%">MOHAMMAD BAKHSHANDEH</textPath></text><text x="60" y="67" text-anchor="middle" class="logoMB">MB</text></svg>';
  }
  function build(){
    const wrap=document.querySelector('.wrap');
    if(!wrap)return false;
    const current=location.pathname.split('/').pop().replace('.html','');
    const i=names.indexOf(current);
    if(i<0)return false;
    const other=location.pathname.includes('/4A/')?'4B':'4A';
    const prev=i>0?names[i-1]+'.html':'index.html';
    const next=i<names.length-1?names[i+1]+'.html':'index.html';
    const html='<a href="'+prev+'">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="'+next+'">Next →</a>';
    wrap.querySelectorAll('.worksheet-nav').forEach(x=>x.remove());
    const hero=wrap.querySelector('.hero');
    const top=document.createElement('nav');top.className='nav worksheet-nav nav-top';top.innerHTML=html;
    if(hero)hero.parentNode.insertBefore(top,hero);else wrap.insertBefore(top,wrap.firstChild);
    const footer=wrap.querySelector('.footer');
    const bottom=document.createElement('nav');bottom.className='nav worksheet-nav nav-bottom';bottom.innerHTML=html;
    if(footer)footer.parentNode.insertBefore(bottom,footer);else wrap.appendChild(bottom);
    logo();
    const sw=wrap.querySelector('.float.switch');
    if(sw){sw.href='../'+other+'/index.html';sw.innerHTML=other+'<b>Worksheets</b>';sw.setAttribute('aria-label','Open '+other+' Worksheets');}
    if(!document.getElementById('worksheetNavStyle')){
      const s=document.createElement('style');s.id='worksheetNavStyle';s.textContent='.nav-top{margin:18px 0 22px}.nav-bottom{margin:28px 0 10px}.worksheet-nav .hub{font-weight:900}.logo{border:0!important;background:transparent!important;box-shadow:none!important}.logo svg{width:100%;height:100%;display:block}.logoName{font:800 5.6px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1px;fill:#23465b}.logoMB{font:900 25px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1px;fill:#315f7a}.float.switch{display:grid!important;place-items:center!important}.float.switch b{display:none!important}';document.head.appendChild(s);
    }
    return true;
  }
  let tries=0;
  const run=()=>{if(build()||tries++>40){clearInterval(timer);}};
  const timer=setInterval(run,100);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();