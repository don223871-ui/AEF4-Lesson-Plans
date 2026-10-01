(function(){
  const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
  function enhance(){
    const wrap=document.querySelector('.wrap'); if(!wrap)return false;
    const current=location.pathname.split('/').pop().replace('.html','');
    const i=names.indexOf(current); if(i<0)return false;
    const other=location.pathname.includes('/4A/')?'4B':'4A';
    const prev=i>0?names[i-1]+'.html':'index.html';
    const next=i<names.length-1?names[i+1]+'.html':'index.html';
    const make=()=>{const n=document.createElement('nav');n.className='nav worksheet-nav';n.innerHTML='<a href="'+prev+'">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="'+next+'">Next →</a>';return n};
    wrap.querySelectorAll('.worksheet-nav').forEach(n=>n.remove());
    const hero=wrap.querySelector('.hero'); wrap.insertBefore(make(),hero||wrap.firstChild);
    const footer=wrap.querySelector('.footer'); if(footer)wrap.insertBefore(make(),footer); else wrap.appendChild(make());
    let logo=wrap.querySelector('.logo');
    if(!logo){
      const head=wrap.querySelector('.head'); if(head){logo=document.createElement('div');logo.className='logo';head.insertBefore(logo,head.firstChild)}
    }
    if(logo){logo.innerHTML='<svg class="mb-logo-svg" viewBox="0 0 140 140" role="img" aria-label="Mohammad Bakhshandeh MB logo"><defs><path id="mbNamePath" d="M70,70 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0"/></defs><circle cx="70" cy="70" r="64" fill="#fff" stroke="#315f7a" stroke-width="2"/><text class="mb-name"><textPath href="#mbNamePath" startOffset="50%" text-anchor="middle">MOHAMMAD BAKHSHANDEH</textPath></text><text x="70" y="79" text-anchor="middle" class="mb-letters">MB</text></svg>'}
    const sw=wrap.querySelector('.float.switch'); if(sw){sw.href='../'+other+'/index.html';sw.innerHTML=other+'<b>Worksheets</b>';sw.setAttribute('aria-label','Open '+other+' Worksheets');}
    if(!document.getElementById('worksheetUiStyle')){const s=document.createElement('style');s.id='worksheetUiStyle';s.textContent='.worksheet-nav{margin:24px 0;display:flex;justify-content:center;gap:9px;flex-wrap:wrap}.worksheet-nav a{padding:10px 15px;border:1px solid #dce4e7;border-radius:10px;background:#fff;color:#17212b;text-decoration:none;font-weight:800;font-size:12px}.worksheet-nav .hub{font-weight:900}.logo{width:92px!important;height:92px!important;border:0!important;border-radius:50%!important;background:transparent!important;box-shadow:none!important;padding:0!important;overflow:visible!important}.mb-logo-svg{width:100%;height:100%;display:block;overflow:visible}.mb-name{font:800 7px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1.15px;fill:#23465b}.mb-letters{font:900 30px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1.5px;fill:#315f7a}.logo span,.logo small{display:none!important}';document.head.appendChild(s);}
    return true;
  }
  let tries=0; const timer=setInterval(()=>{if(enhance()||++tries>100)clearInterval(timer)},100);
  document.addEventListener('DOMContentLoaded',enhance);
})();