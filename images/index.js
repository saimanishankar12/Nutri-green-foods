  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:0.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el)); 
  
 
  function toggleBenefits(btn){
    const list = btn.nextElementSibling;
    const isOpen = list.classList.toggle('open');
    btn.textContent = isOpen ? 'Read less ↑' : 'Read more ↓';
  }

