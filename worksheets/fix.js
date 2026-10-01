document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');
  if(nav){
    const links=nav.querySelectorAll('a');
    if(links[1]){links[1].href='../../index.html';links[1].textContent='⌂ Main Hub';}
    if(links[0] && links[0].getAttribute('href')==='index.html') links[0].textContent='← Previous';
    if(links[2] && links[2].getAttribute('href')==='index.html') links[2].textContent='Next →';
  }
  document.querySelectorAll('.logo').forEach(el=>{
    el.innerHTML=`<svg viewBox="0 0 100 100" aria-label="Mohammad Bakhshandeh MB logo">
      <defs><path id="mbCircle" d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"/></defs>
      <circle cx="50" cy="50" r="47" fill="#fff" stroke="#315f7a" stroke-width="1.5"/>
      <text font-family="Inter,Arial,sans-serif" font-size="7" font-weight="800" letter-spacing="1.15" fill="#315f7a"><textPath href="#mbCircle" startOffset="50%" text-anchor="middle">MOHAMMAD BAKHSHANDEH</textPath></text>
      <text x="50" y="57" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-weight="700" fill="#315f7a" letter-spacing="-1">MB</text>
    </svg>`;
  });
});