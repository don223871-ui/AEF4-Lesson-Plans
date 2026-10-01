(function(){
  const names=['grammar','vocabulary','pronunciation','reading','listening','speaking','writing','review','final'];
  function enhance(){
    const wrap=document.querySelector('.wrap'); if(!wrap)return false;
    const current=location.pathname.split('/').pop().replace('.html','');
    if(names.indexOf(current)<0)return false;
    let logo=wrap.querySelector('.logo');
    if(!logo){const head=wrap.querySelector('.head');if(!head)return false;logo=document.createElement('div');logo.className='logo';head.insertBefore(logo,head.firstChild)}
    logo.innerHTML='<svg class="mb-logo-svg" viewBox="0 0 160 160" role="img" aria-label="Mohammad Bakhshandeh — MB"><defs><path id="mbCircularName" d="M80 80 m-61 0 a61 61 0 1 1 122 0 a61 61 0 1 1 -122 0"/></defs><circle cx="80" cy="80" r="74" fill="white" stroke="#315f7a" stroke-width="2"/><circle cx="80" cy="80" r="64" fill="none" stroke="#d7e1e6" stroke-width="1"/><text class="mb-name"><textPath href="#mbCircularName" startOffset="50%" text-anchor="middle">MOHAMMAD BAKHSHANDEH</textPath></text><text x="80" y="91" text-anchor="middle" class="mb-letters">MB</text></svg>';
    if(!document.getElementById('mbLogoStyle')){const s=document.createElement('style');s.id='mbLogoStyle';s.textContent='.logo{width:96px!important;height:96px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;box-shadow:none!important;overflow:visible!important}.mb-logo-svg{display:block;width:100%;height:100%;overflow:visible}.mb-name{font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:1.35px;fill:#23465b}.mb-letters{font-family:Arial,sans-serif;font-size:34px;font-weight:900;letter-spacing:2px;fill:#315f7a}';document.head.appendChild(s)}
    return true;
  }
  let tries=0;const timer=setInterval(()=>{if(enhance()||++tries>120)clearInterval(timer)},100);document.addEventListener('DOMContentLoaded',enhance);
})();