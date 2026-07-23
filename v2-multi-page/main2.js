document.addEventListener('DOMContentLoaded', function(){
  // reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, {threshold:.15});
  reveals.forEach(function(el){ io.observe(el); });

  // nav scroll shadow
  var nav = document.getElementById('nav');
  if(nav){
    window.addEventListener('scroll', function(){
      if(window.scrollY > 10){ nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
    });
  }

  // active nav link
  var here = window.location.pathname.split('/').pop();
  if(here === '') here = 'index.html';
  document.querySelectorAll('.navlinks a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === here){ a.classList.add('active'); }
  });

  // journey rail dot highlighting
  var rail = document.querySelectorAll('.journey-rail .dot');
  var panels = document.querySelectorAll('[data-rail]');
  if(rail.length && panels.length){
    var railObs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var idx = e.target.getAttribute('data-rail');
          rail.forEach(function(d){ d.classList.remove('active'); });
          var match = document.querySelector('.journey-rail .dot[data-idx="'+idx+'"]');
          if(match) match.classList.add('active');
        }
      });
    }, {threshold:.5});
    panels.forEach(function(p){ railObs.observe(p); });
  }

  // sticky cta bar
  var stickyCta = document.getElementById('stickyCta');
  var heroEl = document.querySelector('.hero, .page-hero');
  if(stickyCta && heroEl){
    window.addEventListener('scroll', function(){
      var trigger = heroEl.offsetTop + heroEl.offsetHeight;
      if(window.scrollY > trigger){ stickyCta.classList.add('show'); } else { stickyCta.classList.remove('show'); }
    });
  }

  // carousel buttons
  document.querySelectorAll('.carousel-btns').forEach(function(btnRow){
    var target = document.getElementById(btnRow.getAttribute('data-target'));
    var prev = btnRow.querySelector('.prev');
    var next = btnRow.querySelector('.next');
    if(target && prev && next){
      prev.addEventListener('click', function(){ target.scrollBy({left:-300, behavior:'smooth'}); });
      next.addEventListener('click', function(){ target.scrollBy({left:300, behavior:'smooth'}); });
    }
  });
});
