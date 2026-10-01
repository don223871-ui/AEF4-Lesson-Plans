(function(){
  const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
  function draw(){
    const wrap=document.querySelector('.wrap');
    const head=wrap&&wrap.querySelector('.head');
    if(!head)return false;
    const current=location.pathname.split('/').pop().replace('.html','');
    if(names.indexOf(current)<0)return false;
    let logo=head.querySelector('.logo');
    if(!logo){logo=document.createElement('div');logo.className='logo';head.insertBefore(logo,head.firstChild)}
    logo.innerHTML='<svg class="mb-logo-svg" viewBox="0 0 180 180" role="img" aria-label="Mohammad Bakhshandeh — MB"><defs><path id="mbNameArc" d="M 34 74 A 60 60 0 0 1 146 74"/></defs><circle cx="90" cy="90" r="78" fill="#fff" stroke="#315f7a" stroke-width="2.2"/><circle cx="90" cy="90" r="68" fill="none" stroke="#d5e0e5" stroke-width="1.2"/><text class="mb-name"><textPath href="#mbNameArc" startOffset="50%" text-anchor="middle" textLength="128" lengthAdjust="spacingAndGlyphs">MOHAMMAD BAKHSHANDEH</textPath></text><text x="90" y="103" text-anchor="middle" class="mb-letters">MB</text></svg>';
    if(!document.getElementById('mbLogoStyle')){const s=document.createElement('style');s.id='mbLogoStyle';s.textContent='.logo{width:112px!important;height:112px!important;min-width:112px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;box-shadow:none!important;display:block!important;position:relative!important;overflow:visible!important}.mb-logo-svg{display:block!important;width:112px!important;height:112px!important;overflow:visible!important}.mb-name{font-family:Inter,Segoe UI,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:1px;fill:#23465b}.mb-letters{font-family:Inter,Segoe UI,Arial,sans-serif;font-size:38px;font-weight:900;letter-spacing:1px;fill:#315f7a}';document.head.appendChild(s)}
    return true;
  }
  let n=0;
  const timer=setInterval(()=>{if(draw()||++n>100)clearInterval(timer)},100);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',draw);else draw();
})();