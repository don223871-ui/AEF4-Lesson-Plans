(function(){
  const oldWrite=document.write.bind(document);
  const logoOld='<div class="logo"><span>MB</span><small>Mohammad Bakhshandeh</small></div>';
  const logoNew='<div class="logo"><svg class="mb-logo-svg" viewBox="0 0 180 180" role="img" aria-label="Mohammad Bakhshandeh — MB"><defs><path id="mbLogoCircle" d="M90 22 A68 68 0 1 1 89.9 158 A68 68 0 1 1 90 22"/></defs><circle cx="90" cy="90" r="78" fill="#fff" stroke="#315f7a" stroke-width="2.5"/><circle cx="90" cy="90" r="64" fill="none" stroke="#d5e0e5" stroke-width="1.4"/><text class="mb-name"><textPath href="#mbLogoCircle" startOffset="17%" textLength="115" lengthAdjust="spacingAndGlyphs">MOHAMMAD BAKHSHANDEH</textPath></text><text x="90" y="103" text-anchor="middle" class="mb-letters">MB</text></svg></div>';
  const style='<style id="mbLogoStyle">.logo{width:112px!important;height:112px!important;min-width:112px!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;box-shadow:none!important;display:block!important;position:relative!important;overflow:visible!important}.mb-logo-svg{display:block!important;width:112px!important;height:112px!important;overflow:visible!important}.mb-name{font-family:Inter,Segoe UI,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:1px;fill:#23465b}.mb-letters{font-family:Inter,Segoe UI,Arial,sans-serif;font-family:Inter,Segoe UI,Arial,sans-serif;font-size:39px;font-weight:900;letter-spacing:2px;fill:#315f7a}</style>';
  document.write=function(html){
    if(typeof html==='string'){
      html=html.replace(logoOld,logoNew);
      html=html.replace('</style>',style+'</style>');
    }
    oldWrite(html);
  };
})();