// SR Matrix Engineering — shared behaviour

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Hero image slider
  var slides = document.querySelectorAll('.slide');
  var dotsWrap = document.querySelector('.slider-dots');
  if (slides.length > 1) {
    var current = 0;
    var dots = [];
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        if (i === 0) b.classList.add('active');
        b.setAttribute('aria-label', 'Show slide ' + (i + 1));
        b.addEventListener('click', function () { goTo(i); });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }
    function goTo(i) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }
    setInterval(function () {
      goTo((current + 1) % slides.length);
    }, 5000);
  }
});
