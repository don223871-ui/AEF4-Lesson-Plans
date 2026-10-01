(function(){
  const logo=`<span class="brand-mark"><b>MB</b><small>MOHAMMAD<br>BAKHSHANDEH</small></span>`;
  const style=`<style id="mbLogoStyle">.logo{width:44px!important;height:44px!important;min-width:44px!important;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;display:block!important;position:relative!important;overflow:visible!important}.brand-mark{width:44px;height:44px;border:1px solid #9aa1a0;border-radius:50%;display:grid;place-items:center;position:relative}.brand-mark b{font-size:13px;letter-spacing:.05em}.brand-mark small{position:absolute;inset:-1px;display:grid;place-items:center;font-size:3.2px;line-height:1.1;letter-spacing:.18em;text-align:center;transform:rotate(-38deg);font-weight:700;color:#5d6768}</style>`;
  function apply(){
    const el=document.querySelector('.logo');
    if(!el)return;
    if(!el.querySelector('.brand-mark'))el.innerHTML=logo;
    if(!document.getElementById('mbLogoStyle'))document.head.insertAdjacentHTML('beforeend',style);
  }
  const start=()=>{apply();const obs=new MutationObserver(apply);obs.observe(document.body,{childList:true,subtree:true});setTimeout(()=>obs.disconnect(),10000)};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();