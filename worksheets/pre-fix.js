(function(){
  const native=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML');
  if(!native||!native.set)return;
  const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
  function enhance(){
    const wrap=document.querySelector('.wrap'); if(!wrap)return;
    const current=location.pathname.split('/').pop().replace('.html','');
    const i=names.indexOf(current); if(i<0)return;
    const other=location.pathname.includes('/4A/')?'4B':'4A';
    const prev=i>0?names[i-1]+'.html':'index.html';
    const next=i<names.length-1?names[i+1]+'.html':'index.html';
    wrap.querySelectorAll('.nav').forEach(n=>n.remove());
    const make=()=>{const n=document.createElement('nav');n.className='nav worksheet-nav';n.innerHTML='<a href="'+prev+'">← Previous</a><a class="hub" href="../index.html">⌂ Main Hub</a><a href="'+next+'">Next →</a>';return n};
    const hero=wrap.querySelector('.hero'); wrap.insertBefore(make(),hero||wrap.firstChild);
    const footer=wrap.querySelector('.footer'); if(footer)wrap.insertBefore(make(),footer); else wrap.appendChild(make());
    const logo=wrap.querySelector('.logo');
    if(logo)logo.innerHTML='<svg viewBox="0 0 120 120" role="img" aria-label="Mohammad Bakhshandeh MB logo"><defs><path id="mbTextCircle" d="M60 60 m-43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0"/></defs><circle cx="60" cy="60" r="56" fill="#fff" stroke="#315f7a" stroke-width="1.6"/><text class="logoName"><textPath href="#mbTextCircle" startOffset="50%">MOHAMMAD BAKHSHANDEH</textPath></text><text x="60" y="67" text-anchor="middle" class="logoMB">MB</text></svg>';
    const sw=wrap.querySelector('.float.switch'); if(sw){sw.href='../'+other+'/index.html';sw.innerHTML=other+'<b>Worksheets</b>';sw.setAttribute('aria-label','Open '+other+' Worksheets');}
    if(!document.getElementById('worksheetUiStyle')){const s=document.createElement('style');s.id='worksheetUiStyle';s.textContent='.worksheet-nav{margin:24px 0;display:flex;justify-content:center;gap:9px;flex-wrap:wrap}.worksheet-nav a{padding:10px 15px;border:1px solid #dce4e7;border-radius:10px;background:#fff;color:#17212b;text-decoration:none;font-weight:800;font-size:12px}.worksheet-nav .hub{font-weight:900}.logo{border:0!important;background:transparent!important;box-shadow:none!important}.logo svg{width:100%;height:100%;display:block}.logoName{font:800 5.6px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1px;fill:#23465b}.logoMB{font:900 25px Inter,Segoe UI,Arial,sans-serif;letter-spacing:1px;fill:#315f7a}';document.head.appendChild(s);}
  }
  let busy=false;
  Object.defineProperty(Element.prototype,'innerHTML',{configurable:native.configurable,enumerable:native.enumerable,get:native.get,set:function(v){native.set.call(this,v);if(this===document.body&&!busy){busy=true;try{enhance()}finally{busy=false}}}});
})();