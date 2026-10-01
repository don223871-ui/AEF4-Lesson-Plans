(function(){
function fix(){
 document.querySelectorAll('.logo').forEach(function(el){
  el.innerHTML='<svg class="mb-logo" viewBox="0 0 120 120" role="img" aria-label="Mohammad Bakhshandeh MB logo"><defs><path id="mbNameCircle" d="M60 10 A50 50 0 1 1 59.99 10" fill="none"/></defs><circle cx="60" cy="60" r="56" fill="#fff" stroke="#315f7a" stroke-width="1.5"/><circle cx="60" cy="60" r="48" fill="none" stroke="#dce4e7" stroke-width=".8"/><text class="mb-name"><textPath href="#mbNameCircle" startOffset="0%">MOHAMMAD BAKHSHANDEH</textPath></text><text x="60" y="69" text-anchor="middle" class="mb-letters">MB</text></svg>';
 });
 if(!document.getElementById('logoFixStyleV8')){
  var s=document.createElement('style');s.id='logoFixStyleV8';s.textContent='.logo{width:82px!important;height:82px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;box-shadow:none!important;overflow:visible!important;display:block!important}.mb-logo{width:82px!important;height:82px!important;display:block;overflow:visible}.mb-name{font-family:Inter,Segoe UI,Arial,sans-serif;font-size:6.7px;font-weight:800;letter-spacing:1.05px;fill:#23465b}.mb-letters{font-family:Inter,Segoe UI,Arial,sans-serif;font-size:29px;font-weight:900;letter-spacing:1.5px;fill:#315f7a}';document.head.appendChild(s)
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();