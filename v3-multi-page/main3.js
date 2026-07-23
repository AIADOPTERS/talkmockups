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
  var subLinks = document.querySelectorAll('.subnav a');
  if(subLinks.length){
    var targets = [];
    subLinks.forEach(function(a){
      var id = a.getAttribute('href').replace('#','');
      var el = document.getElementById(id);
      if(el) targets.push({a:a, el:el});
    });
    window.addEventListener('scroll', function(){
      var pos = window.scrollY + 140;
      var current = targets[0];
      targets.forEach(function(t){ if(t.el.offsetTop <= pos) current = t; });
      subLinks.forEach(function(a){ a.classList.remove('active'); });
      if(current) current.a.classList.add('active');
    });
    subLinks.forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        var id = a.getAttribute('href').replace('#','');
        var el = document.getElementById(id);
        if(el){ window.scrollTo({top: el.offsetTop - 120, behavior:'smooth'}); }
      });
    });
  }
});
