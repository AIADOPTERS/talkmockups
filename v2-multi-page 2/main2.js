document.addEventListener('DOMContentLoaded', function(){
  var reveals = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, {threshold:.15});
  reveals.forEach(function(el){ io.observe(el); });

  var nav = document.getElementById('nav');
  if(nav){
    window.addEventListener('scroll', function(){
      if(window.scrollY > 10){ nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
    });
  }
  var here = window.location.pathname.split('/').pop();
  if(here === '') here = 'index.html';
  document.querySelectorAll('.navlinks a').forEach(function(a){
    if(a.getAttribute('href') === here){ a.classList.add('active'); }
  });
});
