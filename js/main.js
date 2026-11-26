(function () {
  var root = document.documentElement;

  // Theme toggle: follows system until the visitor picks one.
  var btn = document.getElementById('theme');
  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });


  // Copy buttons in the contact window.
  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      var ok = function () {
        b.textContent = 'Copied'; b.classList.add('done');
        setTimeout(function () { b.textContent = 'Copy'; b.classList.remove('done'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok, function () {});
      }
    });
  });

  document.getElementById('yr').textContent = new Date().getFullYear();

  // Hero terminal: type the command, then print the class line by line.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lines = document.querySelectorAll('#term-body .line');
  if (reduce || !lines.length) return;

  var cmd = lines[0];
  var promptEl = cmd.querySelector('.prompt');
  var full = cmd.textContent.replace(/^\$\s*/, '');
  var rest = Array.prototype.slice.call(lines, 1);
  rest.forEach(function (l) { l.style.visibility = 'hidden'; });
  cmd.textContent = '';
  cmd.appendChild(promptEl);
  var typed = document.createTextNode('');
  cmd.appendChild(typed);

  var i = 0;
  function type() {
    typed.nodeValue = full.slice(0, ++i);
    if (i < full.length) { setTimeout(type, 70); }
    else { setTimeout(function () { reveal(0); }, 350); }
  }
  function reveal(n) {
    if (n >= rest.length) return;
    rest[n].style.visibility = 'visible';
    setTimeout(function () { reveal(n + 1); }, 140);
  }
  setTimeout(type, 500);
})();
